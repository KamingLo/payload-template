import type { Block } from 'payload'

export const ProductShowcaseBlock: Block = {
  slug: 'productShowcase',
  labels: {
    singular: 'Katalog Produk Showcase',
    plural: 'Katalog Produk Showcase',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Produk Pilihan Terbaik',
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Temukan koleksi produk terpopuler kami yang didesain dengan standar kualitas tinggi.',
    },
    {
      name: 'products',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          defaultValue: 'Nama Produk Contoh',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Deskripsi ringkas produk mengenai fitur, keunggulan, dan kegunaannya secara detail.',
        },
        {
          name: 'price',
          type: 'text',
          defaultValue: 'Rp 150.000',
        },
        {
          name: 'image',
          type: 'relationship',
          relationTo: 'media',
        },
        {
          name: 'link',
          type: 'text',
          defaultValue: '#detail-produk',
        },
        {
          name: 'badge',
          type: 'text',
          defaultValue: 'Baru',
        },
      ],
    },
  ],
}
