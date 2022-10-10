### 프로젝트 목적

html2Canvas와 htmlToImage 라이브러리가 ios, chrome, safari 등 브라우저, 플랫폼 별로 이미지가 잘 저장되는지 테스트해요.

### 결과

chrome : 둘 다 문제 없음.
safari : html2Canvas 문제 없음. 반면, htmlToImage는 지원하는 메서드를 두 번 실행해야 제대로 이미지가 그려짐.
ios : html2Canvas 문제 없음. 반면, htmlToImage는 이미지가 그려지지 않음.

### 정리

- html2Canvas
  - 일부 style이 깨지는 단점이 있으나 img element가 하나의 이미지로 그려짐 (useCors를 true로 지정).
- htmlToImage
  - style이 깨지는 현상은 없으나 img element가 이미지로 그려지지 않음.

html2Canvas가 style이 깨져서 별도 처리를 더 해줘야 하는 불편함은 있지만 element를 누락시키고 렌더링하는 문제는 없기 때문에 html2Canvas를 사용하기로 결정.
