// src/app/api/claude/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { code } = await req.json();

  // Claude 3 Haiku API 호출
  const anthropicApiKey = process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY;
  if (!anthropicApiKey) {
    return NextResponse.json({ error: 'API key not set' }, { status: 500 });
  }

  const prompt = `
아래는 React(JSX/TSX) 컴포넌트 코드입니다. 
- 컴포넌트 이름을 제목으로 정리해줘
- 컴포넌트 설명을 간단하게 정리해줘
- props 목록, 타입, 기본값, 설명을 표로 정리해줘
- 사용 예제를 간단하게 정리해줘
- 주요 기능을 간단하게 정리해줘
- Markdown 스타일로 출력해줘
- 한국어로 답변해줘

\`\`\`
${code}
\`\`\`
`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': anthropicApiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-3-haiku-20240307',
      max_tokens: 2048,
      temperature: 0.2,
      messages: [
        { role: 'user', content: prompt }
      ],
    }),
  });

  const data = await response.json();
  return NextResponse.json({ result: data.content?.[0]?.text ?? '분석 실패' });
}