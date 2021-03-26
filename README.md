<p align="center">
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FE1iyv%2FbtqVqGTz7m0%2FIbqN3uXlk9TjaiUxGoS0Gk%2Fimg.png" alt="Logo" width="150" height="150">
</p>
<h2 align="center"><a href="https://in-cyworld.vercel.app/">인-싸이월드</a></h2>
<br>

## 📑 프로젝트 소개

🌐 90년대생의 밈 테스트 기능을 제공하는 웹 서비스입니다.

PROJECT PERIOD: 2020.11.21 ~ 2020.11.22, 2021.01.25 ~ 2021.02.09

## ✨ 주요 기능

### 🧔 메인 

![main-img](https://drive.google.com/uc?export=view&id=188immHs5Fxz-msmyC4OtxxI6XbzJstyb)

💡 메인 

- [1] 자신의 출생연도를 입력하고 테스트를 시작한다.

### 🧔 테스트

![test-img](https://drive.google.com/uc?export=view&id=1TL_bBSZIz5dlTQg-yibkxv5WT6KZynxg)

💡 테스트

- [1] 90년대 유행했던 짤을 보고 정답을 맞히며 테스트를 진행한다.

### 🧔 결과

![result-img](https://drive.google.com/uc?export=view&id=1jB3OGGquRms-40USpIM7EWCeV5KHqqdx)

💡 결과

- [1] 테스트 결과에 따라 레벨을 4단계로 나누어 자신의 레벨(점수 및 연령대별 상위 퍼센트)을 보여준다.

- [2] 레벨에 따른 영상을 추천해준다!

- [3] 테스트를 처음부터 다시 진행하거나 최종 결과를 공유할 수 있다.

## 🗂 프로젝트 구조

```
public
 ┣ images
 ┃ ┣ Question_1.png
 ┃ ┣ ...
 ┃ ┗ result-background.png
 ┣ favicon.ico
 ┣ index.html
 ┗ meta-image.png
src
 ┣ assets
 ┃ ┣ icons
 ┃ ┃ ┣ btn-retry.svg
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ result-sketchbook.svg
 ┃ ┗ images
 ┃ ┃ ┣ landing.png
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ result-sketchbook.png
 ┣ components
 ┃ ┣ style
 ┃ ┃ ┗ Landing.scss
 ┃ ┗ Background.js
 ┣ lib
 ┃ ┣ api
 ┃ ┃ ┗ Answer.js
 ┃ ┗ data
 ┃ ┃ ┗ Question.js
 ┣ pages
 ┃ ┣ LandingPage.js
 ┃ ┣ QuestionPage.js
 ┃ ┗ ResultPage.js
 ┣ App.css
 ┣ App.js
 ┣ index.css
 ┣ index.js
 ┗ reportWebVitals.js
```

## 🛠 사용 기술

| Front-End | Back-End | DataBase | Front-Server | Back-Server | Tool |
| --- | --- | --- | --- | --- | --- |
| JavaScript<br>React<br>Axios | JavaScript<br>Node.js | MySQL | Vercel | AWS EC2 | Git<br>Figma<br>Notion |

```
"@testing-library/jest-dom": "^5.11.4",
"@testing-library/react": "^11.1.0",
"@testing-library/user-event": "^12.1.10",
"axios": "^0.21.0",
"node-sass": "4",
"react": "^17.0.1",
"react-dom": "^17.0.1",
"react-router-dom": "^5.2.0",
"react-scripts": "4.0.0",
"web-vitals": "^0.2.4",
"styled-components": "^5.2.1"
```

## 🖥 Local 실행 방법

#### [1] Yarn 설치

[Yarn 설치 바로가기](https://classic.yarnpkg.com/en/docs/install#windows-stable)

#### [2] Clone the Repo

```sh
git clone https://github.com/mnxmnz/IN-CYWORLD.git
```

#### [3] Install Packages

```sh
yarn
```

#### [4] Run the Project

```sh
yarn start
```

## 💻 개발자

| <img src="https://avatars1.githubusercontent.com/u/48766355?s=460&u=0419d273d1a31539ee4f1151cdacb6fefd45dacc&v=4" width="70" height="70"><br>[김민지](https://github.com/mnxmnz) | <img src="https://avatars.githubusercontent.com/u/54431522?s=460&u=2202642a1809a52fa34f00e580e6d6ab5796a92b&v=4" width="70" height="70"><br>[김정욱](https://github.com/neity16) | <img src="https://avatars.githubusercontent.com/u/72637095?s=460&u=b6afb83e8ef6b983585d545e3456a6b80b238357&v=4" width="70" height="70"><br>[안채린](https://github.com/chaerin00) |
| --- | --- | --- |

### :link: URL

- [인-싸이월드 바로가기](https://in-cyworld.vercel.app/)
