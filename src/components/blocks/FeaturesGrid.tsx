import React from 'react'

export interface FeatureItem {
  icon?: string | null
  title: string
  description: string
}

export interface FeaturesGridProps {
  title?: string | null
  subtitle?: string | null
  features?: FeatureItem[] | null
}

export default function FeaturesGrid({
  title = 'Fitur & Spesifikasi',
  subtitle = 'Detail fungsionalitas dan kapabilitas utama yang ditawarkan.',
  features,
}: FeaturesGridProps) {
  return (
    <section className="features-grid-section" id="features">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        <div className="section-line"></div>
      </div>

      <div className="features-grid-container">
        {features && features.length > 0 ? (
          features.map((feat, idx) => (
            <div key={idx} className="feature-grid-card">
              {feat.icon && <span className="feature-grid-icon">{feat.icon}</span>}
              <h3 className="feature-grid-title">{feat.title}</h3>
              <p className="feature-grid-desc">{feat.description}</p>
            </div>
          ))
        ) : (
          <p className="no-features-text">Belum ada spesifikasi yang dikonfigurasi.</p>
        )}
      </div>
    </section>
  )
}
