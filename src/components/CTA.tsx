'use client';

import { useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '11px 14px',
  borderRadius: 9,
  border: '1px solid rgba(196,184,220,0.15)',
  background: 'rgba(255,255,255,0.06)',
  color: '#F8F7FF',
  fontSize: 14,
  fontFamily: 'var(--font)',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 12,
  fontWeight: 600,
  color: 'rgba(196,184,220,0.6)',
  marginBottom: 6,
  letterSpacing: '0.04em',
};

export default function CTA() {
  const [state, setState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);

  const update = (k: keyof typeof form, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setState(res.ok ? 'success' : 'error');
    } catch {
      setState('error');
    }
  };

  const focusStyle = (field: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focused === field ? 'rgba(139,92,246,0.5)' : 'rgba(196,184,220,0.15)',
    boxShadow: focused === field ? '0 0 0 3px rgba(139,92,246,0.12)' : 'none',
  });

  return (
    <section id="contact" className="cta-section">
      <div className="cta-inner" style={{ gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
        <div className="cta-bg-circle" />

        {/* Left: copy */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="cta-eyebrow">Let&apos;s build something</div>
          <h2 className="cta-h2">Ready to do it properly?</h2>
          <p className="cta-sub">No commitments — just a conversation. Tell me about your project and I&apos;ll come back with a clear scope and timeline.</p>

          <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              'Fixed-price proposals — no hourly surprises',
              'Clear scope and timeline before work starts',
              'Reply within 1 business day',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(196,184,220,0.55)' }}>
                <div style={{ flexShrink: 0, width: 18, height: 18, borderRadius: '50%', background: 'rgba(91,33,182,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path d="M1.5 4.5l2 2 4-4" stroke="#8B5CF6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {state === 'success' ? (
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(139,92,246,0.2)',
              borderRadius: 16, padding: '48px 36px',
              textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
            }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(16,185,129,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 11l5 5 9-9" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 17, fontWeight: 700, color: '#F8F7FF', marginBottom: 8 }}>Message sent</p>
                <p style={{ fontSize: 14, color: 'rgba(196,184,220,0.55)', lineHeight: 1.6 }}>Thanks — I&apos;ll be in touch within 1 business day.</p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(196,184,220,0.1)',
                borderRadius: 16, padding: '36px 32px',
                display: 'flex', flexDirection: 'column', gap: 20,
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={labelStyle}>Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => update('name', e.target.value)}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    style={focusStyle('name')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => update('email', e.target.value)}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    style={focusStyle('email')}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>What are you looking for?</label>
                <select
                  value={form.service}
                  onChange={e => update('service', e.target.value)}
                  onFocus={() => setFocused('service')}
                  onBlur={() => setFocused(null)}
                  style={{ ...focusStyle('service'), color: form.service ? '#F8F7FF' : 'rgba(196,184,220,0.4)' }}
                >
                  <option value="" disabled style={{ background: '#1A1630' }}>Select a service</option>
                  <option value="Landing page" style={{ background: '#1A1630' }}>Landing page</option>
                  <option value="Business website" style={{ background: '#1A1630' }}>Business website</option>
                  <option value="Web app or AI tool" style={{ background: '#1A1630' }}>Web app or AI tool</option>
                  <option value="Something else" style={{ background: '#1A1630' }}>Something else</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Tell me about your project</label>
                <textarea
                  required
                  rows={4}
                  placeholder="What do you need built, and when are you looking to get started?"
                  value={form.message}
                  onChange={e => update('message', e.target.value)}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  style={{ ...focusStyle('message'), resize: 'vertical', minHeight: 100 }}
                />
              </div>

              {state === 'error' && (
                <p style={{ fontSize: 13, color: '#F87171', margin: 0 }}>Something went wrong — please try again or email hello@clearstack.co.nz directly.</p>
              )}

              <button
                type="submit"
                disabled={state === 'submitting'}
                style={{
                  fontFamily: 'var(--font)', fontSize: 15, fontWeight: 700,
                  padding: '13px 24px', borderRadius: 9,
                  background: state === 'submitting' ? 'rgba(91,33,182,0.6)' : 'var(--violet)',
                  color: 'white', border: 'none', cursor: state === 'submitting' ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  transition: 'background 0.15s, transform 0.15s',
                  boxShadow: '0 4px 20px rgba(91,33,182,0.4)',
                }}
              >
                {state === 'submitting' ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation: 'spin 0.8s linear infinite' }}>
                      <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                      <path d="M8 2a6 6 0 0 1 6 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>Send message &rarr;</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
