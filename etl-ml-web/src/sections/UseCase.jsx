import { Home, Database, Wand2, Upload, Brain } from "lucide-react"

const steps = [
    {
        title: "Problema",
        icon: Home,
        text: "Queremos predecir el precio de una vivienda a partir de variables como superficie, ubicación, número de habitaciones o antigüedad.",
    },
    {
        title: "Extract",
        icon: Database,
        text: "Se recogen datos desde archivos CSV, bases de datos o APIs inmobiliarias con información histórica de inmuebles.",
    },
    {
        title: "Transform",
        icon: Wand2,
        text: "Se limpian nulos, se corrigen formatos, se normalizan variables y se crean nuevas features útiles para el modelo.",
    },
    {
        title: "Load",
        icon: Upload,
        text: "El dataset ya procesado se guarda en un formato reutilizable para entrenamiento, validación o inferencia.",
    },
    {
        title: "Modelo ML",
        icon: Brain,
        text: "Con el dataset final se entrena un modelo de regresión capaz de estimar precios de vivienda de forma más fiable.",
    },
]

export default function UseCase() {
    return (
        <section id="pipeline" className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
                        Caso práctico
                    </p>
                    <h2 className="mt-3 text-4xl font-bold text-white">
                        Predicción de precios de vivienda
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">
                        Este ejemplo muestra cómo un pipeline ETL prepara datos del mercado
                        inmobiliario para entrenar un modelo de Machine Learning. El valor
                        de un buen ETL está en transformar datos crudos en información lista
                        para generar predicciones consistentes.
                    </p>

                    <div className="mt-8 grid gap-4">
                        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                            <p className="text-sm font-medium text-cyan-300">Entrada</p>
                            <p className="mt-2 text-slate-200">
                                Datos de viviendas: metros cuadrados, habitaciones, ubicación,
                                antigüedad, precio histórico.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-4">
                            <p className="text-sm font-medium text-violet-300">Proceso</p>
                            <p className="mt-2 text-slate-200">
                                Limpieza, validación, transformación de variables y preparación
                                del dataset para entrenamiento.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                            <p className="text-sm font-medium text-emerald-300">Salida</p>
                            <p className="mt-2 text-slate-200">
                                Dataset procesado + modelo capaz de estimar precios de nuevas
                                viviendas.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded-[30px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-400">Flujo del caso práctico</p>
                            <h3 className="text-2xl font-bold text-white">ETL → Predicción</h3>
                        </div>
                        <div className="rounded-2xl border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">
                            Housing ML
                        </div>
                    </div>

                    <div className="space-y-4">
                        {steps.map((step, index) => {
                            const Icon = step.icon

                            return (
                                <div
                                    key={step.title}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400">Paso {index + 1}</p>
                                            <h4 className="text-lg font-bold text-white">{step.title}</h4>
                                        </div>
                                    </div>

                                    <p className="mt-4 leading-8 text-slate-300">{step.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}