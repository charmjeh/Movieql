BABEL
== 
오픈 소스 자바스크립트 모듈 번들러.  
여러개로 나누어있는 파일들을 하나의 자바스크립트로 압축하고 최적화하며, 최신 자바스크립트 문법을 지원하지 않는 브라우저에서 사용할수 있는 코드로 변환시켜줌.  

**최신 자바스크립트 문법을 사용하고 싶다면 반드시 설치 필요**

```
$ yarn add babel-node --dev
$ yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev
```

```
// nodemon이 babel-node와 index.js 실행
$ nodemon --exec babel-node index.js
```

YTS API
==
open API, 영화 리스트를 받을 수 있음.

### API DOCUMENTATION
**https://yts.mx/api**

```
https://yts.am/api/v2/list_movies.json
```

* `JSONView` : 브라우저에서 JSON이 예쁘게 보이게하는 확장프로그램