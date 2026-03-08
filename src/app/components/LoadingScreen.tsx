import imgBackground from "../../assets/02e155e88ee60979785a629031b98a747e882841.png";

function Overlay() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(242,246,249,0.6)] blur-[4px] left-1/2 size-[326px] top-1/2" data-name="overlay" />;
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[126px] items-center relative shrink-0" data-name="container">
      <Overlay />
      <div className="relative shrink-0 size-[64px] z-10" data-name="SquareSpinner">
        <div className="absolute left-0 size-[32px] top-0 bg-[#f2f2f2]" data-name="box 1" />
        <div className="absolute left-[32px] size-[32px] top-0 bg-[#f2f2f2]" data-name="box 2" />
        <div className="absolute left-[32px] size-[32px] top-[32px] bg-[#f2f2f2]" data-name="box 3" />
        <div className="absolute left-0 size-[32px] top-[32px] bg-[#f2f2f2]" data-name="box 4" />
        <div 
          className="absolute size-[32px] bg-[#333]" 
          data-name="top-box"
          style={{
            animation: 'squareSpinner 2.4s linear infinite'
          }}
        />
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[16px] w-[128px]">
        <p className="leading-none">読み込み中……</p>
      </div>
      <style>{`
        @keyframes squareSpinner {
          0% { left: 0px; top: 0px; }
          12.5% { left: 32px; top: 0px; }
          25% { left: 32px; top: 32px; }
          37.5% { left: 0px; top: 32px; }
          50% { left: 0px; top: 0px; }
          62.5% { left: 32px; top: 0px; }
          75% { left: 32px; top: 32px; }
          87.5% { left: 0px; top: 32px; }
          100% { left: 0px; top: 0px; }
        }
      `}</style>
    </div>
  );
}

export function LoadingScreen() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[32px] relative size-full min-h-screen max-w-[390px] mx-auto" data-name="background">
      <img alt="" className="absolute inset-0 object-cover pointer-events-none size-full" src={imgBackground} />
      <Container />
    </div>
  );
}