# 📝 Auto-Docs

자동으로 기술 문서를 요약해주는 웹 서비스입니다.  
URL만 입력하면, 해당 페이지의 주요 내용을 추출하고 간결하게 정리된 문서로 보여줍니다.

👉 **배포 사이트:** [auto-docs2.vercel.app](https://auto-docs2.vercel.app/)

<br/>

## 📌 주요 기능

- 웹 페이지의 내용을 요약된 기술 문서 형태로 자동 변환
- URL만 입력하면 즉시 분석 시작
- 간단한 UI로 누구나 쉽게 사용 가능

<img width="741" height="874" alt="image" src="https://github.com/user-attachments/assets/e60871df-4060-4da2-9dfa-bd5c87a09c34" />

<br/>

## 🛠️ 사용 기술 스택

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **OpenAI API**
- **jsdom** – HTML 파싱 및 DOM 추출용

<br/>

## 🚀 사용 방법

1. 사이트에 접속합니다: [auto-docs2.vercel.app](https://auto-docs2.vercel.app/)
2. 요약하고 싶은 웹 페이지의 URL을 입력합니다.
3. 잠시 기다리면 AI가 문서를 분석하고 요약 결과를 보여줍니다.

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
