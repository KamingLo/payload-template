import React from 'react'
import Image from 'next/image'

export interface HeroFeature {
  title: string
  value: string
}

export interface HeroBentoProps {
  title?: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  imageUrl?: string
  features?: HeroFeature[]
}

const defaultFeatures: HeroFeature[] = [
  { title: 'Indikator Utama', value: '99%+' },
  { title: 'Efisiensi Kerja', value: '10x Lipat' },
  { title: 'Dukungan Teknis', value: '24/7' },
  { title: 'Bahan Pilihan', value: 'Organik' },
]

export default function HeroBento({
  title = 'Judul Hero Utama Template',
  subtitle = 'Sub-tagline Kategori Produk / Jasa',
  description = 'Berikan deskripsi ringkas yang menarik di sini tentang keunikan produk Anda. Template ini didesain flat, borderless, dan memiliki spasi lega ala Apple untuk menonjolkan keindahan foto dan teks.',
  ctaText = 'Jelajahi Fitur',
  ctaLink = '#categories',
  imageUrl,
  features = defaultFeatures,
}: HeroBentoProps) {
  const displayImage = imageUrl || 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1200'

  return (
    <section className="hero-bento" id="home">
      <div className="hero-grid">
        
        {/* Main Info Card */}
        <div className="hero-card hero-main-card">
          <span className="hero-tag">{subtitle}</span>
          <h1 className="hero-title">{title}</h1>
          <p className="hero-desc">{description}</p>
          <a href={ctaLink} className="hero-cta-btn">
            {ctaText}
            <svg className="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Image Card */}
        <div className="hero-card hero-image-card">
          <div className="hero-image-wrapper">
            <Image
              src={displayImage}
              alt="Visual Banner Utama"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="hero-img"
            />
            <div className="image-overlay-accent"></div>
          </div>
        </div>

        {/* Feature Grid inside Bento */}
        {features.slice(0, 4).map((feature, idx) => (
          <div key={idx} className={`hero-card hero-feature-card feat-${idx}`}>
            <span className="feature-value">{feature.value}</span>
            <span className="feature-title">{feature.title}</span>
          </div>
        ))}

        {/* Promo Card / Dynamic visual element */}
        <div className="hero-card hero-promo-card">
          <div className="promo-glow"></div>
          <span className="promo-badge">PROMO UTAMA</span>
          <h3 className="promo-text">100% Dapat Disesuaikan Melalui Admin Panel Payload CMS</h3>
        </div>

      </div>
    </section>
  )
}
