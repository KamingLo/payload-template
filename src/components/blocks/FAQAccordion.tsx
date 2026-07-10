import React from 'react'
import Accordion from '@/components/ui/Accordion'

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQAccordionProps {
  title?: string | null
  subtitle?: string | null
  faqs?: FAQItem[] | null
}

export default function FAQAccordion({
  title = 'Pertanyaan yang Sering Diajukan',
  subtitle = 'Temukan jawaban cepat atas pertanyaan seputar layanan kami.',
  faqs,
}: FAQAccordionProps) {
  return (
    <section className="faq-section" id="faq">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        <div className="section-line"></div>
      </div>

      <div className="faq-container">
        {faqs && faqs.length > 0 ? (
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <Accordion key={idx} title={faq.question}>
                <p className="faq-answer-text">{faq.answer}</p>
              </Accordion>
            ))}
          </div>
        ) : (
          <p className="no-faqs-text">Belum ada pertanyaan yang dibuat.</p>
        )}
      </div>
    </section>
  )
}
