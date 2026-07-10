import React from 'react'

export interface HeroSekunderProps {
  title: string
  subtitle?: string | null
  description: string
  ctaText?: string | null
  ctaLink?: string | null
  imageUrl?: string | null
  alignment?: 'left' | 'right' | null
}

export default function HeroSekunder({
  title = 'Judul Hero Sekunder Template',
  subtitle = 'Kategori / Sub-judul',
  description = 'Deskripsi detail mengenai fitur pendukung atau visi perusahaan. Bagian ini membagi layout secara seimbang antara visual gambar dan narasi teks.',
  ctaText,
  ctaLink,
  imageUrl,
  alignment = 'left',
}: HeroSekunderProps) {
  const displayImage = imageUrl || 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'

  return (
    <section className="hero-sekunder" data-alignment={alignment || 'left'}>
      <div className="hero-sekunder-grid">
        <div className="hero-sekunder-content">
          {subtitle && <span className="hero-sekunder-subtitle">{subtitle}</span>}
          <h2 className="hero-sekunder-title">{title}</h2>
          <p className="hero-sekunder-desc">{description}</p>
          {ctaText && ctaLink && (
            <a href={ctaLink} className="hero-sekunder-cta">
              {ctaText}
              <svg className="cta-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          )}
        </div>
        {displayImage && (
          <div className="hero-sekunder-image">
            <img src={displayImage} alt={title} />
          </div>
        )}
      </div>
    </section>
  )
}
