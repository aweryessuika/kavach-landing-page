// The lime double-chevron logo tile, shared by the header, footer and CTA.
export function KavachMark({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const box = size === 'sm' ? 'w-6 h-6 rounded-[7px]' : 'w-7 h-7 rounded-[9px]';
  return (
    <span className={`${box} bg-[#C8FF2E] text-[#050705] flex items-center justify-center shrink-0`}>
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="w-4 h-4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5.5 5.5L10 10L5.5 14.5" />
        <path d="M10.5 5.5L15 10L10.5 14.5" />
      </svg>
    </span>
  );
}
