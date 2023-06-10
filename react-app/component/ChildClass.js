import React from "react";

/**
 * 
 * 클래스 컴포넌트: ES6 클래스를 사용하여 정의합니다. 
 * React.Component 또는 React.PureComponent를 상속받아 render() 메서드를 구현합니다. 
 * 또한, 클래스 컴포넌트는 생명주기 메서드를 사용할 수 있습니다. 
 * React.PureComponent는 React.Component와 비슷하지만, 
 * shouldComponentUpdate()가 props와 state의 얕은 비교(shallow comparison)를 수행하여 불필요한 렌더링을 방지합니다.
 * 
 */
export default class ChildClass extends React.PureComponent {
    render() {
        const { onClick } = this.props;
        return (
            <div>
                <h1>Child</h1>
                <button onClick={onClick}>Count 올려</button>
            </div>
        )
    }
}