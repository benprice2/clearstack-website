import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  // Fetch Syne Bold from Google Fonts for the headline.
  // Falls back to system sans-serif if the request fails.
  let syneData: ArrayBuffer | null = null
  try {
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=Syne:wght@700&display=swap',
      { headers: { 'User-Agent': 'Mozilla/5.0' } }
    ).then(r => r.text())
    const url = css.match(/src: url\((.+?)\) format/)?.[1]
    if (url) syneData = await fetch(url).then(r => r.arrayBuffer())
  } catch {
    // silently fall back to system font
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          background: '#0D0A1A',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Violet gradient sweep — bottom-left to mid */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 600,
            height: 400,
            background:
              'radial-gradient(ellipse at bottom left, #3B0F8C 0%, transparent 70%)',
            opacity: 0.6,
          }}
        />

        {/* Isometric mark — top-right quadrant */}
        {/* Three stacked rounded slabs at ~48px each, echoing brand geometry */}
        <div
          style={{
            position: 'absolute',
            right: 120,
            top: 140,
            width: 160,
            height: 160,
            display: 'flex',
          }}
        >
          {/* Base slab */}
          <div
            style={{
              position: 'absolute',
              width: 96,
              height: 96,
              borderRadius: 21,
              background: '#2C0A58',
              right: 0,
              bottom: 0,
            }}
          />
          {/* Mid slab */}
          <div
            style={{
              position: 'absolute',
              width: 96,
              height: 96,
              borderRadius: 21,
              background: '#4C1D95',
              right: 24,
              bottom: 24,
            }}
          />
          {/* Top slab */}
          <div
            style={{
              position: 'absolute',
              width: 96,
              height: 96,
              borderRadius: 21,
              background: '#7C3AED',
              right: 48,
              bottom: 48,
            }}
          />
        </div>

        {/* Copy — left column */}
        <div
          style={{
            position: 'absolute',
            left: 80,
            top: 0,
            bottom: 0,
            width: 760,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Wordmark row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 40,
            }}
          >
            {/* Tiny mark lockup */}
            <div style={{ position: 'relative', width: 28, height: 28, display: 'flex' }}>
              <div style={{ position: 'absolute', width: 18, height: 18, borderRadius: 4, background: '#2C0A58', right: 0, bottom: 0 }} />
              <div style={{ position: 'absolute', width: 18, height: 18, borderRadius: 4, background: '#4C1D95', right: 5, bottom: 5 }} />
              <div style={{ position: 'absolute', width: 18, height: 18, borderRadius: 4, background: '#7C3AED', right: 10, bottom: 10 }} />
            </div>
            <span
              style={{
                fontFamily: syneData ? 'Syne' : 'sans-serif',
                fontWeight: 700,
                fontSize: 22,
                color: '#9CA3AF',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              ClearStack
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              fontFamily: syneData ? 'Syne' : 'sans-serif',
              fontWeight: 700,
              fontSize: 72,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span style={{ color: '#F8F7FF' }}>Build it right,</span>
            <span style={{ color: '#8B5CF6' }}>then automate it.</span>
          </div>

          {/* Descriptor */}
          <div
            style={{
              marginTop: 32,
              fontSize: 24,
              color: 'rgba(237,233,254,0.55)',
              fontFamily: 'sans-serif',
              lineHeight: 1.5,
            }}
          >
            Custom websites and SaaS applications for NZ businesses.
          </div>
        </div>

        {/* Location tag — bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            left: 80,
            fontSize: 13,
            color: '#4B5563',
            fontFamily: 'sans-serif',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          Auckland · New Zealand
        </div>

        {/* Bottom border accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: 'linear-gradient(to right, #7C3AED, transparent)',
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: syneData
        ? [{ name: 'Syne', data: syneData, weight: 700, style: 'normal' }]
        : [],
    }
  )
}
