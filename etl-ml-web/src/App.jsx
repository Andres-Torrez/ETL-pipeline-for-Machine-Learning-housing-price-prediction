import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import EtlPhases from "./sections/EtlPhases"
import Benefits from "./sections/Benefits"

function PlaceholderSection({ id, title, text }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="mt-4 text-slate-400">{text}</p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <EtlPhases />
      <Benefits />

      <PlaceholderSection
        id="pipeline"
        title="Sección pipeline próximamente"
        text="Aquí mostraremos el flujo técnico orientado a Machine Learning."
      />

      <PlaceholderSection
        id="repo"
        title="Repositorio próximamente"
        text="Aquí presentaremos la estructura del proyecto y las buenas prácticas."
      />
    </div>
  )
}