"use client";

import { useEffect, useState } from "react";
import SafariHeader from "./SafariHeader";

interface CodeInputFieldProps {
  remainCount: number | null;
  DAILY_LIMIT: number;
  input: string;
  setInput: (input: string) => void;
  isCompleted: boolean;
  handleReset: () => void;
  handleAnalyze: () => void;
  loading: boolean;
  canRequest: () => boolean;
}

function CodeInputField({
  remainCount,
  DAILY_LIMIT,
  input,
  setInput,
  isCompleted,
  handleReset,
  handleAnalyze,
  loading,
  canRequest,
}: CodeInputFieldProps) {
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    if (!loading) {
      setDotCount(1);
      return;
    }
    const interval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 500);
    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div className="flex-1 flex flex-col gap-3">
      <div className="text-right text-xs sm:text-sm text-neutral-400 mb-1">
        오늘 남은 무료 문서화 횟수: {remainCount === null ? "-" : remainCount} /{" "}
        {DAILY_LIMIT}
      </div>

      <div className="relative bg-white/80 rounded-2xl shadow-lg border border-gray-200 min-h-96 flex flex-col">
        <SafariHeader title="코드 입력" />
        <textarea
          className="w-full flex-1 min-h-0 h-full p-3 sm:p-5 rounded-b-2xl border-0 shadow-none font-mono text-neutral-900 bg-white transition text-sm sm:text-base resize-none focus:outline-none placeholder-neutral-400"
          placeholder="여기에 코드 블록을 붙여넣으세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      {isCompleted ? (
        <button
          className="px-5 py-2 rounded-xl border border-neutral-300 bg-white text-neutral-700 font-medium shadow-sm hover:bg-neutral-100 transition disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg"
          onClick={handleReset}
          disabled={loading}
        >
          초기화하기
        </button>
      ) : (
        <button
          className="px-5 py-2 rounded-xl border border-neutral-300 bg-white text-neutral-700 font-medium shadow-sm hover:bg-neutral-100 transition disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg"
          onClick={handleAnalyze}
          disabled={loading || !canRequest()}
        >
          {loading ? `문서화 중${".".repeat(dotCount)}` : "문서화하기"}
        </button>
      )}
    </div>
  );
}

export default CodeInputField;
