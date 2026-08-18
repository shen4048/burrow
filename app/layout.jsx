export const metadata = {
  title: '兔窝',
  description: 'burrow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
