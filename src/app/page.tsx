'use client';

import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // 복사 함수
  const handleCopy = async () => {
    if (result) {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const handleAnalyze = async () => {
    if (!input.trim()) {
      setResult('코드를 입력해주세요.');
      return;
    }
    try {
      setLoading(true);
      setResult('분석 중입니다...');
      const res = await fetch('/api/claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: input }),
      });
      const data = await res.json();
      setResult(data.result);

    } catch (error) {
      console.error('Error:', error);
      setResult('분석 중 오류가 발생했습니다.');

    }
    finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex flex-col items-center py-14">
      <h1 className="text-4xl font-extrabold mb-3 text-blue-700 drop-shadow">
        🪄 컴포넌트 코드 분석기
      </h1>
      <p className="mb-10 text-blue-500 text-lg font-medium">
        JSX/TSX 컴포넌트 코드를 붙여넣으면 props와 사용 예제를 자동으로 추출해줍니다.
      </p>
      <div className="w-full max-w-2xl flex flex-col gap-5">
        <textarea
          className="w-full h-56 p-5 rounded-2xl border-0 shadow focus:ring-2 focus:ring-blue-200 font-mono text-blue-900 bg-white/80 transition"
          placeholder="여기에 JSX/TSX 컴포넌트 코드를 붙여넣으세요"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-3 rounded-full shadow-lg transition disabled:opacity-50"
          onClick={handleAnalyze}
          disabled={loading}
        >
          {loading ? '분석 중...' : '분석하기'}
        </button>
      </div>
      <div className="w-full max-w-2xl mt-10 bg-white/90 border-0 rounded-3xl p-8 min-h-[120px] shadow-lg relative">
        {result && (
          <button
            className="absolute top-6 right-6 bg-cyan-100 hover:bg-cyan-200 text-blue-700 font-semibold px-4 py-1 rounded-full shadow transition"
            onClick={handleCopy}
            disabled={loading}
          >
            {copied ? '복사 완료!' : '복사하기'}
          </button>
        )}
        {result ? (
          <pre className="whitespace-pre-wrap font-mono text-base text-blue-900">{result}</pre>
        ) : (
          <span className="text-blue-300">분석 결과가 여기에 표시됩니다.</span>
        )}
      </div>
    </main>
  );
}