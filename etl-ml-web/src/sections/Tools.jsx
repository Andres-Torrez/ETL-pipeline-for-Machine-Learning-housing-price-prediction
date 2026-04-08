import { FileCode2, Workflow, Cpu, GitBranch } from "lucide-react"

const tools = [
    {
        name: "Pandas",
        icon: FileCode2,
        desc: "Librería fundamental para manipulación, limpieza y análisis de datos tabulares durante las fases de transformación del pipeline.",
    },
    {
        name: "Airflow",
        icon: Workflow,
        desc: "Herramienta de orquestación que permite automatizar tareas ETL, programar flujos de trabajo y coordinar procesos de datos.",
    },
    {
        name: "Spark",
        icon: Cpu,
        desc: "Motor de procesamiento distribuido ideal para trabajar con grandes volúmenes de datos y pipelines escalables.",
    },
    {
        name: "DVC",
        icon: GitBranch,
        desc: "Sistema de versionado de datos y experimentos que ayuda a mantener trazabilidad y reproducibilidad en proyectos de ML.",
    },
]

function ToolCard({ tool }) {
    const Icon = tool.icon

    return (
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]">
            <div className="inline-flex rounded-2xl bg-violet-400/10 p-3 text-violet-300">
                <Icon className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-2xl font-bold text-white">{tool.name}</h3>
            <p className="mt-3 leading-8 text-slate-400">{tool.desc}</p>
        </div>
    )
}

export default function Tools() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-10 max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
                    Herramientas
                </p>
                <h2 className="mt-3 text-4xl font-bold text-white">
                    Tecnologías clave del pipeline
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-400">
                    Un proyecto ETL para Machine Learning combina herramientas de
                    procesamiento, orquestación, escalabilidad y versionado para construir
                    flujos sólidos, reutilizables y fáciles de mantener.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {tools.map((tool) => (
                    <ToolCard key={tool.name} tool={tool} />
                ))}
            </div>
        </section>
    )
}