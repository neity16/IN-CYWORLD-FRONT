# 🌐 인-싸이월드

* <b>SOPT 27th SOPKERTONE ✨2등✨</b>

* 프로젝트 기간: 2020.11.21 ~ 2020.11.22

![GIF](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd2dhuj%2FbtqN5gmAFqJ%2FyL1IpLviiK5jyBRZN2Z8Q0%2Fimg.gif)

## :bookmark_tabs: 프로젝트 설명

* Z세대 

* 코로나보다 무서운 👽Z세대 밈👽에 중독된 2020년...<br>
90년대생들은 순살 당했다는 게 무슨 소리인지도 모른 채<br>
무시무시한 Z세대 드립에 조롱당하고 있다...

* Z세대들, 그대들은 90년대생에 대해 얼마나 알고 있는가?!<br>
지금 당장 인-싸이월드 테스트로 그대의 세대 감수성을 시험하라!

## :exclamation: 서비스 핵심 기능 소개

* [1] 자신의 출생연도를 입력하고 테스트를 시작한다.

* [2] 90년대 유행했던 짤을 보고 정답을 맞히며 테스트를 진행한다.

* [3] 테스트 결과에 따라 레벨을 4단계로 나누어 자신의 레벨(점수 및 연령대별 상위 퍼센트)을 보여준다.

* [4] 레벨에 따른 영상을 추천해준다!

* [5] 테스트를 처음부터 다시 진행하거나 최종 결과를 공유할 수 있다.

## :closed_book: 사용 기술/라이브러리

```
"dependencies": {
  "@testing-library/jest-dom": "^5.11.4",
  "@testing-library/react": "^11.1.0",
  "@testing-library/user-event": "^12.1.10",
  "node-sass": "4",
  "react": "^17.0.1",
  "react-dom": "^17.0.1",
  "react-router-dom": "^5.2.0",
  "react-scripts": "4.0.0",
  "styled-components": "^5.2.1",
  "web-vitals": "^0.2.4"
}
```

## :muscle: 구현 정도

* Landing Page: 사용자에게 출생연도를 입력받고 테스트 시작하면 Question Page로 넘어간다.

* Question Page: 10개의 질문페이지에서 사용자에게 답을 입력받는다.<br>
사용자에게 입력받은 답을 저장한 후 총 10문제를 다 풀면 서버로 전송한다.

* Result Page: 서버에서 결과를 넘겨받아서 사용자 정보와 결과를 출력한다.<br>
출력 결과공유 버튼을 누르면 클립보드에 url이 복사되도록 하고, 다시 도전 버튼을 누르면 Landing Page로 돌아간다.

## :earth_americas: Team Role 

#### :surfing_woman: 김민지
 
* Result Page 구현

#### :surfing_man: 김정욱

* Question Page 구현

#### :surfing_woman: 안채린

* Landing Page 구현

## :computer: 개발자
<table><tbody><tr><td align="center" valign="top" width="25%">
<a href="https://github.com/mnxmnz">
<img src="https://avatars1.githubusercontent.com/u/48766355?s=460&u=0419d273d1a31539ee4f1151cdacb6fefd45dacc&v=4" width="70" height="70"><br />
김민지
</a>
</td><td align="center" valign="top" width="25%">
<a href="https://github.com/neity16">
<img src="https://avatars1.githubusercontent.com/u/54431522?s=460&u=2202642a1809a52fa34f00e580e6d6ab5796a92b&v=4" width="70" height="70"><br />
김정욱
</a>
</td><td align="center" valign="top" width="25%">
<a href="https://github.com/achrvv">
<img src="https://avatars2.githubusercontent.com/u/72637095?s=460&u=b6afb83e8ef6b983585d545e3456a6b80b238357&v=4" width="70" height="70"><br />
안채린
</a>
</td></tr></tbody></table>
