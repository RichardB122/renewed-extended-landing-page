import '../styles/downloads.css';

export default function Download() {

    return <section id="download" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[400px] rounded-full glow-backdrop"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
            <p className="section-eyebrow mb-4">Begin Your Quest</p>
            <h2 className="font-display text-4xl mb-4 download-header">Download the Mod</h2>
            <hr className="gold-rule max-w-xs mx-auto mb-6"/>

            <div className="scroll-card rounded-sm p-10 mb-8">
                <div className="version-pill inline-block mb-6">Latest Release</div>
                <div className="font-display text-5xl mb-2 version">v1.10.1</div>
                <p className="font-heading text-xs tracking-widest mb-6 published">PUBLISHED
                    MAY 16TH, 2026</p>
                <p className="text-sm mb-8 leading-relaxed published-subheader">
                    Requires Minecraft Forge 1.16.5 and <a href="https://www.curseforge.com/minecraft/mc-mods/the-lord-of-the-rings-mod-renewed">Mevans' LOTR Renewed mod</a>.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <a href="https://www.curseforge.com/minecraft/mc-mods/lotr-renewed-extended" className="btn-primary">⬇ CurseForge</a>
                    <a href="https://modrinth.com/mod/lotr-renewed-extended" className="btn-secondary">Modrinth</a>
                </div>
            </div>

            <p className="text-xs tracking-widest font-heading">
                · ACTIVELY DEVELOPED BY THE COMMUNITY ·
            </p>
        </div>
    </section>

}