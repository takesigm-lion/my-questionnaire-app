import svgPaths from "./svg-4nk3xukhwm";
import imgHeader from "figma:asset/2d81624423c51d0e2ba437ff5e9cbc7e0cefe807.png";

function Space() {
  return <div className="h-[16px] shrink-0 w-full" data-name="space" />;
}

function Container1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[8px] py-[16px] relative rounded-[8px] shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[rgba(215,231,255,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[1.2] max-w-[390px] relative shrink-0 text-[#555] text-[16px] w-[354px]">
        <p className="mb-0">アンケートへのご協力ありがとうございます。</p>
        <p>所要時間：5分程度</p>
      </div>
    </div>
  );
}

function DescriptionRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="RadioButton-S">
        <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="button-circle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, white)" id="button-circle" r="9.5" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </button>
      <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">
        <p className="leading-none">ほとんど送っていない</p>
      </div>
    </div>
  );
}

function DescriptionRow1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="RadioButton-S">
        <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="button-circle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, white)" id="button-circle" r="9.5" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </button>
      <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">
        <p className="leading-none">月に1回程度</p>
      </div>
    </div>
  );
}

function DescriptionRow2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="RadioButton-S">
        <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="button-circle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, white)" id="button-circle" r="9.5" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </button>
      <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">
        <p className="leading-none">月に2~3回程度</p>
      </div>
    </div>
  );
}

function DescriptionRow3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="RadioButton-S">
        <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="button-circle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, white)" id="button-circle" r="9.5" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </button>
      <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">
        <p className="leading-none">週に1回以上</p>
      </div>
    </div>
  );
}

function Option() {
  return (
    <div className="relative shrink-0 w-full" data-name="option">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="RadioButtonField-S">
          <DescriptionRow />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="RadioButtonField-S">
          <DescriptionRow1 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="RadioButtonField-S">
          <DescriptionRow2 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="RadioButtonField-S">
          <DescriptionRow3 />
        </div>
      </div>
    </div>
  );
}

function DescriptionRow4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="RadioButton-S">
        <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="button-circle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, white)" id="button-circle" r="9.5" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </button>
      <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">
        <p className="leading-none">ほとんど受け取っていない</p>
      </div>
    </div>
  );
}

function DescriptionRow5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="RadioButton-S">
        <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="button-circle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, white)" id="button-circle" r="9.5" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </button>
      <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">
        <p className="leading-none">月に1回程度</p>
      </div>
    </div>
  );
}

function DescriptionRow6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="RadioButton-S">
        <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="button-circle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, white)" id="button-circle" r="9.5" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </button>
      <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">
        <p className="leading-none">月に2~3回程度</p>
      </div>
    </div>
  );
}

function DescriptionRow7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="RadioButton-S">
        <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="button-circle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, white)" id="button-circle" r="9.5" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </button>
      <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">
        <p className="leading-none">週に1回以上</p>
      </div>
    </div>
  );
}

function Option1() {
  return (
    <div className="relative shrink-0 w-full" data-name="option">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="RadioButtonField-S">
          <DescriptionRow4 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="RadioButtonField-S">
          <DescriptionRow5 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="RadioButtonField-S">
          <DescriptionRow6 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="RadioButtonField-S">
          <DescriptionRow7 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start px-[8px] py-[16px] relative rounded-[8px] shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[rgba(215,231,255,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">
        <ol start="1">
          <li className="ms-[24px] whitespace-pre-wrap">
            <span className="leading-none">サンクスカードの利用頻度</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[390px] relative shrink-0 text-[#555] text-[16px] w-[354px]">
        <p className="leading-[1.2]">最近の1か月を振り返って、あなたはサンクスカードをどのくらいの頻度で送っていますか？</p>
      </div>
      <Option />
      <div className="flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[390px] min-w-full relative shrink-0 text-[#555] text-[16px] w-[min-content]">
        <p className="leading-[1.2]">最近の1か月を振り返って、あなたはサンクスカードをどのくらいの頻度で受け取っていますか？</p>
      </div>
      <Option1 />
    </div>
  );
}

function DescriptionRow8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checkbox-S">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#202020] text-[16px]">
        <p className="leading-none">仕事を助けてもらったとき</p>
      </div>
    </div>
  );
}

function DescriptionRow9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checkbox-S">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#202020] text-[16px]">
        <p className="leading-none">期日までに仕事を終わらせてくれたとき</p>
      </div>
    </div>
  );
}

function DescriptionRow10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checkbox-S">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#202020] text-[16px]">
        <p className="leading-none">自分のミスをフォローしてもらったとき</p>
      </div>
    </div>
  );
}

function DescriptionRow11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checkbox-S">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#202020] text-[16px]">
        <p className="leading-none">1日や1週間の終わり</p>
      </div>
    </div>
  );
}

function DescriptionRow12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checkbox-S">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#202020] text-[16px]">
        <p className="leading-none">プロジェクトの節目</p>
      </div>
    </div>
  );
}

function DescriptionRow13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checkbox-S">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#202020] text-[16px]">
        <p className="leading-none">研究討論会などのイベント時</p>
      </div>
    </div>
  );
}

