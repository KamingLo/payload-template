import type { Block } from 'payload'

export const BannerLayananBlock: Block = {
  slug: 'bannerLayanan',
  labels: {
    singular: 'Banner Layanan',
    plural: 'Banner Layanan',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'ctaText',
      type: 'text',
    },
    {
      name: 'ctaLink',
      type: 'text',
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Icon / Emoji',
      admin: {
        description: 'Masukkan emoji atau nama icon untuk representasi visual (contoh: 🚚, 🛡️, ⚙️)',
      },
    },
    {
      name: 'style',
      type: 'select',
      label: 'Gaya Tampilan',
      defaultValue: 'default',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Highlight', value: 'highlight' },
        { label: 'Minimal', value: 'minimal' },
      ],
    },
  ],
}
