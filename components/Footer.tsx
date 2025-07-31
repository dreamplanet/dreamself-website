export function Footer() {
  return (
    <footer className="py-12 px-4 bg-white/50 backdrop-blur-sm border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-slate-300 to-slate-400"></div>
            </div>
            <span className="text-slate-600 font-light text-lg">Dreamself</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-slate-500">
            <a 
              href="mailto:hello@dreamself.com" 
              className="hover:text-slate-700 transition-colors"
            >
              Contact
            </a>
            <a 
              href="https://dreamplanet.com" 
              className="hover:text-slate-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dreamplanet
            </a>
            <span className="text-slate-300">|</span>
            <span className="font-light">Coming 2025</span>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 pt-8 border-t border-slate-200/50 text-center">
          <p className="text-slate-400 text-sm font-light">
            Built with intention. Designed for reflection.
          </p>
        </div>
      </div>
    </footer>
  )
}