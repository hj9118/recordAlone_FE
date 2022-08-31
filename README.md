# 자취를 남기다

> 서울 지역 대학가 중심 대학생 전용 자취방 리뷰 및 자취생 커뮤니티 서비스

자취를 구하다는 서울 지역 대학가를 중심으로 자취생인 학생들을 위한 서비스입니다.
학생 인증을 통한 가입 절차로 학생들이 작성하는 리뷰 라는 중요 포인트를 중심으로 학생들의 첫 홀로 서기를 응원하는 마음으로 개발하였습니다.
<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/ReactRouter-ca4245?style=flat-square&logo=ReactRouter&logoColor=white">
<img src="https://img.shields.io/badge/CRA-ff4154?style=flat-square&logo=CreateReactApp&logoColor=white">
<br>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=MUI&logoColor=white">
<img src="https://img.shields.io/badge/KakaoMap-ffcd00?style=flat-square&logo=Kakao&logoColor=white">
<br>
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=white">
<img src="https://img.shields.io/badge/Illustrator-FF9A00?style=flat-square&logo=AdobeIllustrator&logoColor=white">
</div>

### 실행방법
Node.js 설치 후 터미널에서 npm 패키지 설치 후 실행
```
npm install
npm start
```

#### [> 진행파트 한정 Demo](https://record-alone.netlify.app)


---
<img src='https://raw.githubusercontent.com/hj9118/recordAlone_FE/d38e472adf318edf599518a04ddb9aadff15fbef/src/assets/raLogo.svg' width='50px'>

### 진행기간
2022. 07\. 01 ~ 2022. 08. 26 <br/>
프로젝트 아이템 변경으로 실제 프로젝트 시작일은
2022년 7월 15일

### 담당 파트
- 퍼블리싱 (UI, Layout)
- 지도 디자인 구성
- 통합게시판
- 에디터 컴포넌트 구성

### 페이지 미리보기
<details>
<summary></summary> 


![map](https://raw.githubusercontent.com/hj9118/recordAlone_FE/main/docs/map.JPG)
#### 지도 화면
현 위치에서 바로 보일 수 있도록 변경. 서울 지역 대학 밀집 지역인 성북구-동대문구의 5개 학교를 중심 좌표로 설정 근방 1km 이내의 경찰서 위치를 표시

---
![main](https://github.com/hj9118/recordAlone_FE/blob/main/docs/Board_main.png?raw=true)
#### 커뮤니티(통합게시판) 메인
전체 게시글이 보이며 카테고리별로 누르면 분류가 되도록 구현. 백엔드 요소가 없어 axios를 이용 [jsonplaceholder](https://jsonplaceholder.typicode.com/)로 더미 텍스트를 배치

---
![detail](https://github.com/hj9118/recordAlone_FE/blob/main/docs/detail.JPG?raw=true)
#### 커뮤니티 글 상세
id 값을 기준으로 파라미터값을 받아 들어온 상세페이지 구성.
댓글 작성이 가능하며 목록으로 이동, 좋아요 버튼 구현

---
![editor](https://github.com/hj9118/recordAlone_FE/blob/main/docs/write.JPG?raw=true)
#### 글쓰기 에디터
`React-Quill` 패키지를 사용 폰트 설정 및 이미지, 링크 첨부가 가능하도록 구성

---
![notice](https://github.com/hj9118/recordAlone_FE/blob/main/docs/notice.JPG?raw=true)
#### 공지 페이지
FAQ와 일반 공지는 상단에 표시되며 1:1 문의는 하단에 게시판 형태로 표시되도록 구성

---
![map](https://github.com/hj9118/recordAlone_FE/blob/main/docs/mypage.JPG?raw=true)
#### 마이페이지
본인의 등급, 코인개수, 편집 여부 등이 표시되어있음
</details>




---
### [pdf 확인](https://github.com/hj9118/recordAlone_FE/blob/main/docs/%EC%9E%90%EC%B7%A8%EB%A5%BC%20%EB%82%A8%EA%B8%B0%EB%8B%A4.pdf)
![시연회 발표 사진](https://github.com/hj9118/recordAlone_FE/blob/main/docs/presentation.jpg?raw=true)
