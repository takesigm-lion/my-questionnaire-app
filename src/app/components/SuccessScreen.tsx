import { Button } from "./Button";
import { motion } from "motion/react";
import imgBackground from "../../assets/02e155e88ee60979785a629031b98a747e882841.png";
import svgPaths from "../../imports/svg-hq803k1j37";
import BadgeCheck from "./BadgeCheck";

interface SuccessScreenProps {
  onBackToStart: () => void;
}

// 花火コンポーネント（カラフルな粒子が放射状に散る）
function Firework() {
  const colors = [
    '#D17A7A', // 落ち着いた赤
    '#7A9FD1', // 落ち着いた青
    '#D1B87A', // 落ち着いた金
    '#7AD19F', // 落ち着いた緑
    '#B87AD1', // 落ち着いた紫
    '#D1997A', // 落ち着いたオレンジ
    '#7AC4D1', // 落ち着いたシアン
    '#D1CA7A', // 落ち着いた黄色
    '#D17AA9', // 落ち着いたピンク
    '#7AD1B8', // 落ち着いたミント
  ];

  // 3つの花火を異なる位置と時間で打ち上げ
  const fireworks = [
    { top: '25%', left: '50%', delay: 0, particleCount: 60 },
    { top: '35%', left: '30%', delay: 0.3, particleCount: 50 },
    { top: '30%', left: '70%', delay: 0.2, particleCount: 50 },
  ];

  return (
    <>
      {fireworks.map((firework, fireworkIndex) => {
        const particles = Array.from({ length: firework.particleCount }, (_, i) => {
          const angle = (i / firework.particleCount) * Math.PI * 2;
          const distance = 150 + Math.random() * 120; // より遠くまで飛ぶ
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;
          const color = colors[Math.floor(Math.random() * colors.length)];
          const size = 4 + Math.random() * 6; // より大きく
          const duration = 1.8 + Math.random() * 0.7;
          
          return { x, y, color, size, duration };
        });

        return (
          <div
            key={fireworkIndex}
            className="absolute"
            style={{
              top: firework.top,
              left: firework.left,
            }}
          >
            {particles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  backgroundColor: particle.color,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  boxShadow: `0 0 ${particle.size * 4}px ${particle.color}, 0 0 ${particle.size * 8}px ${particle.color}, 0 0 ${particle.size * 12}px ${particle.color}`,
                }}
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  x: [0, particle.x * 0.3, particle.x * 0.7, particle.x, particle.x * 1.1],
                  y: [0, particle.y * 0.3, particle.y * 0.7, particle.y, particle.y * 1.2],
                  opacity: [0, 1, 1, 0.6, 0],
                  scale: [0, 1.2, 1, 0.8, 0],
                }}
                transition={{
                  duration: particle.duration,
                  delay: firework.delay,
                  ease: [0.25, 0.1, 0.25, 1],
                  times: [0, 0.2, 0.5, 0.85, 1],
                }}
              />
            ))}
          </div>
        );
      })}
    </>
  );
}