function DescriptionRow14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checkbox-S">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#202020] text-[16px]">
        <p className="leading-none">特に決まったきっかけはなく、日常的に気づいたとき</p>
      </div>
    </div>
  );
}

function Option2() {
  return (
    <div className="relative shrink-0 w-full" data-name="option">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CheckboxField-S">
          <DescriptionRow8 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CheckboxField-S">
          <DescriptionRow9 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CheckboxField-S">
          <DescriptionRow10 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CheckboxField-S">
          <DescriptionRow11 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CheckboxField-S">
          <DescriptionRow12 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CheckboxField-S">
          <DescriptionRow13 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CheckboxField-S">
          <DescriptionRow14 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
      <div aria-hidden="true" className="absolute border border-[rgba(215,231,255,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[8px] py-[16px] relative w-full">
        <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] w-full">
          <ol start="2">
            <li className="ms-[24px] whitespace-pre-wrap">
              <span className="leading-none">サンクスカードを送るきっかけ</span>
            </li>
          </ol>
        </div>
        <div className="flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[390px] relative shrink-0 text-[#555] text-[16px] w-full">
          <p className="leading-[1.2]">あなたがサンクスカードを送ろうと思うのは、どのような場面が多いですか？（複数選択可）</p>
        </div>
        <Option2 />
      </div>
    </div>
  );
}

function DescriptionRow15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="RadioButton-S">
        <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="button-circle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, white)" id="button-circle" r="9.5" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </button>
      <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">
        <p className="leading-none">とても満足している</p>
      </div>
    </div>
  );
}

function DescriptionRow16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="RadioButton-S">
        <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="button-circle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, white)" id="button-circle" r="9.5" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </button>
      <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">
        <p className="leading-none">満足している</p>
      </div>
    </div>
  );
}

function DescriptionRow17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="RadioButton-S">
        <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="button-circle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, white)" id="button-circle" r="9.5" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </button>
      <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">
        <p className="leading-none">どちらでもない</p>
      </div>
    </div>
  );
}

function DescriptionRow18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="RadioButton-S">
        <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="button-circle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, white)" id="button-circle" r="9.5" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </button>
      <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">
        <p className="leading-none">あまり満足していない</p>
      </div>
    </div>
  );
}

function DescriptionRow19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="RadioButton-S">
        <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="button-circle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, white)" id="button-circle" r="9.5" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </button>
      <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">
        <p className="leading-none">まったく満足していない</p>
      </div>
    </div>
  );
}

function Option3() {
  return (
    <div className="relative shrink-0 w-full" data-name="option">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="RadioButtonField-S">
          <DescriptionRow15 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="RadioButtonField-S">
          <DescriptionRow16 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="RadioButtonField-S">
          <DescriptionRow17 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="RadioButtonField-S">
          <DescriptionRow18 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="RadioButtonField-S">
          <DescriptionRow19 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
      <div aria-hidden="true" className="absolute border border-[rgba(215,231,255,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[8px] py-[16px] relative w-full">
        <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] w-full">
          <ol start="3">
            <li className="ms-[24px] whitespace-pre-wrap">
              <span className="leading-none">サンクスカードの満足度</span>
            </li>
          </ol>
        </div>
        <div className="flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[390px] relative shrink-0 text-[#555] text-[16px] w-full">
          <p className="leading-[1.2]">現在のサンクスカードの運用について、総合的な満足度を教えてください。</p>
        </div>
        <Option3 />
      </div>
    </div>
  );
}

function DescriptionRow20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checkbox-S">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#202020] text-[16px]">
        <p className="leading-none">職場の雰囲気がよくなる</p>
      </div>
    </div>
  );
}

function DescriptionRow21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checkbox-S">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#202020] text-[16px]">
        <p className="leading-none">感謝を伝えやすくなる</p>
      </div>
    </div>
  );
}

function DescriptionRow22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checkbox-S">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#202020] text-[16px]">
        <p className="leading-none">日ごろの行動がきちんと評価されていると感じる</p>
      </div>
    </div>
  );
}

function DescriptionRow23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checkbox-S">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#202020] text-[16px]">
        <p className="leading-none">モチベーションが上がる</p>
      </div>
    </div>
  );
}

function DescriptionRow24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checkbox-S">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#202020] text-[16px]">
        <p className="leading-none">他部所・他チームとのコミュニケーションが増える</p>
      </div>
    </div>
  );
}

function DescriptionRow25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checkbox-S">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#202020] text-[16px]">
        <p className="leading-none">上司・部下とのコミュニケーションが増える</p>
      </div>
    </div>
  );
}

function DescriptionRow26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checkbox-S">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#202020] text-[16px]">
        <p className="leading-none">特に価値や効果は感じない</p>
      </div>
    </div>
  );
}

