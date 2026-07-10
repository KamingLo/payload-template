import type { Block } from 'payload'

export const FAQAccordionBlock: Block = {
  slug: 'faqAccordion',
  labels: {
    singular: 'FAQ Accordion',
    plural: 'FAQ Accordion',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Pertanyaan yang Sering Diajukan',
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Temukan jawaban cepat atas pertanyaan umum seputar layanan dan produk kami.',
    },
    {
      name: 'faqs',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
          defaultValue: 'Bagaimana cara menggunakan template ini?',
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
          defaultValue: 'Anda cukup login ke Payload Admin Panel, lalu buat atau sunting halaman dinamis, susun blok tata letak secara visual, dan simpan perubahan.',
        },
      ],
    },
  ],
}
