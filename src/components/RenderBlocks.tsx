import React from 'react'
import type { Page } from '@/payload-types'
import HeroBento, { HeroFeature } from './HeroBento'
import CategoryBentoGrid, { CategoryItem } from './CategoryBentoGrid'
import RichText from './RichText'

type LayoutBlock = NonNullable<Page['layout']>[number]

/** Helper: extract URL from a Media field (populated object or ID) */
const getImageUrl = (imageField: any): string | undefined => {
  if (!imageField) return undefined
  if (typeof imageField === 'object' && imageField.url) {
    return imageField.url
  }
  return undefined
}

export default function RenderBlocks({ layout }: { layout: Page['layout'] }) {
  if (!layout || layout.length === 0) return null

  return (
    <>
      {layout.map((block, index) => {
        switch (block.blockType) {
          case 'heroUtama':
            return (
              <HeroBento
                key={block.id || index}
                title={block.title}
                subtitle={block.subtitle || undefined}
                description={block.description}
                ctaText={block.ctaText}
                ctaLink={block.ctaLink}
                imageUrl={getImageUrl(block.image)}
                features={block.features?.map((f) => ({
                  title: f.title,
                  value: f.value,
                })) as HeroFeature[]}
              />
            )

          case 'heroSekunder':
            return (
              <section key={block.id || index} className="hero-sekunder" data-alignment={block.alignment || 'left'}>
                <div className="hero-sekunder-grid">
                  <div className="hero-sekunder-content">
                    <h2 className="hero-sekunder-title">{block.title}</h2>
                    {block.subtitle && <span className="hero-sekunder-subtitle">{block.subtitle}</span>}
                    <p className="hero-sekunder-desc">{block.description}</p>
                    {block.ctaText && block.ctaLink && (
                      <a href={block.ctaLink} className="hero-sekunder-cta">
                        {block.ctaText}
                      </a>
                    )}
                  </div>
                  {getImageUrl(block.image) && (
                    <div className="hero-sekunder-image">
                      <img src={getImageUrl(block.image)} alt={block.title} />
                    </div>
                  )}
                </div>
              </section>
            )

          case 'gridPromosiProduk':
            return (
              <CategoryBentoGrid
                key={block.id || index}
                title={block.title || undefined}
                categories={block.items?.map((item) => ({
                  name: item.name,
                  description: item.description || undefined,
                  badge: item.badge || undefined,
                  imageUrl: getImageUrl(item.image),
                  link: item.link || undefined,
                  size: item.size,
                })) as CategoryItem[]}
              />
            )

          case 'bannerLayanan':
            return (
              <section key={block.id || index} className={`banner-layanan banner-layanan--${block.style || 'default'}`}>
                <div className="banner-layanan-inner">
                  {block.icon && <span className="banner-layanan-icon">{block.icon}</span>}
                  <div className="banner-layanan-content">
                    <h3 className="banner-layanan-title">{block.title}</h3>
                    <p className="banner-layanan-desc">{block.description}</p>
                  </div>
                  {block.ctaText && block.ctaLink && (
                    <a href={block.ctaLink} className="banner-layanan-cta">
                      {block.ctaText}
                    </a>
                  )}
                </div>
              </section>
            )

          case 'richContent':
            return (
              <section key={block.id || index} className="page-content-section">
                {block.content && <RichText content={block.content} />}
              </section>
            )

          default:
            return null
        }
      })}
    </>
  )
}
