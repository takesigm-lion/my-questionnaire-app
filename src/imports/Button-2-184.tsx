export default function Button() {
  return (
    <div className="content-stretch flex gap-[16px] items-start px-[40px] relative size-full" data-name="button">
      <div className="bg-white content-stretch flex gap-[4px] items-center justify-center min-h-[48px] min-w-[136px] px-[16px] py-[12px] relative rounded-[9999px] shrink-0" data-name="GradientButton-S">
        <div aria-hidden="true" className="absolute border-4 border-[rgba(245,247,250,0.8)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <p className="flex-[1_0_0] font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-none min-h-px min-w-px relative text-[#555] text-[16px] text-center">キャンセル</p>
      </div>
      <div className="bg-white content-stretch flex gap-[4px] items-center justify-center min-h-[48px] min-w-[136px] px-[16px] py-[12px] relative rounded-[9999px] shrink-0" data-name="GradientButton-S">
        <div aria-hidden="true" className="absolute border-4 border-[rgba(166,255,203,0.8)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <p className="flex-[1_0_0] font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-none min-h-px min-w-px relative text-[#555] text-[16px] text-center">送信</p>
      </div>
    </div>
  );
}