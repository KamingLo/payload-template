'use client'
import React, { useState } from 'react'

export interface AccordionProps {
  title: string
  children: React.ReactNode
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`ui-accordion ${isOpen ? 'is-expanded' : ''}`}>
      <button
        className="ui-accordion-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="ui-accordion-title">{title}</span>
        <span className="ui-accordion-icon">
          <svg
            className={`accordion-chevron ${isOpen ? 'rotate-180' : ''}`}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      <div className="ui-accordion-content-wrapper">
        <div className="ui-accordion-content">{children}</div>
      </div>
    </div>
  )
}
