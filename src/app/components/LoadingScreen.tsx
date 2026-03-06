import svgPaths from "../../imports/svg-yvcwue721v";
import imgBackground from "figma:asset/02e155e88ee60979785a629031b98a747e882841.png";

function Overlay() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(242,246,249,0.6)] blur-[4px] left-1/2 size-[326px] top-1/2" data-name="overlay" />;
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[126px] items-center relative shrink-0" data-name="container">
      <Overlay />
      <div className="relative shrink-0 size-[100px] z-10" data-name="SpinnerSimpleGradient-M">
        <div className="absolute left-0 size-[100px] top-0" data-name="background">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
            <g id="background">
              <mask fill="white" id="path-1-inside-1_9_195">
                <path d={svgPaths.pc34c200} />
              </mask>
              <path d={svgPaths.p189d0100} fill="var(--stroke-0, white)" mask="url(#path-1-inside-1_9_195)" />
              <g clipPath="url(#paint0_angular_9_195_clip_path)" data-figma-skip-parse="true" mask="url(#path-1-inside-1_9_195)">
                <g transform="matrix(0.0196691 0.05 -0.05 0.157899 50.9191 50)" />
              </g>
              <path 
                d={svgPaths.p189d0100} 
                fill="url(#silver-gradient-bg)"
                mask="url(#path-1-inside-1_9_195)" 
              />
            </g>
            <defs>
              <clipPath id="paint0_angular_9_195_clip_path">
                <path d={svgPaths.p189d0100} mask="url(#path-1-inside-1_9_195)" />
              </clipPath>
              <radialGradient id="silver-gradient-bg" cx="50%" cy="50%">
                <stop offset="0%" stopColor="rgba(245, 247, 250, 0.8)" />
                <stop offset="4%" stopColor="rgba(245, 247, 250, 0.8)" />
                <stop offset="50%" stopColor="rgba(233, 234, 235, 0.8)" />
                <stop offset="54%" stopColor="rgba(233, 234, 235, 0.8)" />
                <stop offset="100%" stopColor="rgba(245, 247, 250, 0.8)" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute left-0 size-[100px] top-0 animate-spin" data-name="spinner" style={{ animationDuration: '1.5s' }}>
          <div className="absolute bottom-0 left-[27.43%] right-0 top-1/2">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.5745 50">
              <g id="spinner">
                <mask fill="white" id="path-1-inside-1_9_193">
                  <path d={svgPaths.p2c000800} />
                </mask>
                <g clipPath="url(#paint0_angular_9_193_clip_path)" data-figma-skip-parse="true" mask="url(#path-1-inside-1_9_193)">
                  <g transform="matrix(0.0198529 0.05 -0.0176471 0.05625 22.9421 -5.41811e-06)" />
                </g>
                <path 
                  d={svgPaths.p26b12880} 
                  fill="url(#green-gradient-spinner)"
                  mask="url(#path-1-inside-1_9_193)" 
                />
              </g>
              <defs>
                <clipPath id="paint0_angular_9_193_clip_path">
                  <path d={svgPaths.p26b12880} mask="url(#path-1-inside-1_9_193)" />
                </clipPath>
                <radialGradient id="green-gradient-spinner" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="rgba(166, 255, 203, 0.8)" />
                  <stop offset="2%" stopColor="rgba(255, 255, 255, 0.8)" />
                  <stop offset="4%" stopColor="rgba(166, 255, 203, 0.8)" />
                  <stop offset="40%" stopColor="rgba(40, 216, 124, 0.8)" />
                  <stop offset="50%" stopColor="rgba(160, 169, 197, 0.8)" />
                  <stop offset="52%" stopColor="rgba(255, 255, 255, 0.8)" />
                  <stop offset="54%" stopColor="rgba(160, 169, 197, 0.8)" />
                  <stop offset="100%" stopColor="rgba(166, 255, 203, 0.8)" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[16px] text-center w-[128px] z-10">
        <p className="leading-none">読み込み中・・・</p>
      </div>
    </div>
  );
}

export function LoadingScreen() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[32px] relative size-full min-h-screen" data-name="background">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground} />
      <Container />
    </div>
  );
}