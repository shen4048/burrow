'use client'
import { useState, useRef } from 'react'

export default function Home() {
  const [coverImg, setCoverImg] = useState(null)
  const [avatarImg, setAvatarImg] = useState(null)
  const [mainImg, setMainImg] = useState(null)
  const [icons, setIcons] = useState([null, null, null])

  const coverRef = useRef()
  const avatarRef = useRef()
  const mainRef = useRef()
  const iconRefs = [useRef(), useRef(), useRef()]
  const tapCount = useRef({})
  const tapTimers = useRef({})

  const handleImg = (e, setter) => {
    const file = e.target.files[0]
    if (!file) return
    setter(URL.createObjectURL(file))
  }

  const handleIcon = (e, i) => {
    const file = e.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setIcons(prev => prev.map((v, j) => j === i ? url : v))
  }

  const handleTap = (key, onQuad) => {
    tapCount.current[key] = (tapCount.current[key] || 0) + 1
    clearTimeout(tapTimers.current[key])
    if (tapCount.current[key] >= 4) {
      tapCount.current[key] = 0
      onQuad()
    } else {
      tapTimers.current[key] = setTimeout(() => {
        tapCount.current[key] = 0
      }, 400)
    }
  }

  const btns = [
    { label: '沈克手机', emoji: '📱' },
    { label: '流水账', emoji: '📋' },
    { label: '设置', emoji: '⚙️' },
  ]

  return (
    <main style={{
      width: '100%',
      maxWidth: '390px',
      minHeight: '100vh',
      position: 'relative',
      fontFamily: '-apple-system, "PingFang SC", sans-serif',
      overflow: 'hidden',
    }}>

      <div style={{
        position: 'fixed',
        inset: 0,
        maxWidth: '390px',
        background: coverImg ? `url(${coverImg}) center/cover no-repeat` : '#1a1a2e',
        filter: 'brightness(0.85)',
        zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        <div style={{
          margin: '60px 16px 0',
          borderRadius: '24px',
          overflow: 'hidden',
          background: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '0.5px solid rgba(255,255,255,0.12)',
        }}>
          <div
            onClick={() => handleTap('cover', () => coverRef.current.click())}
            onContextMenu={e => e.preventDefault()}
            style={{
              height: '130px',
              background: coverImg ? `url(${coverImg}) center/cover` : 'linear-gradient(160deg,#2a2a4a,#0a0a1a)',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              userSelect: 'none',
            }}
          >
            {!coverImg && <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>连点4次换封面</span>}
          </div>
          <input ref={coverRef} type="file" accept="image/*" style={{ display: 'none' }}
            onChange={e => handleImg(e, setCoverImg)} />

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-36px', marginBottom: '10px' }}>
            <div
              onClick={() => handleTap('avatar', () => avatarRef.current.click())}
              onContextMenu={e => e.preventDefault()}
              style={{
                width: '72px', height: '72px',
                borderRadius: '50%',
                border: '3px solid rgba(255,255,255,0.25)',
                background: avatarImg ? `url(${avatarImg}) center/cover` : 'rgba(255,255,255,0.1)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '32px',
                backdropFilter: 'blur(10px)',
                userSelect: 'none',
              }}
            >{!avatarImg && '🐇'}</div>
            <input ref={avatarRef} type="file" accept="image/*" style={{ display: 'none' }}
              onChange={e => handleImg(e, setAvatarImg)} />
          </div>

          <div style={{ textAlign: 'center', padding: '0 20px 20px' }}>
            <div style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>沈克</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '12px' }}>@shenke</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[0,1,2,3].map(i => (
                <input key={i} placeholder="点击编辑…" style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: '0.5px solid rgba(255,255,255,0.1)',
                  padding: '6px 0',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.8)',
                  outline: 'none',
                  width: '100%',
                  fontFamily: 'inherit',
                  textAlign: 'center',
                }} />
              ))}
            </div>
          </div>
        </div>

        <div style={{ padding: '12px 16px 0' }}>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '.06em', marginBottom: '10px' }}>功能</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', alignItems: 'start' }}>

            {/* 兔窝 左边 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                onClick={() => handleTap('main', () => mainRef.current.click())}
                onContextMenu={e => e.preventDefault()}
                style={{
                  width: '100%', aspectRatio: '1',
                  borderRadius: '20px',
                  background: mainImg ? `url(${mainImg}) center/cover` : 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '0.5px solid rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '36px', cursor: 'pointer', userSelect: 'none',
                }}
              >{!mainImg && '🌙'}</div>
              <div style={{ height: '20px', lineHeight: '20px', marginTop: '6px', fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>兔窝</div>
              <input ref={mainRef} type="file" accept="image/*" style={{ display: 'none' }}
                onChange={e => handleImg(e, setMainImg)} />
            </div>

            {/* 右边 2x2 图标 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {btns.map((btn, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div
                    onClick={() => handleTap(`icon${i}`, () => iconRefs[i].current.click())}
                    onContextMenu={e => e.preventDefault()}
                    style={{
                      width: '100%', aspectRatio: '1',
                      borderRadius: '14px',
                      background: icons[i] ? `url(${icons[i]}) center/cover` : 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: '0.5px solid rgba(255,255,255,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '22px', cursor: 'pointer', userSelect: 'none',
                    }}
                  >{!icons[i] && btn.emoji}</div>
                  <input ref={iconRefs[i]} type="file" accept="image/*" style={{ display: 'none' }}
                    onChange={e => handleIcon(e, i)} />
                  <div style={{ height: '20px', lineHeight: '20px', marginTop: '6px', fontSize: '10px', color: 'rgba(255,255,255,0.7)' }}>{btn.label}</div>
                </div>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: '100%', aspectRatio: '1',
                  borderRadius: '14px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '0.5px dashed rgba(255,255,255,0.08)',
                }} />
                <div style={{ height: '20px', marginTop: '6px' }} />
              </div>
            </div>

          </div>
        </div>

        <div style={{ padding: '16px 16px 40px', marginTop: '8px' }}>
          <div style={{
            borderRadius: '20px',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '0.5px solid rgba(255,255,255,0.15)',
            padding: '14px 18px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            cursor: 'pointer',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#6b7aff', boxShadow: '0 0 6px #6b7aff',
              }} />
              <div>
                <div style={{ fontSize: '13px', color: '#fff', fontWeight: 500 }}>和沈克说话</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '1px' }}>聊天 · 兔窝</div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '2px' }}>♥ 72 bpm</div>
              <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.3)' }}>›</div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        input::placeholder { color: rgba(255,255,255,0.25); }
        input { -webkit-appearance: none; }
        * { -webkit-tap-highlight-color: transparent; }
      `}</style>
    </main>
  )
}
