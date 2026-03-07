import { Button } from "./Button";
import { motion } from "motion/react";
import { CheckCircle, Sparkles } from "lucide-react";
import imgBackground from "../../assets/02e155e88ee60979785a629031b98a747e882841.png";
import svgPaths from "../../imports/svg-hq803k1j37";
import BadgeCheck from "./BadgeCheck";

interface SuccessScreenProps {
  onBackToStart: () => void;
}

// 大きな流れ星コンポーネント（左上から右中央に流れる）
function LargeShootingStar({ delay }: { delay: number }) {
  const startY = Math.random() * 30; // 画面上部30%の範囲
  const randomDuration = Math.random() * 0.5 + 2; // 2〜2.5秒
  const randomSize = Math.random() * 20 + 8; 
  
  // 軌跡上に配置する星の影（距離に応じてフェード）
  const trailStars = Array.from({ length: 8 }, (_, i) => {
    const progress = i / 8; // 0から1の進行度
    const opacity = 1 - progress; // 距離が離れるほど透明に
    const scale = 1 - progress * 0.5; // 距離が離れるほど小さく
    const xOffset = -30 * (i + 1); // 軌跡に沿ってx方向にオフセット
    const yOffset = -8 * (i + 1); // 軌跡に沿ってy方向にオフセット
    
    return { opacity, scale, xOffset, yOffset, delay: i * 0.05 };
  });
  
  return (
    <motion.div
      className="absolute"
      style={{
        top: `${startY}%`,
        left: "-5%",
      }}
      initial={{
        opacity: 0,
        x: 0,
        y: 0,
      }}
      animate={{
        opacity: [1, 1, 1, 1, 1],
        x: [0, 150, 300, 450],
        y: [0, 40, 80, 120],
      }}
      transition={{
        duration: randomDuration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
        repeat: Infinity,
        repeatDelay: 3,
      }}
    >
      {/* 軌跡上の星の影 */}
      {trailStars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: `${randomSize * 2}px`,
            height: `${randomSize * 2}px`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          initial={{
            opacity: 0,
            x: star.xOffset,
            y: star.yOffset,
            scale: 0,
          }}
          animate={{
            opacity: [0, star.opacity * 0.6, star.opacity * 0.6, 0],
            x: [star.xOffset, star.xOffset, star.xOffset, star.xOffset],
            y: [star.yOffset, star.yOffset, star.yOffset, star.yOffset],
            scale: [0, star.scale, star.scale, 0],
          }}
          transition={{
            duration: randomDuration,
            delay: delay + star.delay,
            ease: [0.25, 0.1, 0.25, 1],
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0018 21.0721">
            <defs>
              <linearGradient id={`silver-trail-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'rgba(245, 247, 250, 0.8)', stopOpacity: star.opacity * 0.6 }} />
                <stop offset="50%" style={{ stopColor: 'rgba(233, 234, 235, 0.8)', stopOpacity: star.opacity * 0.6 }} />
                <stop offset="100%" style={{ stopColor: 'rgba(245, 247, 250, 0.8)', stopOpacity: star.opacity * 0.6 }} />
              </linearGradient>
            </defs>
            <path
              d={svgPaths.p18eb980}
              fill={`url(#silver-trail-${i})`}
              filter={`drop-shadow(0 0 ${randomSize}px rgba(233, 234, 235, ${star.opacity * 0.4}))`}
            />
          </svg>
        </motion.div>
      ))}
      
      {/* メインの星（星型アイコン） */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: `${randomSize * 2.5}px`,
          height: `${randomSize * 2.5}px`,
        }}
        initial={{ scale: 0, rotate: 0 }}
        animate={{
          scale: [0, 1.2, 1, 1, 0.8],
          rotate: [0, 360, 720, 1080, 1440],
        }}
        transition={{
          duration: randomDuration,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0018 21.0721">
          <defs>
            <linearGradient id="silver-gradient-main" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(245, 247, 250, 1)' }} />
              <stop offset="50%" style={{ stopColor: 'rgba(233, 234, 235, 1)' }} />
              <stop offset="100%" style={{ stopColor: 'rgba(245, 247, 250, 1)' }} />
            </linearGradient>
          </defs>
          <path
            d={svgPaths.p18eb980}
            fill="url(#silver-gradient-main)"
            stroke="#4A4A4A"
            strokeWidth="0.5"
            filter={`drop-shadow(0 0 ${randomSize * 2}px rgba(255, 255, 255, 1)) drop-shadow(0 0 ${randomSize * 4}px rgba(233, 234, 235, 0.8))`}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

// 流れ星コンポーネント（銀色のキラキラした星が斜めに流れる）
function ShootingStar({ delay }: { delay: number }) {
  const randomStartY = Math.random() * 100;
  const randomStartX = Math.random() * 120 - 20;
  const randomDuration = Math.random() * 1.5 + 1.5;
  const randomSize = Math.random() * 20 + 20;
  const randomDelay = delay + Math.random() * 0.5;
  
  // 軌跡上に配置する星の影（距離に応じてフェード）
  const trailStars = Array.from({ length: 5 }, (_, i) => {
    const progress = i / 5;
    const opacity = 1 - progress;
    const scale = 1 - progress * 0.6;
    const xOffset = -20 * (i + 1);
    const yOffset = -12 * (i + 1);
    
    return { opacity, scale, xOffset, yOffset, delay: i * 0.05 };
  });
  
  return (
    <motion.div
      className="absolute"
      style={{
        top: `${randomStartY}%`,
        left: `${randomStartX}%`,
      }}
      initial={{
        opacity: 0,
        x: 0,
        y: 0,
      }}
      animate={{
        opacity: [1, 1, 1, 1],
        x: [0, 150, 250],
        y: [0, 100, 150],
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: Math.random() * 2 + 1,
      }}
    >
      {/* 軌跡上の星の影 */}
      {trailStars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: `${randomSize * 2}px`,
            height: `${randomSize * 2}px`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          initial={{
            opacity: 0,
            x: star.xOffset,
            y: star.yOffset,
            scale: 0,
          }}
          animate={{
            opacity: [0, star.opacity * 0.5, star.opacity * 0.5, 0],
            x: [star.xOffset, star.xOffset, star.xOffset, star.xOffset],
            y: [star.yOffset, star.yOffset, star.yOffset, star.yOffset],
            scale: [0, star.scale, star.scale, 0],
          }}
          transition={{
            duration: randomDuration,
            delay: randomDelay + star.delay,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: Math.random() * 2 + 1,
          }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0018 21.0721">
            <defs>
              <linearGradient id={`silver-small-trail-${delay}-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'rgba(245, 247, 250, 0.8)', stopOpacity: star.opacity * 0.5 }} />
                <stop offset="50%" style={{ stopColor: 'rgba(233, 234, 235, 0.8)', stopOpacity: star.opacity * 0.5 }} />
                <stop offset="100%" style={{ stopColor: 'rgba(245, 247, 250, 0.8)', stopOpacity: star.opacity * 0.5 }} />
              </linearGradient>
            </defs>
            <path
              d={svgPaths.p18eb980}
              fill="url(#silver-gradient-main)"
              stroke="#4A4A4A"
              strokeWidth="0.5"
              filter={`drop-shadow(0 0 ${randomSize * 2}px rgba(255, 255, 255, 1)) drop-shadow(0 0 ${randomSize * 4}px rgba(233, 234, 235, 0.8))`}
            />
          </svg>
        </motion.div>
      ))}
      
      {/* メインの星（星型アイコン） */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: `${randomSize * 2}px`,
          height: `${randomSize * 2}px`,
        }}
        initial={{ scale: 0, rotate: 0 }}
        animate={{
          scale: [0, 1, 1, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: randomDuration,
          delay: randomDelay,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: Math.random() * 2 + 1,
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0018 21.0721">
          <defs>
            <linearGradient id={`silver-small-main-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(245, 247, 250, 1)' }} />
              <stop offset="50%" style={{ stopColor: 'rgba(233, 234, 235, 1)' }} />
              <stop offset="100%" style={{ stopColor: 'rgba(245, 247, 250, 1)' }} />
            </linearGradient>
          </defs>
          <path
            d={svgPaths.p18eb980}
            fill="url(#silver-gradient-main)"
            stroke="#4A4A4A"
            strokeWidth="0.5"
            filter={`drop-shadow(0 0 ${randomSize * 2}px rgba(255, 255, 255, 1)) drop-shadow(0 0 ${randomSize * 4}px rgba(233, 234, 235, 0.8))`}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

// キラキラ輝く小さな星（点滅）- より明るく目立つ銀色
function TwinkleStar({ delay }: { delay: number }) {
  const randomX = Math.random() * 400;
  const randomY = Math.random() * 400;
  const randomSize = Math.random() * 2.5 + 1.5; // 少し大きく
  const randomDuration = Math.random() * 1 + 1;
  const randomDelay = delay + Math.random() * 2;
  
  return (
    <motion.div
      className="absolute"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0.5, 1, 0],
        scale: [0, 1.5, 1, 1.5, 0],
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: Math.random() * 3,
      }}
    >
      <div
        className="rounded-full"
        style={{
          width: `${randomSize}px`,
          height: `${randomSize}px`,
          background: "radial-gradient(circle, #FFFFFF 0%, #E8E8E8 60%, #C0C0C0 100%)",
          boxShadow: `0 0 ${randomSize * 4}px rgba(255, 255, 255, 1), 0 0 ${randomSize * 8}px rgba(220, 220, 220, 0.8), 0 0 ${randomSize * 12}px rgba(192, 192, 192, 0.5)`,
        }}
      />
      {/* 十字の輝き */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div
          className="bg-white"
          style={{
            width: `${randomSize * 5}px`,
            height: `${randomSize * 0.6}px`,
            boxShadow: `0 0 ${randomSize * 3}px rgba(255, 255, 255, 1), 0 0 ${randomSize * 5}px rgba(255, 255, 255, 0.6)`,
          }}
        />
        <div
          className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: `${randomSize * 0.6}px`,
            height: `${randomSize * 5}px`,
            boxShadow: `0 0 ${randomSize * 3}px rgba(255, 255, 255, 1), 0 0 ${randomSize * 5}px rgba(255, 255, 255, 0.6)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export function SuccessScreen({
  onBackToStart,
}: SuccessScreenProps) {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center px-[32px] relative size-full min-h-screen max-w-[390px] mx-auto"
      data-name="background"
    >
      <img
        alt=""
        className="absolute inset-0 object-cover pointer-events-none size-full"
        src={imgBackground}
      />

      <div
        className="relative shrink-0 w-full max-w-[390px]"
        data-name="container"
      >
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[48px] py-[16px] relative w-full">
            {/* Overlay */}
            <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(242,246,249,0.6)] blur-[4px] left-1/2 size-[326px] top-[calc(50%+0.5px)]" data-name="overlay" />
            
            {/* 大きな流れ星（左上から右中央へ） */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {Array.from({ length: 3 }).map((_, i) => (
                <LargeShootingStar key={`large-${i}`} delay={i * 1.2} />
              ))}
            </div>
            
            {/* 流れ星エフェクト（画面全体） */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {Array.from({ length: 15 }).map((_, i) => (
                <ShootingStar key={`shooting-${i}`} delay={i * 0.3} />
              ))}
            </div>

            {/* キラキラ輝く小さな星 */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {Array.from({ length: 30 }).map((_, i) => (
                <TwinkleStar key={`twinkle-${i}`} delay={i * 0.15} />
              ))}
            </div>

            {/* Container */}
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center min-h-px min-w-px relative z-10"
              data-name="container"
            >
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
                <BadgeCheck
                  className="w-[80px] h-[80px]"
                  strokeWidth={3.5}
                />
              </motion.div>

              {/* メッセージ（フェードイン） */}
              <motion.div
                className="flex flex-col gap-[8px] items-center w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[1.5] min-w-full relative shrink-0 text-[24px] text-black text-center tracking-[0.48px] w-full">
                  送信完了しました！
                </p>

                <div className="flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#555] text-[16px] w-full">
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
                <Button
                  variant="primary"
                  onClick={onBackToStart}
                >
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