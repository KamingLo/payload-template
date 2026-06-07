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
  { title: 'Kadar Karbon', value: '85%+' },
  { title: 'Waktu Bakar', value: '5+ Jam' },
  { title: 'Pengasapan Lambat', value: '12 Jam' },
  { title: 'Kayu Alami', value: 'Rambutan' },
]

export default function HeroBento({
  title = 'Arang Premium & Brisket',
  subtitle = 'Kualitas Ekspor & Cita Rasa Autentik',
  description = 'Memadukan arang kelapa kualitas terbaik dunia untuk pembakaran sempurna tanpa asap, dengan brisket premium yang diasap lambat hingga lumer di mulut. Diciptakan khusus untuk pencinta kuliner sejati.',
  ctaText = 'Jelajahi Produk',
  ctaLink = '#categories',
  imageUrl,
  features = defaultFeatures,
}: HeroBentoProps) {
  // If no imageUrl is provided, we use a beautiful default unsplash image
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
              alt="Arang & Brisket Premium"
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
          <span className="promo-badge">HOT PRODUCT</span>
          <h3 className="promo-text">100% Organik & Tanpa Bahan Kimia Tambahan</h3>
        </div>

      </div>
    </section>
  )
}
