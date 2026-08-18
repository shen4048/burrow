export const metadata = {
  title: '兔窝',
  description: 'burrow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { background: #0a0a0a; display: flex; justify-content: center; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}


