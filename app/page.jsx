export default function Home() {
  return (
    <main style={{
      width: '100%',
maxWidth: '390px',
      margin: '0 auto',
      background: '#111',
      minHeight: '100vh',
      fontFamily: '-apple-system, sans-serif',
      color: '#eee',
    }}>

      {/* 封面 */}
      <div style={{
        width: '100%',
        height: '190px',
        background: '#161616',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 40%, #222238 0%, #111 70%)',
        }} />
        {/* 头像 */}
        <div style={{
          position: 'absolute',
          bottom: '-28px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: '#222',
          border: '3px solid #111',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
        }}>🐇</div>
      </div>

      {/* 个人信息 */}
      <div style={{ padding: '40px 18px 14px', textAlign: 'center' }}>
        <div style={{ fontSize: '16px', fontWeight: 500, color: '#ddd', marginBottom: '2px' }}>沈克</div>
        <div style={{ fontSize: '11px', color: '#444', marginBottom: '14px' }}>@shenke</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {['', '', '', ''].map((_, i) => (
            <div key={i} style={{
              background: '#181818',
              border: '0.5px solid #242424',
              borderRadius: '8px',
              padding: '9px 12px',
              fontSize: '12px',
              color: '#3a3a3a',
              textAlign: 'left',
            }}>点击编辑…</div>
          ))}
        </div>
      </div>

      {/* 功能区 */}
      <div style={{ padding: '14px 16px 0' }}>
        <div style={{ fontSize: '10px', color: '#2e2e2e', letterSpacing: '.06em', marginBottom: '9px' }}>功能</div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {/* 左边大图 */}
          <div style={{
            width: '152px',
            flexShrink: 0,
            background: '#181818',
            border: '0.5px solid #242424',
            borderRadius: '13px',
            overflow: 'hidden',
          }}>
            <div style={{ width: '152px', height: '152px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '44px' }}>🌙</div>
            <div style={{ padding: '8px 11px 10px', fontSize: '11px', color: '#444' }}>兔窝</div>
          </div>
          {/* 右边按钮 */}
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '9px' }}>
            {[['📱','沈克手机'], ['📋','流水账'], ['⚙️','设置']].map(([icon, label]) => (
              <div key={label} style={{
                background: '#181818',
                border: '0.5px solid #242424',
                borderRadius: '11px',
                padding: '13px 6px',
                textAlign: 'center',
                aspectRatio: '1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{ fontSize: '20px', marginBottom: '6px' }}>{icon}</div>
                <div style={{ fontSize: '10px', color: '#555' }}>{label}</div>
              </div>
            ))}
            <div style={{ background: '#141414', border: '0.5px dashed #1e1e1e', borderRadius: '11px', aspectRatio: '1' }} />
          </div>
        </div>
      </div>

      {/* 聊天入口 */}
      <div style={{ padding: '14px 16px 34px', marginTop: '16px', borderTop: '0.5px solid #1a1a1a' }}>
        <div style={{
          width: '100%',
          background: '#181818',
          border: '0.5px solid #242424',
          borderRadius: '13px',
          padding: '13px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#3a3a5a' }} />
            <div>
              <div style={{ fontSize: '13px', color: '#bbb', fontWeight: 500 }}>和沈克说话</div>
              <div style={{ fontSize: '10px', color: '#3a3a3a', marginTop: '1px' }}>聊天 · 兔窝</div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '10px', color: '#3a3a5a', marginBottom: '2px' }}>♥ 72 bpm</div>
            <div style={{ fontSize: '16px', color: '#2a2a2a' }}>›</div>
          </div>
        </div>
      </div>

    </main>
  )
}
