import '../styles/features.css';

export default function Features() {
    return <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <p className="section-eyebrow mb-3">What's Inside</p>
                <h2 id="features-heading" className="font-display text-3xl mb-4">Most Notable Features</h2>
                <hr className="gold-rule max-w-sm mx-auto mb-6"/>
                <p className="max-w-xl mx-auto text-base features-desc">
                    The mod is in active development. Every update expands the world of Middle-earth.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="scroll-card rounded-sm p-6 flex gap-4 items-start">
                    <div className="feature-icon">
                        <img
                            src="/icons/gold_ring.png"
                            className="icon-img rounded-full flex items-center justify-center text-4xl"
                        />
                    </div>
                    <div>
                        <h3 className="font-heading text-base mb-2 feature-header">Factions &
                            Structures</h3>
                        <p className="text-sm leading-relaxed feature-desc">
                            All 8 current factions have naturally generating structures, including many brand-new ones in addition to the ones ported from Legacy.
                        </p>
                    </div>
                </div>

                <div className="scroll-card rounded-sm p-6 flex gap-4 items-start">
                    <div className="feature-icon">
                        <img
                            src="/icons/horn_of_command.png"
                            className="icon-img rounded-full flex items-center justify-center text-4xl"
                        />
                    </div>
                    <div>
                        <h3 className="font-heading text-base mb-2 feature-header">NPC Hiring</h3>
                        <p className="text-sm leading-relaxed feature-desc">
                            Hire NPCs from any of the 8 current factions to aid you in your journey.
                        </p>
                    </div>
                </div>

                <div className="scroll-card rounded-sm p-6 flex gap-4 items-start">
                    <div className="feature-icon">
                        <img
                            src="/icons/silver_coin_hundred.png"
                            className="icon-img rounded-full flex items-center justify-center text-4xl"
                        />
                    </div>
                    <div>
                        <h3 className="font-heading text-base mb-2 feature-header">Full Trade
                            System</h3>
                        <p className="text-sm leading-relaxed feature-desc">
                            The entire trade system has been ported and is fully functional along with the wandering traders to allow you to trade along the road.
                        </p>
                    </div>
                </div>

                <div className="scroll-card rounded-sm p-6 flex gap-4 items-start">
                    <div className="feature-icon">
                        <img
                            src="/icons/rivendell_sword.png"
                            className="icon-img rounded-full flex items-center justify-center text-4xl"
                        />
                    </div>
                    <div>
                        <h3 className="font-heading text-base mb-2 feature-header">Invasions</h3>
                        <p className="text-sm leading-relaxed feature-desc">
                            There are many places that one can be ambushed in Middle-Earth. Watch out for invasions in your travels. Hired units may help you.
                        </p>
                    </div>
                </div>

                <div className="scroll-card rounded-sm p-6 flex gap-4 items-start">
                    <div className="feature-icon">
                        <img
                            src="/icons/hobbit_banner.png"
                            className="icon-img rounded-full flex items-center justify-center text-4xl"
                        />
                    </div>
                    <div>
                        <h3 className="font-heading text-base mb-2 feature-header">Banner Protection</h3>
                        <p className="text-sm leading-relaxed feature-desc">
                            Full banner protection has been ported from Legacy and is particularly useful on multiplayer servers.
                        </p>
                    </div>
                </div>

                <div className="scroll-card rounded-sm p-6 flex gap-4 items-start">
                    <div className="feature-icon">
                        <img
                            src="/icons/modifier_scroll_golden.png"
                            className="icon-img rounded-full flex items-center justify-center text-4xl"
                        />
                    </div>
                    <div>
                        <h3 className="font-heading text-base mb-2 feature-header">Equipment Modifiers</h3>
                        <p className="text-sm leading-relaxed feature-desc">
                            Build powerful tools, weapons and armor by finding and trading for scrolls.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}