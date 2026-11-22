import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  type = 'button',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-98 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none';

  const sizeClasses = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-[#5C3D2E] text-[#FAF3E8] hover:bg-[#3B2418] hover:shadow-lg focus-visible:ring-[#5C3D2E] shadow-sm',
    caramel:
      'bg-[#B07A4F] text-[#FAF3E8] hover:bg-[#9C673E] hover:shadow-lg focus-visible:ring-[#B07A4F] shadow-sm',
    secondary:
      'bg-[#F3E7D3] text-[#3B2418] border border-[#E8D8C3] hover:bg-[#FAF3E8] hover:border-[#B07A4F] focus-visible:ring-[#B07A4F]',
    outline:
      'bg-transparent text-[#3B2418] border-2 border-[#5C3D2E] hover:bg-[#5C3D2E] hover:text-[#FAF3E8] focus-visible:ring-[#5C3D2E]',
    ghost:
      'bg-transparent text-[#3B2418] hover:bg-[#F3E7D3] focus-visible:ring-[#B07A4F]',
    whatsapp:
      'bg-[#25D366] text-white hover:bg-[#20ba5a] hover:shadow-lg focus-visible:ring-[#25D366] shadow-sm',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
}
