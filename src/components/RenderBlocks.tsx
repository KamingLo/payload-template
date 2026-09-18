import React from 'react'
import type { Page } from '@/payload-types'
import HeroBento, { HeroFeature } from '@/components/blocks/HeroBento'
import HeroSekunder from '@/components/blocks/HeroSekunder'
import BannerLayanan from '@/components/blocks/BannerLayanan'
import RichText from '@/components/blocks/RichText'
import FAQAccordion from '@/components/blocks/FAQAccordion'
import FeaturesGrid from '@/components/blocks/FeaturesGrid'
import RecentBlogs from '@/components/blocks/RecentBlogs'

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
              <HeroSekunder
                key={block.id || index}
                title={block.title}
                subtitle={block.subtitle}
                description={block.description}
                ctaText={block.ctaText}
                ctaLink={block.ctaLink}
                imageUrl={getImageUrl(block.image)}
                alignment={block.alignment}
              />
            )

          case 'bannerLayanan':
            return (
              <BannerLayanan
                key={block.id || index}
                title={block.title}
                description={block.description}
                ctaText={block.ctaText}
                ctaLink={block.ctaLink}
                icon={block.icon}
                style={block.style}
              />
            )

          case 'richContent':
            return (
              <section key={block.id || index} className="page-content-section">
                {block.content && <RichText content={block.content} />}
              </section>
            )

          case 'faqAccordion':
            return (
              <FAQAccordion
                key={block.id || index}
                title={block.title}
                subtitle={block.subtitle}
                faqs={block.faqs?.map((f) => ({
                  question: f.question,
                  answer: f.answer,
                }))}
              />
            )

          case 'featuresGrid':
            return (
              <FeaturesGrid
                key={block.id || index}
                title={block.title}
                subtitle={block.subtitle}
                features={block.features?.map((f) => ({
                  icon: f.icon,
                  title: f.title,
                  description: f.description,
                }))}
              />
            )

          case 'recentBlogs':
            return (
              <RecentBlogs
                key={block.id || index}
                title={block.title}
                subtitle={block.subtitle}
                limit={block.limit}
              />
            )

          default:
            return null
        }
      })}
    </>
  )
}
