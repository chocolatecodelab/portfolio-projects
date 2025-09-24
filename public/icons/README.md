# Favicon Files

Letakkan file favicon Anda di folder ini:

## Files yang disarankan:
- `favicon.ico` - 16x16, 32x32 (multi-size ICO)
- `favicon-16x16.png` - 16x16 PNG
- `favicon-32x32.png` - 32x32 PNG
- `apple-touch-icon.png` - 180x180 PNG
- `android-chrome-192x192.png` - 192x192 PNG
- `android-chrome-512x512.png` - 512x512 PNG

## Cara generate favicon:
1. Buat logo/icon dalam format SVG atau PNG 512x512
2. Gunakan tool online seperti:
   - https://favicon.io/
   - https://realfavicongenerator.net/
   - https://www.favicon-generator.org/

## Implementasi di Next.js:
Tambahkan di `app/layout.tsx`:

```jsx
export const metadata = {
  icons: {
    icon: '/icons/favicon.ico',
    shortcut: '/icons/favicon-16x16.png',
    apple: '/icons/apple-touch-icon.png',
  },
}
```