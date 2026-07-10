import React from 'react'

export interface BannerLayananProps {
  title: string
  description: string
  ctaText?: string | null
  ctaLink?: string | null
  icon?: string | null
  style?: 'default' | 'highlight' | 'minimal' | null
}

export default function BannerLayanan({
  title = 'Judul Banner Layanan',
  description = 'Informasi penting, pengumuman, atau promosi singkat ditampilkan di sini dengan visual yang ringkas dan padat.',
  ctaText,
  ctaLink,
  icon = '💡',
  style = 'default',
}: BannerLayananProps) {
  return (
    <section className={`banner-layanan banner-layanan--${style || 'default'}`}>
      <div className="banner-layanan-inner">
        {icon && <span className="banner-layanan-icon">{icon}</span>}
        <div className="banner-layanan-content">
          <h3 className="banner-layanan-title">{title}</h3>
          <p className="banner-layanan-desc">{description}</p>
        </div>
        {ctaText && ctaLink && (
          <a href={ctaLink} className="banner-layanan-cta">
            {ctaText}
          </a>
        )}
      </div>
    </section>
  )
}
