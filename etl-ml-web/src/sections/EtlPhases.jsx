import { Database, Wand2, Upload } from "lucide-react"

const phases = [
    {
        title: "Extract",
        icon: Database,
        subtitle: "Obtención de datos desde múltiples fuentes",
        text: "La extracción consiste en recoger datos desde archivos, APIs, bases de datos o servicios externos. Es el punto de entrada del pipeline y permite centralizar la información que se usará en el proceso de Machine Learning.",
        items: ["CSV y Excel", "APIs REST", "SQL / NoSQL", "Logs y cloud data"],
    },
    {
        title: "Transform",
        icon: Wand2,
        subtitle: "Limpieza, validación y preparación",
        text: "En esta fase se corrigen nulos, formatos, duplicados y errores. También se aplican reglas de negocio y se generan nuevas variables que mejoran la calidad del dataset antes del entrenamiento.",
        items: ["Limpieza", "Normalización", "Validación", "Feature engineering"],
    },
    {
        title: "Load",
        icon: Upload,
        subtitle: "Publicación del dataset procesado",
        text: "Una vez transformados, los datos se almacenan en un destino final preparado para análisis, entrenamiento o inferencia. Esta salida debe ser consistente, reutilizable y fácil de versionar.",
        items: ["CSV / Parquet", "Data warehouse", "Dataset final", "Consumo por ML"],
    },
]

function PhaseCard({ phase }) {
    const Icon = phase.icon

    return (
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]">
            <div className="flex items-start justify-between gap-4">
                <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <Icon className="h-6 w-6" />
                </div>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">{phase.title}</h3>
            <p className="mt-2 text-sm font-medium text-cyan-300">{phase.subtitle}</p>
            <p className="mt-4 leading-8 text-slate-300">{phase.text}</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
                {phase.items.map((item) => (
                    <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-3 text-sm text-slate-200"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function EtlPhases() {
    return (
        <section id="etl" className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-10 max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    Fases ETL
                </p>
                <h2 className="mt-3 text-4xl font-bold text-white">
                    Las 3 etapas que preparan los datos para Machine Learning
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-400">
                    Un pipeline ETL transforma datos dispersos y poco estructurados en un
                    dataset limpio, útil y reproducible. Estas tres fases son la base del
                    trabajo previo al modelo.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {phases.map((phase) => (
                    <PhaseCard key={phase.title} phase={phase} />
                ))}
            </div>
        </section>
    )
}