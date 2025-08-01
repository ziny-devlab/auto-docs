'use client';

import { useState } from 'react';

const DAILY_LIMIT = 10;

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const getToday = () => new Date().toISOString().slice(0, 10);

  const getDocGenCount = () => {
    if (typeof window === "undefined") return { date: "", count: 0 };
    try {
      return JSON.parse(localStorage.getItem('docGenCount') || '{}');
    } catch {
      return { date: "", count: 0 };
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

  const increaseCount = () => {
    const data = getDocGenCount();
    const today = getToday();
    if (data.date === today) {
      localStorage.setItem('docGenCount', JSON.stringify({ date: today, count: data.count + 1 }));
    } else {
      localStorage.setItem('docGenCount', JSON.stringify({ date: today, count: 1 }));
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

  const handleReset = () => {
    setInput('');
    setResult(null);
    setCopied(false);
    // 추가 프롬프트 등 다른 state도 있으면 같이 초기화
  };


  // 복사 함수
  const handleCopy = async () => {
    if (result) {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const handleAnalyze = async () => {
    if (!canRequest()) {
      setResult('오늘의 무료 사용 횟수를 모두 사용하셨습니다. 내일 다시 이용해주세요.');
      return;
    }
    // ... 기존 코드
    setLoading(true);
    setResult('문서화 중입니다...');
    try {
      const res = await fetch('/api/claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: input }),
      });
      const data = await res.json();
      setResult(data.result);
      setIsCompleted(true);
    } catch (error) {
      setResult('문서화 중 오류가 발생했습니다.');
      setIsCompleted(false);
    } finally {
      setLoading(false);
      increaseCount(); // 요청 후 카운트 증가
    }
  };


  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex flex-col items-center py-6 sm:py-14 px-3">
      <h1 className="text-2xl sm:text-4xl font-extrabold mb-3 text-blue-700 drop-shadow text-center">
        🪄 코드 자동 문서화 도구
      </h1>
      <p className="mb-6 sm:mb-10 text-blue-500 text-base sm:text-lg font-medium text-center">
        함수, 클래스, 컴포넌트 등 어떤 코드든 붙여넣으면 자동으로 독스와 예제를 만들어줍니다.
      </p>
      <div className="w-full max-w-2xl flex flex-col gap-5 px-2 sm:px-0">
        <div className="text-right text-xs sm:text-sm text-blue-400 mb-1">
          오늘 남은 무료 문서화 횟수: {getRemainCount()} / {DAILY_LIMIT}
        </div>
        <textarea
          className="w-full h-40 sm:h-56 p-3 sm:p-5 rounded-2xl border-0 shadow focus:ring-2 focus:ring-blue-200 font-mono text-blue-900 bg-white/80 transition text-sm sm:text-base"
          placeholder="여기에 코드 블록을 붙여넣으세요"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        {isCompleted ? (
          <button
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-3 rounded-full shadow-lg transition disabled:opacity-50 text-base sm:text-lg"
            onClick={handleReset}
            disabled={loading}
          >
            초기화하기
          </button>
        ) : (
          <button
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-3 rounded-full shadow-lg transition disabled:opacity-50 text-base sm:text-lg"
            onClick={handleAnalyze}
            disabled={loading || !canRequest()}
          >
            {loading ? '문서화 중...' : '문서화하기'}
          </button>
        )}
      </div>
      <div className="w-full max-w-2xl mt-6 sm:mt-10 bg-white/90 border-0 rounded-3xl p-4 sm:p-8 min-h-[120px] shadow-lg relative px-2 sm:px-0">
        {result && (
          <button
            className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-cyan-100 hover:bg-cyan-200 text-blue-700 font-semibold px-3 sm:px-4 py-1 rounded-full shadow transition text-xs sm:text-base"
            onClick={handleCopy}
            disabled={loading}
          >
            {copied ? '복사 완료!' : '복사하기'}
          </button>
        )}
        {result ? (
          <pre className="whitespace-pre-wrap font-mono text-sm sm:text-base text-blue-900">{result}</pre>
        ) : (
          <span className="text-blue-300">문서화 결과가 여기에 표시됩니다.</span>
        )}
      </div>
    </main>
  );
}