interface RadioButtonProps {
  id: string;
  name: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export function RadioButton({ id, name, label, value, checked, onChange }: RadioButtonProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="RadioButtonField-S">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
        <label htmlFor={id} className="relative flex items-center justify-center size-[24px] cursor-pointer">
          <input
            type="radio"
            id={id}
            name={name}
            value={value}
            checked={checked}
            onChange={() => onChange(value)}
            className="sr-only"
          />
          {/* 外側の円（白い塗りつぶし + #666666の枠線） */}
          <div className="absolute size-[20px] pointer-events-none">
            <svg className="block size-full" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="9.5" fill="white" stroke="#666666" />
            </svg>
          </div>
          {/* 内側の円（黒い塗りつぶし）- 選択時のみ表示 */}
          {checked && (
            <div className="size-[12px] rounded-full bg-black pointer-events-none z-10"></div>
          )}
        </label>
        <label 
          htmlFor={id}
          className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#202020] text-[16px] cursor-pointer"
        >
          <p className="leading-none">{label}</p>
        </label>
      </div>
    </div>
  );
}