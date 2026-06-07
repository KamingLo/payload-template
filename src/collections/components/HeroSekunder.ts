import type { Block } from 'payload'

export const HeroSekunderBlock: Block = {
  slug: 'heroSekunder',
  labels: {
    singular: 'Hero Sekunder',
    plural: 'Hero Sekunder',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
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
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'alignment',
      type: 'select',
      label: 'Posisi Gambar',
      defaultValue: 'left',
      options: [
        { label: 'Kiri', value: 'left' },
        { label: 'Kanan', value: 'right' },
      ],
    },
  ],
}
