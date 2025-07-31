import { useState } from 'react'
import { Mail } from 'lucide-react'

export function Hero() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // For now, create a mailto link
      const subject = 'Notify me about Dreamself'
      const body = `Please notify me when Dreamself is available. My email: ${email}`
      const mailtoLink = `mailto:hello@dreamself.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink
      setIsSubmitted(true)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Mirror icon/symbol */}
        <div className="mb-12 flex justify-center">
          <div className="mirror-gradient rounded-full p-8 reflection-animate">
            <div className="w-24 h-24 rounded-full border-2 border-slate-300/50 flex items-center justify-center relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-200/80 to-slate-300/60 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/60 shadow-inner"></div>
              </div>
              {/* Reflection shine */}
              <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-white/40 blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-slate-800 leading-tight">
          Dreamself is your mirror to{' '}
          <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent font-medium">
            what&apos;s becoming
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
          Track your growth, explore timelines, and reflect with intelligence.
          <br className="hidden md:block" />
          <span className="text-slate-500">A space for quiet insight and deeper understanding.</span>
        </p>

        {/* Email signup form */}
        <div className="max-w-md mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleNotifyMe} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-6 py-4 text-lg border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-300 focus:border-transparent outline-none transition-all bg-white/50 backdrop-blur-sm"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors font-medium flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                Get Notified
              </button>
            </form>
          ) : (
            <div className="mirror-gradient rounded-xl p-8">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-slate-600 font-medium">Thank you for your interest.</p>
              <p className="text-slate-500 text-sm mt-2">We&apos;ll reach out when Dreamself is ready.</p>
            </div>
          )}
        </div>

        {/* Subtle tagline */}
        <p className="mt-16 text-slate-400 text-sm font-light tracking-wide">
          Reflecting growth • Unveiling potential • Nurturing insight
        </p>
      </div>
    </section>
  )
}