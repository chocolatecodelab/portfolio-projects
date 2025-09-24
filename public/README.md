# Public Assets Folder

Folder `public/` adalah tempat untuk menyimpan semua file static seperti gambar, icon, dan asset lainnya dalam Next.js.

## Struktur Folder

```
public/
├── images/           # Foto profile, hero images, dll
├── projects/         # Screenshot dan gambar project
├── icons/           # Icon, logo, favicon
└── README.md        # Dokumentasi ini
```

## Cara Penggunaan

### 1. Profile Photo
```jsx
// Simpan foto di: public/images/profile.jpg
<Image src="/images/profile.jpg" alt="Profile" width={300} height={300} />
```

### 2. Project Screenshots
```jsx
// Simpan screenshot di: public/projects/project-name.jpg
<Image src="/projects/ecommerce-platform.jpg" alt="E-commerce Platform" />
```

### 3. Icons & Favicon
```jsx
// Simpan icon di: public/icons/
<Image src="/icons/logo.svg" alt="Logo" />
```

## Format File yang Disarankan

- **Foto Profile**: JPG/PNG, optimal 400x400px
- **Project Screenshots**: JPG/PNG, optimal 1200x800px
- **Icons**: SVG (vector) atau PNG
- **Favicon**: ICO, PNG (16x16, 32x32, 192x192)

## Optimasi Gambar

Next.js secara otomatis mengoptimasi gambar ketika menggunakan komponen `<Image>`:
- Lazy loading
- Responsive images
- Format modern (WebP/AVIF)
- Kompresi otomatis

## Contoh Implementasi

```jsx
import Image from 'next/image'

// Profile photo
<Image 
  src="/images/profile.jpg" 
  alt="Your Name"
  width={320}
  height={320}
  className="rounded-full"
  priority // untuk gambar above-the-fold
/>

// Project screenshot
<Image 
  src="/projects/my-awesome-project.jpg"
  alt="My Awesome Project"
  width={600}
  height={400}
  className="rounded-lg"
/>
```

## Notes

- Semua file di folder `public/` dapat diakses langsung dari root URL
- Contoh: `public/images/photo.jpg` → `https://yoursite.com/images/photo.jpg`
- Gunakan path absolut yang dimulai dengan `/`
- Hindari nama file dengan spasi, gunakan dash `-` atau underscore `_`