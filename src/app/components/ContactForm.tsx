'use client'

import { useState, useRef, useEffect } from 'react'
import { submitContact } from '../actions/contact'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

// text-base = 16px — required to suppress iOS auto-zoom on input focus.
// py-3.5 gives ~52px touch target (14+24+14) on all inputs/textarea/select.
const inputClass = `
  w-full px-4 py-3.5 text-base bg-transparent rounded-md
  border text-[var(--input-text)] placeholder-[var(--label)]
  focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:border-[var(--accent)] transition-colors duration-200
`

const PROJECT_TYPES = [
  { value: 'website', label: 'Website design & development' },
  { value: 'saas', label: 'SaaS or web application' },
  { value: 'not-sure', label: 'Not sure yet' },
]

function CustomSelect({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  const [open, setOpen] = useState(false)
  const [focusIdx, setFocusIdx] = useState(-1)
  const ref = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [open])

  useEffect(() => {
    if (open) {
      const currentIdx = PROJECT_TYPES.findIndex(t => t.value === value)
      setFocusIdx(currentIdx >= 0 ? currentIdx : 0)
    }
  }, [open, value])

  // Scroll focused option into view
  useEffect(() => {
    if (!open || focusIdx < 0) return
    const id = `cs-project-opt-${focusIdx}`
    document.getElementById(id)?.scrollIntoView({ block: 'nearest' })
  }, [open, focusIdx])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        setOpen(true)
        return
      }
      return
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setFocusIdx(i => Math.min(i + 1, PROJECT_TYPES.length - 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setFocusIdx(i => Math.max(i - 1, 0))
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (focusIdx >= 0) {
          onChange(PROJECT_TYPES[focusIdx].value)
          setOpen(false)
          triggerRef.current?.focus()
        }
        break
      case 'Escape':
        e.preventDefault()
        setOpen(false)
        triggerRef.current?.focus()
        break
      case 'Tab':
        setOpen(false)
        break
    }
  }

  const selected = PROJECT_TYPES.find(t => t.value === value)
  const activeDescendant = open && focusIdx >= 0 ? `cs-project-opt-${focusIdx}` : undefined

  return (
    <div ref={ref} className="relative" onKeyDown={handleKeyDown}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(o => !o)}
        className={inputClass}
        style={{
          borderColor: open ? 'var(--accent)' : 'var(--input-border)',
          color: value ? 'var(--input-text)' : 'var(--label)',
          textAlign: 'left',
          cursor: 'pointer',
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Project type"
        aria-activedescendant={activeDescendant}
      >
        <span className="block truncate pr-6">
          {selected ? selected.label : 'What are you looking for?'}
        </span>
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
          width="12" height="8" viewBox="0 0 12 8" fill="none"
          aria-hidden="true"
          style={{ transform: open ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)', transition: 'transform 0.2s ease' }}
        >
          <path d="M1 1.5L6 6.5L11 1.5" stroke="var(--label)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          ref={listRef}
          role="listbox"
          aria-label="Project type"
          className="absolute z-10 left-0 right-0 mt-1 rounded-md border overflow-hidden"
          style={{
            borderColor: 'var(--input-border)',
            backgroundColor: 'var(--bg-primary)',
          }}
        >
          {PROJECT_TYPES.map(({ value: v, label }, i) => (
            <li
              key={v}
              id={`cs-project-opt-${i}`}
              role="option"
              aria-selected={v === value}
              className="px-4 py-3 text-base cursor-pointer transition-colors duration-150"
              style={{
                color: v === value ? 'var(--accent)' : 'var(--input-text)',
                backgroundColor: i === focusIdx ? 'var(--divider-faint)' : v === value ? 'var(--divider-faint)' : 'transparent',
              }}
              onMouseEnter={() => setFocusIdx(i)}
              onClick={() => { onChange(v); setOpen(false); triggerRef.current?.focus() }}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: '',
    message: '',
  })

  const set = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return
    setState('submitting')
    setErrorMsg('')

    const result = await submitContact(form)

    if (result.error) {
      setErrorMsg(result.error)
      setState('error')
    } else {
      setState('success')
    }
  }

  if (state === 'success') {
    return (
      <div className="text-center py-12 max-w-lg mx-auto">
        <p
          className="text-[20px] font-semibold tracking-[-0.02em] mb-2"
          style={{ color: 'var(--accent)' }}
        >
          Got it, we&apos;ll be in touch.
        </p>
        <p className="text-[14px]" style={{ color: 'var(--label)' }}>
          We typically respond within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <div>
          <label htmlFor="cs-name" className="sr-only">Name</label>
          <input
            id="cs-name"
            type="text"
            placeholder="Name"
            required
            autoComplete="name"
            value={form.name}
            onChange={set('name')}
            className={inputClass}
            style={{ borderColor: 'var(--input-border)' }}
          />
        </div>
        <div>
          <label htmlFor="cs-email" className="sr-only">Email</label>
          <input
            id="cs-email"
            type="email"
            placeholder="Email"
            required
            autoComplete="email"
            value={form.email}
            onChange={set('email')}
            className={inputClass}
            style={{ borderColor: 'var(--input-border)' }}
          />
        </div>
      </div>

      <div className="mb-3">
        <CustomSelect
          value={form.type}
          onChange={v => setForm(f => ({ ...f, type: v }))}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="cs-message" className="sr-only">Tell us more</label>
        <textarea
          id="cs-message"
          rows={4}
          placeholder="Tell us a bit more. What does your business do, and what problem are you trying to solve?"
          required
          value={form.message}
          onChange={set('message')}
          className={`${inputClass} resize-none`}
          style={{ borderColor: 'var(--input-border)' }}
        />
      </div>

      {state === 'error' && errorMsg && (
        <p className="text-center text-[14px] mb-4" style={{ color: 'var(--accent)' }}>
          {errorMsg}
        </p>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={state === 'submitting'}
          className="w-full sm:w-auto px-8 py-3.5 rounded-md text-[13px] font-semibold tracking-[0.02em] transition-opacity duration-200 disabled:opacity-50 hover:opacity-80 active:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
          style={{
            backgroundColor: 'var(--cta-bg)',
            color: 'var(--cta-text)',
          }}
        >
          {state === 'submitting' ? 'Sending…' : 'Send it'}
        </button>
      </div>
    </form>
  )
}
