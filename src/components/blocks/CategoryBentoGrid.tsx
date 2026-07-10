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
    name: 'Kategori Utama A',
    description: 'Tuliskan deskripsi lengkap dari pilar produk utama Anda di sini. Layout flat minimalis.',
    badge: 'Fitur Unggulan',
    imageUrl: 'https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&q=80&w=800',
    link: '#kat-a',
    size: 'large',
  },
  {
    name: 'Kategori Utama B',
    description: 'Deskripsi singkat mengenai kelebihan produk atau jasa Anda. Cocok untuk visualisasi bento.',
    badge: 'Terpopuler',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    link: '#kat-b',
    size: 'medium',
  },
  {
    name: 'Kategori Utama C',
    description: 'Menampilkan aspek keunikan yang disorot. Sepenuhnya fleksibel dan borderless.',
    badge: 'Terbaru',
    imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800',
    link: '#kat-c',
    size: 'medium',
  },
]

export default function CategoryBentoGrid({
  title = 'Kategori Produk / Layanan Unggulan',
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
                    Pelajari Selengkapnya
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
