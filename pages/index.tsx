import Head from 'next/head'
import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dreamself - Your Mirror to What's Becoming</title>
        <meta 
          name="description" 
          content="Track your growth, explore timelines, and reflect with intelligence. Dreamself is a space for quiet insight and deeper understanding." 
        />
        <meta name="keywords" content="personal growth, reflection, self-improvement, timeline, insight, mindfulness" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dreamself.com/" />
        <meta property="og:title" content="Dreamself - Your Mirror to What's Becoming" />
        <meta property="og:description" content="Track your growth, explore timelines, and reflect with intelligence. A space for quiet insight and deeper understanding." />
        <meta property="og:image" content="https://dreamself.com/og-image.png" />
        <meta property="og:site_name" content="Dreamself" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dreamself.com/" />
        <meta name="twitter:title" content="Dreamself - Your Mirror to What's Becoming" />
        <meta name="twitter:description" content="Track your growth, explore timelines, and reflect with intelligence. A space for quiet insight and deeper understanding." />
        <meta name="twitter:image" content="https://dreamself.com/og-image.png" />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://dreamself.com" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dreamself" />
        <meta name="theme-color" content="#1f2937" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <Hero />
        </main>
        <Footer />
      </div>
    </>
  )
}