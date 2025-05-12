using backend.Models;

namespace backend.Repositories
{
    public class PersonaRepository : IPersonaRepository
    {
        private static List<Persona> personas = new List<Persona>();
        private static int nextId = 1;

        public List<Persona> ObtenerTodas()
        {
            return personas;
        }

        public Persona? ObtenerPorId(int id)
        {
            return personas.FirstOrDefault(p => p.Id == id);
        }

        public void Agregar(Persona persona)
        {
            persona.Id = nextId++;
            personas.Add(persona);
        }

        public void Actualizar(Persona persona)
        {
            var existente = ObtenerPorId(persona.Id);
            if (existente != null)
            {
                existente.Nombre = persona.Nombre;
                existente.Apellido = persona.Apellido;
                existente.Edad = persona.Edad;
            }
        }

        public void Eliminar(int id)
        {
            var persona = ObtenerPorId(id);
            if (persona != null)
            {
                personas.Remove(persona);
            }
        }
    }
}