// 流れ星コンポーネント（回転しながら流れ、軌跡に影がついてくる）
function ShootingStar({ 
  startTop, 
  startLeft, 
  pathX, 
  pathY, 
  duration, 
  delay, 
  starId 
}: { 
  startTop: string; 
  startLeft: string; 
  pathX: number[]; 
  pathY: number[]; 
  duration: number; 
  delay: number;
  starId: number;
}) {
  const starSize = 24;
  
  // 軌跡上に配置する星の影（だんだん小さく、透明度が高い）
  const trailStars = Array.from({ length: 5 }, (_, i) => {
    const progress = i / 5;
    const opacity = (1 - progress) * 0.6; // リーダーより透明度が高い
    const scale = (1 - progress * 0.4) * 0.7; // より小さく
    const delayOffset = (i + 1) * 0.15; // 0.15秒ずつ遅れて追従
    
    return { opacity, scale, delayOffset };
  });
  
  return (
    <div
      className="absolute"
      style={{
        top: startTop,
        left: startLeft,
      }}
    >
      {/* 軌跡上の星の影（後をなぞる小さい星たち） */}
      {trailStars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: `${starSize * 1.5}px`,
            height: `${starSize * 1.5}px`,
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
            scale: 0,
            rotate: 0,
          }}
          animate={{
            x: pathX,
            y: pathY,
            opacity: [0, star.opacity, star.opacity, star.opacity, 0],
            scale: [0, star.scale, star.scale, star.scale, 0],
            rotate: [0, 360, 720, 1080, 1440],
          }}
          transition={{
            duration: duration,
            delay: delay + star.delayOffset, // 0.15秒ずつ遅れて追従
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 4,
          }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
              <defs>
                <linearGradient id={`silver-trail-${starId}-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'rgba(245, 247, 250, 0.9)', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: 'rgba(233, 234, 235, 0.9)', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: 'rgba(245, 247, 250, 0.9)', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path
                d={svgPaths.p18eb980}
                fill={`url(#silver-trail-${starId}-${i})`}
                filter={`drop-shadow(0 0 ${starSize * 0.4}px rgba(233, 234, 235, 0.6))`}
              />
            </svg>
          </div>
        </motion.div>
      ))}
      
      {/* メインの星（星型アイコン） */}
      <motion.div
        className="absolute"
        style={{
          width: `${starSize * 2}px`,
          height: `${starSize * 2}px`,
        }}
        initial={{
          x: 0,
          y: 0,
          opacity: 0,
          scale: 0,
          rotate: 0,
        }}
        animate={{
          x: pathX,
          y: pathY,
          opacity: [0, 1, 1, 1, 0],
          scale: [0, 1.2, 1, 1, 0.8],
          rotate: [0, 360, 720, 1080, 1440],
        }}
        transition={{
          duration: duration,
          delay: delay,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 4,
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
            <defs>
              <linearGradient id={`silver-gradient-main-${starId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'rgba(245, 247, 250, 1)' }} />
                <stop offset="50%" style={{ stopColor: 'rgba(233, 234, 235, 1)' }} />
                <stop offset="100%" style={{ stopColor: 'rgba(245, 247, 250, 1)' }} />
              </linearGradient>
            </defs>
            <path
              d={svgPaths.p18eb980}
              fill={`url(#silver-gradient-main-${starId})`}
              stroke="#4A4A4A"
              strokeWidth="0.5"
              filter={`drop-shadow(0 0 ${starSize}px rgba(255, 255, 255, 1)) drop-shadow(0 0 ${starSize * 2}px rgba(233, 234, 235, 0.8))`}
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

// 十字のきらきらコンポーネント（ランダムな位置に配置）
function TwinkleSparkle({ delay }: { delay: number }) {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 40; // 画面上部40%のみ
  const randomSize = Math.random() * 2 + 1.5;
  const randomDuration = Math.random() * 2 + 3;
  const randomDelay = delay + Math.random() * 2;
  const randomFadeDuration = Math.random() * 1.5 + 1.5; // 1.5秒〜3秒でフェード
  
  return (
    <div
      className="absolute"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
      }}
    >
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          opacity: [0, 1, 1, 0], // 消えたり現れたり
        }}
        transition={{
          rotate: {
            duration: randomDuration,
            ease: "linear",
            repeat: Infinity,
            delay: randomDelay,
          },
          opacity: {
            duration: randomFadeDuration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
            delay: randomDelay,
          }
        }}
      >
        {/* 横線 */}
        <div
          className="bg-white"
          style={{
            width: `${randomSize * 5}px`,
            height: `${randomSize * 0.6}px`,
            boxShadow: `0 0 ${randomSize * 3}px rgba(255, 255, 255, 1), 0 0 ${randomSize * 5}px rgba(255, 255, 255, 0.6)`,
          }}
        />
        {/* 縦線 */}
        <div
          className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: `${randomSize * 0.6}px`,
            height: `${randomSize * 5}px`,
            boxShadow: `0 0 ${randomSize * 3}px rgba(255, 255, 255, 1), 0 0 ${randomSize * 5}px rgba(255, 255, 255, 0.6)`,
          }}
        />
      </motion.div>
    </div>
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

      {/* 花火エフェクト（画面全体） */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        <Firework />
      </div>
      
      {/* 流れ星エフェクト（画面全体） */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {/* 星1: 左上から右下へ急降下 */}
        <ShootingStar
          startTop="5%"
          startLeft="-5%"
          pathX={[0, 100, 220, 340]}
          pathY={[0, 60, 160, 300]}
          duration={0.5}
          delay={1.5}
          starId={1}
        />
        {/* 星2: 中央上から右中央へ緩やかな円弧 */}
        <ShootingStar
          startTop="8%"
          startLeft="40%"
          pathX={[0, 80, 140, 180]}
          pathY={[0, 90, 180, 260]}
          duration={1.2}
          delay={2.1}
          starId={2}
        />
        {/* 星3: 右上から左下へ大きな円弧 */}
        <ShootingStar
          startTop="3%"
          startLeft="95%"
          pathX={[0, -70, -160, -260]}
          pathY={[0, 100, 200, 320]}
          duration={0.6}
          delay={4.0}
          starId={3}
        />
      </div>

      {/* キラキラ輝く小さな星（画面全体） */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {Array.from({ length: 30 }).map((_, i) => (
          <TwinkleSparkle key={`twinkle-${i}`} delay={i * 0.15} />
        ))}
      </div>

      <div
        className="relative shrink-0 w-full max-w-[390px]"
        data-name="container"
      >
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[48px] py-[16px] relative w-full">
            {/* Overlay */}
            <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(242,246,249,0.6)] blur-[4px] left-1/2 size-[326px] top-[calc(50%+0.5px)]" data-name="overlay" />
            
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