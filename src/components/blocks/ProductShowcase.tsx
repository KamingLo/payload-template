import React from 'react'
import Image from 'next/image'

export interface ProductItem {
  name: string
  description?: string | null
  price?: string | null
  imageUrl?: string | null
  link?: string | null
  badge?: string | null
}

export interface ProductShowcaseProps {
  title?: string | null
  subtitle?: string | null
  products?: ProductItem[] | null
}

export default function ProductShowcase({
  title = 'Katalog Produk Pilihan',
  subtitle = 'Koleksi produk berkualitas tinggi yang dikonfigurasi melalui CMS.',
  products,
}: ProductShowcaseProps) {
  return (
    <section className="product-showcase-section" id="products">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        <div className="section-line"></div>
      </div>

      <div className="product-showcase-grid">
        {products && products.length > 0 ? (
          products.map((prod, idx) => {
            const displayImg = prod.imageUrl || 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
            return (
              <div key={idx} className="product-card">
                <div className="product-image-container">
                  <Image
                    src={displayImg}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="product-img"
                  />
                  {prod.badge && <span className="product-badge">{prod.badge}</span>}
                </div>
                <div className="product-info">
                  <div className="product-info-header">
                    <h3 className="product-name">{prod.name}</h3>
                    {prod.price && <span className="product-price">{prod.price}</span>}
                  </div>
                  {prod.description && <p className="product-description">{prod.description}</p>}
                  {prod.link && (
                    <a href={prod.link} className="product-cta-link">
                      Pelajari Selengkapnya
                      <svg className="cta-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            )
          })
        ) : (
          <p className="no-products-text">Belum ada produk yang dikonfigurasi.</p>
        )}
      </div>
    </section>
  )
}
