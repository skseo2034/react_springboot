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

### styled componets
    - https://styled-components.com/
    - 별도 css 를 만들어서 사용하라. (예. App.css)
    - const a = 'color: red'; 이와 같이 만들어 사용하는 것 비추함.
    - 또 styled compnents 사용을 권장함.
    - 설치 : npm install --save styled-components
    - styled-components 플러그인 설치

### React router dom
    - react 는 spa 이다. single page application 이다. 따라서 a tag 사용을 하지 못한다.
        - react 의 단점은 최초 로딩시 느리다. webpack 로 받아야 할 데이터 가 많다.
            a tag 사용시 전체 리로드 된다. 최초 로딩을 계속 반복한다. => 그래서 사용하면 안된다.
    - react router 을 사용해야 한다.
    - 구글 > react router dom 검색 > npm 으로 설치 : npm i react-router-dom
    - 설치 후 <BrowserRouter> 로 모든 컴포넌트를 감싼다. 즉 index.js 에서만 감싸면 된다.
        - 코드
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
                <React.StrictMode>
                    <BrowserRouter>
                        <App_14 />
                    </BrowserRouter>
                </React.StrictMode>
            );
    - App_14.jsx 수정 
        - 모든 페이지에 <Hearder /> 와 <Footer /> 가 있다고 가정 할때 수정
            아니면 여기에 수정하면 안됨.
        - 코드
            function App_14() {
                return (
                    <>
                        <Header />
                        <Route path="/" element={HomePage} /> 
                        <Route path="/login" element={LoginPage} />
                        <Footer />
                    </>
                );
            }
        - 실제 라우터 은 화면에서 객체만 바꾸치기 하는 것이다.
            / 일때 homePage.jsx 로 가고, /login 일때 loginPage.jsx 로 간다 => 화면 바꿔치기.
        - 라우트를 통한 파라메터 전달. (참고 : https://goddaehee.tistory.com/305)
            - 코드
                <Route path="/login/:id" element={<LoginPage />} />
                <Link to="/login/10">메뉴 2: login 페이지로 가기</Link>
                const { id } = useParams();
	            console.log('LoginPages.jsx useParams', id);
        - react-router-dom v6 업데이트 후 달라진 점 (ft. Prompt 창 띄우는 법)
            - 참고 url : https://kyung-a.tistory.com/36

### 리액트 부트스트랩 이용
    - 구글 검색 > 리액트 bootstrap
        - 참고 url : https://react-bootstrap.github.io/getting-started/introduction
    - 코드
        import 'bootstrap/dist/css/bootstrap.min.css'; // index.js 또는 app.js 
        import { Button } from 'react-bootstrap';
        <Button variant="primary">Primary</Button>

### 플럭스(flux) & 리덕스(redux)
    - 참조 url  
        - https://facebook.github.io/flux/docs/in-depth-overview/
    - flux의 개념은 -> 흐름, 다른 요청에 의해 반응 할 수 있다.
    - 이 개념으로 만들어진데 Redux 이다.
        - 요청 -> dispatcher -> store -> 요청을 구독하고 있는 모든 곳에 준다.
    - 리덕스
        - 설치 : 구글 react redux 검색 : https://react-redux.js.org/introduction/getting-started
            - 
        

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

    - 불변함수 -> 깊은 복사 함수
        - 무엇인가 변경을 하려고 할때, return 함수가 호출되면 재 랜더링 되기때문에. 모두 다시 그린다.
            모두 다시 그리는게 하는 원하는 부분만 변경을 하고자 한다면, 분리하면 된다. 이것을 컴포넌트 화 한다고 한다.
        - 리액트 엔진은 부모가 다시 그려지면, 자식도 다시 그려야 할지 연산을 한다. 그리고 다시 그리고, 안그린다.
            즉 변경된걸 있으면 그리고 없으면 안그린다. 대신 무조건 연산을 해야 알 수 있다.
            연산에는 시간이 오래 걸린다. 그래서 깊은 복사를 한다. 깊은 복사는 레퍼런스만 비교하면 된다.
            => 최적화 하는 것이다.
        - react 에서 사용하는 javascript 깊은 복사 함수(test.hmtl 참조)
            - concat, filter, map, slice, spread 연산자.
        - useMemo 와 useEffect 의 차이 : https://whales.tistory.com/87
            useMemo의 경우 "생성"함수에 관련된 기능입니다. 생성자 함수가 고비용(처리 시간이 오래 걸리는 등)인 경우 렌더링마
            다 계산하는 것은 처리 시간이 오래 걸리므로 값을 기억해놓고 의존성이 변경되었을 경우에만 다시 계산해주는 기능입니다.
            useEffect의 경우는 api 호출, 타이머 등 렌더링 과정에서 한 번만 호출해도 될 기능들이 렌더링되어 실행되거나, 
            호출과정에서 렌더링에 영향을 끼칠 수 있는 것을 모아서 따로 처리하기 위한 기능입니다.
            둘의 가장 큰 차이점은 useEffect는 해당 컴포넌트의 렌더링이 완료된 후에 실행되지만, useMemo는 렌더링 중에 실행되어 집니다.
        -  useCallback vs useMemo vs useEffect 차이 : https://twil.weekwith.me/3%EA%B8%B0/%EC%A0%95%EC%84%A0%EB%AF%B8/2021-10-31-useCallback-useMemo-useEffect/
        - CSS Flex 참고 : https://studiomeal.com/archives/197
        - Computed Property Name
            - https://velog.io/@yujuck/object-key%EC%97%90-%EB%B3%80%EC%88%98%EB%A5%BC-%EB%84%A3%EC%9C%BC%EB%A0%A4%EB%A9%B4-Computed-Property-Name
            - https://yorr.tistory.com/13
            - https://noritersand.github.io/javascript/javascript-%EA%B3%84%EC%82%B0%EB%90%9C-%ED%94%84%EB%A1%9C%ED%8D%BC%ED%8B%B0%EB%AA%85-computed-property-names/
            - 개요
```
            프로퍼티의 이름을 정의하는 새로운 방법을 정리한 글.
            {
                [expression]: value
            }
```
                객체 리터럴의 프로퍼티명 자리에 대괄호[]와 표현식의 조합으로 사용한다. expression의 실행 결과가 프로퍼티의 이름이 된다.
```                
                var prop = 'bbyong';
                var obj = {
                    [prop]: 123
                };
```                
                obj; // Object { bbyong: 123 }
```
                var obj = {
                    ['ddi' + 'yong']: 456
                };
```                
                obj; // Object { ddiyong: 456 }
```
                var i = 0;
                var obj = {
                    ['idx' + i++]: i,
                    ['idx' + i++]: i,
                    ['idx' + i++]: i
                };
```                
                obj; // Object { idx0: 1, idx1: 2, idx2: 3 }
```
                var nm = 'waldo';
                var obj = {
                    [nm.charAt(0).toUpperCase() + nm.slice(1)]: 'Hello there! Mighty fine morning'
                };
```                
                obj; // Object { Waldo: "Hello there! Mighty fine morning" }
                당연히 메서드명 또한 표현식으로 정의할 수 있다:
```                
                var obj = {
                    ['john' + 'snow']: function() {
                        console.log('I know nothing.');
                    }
                };
```                
                obj.johnsnow(); // I know nothing.