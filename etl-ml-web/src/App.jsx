import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />

      <section id="etl" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-10 text-center">
          <h2 className="text-3xl font-bold">Sección ETL próximamente</h2>
          <p className="mt-4 text-slate-400">
            Aquí añadiremos la explicación completa de Extract, Transform y Load.
          </p>
        </div>
      </section>

      <section id="pipeline" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-10 text-center">
          <h2 className="text-3xl font-bold">Sección pipeline próximamente</h2>
          <p className="mt-4 text-slate-400">
            Aquí irá el flujo técnico del pipeline orientado a Machine Learning.
          </p>
        </div>
      </section>

      <section id="repo" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-10 text-center">
          <h2 className="text-3xl font-bold">Repositorio próximamente</h2>
          <p className="mt-4 text-slate-400">
            Aquí mostraremos la estructura del proyecto y buenas prácticas.
          </p>
        </div>
      </section>
    </div>
  )
}