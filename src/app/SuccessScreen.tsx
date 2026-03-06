import { Button } from './Button';
import { motion } from 'motion/react';
import { CheckCircle, Sparkles } from 'lucide-react';
import imgBackground from "figma:asset/02e155e88ee60979785a629031b98a747e882841.png";

interface SuccessScreenProps {
  onBackToStart: () => void;
}

// 紙吹雪のようなパーティクルコンポーネント
function Confetti({ delay }: { delay: number }) {
  const randomX = Math.random() * 200 - 100; // より広範囲に
  const randomStartX = Math.random() * 100; // 画面幅全体から開始
  const randomRotate = Math.random() * 720; // 2回転
  const randomScale = Math.random() * 1 + 0.5; // より大きいサイズのバリエーション
  const randomDuration = Math.random() * 1.5 + 2; // 速度のバリエーション
  const colors = ['#A6FFCB', '#28D87C', '#A0A9C5', '#F5F7FA', '#FFD700', '#FF69B4', '#00D9FF', '#FF6B9D'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const shapes = ['rounded-full', 'rounded-sm', 'rounded-none']; // 形のバリエーション
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
  
  return (
    <motion.div
      className={`absolute w-3 h-3 ${randomShape}`}
      style={{ 
        backgroundColor: randomColor,
        top: '-40px',
        left: `${randomStartX}%`,
      }}
      initial={{ 
        opacity: 0,
        y: -40,
        x: 0,
        rotate: 0,
        scale: 0,
      }}
      animate={{ 
        opacity: [0, 1, 1, 0.8, 0],
        y: [0, 150, 300, 450, 600],
        x: [0, randomX * 0.3, randomX * 0.7, randomX, randomX * 1.2],
        rotate: [0, randomRotate * 0.5, randomRotate],
        scale: [0, randomScale * 1.2, randomScale, randomScale * 0.8, 0],
      }}
      transition={{ 
        duration: randomDuration,
        delay,
        ease: "easeOut",
      }}
    />
  );
}

// バーストエフェクト（中央から放射状に広がる）
function BurstParticle({ delay, angle }: { delay: number; angle: number }) {
  const distance = Math.random() * 150 + 100;
  const colors = ['#A6FFCB', '#28D87C', '#FFD700', '#00D9FF'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full"
      style={{ 
        backgroundColor: randomColor,
        left: '50%',
        top: '50%',
      }}
      initial={{ 
        opacity: 0,
        x: 0,
        y: 0,
        scale: 0,
      }}
      animate={{ 
        opacity: [0, 1, 0],
        x: Math.cos(angle * Math.PI / 180) * distance,
        y: Math.sin(angle * Math.PI / 180) * distance,
        scale: [0, 1.5, 0],
      }}
      transition={{ 
        duration: 1,
        delay,
        ease: "easeOut",
      }}
    />
  );
}

// 波紋エフェクト
function Ripple({ delay }: { delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full border-4 border-[#28D87C]"
      style={{ 
        left: '50%',
        top: '50%',
        translateX: '-50%',
        translateY: '-50%',
      }}
      initial={{ 
        width: 0,
        height: 0,
        opacity: 0.8,
      }}
      animate={{ 
        width: 300,
        height: 300,
        opacity: 0,
      }}
      transition={{ 
        duration: 1.5,
        delay,
        ease: "easeOut",
      }}
    />
  );
}

export function SuccessScreen({ onBackToStart }: SuccessScreenProps) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[32px] relative size-full min-h-screen" data-name="background">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground} />
      
      <div className="relative shrink-0 w-full max-w-[390px]" data-name="container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[32px] relative w-full">
            {/* Overlay */}
            <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(242,246,249,0.6)] blur-[4px] left-1/2 size-[326px] top-[calc(50%+0.5px)]" data-name="overlay" />
            
            {/* 紙吹雪エフェクト */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {Array.from({ length: 60 }).map((_, i) => (
                <Confetti key={i} delay={i * 0.03} />
              ))}
            </div>
            
            {/* バーストエフェクト */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
              {Array.from({ length: 24 }).map((_, i) => (
                <BurstParticle key={i} delay={0.1} angle={i * 15} />
              ))}
            </div>
            
            {/* 波紋エフェクト */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
              {Array.from({ length: 4 }).map((_, i) => (
                <Ripple key={i} delay={i * 0.15} />
              ))}
            </div>
            
            {/* Container */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center min-h-px min-w-px relative z-10" data-name="container">
              {/* 上部スペーサー */}
              <div className="h-[32px] shrink-0 w-full" />
              
              {/* チェックマークアイコン（バウンスアニメーション付き） */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: [0, 1.5, 0.9, 1.1, 1],
                  rotate: [-180, 0, -5, 5, 0],
                }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.34, 1.56, 0.64, 1],
                  times: [0, 0.5, 0.7, 0.85, 1],
                }}
              >
                <div className="relative">
                  {/* グロー効果 */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#28D87C] blur-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: [0, 0.6, 0.3],
                      scale: [0.8, 1.3, 1.2],
                    }}
                    transition={{ 
                      duration: 1,
                      ease: "easeOut",
                    }}
                  />
                  
                  <CheckCircle className="w-[80px] h-[80px] text-[#28D87C] relative" strokeWidth={2} />
                  
                  {/* キラキラエフェクト */}
                  <motion.div
                    className="absolute -top-2 -right-2"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ 
                      scale: [0, 1, 0.8],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ 
                      duration: 1,
                      delay: 0.4,
                    }}
                  >
                    <Sparkles className="w-6 h-6 text-[#FFD700]" fill="#FFD700" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-1 -left-1"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ 
                      scale: [0, 1, 0.8],
                      rotate: [0, -180, -360],
                    }}
                    transition={{ 
                      duration: 1,
                      delay: 0.6,
                    }}
                  >
                    <Sparkles className="w-5 h-5 text-[#A6FFCB]" fill="#A6FFCB" />
                  </motion.div>
                </div>
              </motion.div>
              
              {/* メッセージ（フェードイン） */}
              <motion.div
                className="flex flex-col gap-[12px] items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[24px] text-black text-center tracking-[0.48px]">
                  送信完了しました！
                </p>
                
                <div className="flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[16px]">
                  <p className="leading-[1.2] text-center">
                    アンケートへのご協力
                  </p>
                  <p className="leading-[1.2] text-center">
                    ありがとうございました！
                  </p>
                </div>
              </motion.div>
              
              <div className="h-[4px] shrink-0 w-full" />
              
              {/* ボタン（フェードイン） */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full flex justify-center"
              >
                <Button variant="primary" onClick={onBackToStart}>
                  はじめに戻る
                </Button>
              </motion.div>
              
              {/* 下部スペーサー */}
              <div className="h-[32px] shrink-0 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}