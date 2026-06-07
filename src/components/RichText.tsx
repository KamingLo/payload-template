import React from 'react'

export interface RichTextProps {
  content?: {
    root?: {
      children?: Array<any>
    }
  }
}

export default function RichText({ content }: RichTextProps) {
  if (!content || !content.root || !content.root.children) return null

  const renderNode = (node: any, index: number): React.ReactNode => {
    if (!node) return null

    // Handle Text Nodes
    if (node.type === 'text') {
      let element: React.ReactNode = node.text
      if (node.format & 1) { // Bold
        element = <strong>{element}</strong>
      }
      if (node.format & 2) { // Italic
        element = <em>{element}</em>
      }
      if (node.format & 8) { // Underline
        element = <span style={{ textDecoration: 'underline' }}>{element}</span>
      }
      if (node.format & 4) { // Strikethrough
        element = <span style={{ textDecoration: 'line-through' }}>{element}</span>
      }
      if (node.format & 16) { // Code
        element = <code>{element}</code>
      }
      return <React.Fragment key={index}>{element}</React.Fragment>
    }

    // Handle Children recursively
    const children = node.children ? node.children.map((child: any, i: number) => renderNode(child, i)) : null

    switch (node.type) {
      case 'paragraph':
        return <p key={index}>{children}</p>
      case 'heading': {
        const Tag = (node.tag || 'h2') as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
        return <Tag key={index}>{children}</Tag>
      }
      case 'list':
        if (node.listType === 'numbered') {
          return <ol key={index}>{children}</ol>
        }
        return <ul key={index}>{children}</ul>
      case 'listitem':
        return <li key={index}>{children}</li>
      case 'link':
        return (
          <a key={index} href={node.fields?.url || node.url} target={node.fields?.newTab ? '_blank' : undefined} rel="noopener noreferrer">
            {children}
          </a>
        )
      default:
        return <div key={index}>{children}</div>
    }
  }

  return (
    <div className="rich-text-content">
      {content.root.children.map((node, i) => renderNode(node, i))}
    </div>
  )
}
