import Image from 'next/image';
import { getLogo } from '@/lib/logos';

interface LogoProps {
  type?: 'completo' | 'horizontal' | 'blanco' | 'simbolo';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  className?: string;
  priority?: boolean;
  alt?: string;
}

export default function Logo({ 
  type = 'completo', 
  size = 'medium', 
  className = '',
  priority = false,
  alt = 'Metalls del Camp'
}: LogoProps) {
  const logoData = getLogo(type, size);
  
  if (!logoData) {
    // Logo fallback handled silently
    return null;
  }

  return (
    <Image
      src={logoData.src}
      alt={alt}
      width={logoData.width}
      height={logoData.height}
      className={className}
      priority={priority}
    />
  );
}

// Componentes específicos para usos comunes
export function HeaderLogo({ className = 'h-10 w-auto' }: { className?: string }) {
  return (
    <Logo 
      type="horizontal" 
      size="medium" 
      className={className}
      priority={true}
      alt="Metalls del Camp - Gestión de residuos"
    />
  );
}

export function FooterLogo({ className = 'h-12 w-auto' }: { className?: string }) {
  return (
    <Logo 
      type="completo" 
      size="medium" 
      className={className}
      alt="Metalls del Camp"
    />
  );
}

export function HeroLogo({ className = 'h-16 w-auto' }: { className?: string }) {
  return (
    <Logo 
      type="completo" 
      size="large" 
      className={className}
      alt="Metalls del Camp"
    />
  );
}

export function IconLogo({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <Logo 
      type="simbolo" 
      size="small" 
      className={className}
      alt="Metalls del Camp"
    />
  );
}
