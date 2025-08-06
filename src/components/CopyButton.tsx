"use client";

interface CopyButtonProps {
  handleCopy: () => void;
  loading: boolean;
}

function CopyButton({ handleCopy, loading }: CopyButtonProps) {
  return (
    <button
      className="ml-2 p-1 rounded transition"
      onClick={handleCopy}
      disabled={loading}
      aria-label="복사하기"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-neutral-400 hover:text-neutral-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 4V2.75A.75.75 0 0 0 15.25 2h-6.5A.75.75 0 0 0 8 2.75V4m8 0h1.25A2.75 2.75 0 0 1 20 6.75v12.5A2.75 2.75 0 0 1 17.25 22H6.75A2.75 2.75 0 0 1 4 19.25V6.75A2.75 2.75 0 0 1 6.75 4H8m8 0v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V4"
        />
      </svg>
    </button>
  );
}

export default CopyButton;
