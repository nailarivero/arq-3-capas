using backend.Models;

namespace backend.Services
{
    public interface IPersonaService
    {
        List<Persona> ObtenerTodas();
        Persona? ObtenerPorId(int id);
        void Agregar(Persona persona);
        void Actualizar(Persona persona);
        void Eliminar(int id);
    }
}
