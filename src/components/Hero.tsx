export default function Hero() {
    return <section className="hero-bg w-full min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 relative overflow-x-clip">
            <div className="radial-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"></div>

            <div className="text-center max-w-4xl mx-auto relative z-10">
                <div className="fade-up mb-8 flex justify-center">
                    <img
                        src="/logo_small.png"
                        className="ring-logo w-20 h-20 rounded-full flex items-center justify-center text-4xl ring-glow"
                    />
                </div>
            </div>

            <p className="section-eyebrow fade-up delay-1 mb-4">Minecraft Forge 1.16.5 · LOTR Renewed Addon</p>

            <h1 className="font-display fade-up delay-1 mb-6 leading-tight leading-header">
                Renewed<br/>
                <span>Extended</span>
            </h1>

            <hr className="gold-rule fade-up delay-2 mb-6 max-w-xs mx-auto" />

            <p className="fade-up delay-2 mb-10 text-lg leading-relaxed max-w-2xl mx-auto mod-desc">
                {/*A community-crafted expansion to Mevans' Lord of the Rings Renewed mod —
            bringing new factions, structures, traders, and lore to Middle-earth.*/}
                A community-developed expansion for the Lord of the Rings Renewed Minecraft mod for Forge 1.16.5, adding new factions, structures, traders, NPCs, and adventures across Middle-earth.
            </p>

            <div className="fade-up delay-3 flex flex-wrap items-center justify-center gap-4 mb-12">
                <a href="#download" className="btn-primary">Download v1.10.1</a>
                <a href="#features" className="btn-secondary">Explore Features</a>
            </div>

            <div className="fade-up delay-4 flex flex-wrap justify-center gap-8">
                <div className="text-center">
                    <div className="stat-number">Over 30</div>
                    <div className="font-heading text-xs tracking-widest mt-1 stat-title">BIOMES WITH STRUCTURES</div>
                </div>
                <div className="text-center">
                    <div className="stat-number">35</div>
                    <div className="font-heading text-xs tracking-widest mt-1 stat-title">TRADERS ADDED OR PORTED</div>
                </div>
                <div className="text-center">
                    <div className="stat-number">Over 400</div>
                    <div className="font-heading text-xs tracking-widest mt-1 stat-title">ADVANCMENTS</div>
                </div>
                <div className="text-center">
                    <div className="stat-number">27</div>
                    <div className="font-heading text-xs tracking-widest mt-1 stat-title">HIRABLE UNITS</div>
                </div>
            </div>

            <div className="scroll-down scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40 text-sm">
            ▼
            </div>
        </section>;

}