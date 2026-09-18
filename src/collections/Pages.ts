import type { CollectionConfig } from 'payload'
import { HeroUtamaBlock } from './components/HeroBento'
import { HeroSekunderBlock } from './components/HeroSekunder'
import { BannerLayananBlock } from './components/BannerLayanan'
import { RichContentBlock } from './components/RichContent'
import { FAQAccordionBlock } from './components/FAQAccordion'
import { FeaturesGridBlock } from './components/FeaturesGrid'
import { RecentBlogsBlock } from './components/RecentBlogs'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Konten Halaman',
      blocks: [
        HeroUtamaBlock,
        HeroSekunderBlock,
        BannerLayananBlock,
        RichContentBlock,
        FAQAccordionBlock,
        FeaturesGridBlock,
        RecentBlogsBlock,
      ],
    },
  ],
}
