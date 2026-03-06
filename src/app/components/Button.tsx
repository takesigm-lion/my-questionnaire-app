import { useState } from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick: () => void;
}

export function Button({ variant, children, onClick }: ButtonProps) {
  const [isActive, setIsActive] = useState(false);
  
  const handleClick = () => {
    setIsActive(true);
    onClick();
    // アクティブ状態を少し維持してからリセット
    setTimeout(() => setIsActive(false), 300);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group bg-white content-stretch flex gap-[4px] items-center justify-center min-h-[48px] min-w-[136px] px-[16px] py-[12px] relative rounded-[9999px] shrink-0 transition-all"
      data-name="GradientButton-S"
      style={{
        backgroundImage: isActive 
          ? (variant === 'primary' 
            ? "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 136 48\\' preserveAspectRatio=\\'none\\'><g transform=\\'matrix(3.1 0.8 -1.696 6.5719 68.5 24)\\'><foreignObject x=\\'-426.19\\' y=\\'-426.19\\' width=\\'852.38\\' height=\\'852.38\\'><div xmlns=\\'http://www.w3.org/1999/xhtml\\' style=\\'background-image: conic-gradient(from 90deg, rgba(236, 255, 244, 0.8) 0%, rgba(255, 255, 255, 0.8) 5%, rgba(236, 255, 244, 0.8) 10%, rgba(233, 234, 235, 0.8) 50%, rgba(255, 255, 255, 0.8) 55%, rgba(233, 234, 235, 0.8) 60%, rgba(236, 255, 244, 0.8) 100%); opacity:1; height: 100%; width: 100%;\\'></div></foreignObject></g></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)"
            : "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 136 48\\' preserveAspectRatio=\\'none\\'><g transform=\\'matrix(2.675 2.4 -6.8 7.5792 69.25 24)\\'><foreignObject x=\\'-352.07\\' y=\\'-352.07\\' width=\\'704.13\\' height=\\'704.13\\'><div xmlns=\\'http://www.w3.org/1999/xhtml\\' style=\\'background-image: conic-gradient(from 90deg, rgba(245, 247, 250, 0.8) 0%, rgba(245, 247, 250, 0.8) 4%, rgba(233, 234, 235, 0.8) 50%, rgba(233, 234, 235, 0.8) 54%, rgba(245, 247, 250, 0.8) 100%); opacity:1; height: 100%; width: 100%;\\'></div></foreignObject></g></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)")
          : undefined
      }}
    >
      <div
        aria-hidden="true"
        className={`absolute border-solid inset-0 pointer-events-none rounded-[9999px] transition-all ${
          isActive ? 'border-4 shadow-[0px_0px_4px_0px_black]' : 'border-2 group-hover:border-4'
        }`}
        style={{ 
          background: variant === 'primary' ? 'var(--green-gradient)' : 'var(--gray-gradient)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: isActive ? '4px' : '2px'
        }}
      />
      <p className="flex-[1_0_0] font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-none min-h-px min-w-px relative text-[#555] text-[16px] text-center z-10">
        {children}
      </p>
    </button>
  );
}
