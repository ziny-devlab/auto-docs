"use client";

import { useEffect, useState } from "react";
import CopyButton from "./CopyButton";
import SafariHeader from "./SafariHeader";

interface CodeOutputFieldProps {
  result: string | null;
  loading: boolean;
  handleCopy: () => void;
}

function CodeOutputField({
  result,
  loading,
  handleCopy,
}: CodeOutputFieldProps) {
  return (
    <div className="flex-1 flex flex-col gap-3">
      <div className="relative bg-white/80 rounded-2xl shadow-lg border border-gray-200 min-h-96 flex flex-col">
        <SafariHeader title="문서화 결과">
          {result && <CopyButton handleCopy={handleCopy} loading={loading} />}
        </SafariHeader>

        {result ? (
          <pre className="whitespace-pre-wrap h-96 font-mono text-sm sm:text-base text-neutral-800 p-3 sm:p-5 rounded-b-2xl bg-transparent overflow-y-auto">
            {result}
          </pre>
        ) : (
          <span className="block h-96 text-neutral-400 p-3 sm:p-5 rounded-b-2xl bg-transparent overflow-y-auto">
            {loading ? "문서화 중..." : "문서화 결과가 여기에 표시됩니다."}
          </span>
        )}
      </div>
    </div>
  );
}

export default CodeOutputField;
