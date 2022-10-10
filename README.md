### 프로젝트 목적

html2Canvas와 htmlToImage 라이브러리가 ios, chrome, safari 등 브라우저, 플랫폼 별로 이미지가 잘 저장되는지 테스트해요.

### preview
<img width="306" alt="image" src="https://user-images.githubusercontent.com/61550839/194855250-561794f4-f4e7-4acd-a95b-36773fcb4557.png">


### 실행 방법
```
yarn start
```

### 결과

| chrome | safari | ios |
| :---:        |     :---:      |          :---: |
| <img width="300" alt="image" src="https://user-images.githubusercontent.com/61550839/194855663-5a65ebdc-5b34-4b3c-8d80-b13d18f2ec31.png"> | <img width="290" alt="image" src="https://user-images.githubusercontent.com/61550839/194855722-8944b42c-2e67-4efa-ad65-70a50cd76d30.png"> | <img width="300" alt="image" src="https://user-images.githubusercontent.com/61550839/194855900-cf0cae31-225b-4756-a438-72961cd858e4.jpeg"> |


- chrome : 둘 다 문제 없음.
- safari : html2Canvas 문제 없음. 반면, htmlToImage는 지원하는 메서드를 두 번 실행해야 제대로 이미지가 그려짐.
- ios : html2Canvas 문제 없음. 반면, htmlToImage는 이미지가 그려지지 않음.

### 정리

- html2Canvas
  - 일부 style이 깨지는 단점이 있으나 img element가 하나의 이미지로 그려짐 (useCors를 true로 지정).
- htmlToImage
  - style이 깨지는 현상은 없으나 img element가 이미지로 그려지지 않음. 사파리, ios에서 화질이 저하됨.

html2Canvas가 style이 깨져서 별도 처리를 더 해줘야 하는 불편함은 있지만 element를 누락 및 화질 저하 문제가 없어 html2Canvas를 사용하기로 결정.
