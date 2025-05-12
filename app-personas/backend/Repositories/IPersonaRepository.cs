using backend.Models;

namespace backend.Repositories
{
    public interface IPersonaRepository
    {
        List<Persona> ObtenerTodas();
        Persona? ObtenerPorId(int id);
        void Agregar(Persona persona);
        void Actualizar(Persona persona);
        void Eliminar(int id);
    }
}
