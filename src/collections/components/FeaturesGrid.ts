import type { Block } from 'payload'

export const FeaturesGridBlock: Block = {
  slug: 'featuresGrid',
  labels: {
    singular: 'Spesifikasi & Grid Fitur',
    plural: 'Spesifikasi & Grid Fitur',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Keunggulan & Spesifikasi Utama',
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Detail teknis dan kapabilitas yang ditawarkan oleh kerangka produk kami.',
    },
    {
      name: 'features',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Emoji / Icon',
          defaultValue: '✨',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Keunggulan Fitur',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          defaultValue: 'Tuliskan deskripsi lengkap dari keunggulan fitur atau nilai jual unik produk/layanan Anda di sini.',
        },
      ],
    },
  ],
}
