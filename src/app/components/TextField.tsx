interface TextFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export function TextField({ id, label, placeholder, value, onChange }: TextFieldProps) {
  return (
    <div className="content-stretch flex flex-col h-[69px] items-start relative shrink-0 w-full" data-name="InputsField">
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#202020] text-[14px] w-full">
        <p className="leading-none">{label}</p>
      </div>
      <div className="bg-white max-w-[360px] min-h-[40px] min-w-[120px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
        <div className="flex flex-row items-center max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center max-w-[inherit] min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative w-full">
            <input
              id={id}
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className="flex-[1_0_0] font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.7] min-h-px min-w-px relative text-[#202020] text-[16px] tracking-[0.32px] bg-transparent border-none outline-none placeholder:text-[#999]"
            />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#666] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}
