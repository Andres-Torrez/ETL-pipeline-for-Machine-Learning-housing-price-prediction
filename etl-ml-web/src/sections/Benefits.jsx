import { ShieldCheck, Workflow, BarChart3, Server } from "lucide-react"

const benefits = [
    {
        title: "Calidad del dato",
        icon: ShieldCheck,
        text: "Un ETL bien diseñado limpia errores, corrige inconsistencias y mejora la fiabilidad de la información antes del entrenamiento del modelo.",
    },
    {
        title: "Automatización",
        icon: Workflow,
        text: "Permite ejecutar procesos repetibles y programados, reduciendo trabajo manual y facilitando la actualización continua de datasets.",
    },
    {
        title: "Mejor rendimiento",
        icon: BarChart3,
        text: "Los modelos aprenden mejor cuando reciben datos estructurados, validados y preparados específicamente para el problema de Machine Learning.",
    },
    {
        title: "Escalabilidad",
        icon: Server,
        text: "Una arquitectura ETL modular facilita crecer, añadir nuevas fuentes y adaptar el proyecto a volúmenes de datos mayores sin rehacer todo el flujo.",
    },
]

function BenefitCard({ benefit }) {
    const Icon = benefit.icon

    return (
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]">
            <div className="inline-flex rounded-2xl bg-emerald-400/10 p-3 text-emerald-300">
                <Icon className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-2xl font-bold text-white">{benefit.title}</h3>
            <p className="mt-4 leading-8 text-slate-300">{benefit.text}</p>
        </div>
    )
}

export default function Benefits() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-10 max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
                    Beneficios
                </p>
                <h2 className="mt-3 text-4xl font-bold text-white">
                    ¿Por qué un buen ETL marca la diferencia?
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-400">
                    En proyectos de Machine Learning, el ETL no solo organiza datos:
                    mejora la calidad, reduce errores, automatiza el flujo y crea una
                    base sólida para entrenar modelos más fiables.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {benefits.map((benefit) => (
                    <BenefitCard key={benefit.title} benefit={benefit} />
                ))}
            </div>
        </section>
    )
}