# React & Spring boot

### 개발환경 세팅
    1. node 설치 : https://nodejs.org/ko/ => LST 버젼 설치
        - 설치 후 확인 : node -v 또는 node --version
    2. react 설치
       - 구글 > react download 검색 > 설치 - React 페이지 이동(https://reactjs-kr.firebaseapp.com/docs/installation.html)
       - npm install -g create-react-app
       - create-react-app my-app
       - cd my-app
       - npm start
    3. VSC 에서는 ESLint 설치(플러그인(확장프로그램)), intellij 에서 설치 필요 없음.
    4. Prettier 설치
    5. vsc 에서 Reacjs code snippets 설치, 인텔리제이 에서 react snippets 설치
    6. 플러인 설치 후 vsc 는 재실행
### 실행순서
    0. React 엔진 - 데이터 변경을 감지해서 UI를 그려주는 엔진 이다.
    1. npm start 를 하면 "react-scripts start" 가 실행 되면 index.js 를 실행 시킨다.
    2. index.html 로 표시된다. react 에서 페이지를 이동한다는 것은 body 를 바꾸는 개념이다.
        따라서 SPA 라 부른다. Single Page Application 이다.
    3. JSX 문법을 사용한다.

### 참고사항
    - npm 과 npx 차이
        - npm
            - 라이브러리를 다운 - 빌드 -> 프로젝트3개(로걸에 다 다운)
            - 프로젝트 마다 받을 수 있고, 글로벌하게 받을수 있다.
        - npx
            - 라이브러리를 다운 - 빌드 -> 프로젝트3개(다운 받은 덜 재사용, 없으면 다운) -> 실행 -> 삭제
            - 특정 라이브러리가 있을때 기존 버전이 1.0 이라면, 새로운 버전 1.2 를 설치하면 npm 은 오류가 난다.
                npm 은 삭제 후 다시 받아야 한다.
                npx 의 경우 있으면 1.0을 사용하고 없으면 1.2 받기 때문에 오류가 나지 않는다.