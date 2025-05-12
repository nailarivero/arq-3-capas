using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonaController : ControllerBase
    {
        private readonly IPersonaService _service;

        public PersonaController(IPersonaService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult<List<Persona>> Get()
        {
            return Ok(_service.ObtenerTodas());
        }

        [HttpGet("{id}")]
        public ActionResult<Persona> Get(int id)
        {
            var persona = _service.ObtenerPorId(id);
            if (persona == null) return NotFound();
            return Ok(persona);
        }

        [HttpPost]
        public IActionResult Post(Persona persona)
        {
            _service.Agregar(persona);
            return CreatedAtAction(nameof(Get), new { id = persona.Id }, persona);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Persona persona)
        {
            if (id != persona.Id) return BadRequest();
            var existente = _service.ObtenerPorId(id);
            if (existente == null) return NotFound();

            _service.Actualizar(persona);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var existente = _service.ObtenerPorId(id);
            if (existente == null) return NotFound();

            _service.Eliminar(id);
            return NoContent();
        }
    }
}
