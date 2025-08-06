"use client";

import { useEffect, useState } from "react";
import CodeOutputField from "./CodeOutputField";
import CodeInputField from "./CodeInputField";

const DAILY_LIMIT = 10;

export default function HomeForm() {
  const [loading, setLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [remainCount, setRemainCount] = useState<number | null>(null);

  const getToday = () => new Date().toISOString().slice(0, 10);

  const getDocGenCount = () => {
    if (typeof window === "undefined") return { date: "", count: 0 };
    try {
      return JSON.parse(localStorage.getItem("docGenCount") || "{}") as {
        date: string;
        count: number;
      };
    } catch {
      return { date: "", count: 0 };
    }
  };

  const getRemainCount = () => {
    const data = getDocGenCount();
    const today = getToday();
    if (data.date === today) {
      return DAILY_LIMIT - data.count;
    }
    return DAILY_LIMIT;
  };

  const increaseCount = () => {
    const data = getDocGenCount();
    const today = getToday();
    if (data.date === today) {
      localStorage.setItem(
        "docGenCount",
        JSON.stringify({ date: today, count: data.count + 1 })
      );
    } else {
      localStorage.setItem(
        "docGenCount",
        JSON.stringify({ date: today, count: 1 })
      );
    }
  };

  const canRequest = () => {
    const data = getDocGenCount();
    const today = getToday();
    if (data.date === today) {
      return data.count < DAILY_LIMIT;
    }
    return true;
  };

  // 복사 함수
  const handleCopy = async () => {
    if (result) {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const handleReset = () => {
    setInput("");
    setResult(null);
    setCopied(false);
    setIsCompleted(false);
  };

  const handleAnalyze = async () => {
    if (!canRequest()) {
      setResult(
        "오늘의 무료 사용 횟수를 모두 사용하셨습니다. 내일 다시 이용해주세요."
      );
      return;
    }
    setLoading(true);
    setResult("문서화 중입니다...");
    try {
      const res = await fetch("/api/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: input }),
      });
      const data = await res.json();
      setResult(data.result);
      setIsCompleted(true);
    } catch (error) {
      setResult("문서화 중 오류가 발생했습니다.");
      setIsCompleted(false);
    } finally {
      setLoading(false);
      increaseCount();
    }
  };

  useEffect(() => {
    setRemainCount(getRemainCount());
  }, [input, result, isCompleted]);

  return (
    <div className="w-full max-w-4xl flex flex-col sm:flex-row gap-8 px-2 sm:px-0 mt-10 items-stretch">
      {/* 입력 영역 */}
      <CodeInputField
        remainCount={remainCount}
        DAILY_LIMIT={DAILY_LIMIT}
        input={input}
        setInput={setInput}
        isCompleted={isCompleted}
        handleReset={handleReset}
        handleAnalyze={handleAnalyze}
        loading={loading}
        canRequest={canRequest}
      />
      {/* 결과 영역 */}
      <CodeOutputField
        result={result}
        loading={loading}
        handleCopy={handleCopy}
      />
    </div>
  );
}
