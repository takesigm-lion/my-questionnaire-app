export default function RadioButtonS() {
  return (
    <button className="block cursor-pointer relative size-full" data-name="RadioButton-S">
      <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="button-circle">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, white)" id="button-circle" r="9.5" stroke="var(--stroke-0, #666666)" />
        </svg>
      </div>
      <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="radio-circle">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, black)" id="radio-circle" r="8" />
        </svg>
      </div>
    </button>
  );
}