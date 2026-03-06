import svgPaths from "../../imports/svg-x7m8piyn3m";

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Checkbox({ id, label, checked, onChange }: CheckboxProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CheckboxField-S">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="description-row">
        <label htmlFor={id} className="overflow-clip relative shrink-0 size-[24px] cursor-pointer" data-name="Checkbox-S">
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="sr-only"
          />
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <div className="absolute inset-[-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path 
                  d={svgPaths.p371e6400} 
                  id="Vector" 
                  fill={checked ? "var(--fill-0, #666666)" : "none"}
                  stroke="var(--stroke-0, #666666)" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                />
              </svg>
            </div>
          </div>
          {checked && (
            <div className="-translate-y-1/2 absolute aspect-[10/7] left-1/4 right-1/4 top-[calc(50%+0.5px)]" data-name="Vector">
              <div className="absolute inset-[-17.86%_-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11.4">
                  <path 
                    d={svgPaths.p124f3100} 
                    id="Vector" 
                    stroke="var(--stroke-0, white)" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="3" 
                  />
                </svg>
              </div>
            </div>
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