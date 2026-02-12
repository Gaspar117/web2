interface AdBannerProps {
  size: 'large' | 'medium' | 'small' | 'sidebar';
  className?: string;
}

export default function AdBanner({ size, className = '' }: AdBannerProps) {
  const sizeClasses = {
    large: 'h-32 w-full',
    medium: 'h-24 w-full',
    small: 'h-20 w-full',
    sidebar: 'h-64 w-full'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg border-2 border-dashed border-gray-400 flex items-center justify-center`}>
      <div className="text-center">
        <p className="text-gray-600 font-semibold text-sm">ESPAÇO PUBLICITÁRIO</p>
        <p className="text-gray-500 text-xs mt-1">{size === 'sidebar' ? '300x250' : size === 'large' ? '728x90' : size === 'medium' ? '468x60' : '320x50'}</p>
      </div>
    </div>
  );
}
