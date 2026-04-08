import { Database, Brain, ArrowRight } from "lucide-react"

export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative overflow-hidden px-6 py-24 sm:py-32"
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_25%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_25%)]" />

            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                        <Database className="h-4 w-4" />
                        ETL para procesos de Machine Learning
                    </div>

                    <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl">
                        Convierte datos sin procesar en
                        <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                            {" "}datasets listos para ML
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                        Una landing visual para explicar cómo funciona un pipeline ETL:
                        extracción, transformación y carga de datos orientados a entrenamiento,
                        validación e inferencia en modelos de Machine Learning.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#etl"
                            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
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
                </div>

                <div className="relative">
                    <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
                    <div className="absolute -right-6 bottom-8 h-36 w-36 rounded-full bg-blue-500/20 blur-3xl" />

                    <div className="relative rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-400">Vista general</p>
                                <h2 className="text-2xl font-bold text-white">Pipeline ETL → ML</h2>
                            </div>
                            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                                Ready
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[
                                "Fuentes de datos",
                                "Extract",
                                "Transform",
                                "Load",
                                "Modelo ML",
                            ].map((step, index) => (
                                <div
                                    key={step}
                                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/10 font-bold text-cyan-300">
                                        {index + 1}
                                    </div>
                                    <div className="flex items-center gap-3">
                                        {step === "Modelo ML" ? (
                                            <Brain className="h-5 w-5 text-sky-300" />
                                        ) : (
                                            <Database className="h-5 w-5 text-cyan-300" />
                                        )}
                                        <p className="font-medium text-slate-200">{step}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}