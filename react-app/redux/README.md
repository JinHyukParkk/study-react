## Redux 쓰는 이유
 - props 문법 귀찮을 때 씁니다.
 - state 변경 관리할 때 씁니다.

---------- 
Component 간 state 는 props를 통해 전달해야하는데
하위 Component가 많을 경우 굉장히 귀찮은 작업이 될 것이다.

store.js 안에 state 를 두어 여러 Component 에서 사용할 수 있다,