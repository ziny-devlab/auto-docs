# 📝 Auto-Docs

코드를 붙여넣으면
✨ AI가 자동으로 기술 문서를 생성해주는 웹 서비스입니다.

👉 **배포 사이트:** [auto-docs2.vercel.app](https://auto-docs2.vercel.app/)

<br/>

## 📌 주요 기능

- 코드 → AI 기반 기술 문서로 자동 변환
- 함수 이름, 설명, 파라미터, 반환값, 사용 예제 등 자동 정리
- Markdown & Notion 스타일 출력 지원
- 단 몇 초 만에 문서화 완료

<img width="1073" height="756" alt="image" src="https://github.com/user-attachments/assets/a48a56c7-a853-445c-90f6-9d9cfd23b556" />


<br/>

## 🛠️ 사용 기술 스택

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **OpenAI API**
- **Babel Parser** – 함수 파싱 및 AST 추출
- **Code highlighter** – 코드 시각화 처리

<br/>

## 🚀 사용 방법

1. 사이트에 접속합니다: [auto-docs2.vercel.app](https://auto-docs2.vercel.app/)
2. JS 함수 또는 유틸 코드를 붙여넣습니다.
3. 잠시 후, AI가 자동으로 정리된 기술 문서를 생성해줍니다.
4. 원하는 형식(Markdown or Notion 등)으로 복사해서 사용하세요!
   
<br/>

## 🧑‍💻 로컬 개발 방법

```bash
git clone https://github.com/ziny-devlab/auto-docs.git
cd auto-docs
npm install
npm run dev
```

<br/>

## 📝 환경 변수 예시 (.env.local)

```bash
NEXT_PUBLIC_ANTHROPIC_API_KEY = user_api_key
```

<br/>

### 📄 향후 개선 계획
- 다양한 요약 스타일 옵션 추가
- 사용자 히스토리 관리 기능


## 📬 문의

문의나 제안이 있다면 이슈로 남겨주세요!
