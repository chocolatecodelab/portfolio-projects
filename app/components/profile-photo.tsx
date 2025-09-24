import Image from 'next/image'

interface ProfilePhotoProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeMap = {
  sm: 'w-32 h-32',
  md: 'w-48 h-48', 
  lg: 'w-64 h-64',
  xl: 'w-80 h-80'
}

export function ProfilePhoto({ 
  src = '/images/foto-2.jpg', 
  alt = 'Profile Photo', 
  size = 'xl' 
}: ProfilePhotoProps) {
  return (
    <div className="relative">
      <div className={`${sizeMap[size]} rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1`}>
        <div className="w-full h-full rounded-full bg-white dark:bg-neutral-900 overflow-hidden">
          {src ? (
            <Image
              src={src}
              alt={alt}
              width={320}
              height={320}
              className="w-full h-full object-cover rounded-full"
              priority
            />
          ) : (
            // Fallback jika tidak ada foto
            <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-full flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-500 rounded-full opacity-30 animate-pulse delay-75"></div>
    </div>
  )
}