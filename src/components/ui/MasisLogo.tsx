export function MasisLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* M icon mark */}
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-500/20">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M2 14V4L7 10L9 7L11 10L16 4V14"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="text-white font-bold text-lg tracking-wide">MASIS</span>
        <span className="text-blue-400 text-[9px] tracking-widest uppercase font-medium">
          Marketing Beyond Limits
        </span>
      </div>
    </div>
  );
}
