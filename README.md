# **프로젝트 소개 - react로 반응형 portfolio 사이트 만들기**

## 배포 주소
### 📒 https://kowoonlee.github.io/portfolio_react/
<br>
<br>

## 프로젝트 설명

React 를 사용해 포트폴리오 사이트를 제작했습니다.
프로젝트 카드를 클릭하면 프로젝트 상세 내역 페이지로 이동합니다.
<br>
<br>

## **언어**

> JavaScript
> React.js

## **라이브러리**

> styled-components

> react-dom

> react-router-dom

> react-icons

> react-slick

> react-player

> react-typing-effect


<br>
<br>

## 프로젝트 설치 및 실행 방법

1. Node.js를 설치해주세요.
```
https://nodejs.org/
```

2. 레포지토리를 클론 후 폴더로 이동 해주세요.
```
https://github.com/KOWOONLEE/portfolio_react.git
```

3. dependencies를 설치해주세요.
```
npm install
```

4. 명령어를 통해 server를 실행해주세요.
```
npm run start
```

<br>
<br>

## 기능 및 메뉴 소개

### ✅ navbar
각 항목에 위치할 때 navbar에 현재 카테고리 표시됨.
클릭 시에 해당 카테고리로 이동
![1_navbar](https://user-images.githubusercontent.com/108816777/211246005-d334f178-8ed5-4ab9-885c-b2de077568d1.gif)

<br>
<br>

### ✅ 메인화면
포트폴리오의 메인화면은 저를 소개하는 About, 사용해본 Skills, 이력 및 교육에 관련된 Resume, 프로젝트 경험과 관련된 Portfolio 페이지로 나뉘어 있습니다. 
react-typing-effect library를 이용하여 상단 메인페이지를 꾸며보았습니다.
![2 main](https://user-images.githubusercontent.com/108816777/211246810-c23866a9-61d1-49d8-a083-6c30a4e5f79f.gif)


<br>
<br>

### ✅ 상세 포트폴리오 페이지
Portfolio카테고리에서 프로젝트 카드 클릭 시 해당 프로젝트 상세 페이지로 이동합니다.
상세 포폴 사이트는 슬라이드로 이미지 삽입 후 각 메뉴에 대한 설명이 기재되어있으며, 오른쪽에 프로젝트 기간, 인원, 역할, github-repo, 회고록 등 자세한 내용이 기재되어있습니다.
발표 동영상이 있는 경우에는 react-player이용하여 동영상을 삽입했습니다.
해당 페이지 navbar에서 first, second 등은 프로젝트 번호이며, 해당 메뉴에 hover시 프로젝트 이름이 나오도록 했습니다.
![3_detail projec](https://user-images.githubusercontent.com/108816777/211248824-a989713e-dc1d-4639-a9cc-1a9b1a606bc5.gif)

<br>
<br>



## 반응형 추가
태블릿 가로 사이즈 768px 기준으로 해당 사이즈 이하로 줄어들 경우에 페이지 레이아웃이나 글씨 크기가 변경되도록 반응형으로 구현하였습니다.
반응형 사이즈일 때 navbar를 아이콘 toggle로 변경하여 재배치하도록 했습니다. 
![4 main nav 반응형](https://user-images.githubusercontent.com/108816777/211249840-e1bac938-942f-485a-9216-5bb5130c9b2a.gif)
![5 detail nav 반응형](https://user-images.githubusercontent.com/108816777/211249888-80e89f44-d17e-4f01-8974-6f8b8ec9402a.gif)
<br>
<br>


## 작성자 깃허브 및 블로그 계정

- 깃허브 https://github.com/KOWOONLEE
- 블로그 https://velog.io/@kkk5689
