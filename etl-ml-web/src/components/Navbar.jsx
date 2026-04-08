export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div>
                    <h1 className="text-lg font-bold tracking-wide text-white">ETL + ML</h1>
                    <p className="text-xs text-slate-400">Píldora visual interactiva</p>
                </div>

                <div className="hidden gap-6 text-sm text-slate-300 md:flex">
                    <a href="#inicio" className="transition hover:text-cyan-300">Inicio</a>
                    <a href="#etl" className="transition hover:text-cyan-300">ETL</a>
                    <a href="#pipeline" className="transition hover:text-cyan-300">Pipeline</a>
                    <a href="#repo" className="transition hover:text-cyan-300">Repositorio</a>
                </div>

                <a
                    href="#inicio"
                    className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20"
                >
                    Ver demo
                </a>
            </div>
        </nav>
    )
}