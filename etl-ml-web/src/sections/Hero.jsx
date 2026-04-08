import { ArrowRight, Brain, Database, Sparkles } from "lucide-react"

export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative overflow-hidden px-6 pb-24 pt-20 sm:pb-32 sm:pt-28"
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_25%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_25%),linear-gradient(to_bottom,rgba(15,23,42,1),rgba(2,6,23,1))]" />

            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                        <Sparkles className="h-4 w-4" />
                        Píldora premium sobre ETL para Machine Learning
                    </div>

                    <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl">
                        Convierte datos dispersos en
                        <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                            {" "}datasets listos para ML
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                        Una landing visual pensada para explicar de forma moderna cómo funciona
                        un pipeline ETL: extracción, transformación y carga de datos aplicados
                        a entrenamiento, validación e inferencia en Machine Learning.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#etl"
                            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-0.5"
                        >
                            Explorar contenido
                            <ArrowRight className="h-4 w-4" />
                        </a>

                        <a
                            href="#repo"
                            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                        >
                            Ver repositorio
                        </a>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                            <p className="text-2xl font-bold text-white">3</p>
                            <p className="mt-1 text-sm text-slate-400">Fases del ETL</p>
                        </div>
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                            <p className="text-2xl font-bold text-white">ML</p>
                            <p className="mt-1 text-sm text-slate-400">Enfoque del proyecto</p>
                        </div>
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                            <p className="text-2xl font-bold text-white">Top</p>
                            <p className="mt-1 text-sm text-slate-400">Diseño moderno</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -left-10 top-8 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
                    <div className="absolute -right-8 bottom-6 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

                    <div className="relative rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-400">Arquitectura visual</p>
                                <h2 className="text-2xl font-bold text-white">Pipeline ETL → ML</h2>
                            </div>
                            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                                Ready
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[
                                { label: "Fuentes de datos", icon: Database },
                                { label: "Extract", icon: Database },
                                { label: "Transform", icon: Database },
                                { label: "Load", icon: Database },
                                { label: "Modelo ML", icon: Brain },
                            ].map((step, index) => {
                                const Icon = step.icon
                                return (
                                    <div
                                        key={step.label}
                                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/10 font-bold text-cyan-300">
                                            {index + 1}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Icon className="h-5 w-5 text-cyan-300" />
                                            <p className="font-medium text-slate-200">{step.label}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}