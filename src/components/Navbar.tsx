export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-stone/90 backdrop-blur-sm border-b border-gold/20">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Left side */}
                <div className="flex items-center gap-3">
                    <img
                        src="/logo_small.png"
                        className="w-8 h-8"
                        alt="LOTR Renewed Extended Logo"
                    />

                    <span className="text-sm tracking-widest text-parchment-lt font-semibold">
                        LOTR: Extended
                    </span>
                </div>

                {/* Center nav links */}
                <div className="hidden md:flex items-center gap-8">
                    <a
                        href="#features"
                        className="text-parchment hover:text-gold-lt transition-colors duration-200"
                    >
                        Features
                    </a>

                    {/*<a
                        href="#factions"
                        className="text-parchment hover:text-gold-lt transition-colors duration-200"
                    >
                        Factions
                    </a>*/}

                    <a
                        href="#gallery"
                        className="text-parchment hover:text-gold-lt transition-colors duration-200"
                    >
                        Gallery
                    </a>

                    <a
                        href="#download"
                        className="text-parchment hover:text-gold-lt transition-colors duration-200"
                    >
                        Download
                    </a>

                    <a
                        href="https://wiki.lotrextended.net"
                        className="text-parchment hover:text-gold-lt transition-colors duration-200"
                        target="_blank"
                    >
                        Wiki
                    </a>
                </div>

                {/* Download button */}
                <a
                    href="#download"
                    className="
                        download-btn
                        bg-gold
                        hover:bg-gold-lt
                        text-ink
                        font-semibold
                        text-xs
                        py-2
                        px-5
                        transition-colors
                        duration-200
                    "
                >
                    Download
                </a>
            </div>
        </nav>
    );
}