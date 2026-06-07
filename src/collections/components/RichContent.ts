import type { Block } from 'payload'

export const RichContentBlock: Block = {
  slug: 'richContent',
  labels: {
    singular: 'Rich Content',
    plural: 'Rich Content',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
    },
  ],
}
