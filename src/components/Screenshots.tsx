import '../styles/screenshots.css';

export default function Screenshots() {

    const featuredScreenshot = {
        src: "/screenshots/rivendell.png",
        alt: "A Rivendell house spawning in the Valley"
    };

    const screenshots = [
        { src: "/screenshots/barrows.png",   alt: "A naturally spawning barrow in the Barrowdowns" },
        { src: "/screenshots/bree.png",      alt: "A village spawning in Bree-land" },
        { src: "/screenshots/orthanc.png",   alt: "The Orthanc (one of a limited number of lore builds) at night" },
    ];

    return <section className="py-20 px-6 max-w-7xl mx-auto" id="gallery">
        <div className="text-center mb-10">
            <p className="section-eyebrow mb-3">Gallery</p>
            <h2 className="font-display text-3xl mb-4 font-gallery">Middle-earth Awaits</h2>
            <hr className="gold-rule max-w-sm mx-auto"/>
        </div>

        <div className="screenshot-main rounded-sm mb-4">
            <img
                key={featuredScreenshot.src}
                src={featuredScreenshot.src}
                alt={featuredScreenshot.alt}
                className="rounded-sm w-full h-40 object-cover"
            />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {screenshots.map((shot) => (
                <div className="screenshot-slot rounded-sm">
                    <img
                        key={shot.src}
                        src={shot.src}
                        alt={shot.alt}
                        className="rounded-sm w-full h-40 object-cover"
                    />
                </div>
            ))}
        </div>

        <p className="text-center mt-4 font-heading text-xs tracking-widest screenshots-info">
            All Screenshots captured from naturally spawning builds - Some use&nbsp;
            <a href="https://www.curseforge.com/minecraft/shaders/complementary-unbound/files/all?page=1&pageSize=20&version=1.16.5&showAlphaFiles=hide"
            target="_blank">Complementary - Unbound</a> Shaders.</p>
    </section>;

}