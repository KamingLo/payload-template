import React from 'react'
import Image from 'next/image'

export interface CategoryItem {
  name: string
  description?: string
  badge?: string
  imageUrl?: string
  link?: string
  size?: 'small' | 'medium' | 'large' | null
}

export interface CategoryBentoGridProps {
  title?: string
  categories?: CategoryItem[]
}

const defaultCategories: CategoryItem[] = [
  {
    name: 'Arang Premium',
    description: 'Arang batok kelapa berkualitas ekspor. Panas tinggi stabil, abu minim, dan tanpa asap sedikit pun.',
    badge: 'Kualitas Premium',
    imageUrl: 'https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&q=80&w=800',
    link: '#arang',
    size: 'large', // Will take up a larger block
  },
  {
    name: 'Daging Brisket',
    description: 'Brisket sapi premium yang diasap perlahan selama 12 jam dengan kayu buah pilihan untuk kelembutan ekstra.',
    badge: 'Terlaris',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    link: '#brisket',
    size: 'medium',
  },
  {
    name: 'Oven Kayu Bakar',
    description: 'Kehangatan rasa autentik yang dipanggang dengan tungku kayu bakar tradisional untuk aroma khas gurih.',
    badge: 'Eksklusif',
    imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800',
    link: '#oven',
    size: 'medium',
  },
]

export default function CategoryBentoGrid({
  title = 'Pilar Produk Unggulan Kami',
  categories = defaultCategories,
}: CategoryBentoGridProps) {
  return (
    <section className="category-bento-section" id="categories">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <div className="section-line"></div>
      </div>

      <div className="category-grid">
        {categories.map((cat, idx) => {
          // Fallback images if none is provided
          const img = cat.imageUrl || 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
          const gridClass = `category-card cat-card-${cat.size || 'medium'} cat-index-${idx}`

          return (
            <a href={cat.link || '#'} key={idx} className={gridClass}>
              <div className="card-bg-overlay"></div>
              
              {/* Card Image */}
              <div className="card-image-container">
                <Image
                  src={img}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="cat-card-img"
                />
                <div className="card-gradient"></div>
              </div>

              {/* Card Content */}
              <div className="card-content">
                <div className="card-top">
                  {cat.badge && <span className="card-badge">{cat.badge}</span>}
                </div>
                <div className="card-bottom">
                  <h3 className="card-name">{cat.name}</h3>
                  {cat.description && <p className="card-description">{cat.description}</p>}
                  
                  <span className="card-action-link">
                    Lihat Detail
                    <svg className="action-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
