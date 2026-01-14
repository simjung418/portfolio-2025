# 포트폴리오 제작 기록

### 251130
- Todos page
  [] 라우팅, tsx 러프하게 작성
  [] input component 분리

### 251201
- Todos page
  [] Custom Hook 설계완료
  [] Server Action (cookies) 이용하여 데이터 저장 기능 구현
  [] UIUX 디테일 작업

### 251202
- Title component
  [] 이미지 구상했던 타이틀 폰트 탐색 (google font)
  [] 메타데이터를 이용하여 컴포넌트화 된 타이틀 작업
  [] 메타데이터 타입문제로 중단 - 내일 재개

### 251203
- Title Component
  [] 메타데이터 타입문제 해결
  [] 컴포넌트화 완료
- 포트폴리오 구조 작업

### 251204
- Todos Vercel 배포
- 포트폴리오 구조 작업 완료
  [] GNB 컴포넌트 생성 
  [] About 페이지 생성

### 251206
- 포트폴리오 컨텐츠 구상
  [] Hero 컨텐츠 구상
  [] About 컨텐츠 구상

### 251207
- 포트폴리오 컨텐츠 윤문
  [] Project 컨텐츠 구상
  [] Skills 컨텐츠 구상
- Title Component
  [] Root layout에 배치
  [] context를 이용한 상태처리 기능 추가
  [] css, Marqee 등 디자인 적 요소 추가

### 251208
- 포트폴리오 컨텐츠 구상 및 윤문
  [] Career 페이지 구상

### 251214
1. page는 조합만 하고, 로직은 분리한다
	•	page.tsx는 데이터 조합과 UI 배치만 담당
	•	상태 관리, 스크롤 동기화, 옵저버 로직은 모두 custom hook으로 분리
	•	화면이 커져도 page의 복잡도가 증가하지 않도록 설계

👉 *“페이지는 읽히는 코드여야 한다”*는 기준

⸻

2. 도메인 전용 로직은 app 하위에 둔다
	•	useCareer, career.content.tsx는 /app/career 하위에 위치
	•	해당 로직과 데이터는 career 페이지에 강하게 종속
	•	다른 페이지에서 재사용될 가능성이 낮은 경우 components로 올리지 않음

👉 재사용 가능성보다 맥락 명확성을 우선

⸻

3. components는 UI 단위로 유지한다
	•	CareerList, CareerCardDetail은 UI 중심 컴포넌트로 분리
	•	현재는 career 페이지에서만 사용되지만,
	•	향후 about / profile 등에서 재사용 가능성을 고려해 components에 유지
	•	도메인 로직이 과도해질 경우 app 하위로 이동 가능하도록 여지 확보

👉 지금의 필요 + 미래 확장 사이의 균형

⸻

4. 데이터와 UI를 느슨하게 연결한다
	•	career 데이터는 별도 content 파일에서 관리
	•	ReactNode 사용은 불가피한 부분만 최소화
	•	추후 MDX 또는 CMS로 이전 가능한 구조를 염두에 둠

👉 데이터는 데이터답게, UI는 UI답게

⸻

5. 동일한 패턴을 skills / projects로 확장 가능하게 설계
	•	career에서 검증한 구조를 skills / projects에 그대로 적용 가능
	•	각 섹션은 독립적으로 성장할 수 있도록 분리
	•	“한 번 만든 구조를 반복 사용”하는 설계 의도