export default function Footer() {
    return (
        <footer className="mt-20 border-t border-white/10 bg-slate-950">
            <div className="mx-auto max-w-7xl px-6 py-12">

                <div className="grid gap-10 md:grid-cols-3">

                    {/* Marca */}
                    <div>
                        <h3 className="text-xl font-bold text-white">ETL + ML</h3>
                        <p className="mt-3 text-slate-400 leading-7">
                            Landing interactiva para explicar procesos ETL aplicados a Machine Learning.
                        </p>
                    </div>

                    {/* Navegación */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                            Navegación
                        </h4>
                        <ul className="mt-4 space-y-2 text-slate-300">
                            <li><a href="#inicio" className="hover:text-cyan-300">Inicio</a></li>
                            <li><a href="#etl" className="hover:text-cyan-300">ETL</a></li>
                            <li><a href="#pipeline" className="hover:text-cyan-300">Pipeline</a></li>
                            <li><a href="#repo" className="hover:text-cyan-300">Repositorio</a></li>
                        </ul>
                    </div>

                    {/* Info */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                            Proyecto
                        </h4>
                        <p className="mt-4 text-slate-400 leading-7">
                            Proyecto educativo enfocado en la preparación de datos para modelos de Machine Learning.
                        </p>
                    </div>
                </div>

                {/* Línea inferior */}
                <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} ETL ML Project — Creado para aprendizaje y demostración.
                </div>

            </div>
        </footer>
    )
}