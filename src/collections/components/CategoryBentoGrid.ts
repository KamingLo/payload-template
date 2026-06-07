import type { Block } from 'payload'

export const GridPromosiProdukBlock: Block = {
  slug: 'gridPromosiProduk',
  labels: {
    singular: 'Grid Promosi Produk',
    plural: 'Grid Promosi Produk',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Pilar Produk Kami',
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'badge',
          type: 'text',
          defaultValue: 'Kualitas Premium',
        },
        {
          name: 'image',
          type: 'relationship',
          relationTo: 'media',
        },
        {
          name: 'link',
          type: 'text',
        },
        {
          name: 'size',
          type: 'select',
          defaultValue: 'medium',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
        },
      ],
    },
  ],
}
