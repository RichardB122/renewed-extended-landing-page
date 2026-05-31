import '../styles/screenshots.css';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import React from "react";

export default function Screenshots() {

    const [open, setOpen] = React.useState(false);
    const [index, setIndex] = React.useState(0);

    const slides = [
        { src: "/screenshots/rivendell.jpg",
          description: "A Rivendell house spawning in the Valley" },
        { src: "/screenshots/barrows.png",
          description: "A naturally spawning barrow in the Barrowdowns" },
        { src: "/screenshots/bree.png",
          description: "A village spawning in Bree-land" },
        { src: "/screenshots/orthanc.jpg",
          description: "The Orthanc (one of a limited number of lore builds) at night" },
        { src: "/screenshots/warg.jpg",
          description: "A warg rider at night" },
    ];

    function openSlide(index: React.SetStateAction<number>) {
        setOpen(true);
        setIndex(index);
    }

    return <section className="py-20 px-6 max-w-7xl mx-auto" id="gallery">
        <div className="text-center mb-10">
            <p className="section-eyebrow mb-3">Gallery</p>
            <h2 className="font-display text-3xl mb-4 font-gallery">Middle-earth Awaits</h2>
            <hr className="gold-rule max-w-sm mx-auto"/>
        </div>

        <div className="screenshot-main rounded-sm mb-4"
             onClick={() => openSlide(0)}>
            <img
                key={slides[0].src}
                src={slides[0].src}
                alt={slides[0].description}
                className="rounded-sm w-full object-cover"
            />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {slides.slice(1).map((shot, index) => (
                <div className="screenshot-slot rounded-sm"
                     onClick={() => openSlide(index + 1)}>
                    <img
                        src={shot.src}
                        alt={shot.description}
                        className="rounded-sm w-full h-40 object-cover"
                    />
                </div>
            ))}
        </div>

        <p className="text-center mt-4 font-heading text-xs tracking-widest screenshots-info">
            All Screenshots captured from naturally spawning builds - Some use&nbsp;
            <a href="https://www.curseforge.com/minecraft/shaders/complementary-unbound/files/all?page=1&pageSize=20&version=1.16.5&showAlphaFiles=hide"
            target="_blank">"Complementary - Unbound"</a> Shaders.</p>

    <Lightbox
        plugins={[Captions]}
        slides={slides}
        open={open}
        index={index}
        close={() => setOpen(false)}
    />
    </section>;

}