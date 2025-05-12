using backend.Models;
using backend.Repositories;

namespace backend.Services
{
    public class PersonaService : IPersonaService
    {
        private readonly IPersonaRepository _repo;

        public PersonaService(IPersonaRepository repo)
        {
            _repo = repo;
        }

        public List<Persona> ObtenerTodas()
        {
            return _repo.ObtenerTodas();
        }

        public Persona? ObtenerPorId(int id)
        {
            return _repo.ObtenerPorId(id);
        }

        public void Agregar(Persona persona)
        {
            _repo.Agregar(persona);
        }

        public void Actualizar(Persona persona)
        {
            _repo.Actualizar(persona);
        }

        public void Eliminar(int id)
        {
            _repo.Eliminar(id);
        }
    }
}
