import { Button } from './Button';
import imgBackground from "../../assets/02e155e88ee60979785a629031b98a747e882841.png";

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[32px] relative size-full min-h-screen max-w-[390px] mx-auto" data-name="background">
      <img alt="" className="absolute inset-0 object-cover pointer-events-none size-full" src={imgBackground} />
      
      <div className="relative shrink-0 w-full max-w-[390px]" data-name="container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[48px] py-[16px] relative w-full">
            {/* Overlay */}
            <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(242,246,249,0.6)] blur-[4px] left-1/2 size-[326px] top-[calc(50%+0.5px)]" data-name="overlay" />
            
            {/* Container */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-center min-h-px min-w-px relative z-10" data-name="container">
              <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[1.5] min-w-full relative shrink-0 text-[24px] text-black text-center tracking-[0.48px] w-[min-content]">
                アンケート
              </p>
              
              <div className="flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#555] text-[16px] w-[min-content]">
                <p className="leading-[1.2]">ここに説明文。ここに説明文。ここに説明文。ここに説明文。ここに説明文。ここに説明文。</p>
              </div>
              
              <div className="h-[16px] shrink-0 w-full" />
              
              <Button variant="primary" onClick={onStart}>
                すすむ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
