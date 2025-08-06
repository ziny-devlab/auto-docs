"use client";

export default function LandingExample() {
  return (
    <section className="w-full max-w-3xl mx-auto my-12 p-6 bg-white/80 rounded-2xl shadow border border-neutral-200 flex flex-col items-center">
      <h2 className="text-xl sm:text-2xl font-semibold text-neutral-700 mb-4">
        예시 화면
      </h2>
      <div className="w-full flex flex-col sm:flex-row gap-6 justify-center items-stretch">
        {/* 예시 코드 입력 */}
        <div className="flex-1 bg-neutral-100 rounded-xl p-4 shadow-sm border border-neutral-200">
          <div className="text-xs text-neutral-400 mb-2">입력 코드</div>
          <pre className="whitespace-pre-wrap font-mono text-xs text-neutral-700">
            {`function hello(name) {
    return "Hello, " + name + "!";
}`}
          </pre>
        </div>
        {/* 예시 결과 */}
        <div className="flex-1 bg-neutral-100 rounded-xl p-4 shadow-sm border border-neutral-200">
          <div className="text-xs text-neutral-400 mb-2">자동 문서화 결과</div>
          <pre className="whitespace-pre-wrap font-mono text-xs text-neutral-700">
            {`### 함수: hello
주어진 이름(name)을 받아 'Hello, {name}!' 형태의 인사 문자열을 반환합니다.
    - 입력: name (문자열)
    - 반환: 인사 메시지 (문자열)

#### 예시
    hello("Cascade") // "Hello, Cascade!"`}
          </pre>
        </div>
      </div>
    </section>
  );
}
