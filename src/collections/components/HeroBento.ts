import type { Block } from 'payload'

export const HeroUtamaBlock: Block = {
  slug: 'heroUtama',
  labels: {
    singular: 'Hero Utama',
    plural: 'Hero Utama',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Arang Premium & Brisket',
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Kualitas Ekspor dari Indonesia',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'Kami memproduksi arang kelapa premium dengan panas tinggi tahan lama serta brisket daging sapi pilihan yang diasap lambat menggunakan kayu rambutan untuk menghasilkan rasa autentik.',
    },
    {
      name: 'ctaText',
      type: 'text',
      required: true,
      defaultValue: 'Pesan Sekarang',
    },
    {
      name: 'ctaLink',
      type: 'text',
      required: true,
      defaultValue: '#categories',
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