function Option4() {
  return (
    <div className="relative shrink-0 w-full" data-name="option">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CheckboxField-S">
          <DescriptionRow20 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CheckboxField-S">
          <DescriptionRow21 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CheckboxField-S">
          <DescriptionRow22 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CheckboxField-S">
          <DescriptionRow23 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CheckboxField-S">
          <DescriptionRow24 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CheckboxField-S">
          <DescriptionRow25 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CheckboxField-S">
          <DescriptionRow26 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
      <div aria-hidden="true" className="absolute border border-[rgba(215,231,255,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[8px] py-[16px] relative w-full">
        <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">
          <ol start="4">
            <li className="ms-[24px] whitespace-pre-wrap">
              <span className="leading-none">サンクスカードの価値</span>
            </li>
          </ol>
        </div>
        <div className="flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[390px] min-w-full relative shrink-0 text-[#555] text-[16px] w-[min-content]">
          <p className="leading-[1.2]">サンクスカードを通じてどのような点に価値や効果を感じていますか？（複数選択可）</p>
        </div>
        <Option4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
      <div aria-hidden="true" className="absolute border border-[rgba(215,231,255,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[8px] py-[16px] relative w-full">
        <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] w-full">
          <ol start="5">
            <li className="ms-[24px] whitespace-pre-wrap">
              <span className="leading-none">改善してほしい点・あったらよい工夫</span>
            </li>
          </ol>
        </div>
        <div className="flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[390px] relative shrink-0 text-[#555] text-[16px] w-full">
          <p className="leading-[1.2]">サンクスカードの仕組みや運用について、改善してほしい点や「あったらいい」と感じる機能・ルール・工夫があれば具体的に教えてください。</p>
        </div>
        <div className="content-stretch flex flex-col h-[69px] items-start relative shrink-0 w-full" data-name="InputsField">
          <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#202020] text-[14px] w-full">
            <p className="leading-none">自由記述欄</p>
          </div>
          <div className="bg-white max-w-[360px] min-h-[40px] min-w-[120px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
            <div className="flex flex-row items-center max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center max-w-[inherit] min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
                <p className="flex-[1_0_0] font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.7] min-h-px min-w-px relative text-[#999] text-[16px] tracking-[0.32px]">記述例：スマホからも送れるとよい</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#666] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Space1() {
  return <div className="h-[16px] shrink-0 w-full" data-name="space" />;
}

function DescriptionRow27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checkbox-S">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#202020] text-[16px]">
        <p className="leading-none">本アンケートの回答内容が、個人が特定されない形で集計・分析されることに同意します。</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[16px] items-start px-[40px] relative shrink-0" data-name="button">
      <div className="bg-white content-stretch flex gap-[4px] items-center justify-center min-h-[48px] min-w-[136px] px-[16px] py-[12px] relative rounded-[9999px] shrink-0" data-name="GradientButton-S">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(245,247,250,0.8)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <p className="flex-[1_0_0] font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-none min-h-px min-w-px relative text-[#555] text-[16px] text-center">キャンセル</p>
      </div>
      <div className="bg-white content-stretch flex gap-[4px] items-center justify-center min-h-[48px] min-w-[136px] px-[16px] py-[12px] relative rounded-[9999px] shrink-0" data-name="GradientButton-S">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(166,255,203,0.8)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <p className="flex-[1_0_0] font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-none min-h-px min-w-px relative text-[#555] text-[16px] text-center">送信</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[390px] relative rounded-[8px] shrink-0 w-full" data-name="container">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Space1 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CheckboxField-S">
        <DescriptionRow27 />
      </div>
      <Button />
    </div>
  );
}

function WhiteArea() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="white-area">
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold items-start justify-end leading-[0] px-[16px] py-[8px] relative size-full text-[#202020] text-[24px] tracking-[0.48px]">
          <div className="flex flex-col justify-center relative shrink-0 w-full">
            <p className="leading-[1.5]">サンクスカード</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-right w-full">
            <p className="leading-[1.5]">満足度アンケート</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col h-[200px] items-center left-0 overflow-clip pb-[16px] pt-[80px] px-[16px] top-0 w-[390px]" data-name="header">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeader} />
      <WhiteArea />
    </div>
  );
}

function Footer() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[40px] left-1/2 w-[390px]" data-name="footer">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeader} />
      <div className="flex flex-col items-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

export default function Demo() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center pb-[80px] pt-[200px] px-[10px] relative size-full" data-name="demo" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 390 2223\\' preserveAspectRatio=\\'none\\'><g transform=\\'matrix(7.671 111.15 -19.5 351.01 198.58 1111.5)\\'><foreignObject x=\\'-352.07\\' y=\\'-352.07\\' width=\\'704.13\\' height=\\'704.13\\'><div xmlns=\\'http://www.w3.org/1999/xhtml\\' style=\\'background-image: conic-gradient(from 90deg, rgba(245, 247, 250, 0.8) 0%, rgba(245, 247, 250, 0.8) 4%, rgba(233, 234, 235, 0.8) 50%, rgba(233, 234, 235, 0.8) 54%, rgba(245, 247, 250, 0.8) 100%); opacity:1; height: 100%; width: 100%;\\'></div></foreignObject></g></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Space />
      <Container />
      <Header />
      <Footer />
    </div>
  );
}