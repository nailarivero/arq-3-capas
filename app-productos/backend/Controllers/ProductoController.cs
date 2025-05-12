using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
[ApiController]
[Route("api/[controller]")]
public class ProductoController : ControllerBase
{
private readonly IProductoService _service;
    public ProductoController(IProductoService service)
    {
        _service = service;
    }

    [HttpGet]
    public ActionResult<List<Producto>> Get() => Ok(_service.ObtenerTodos());

    [HttpGet("{id}")]
    public ActionResult<Producto> Get(int id)
    {
        var producto = _service.ObtenerPorId(id);
        return producto == null ? NotFound() : Ok(producto);
    }

    [HttpPost]
    public IActionResult Post(Producto producto)
    {
        _service.Agregar(producto);
        return CreatedAtAction(nameof(Get), new { id = producto.Id }, producto);
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, Producto producto)
    {
        if (id != producto.Id) return BadRequest();
        if (_service.ObtenerPorId(id) == null) return NotFound();

        _service.Actualizar(producto);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        if (_service.ObtenerPorId(id) == null) return NotFound();

        _service.Eliminar(id);
        return NoContent();
    }
 }
}