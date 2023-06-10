
/**
 * 
 * 함수 컴포넌트: 간단한 함수로 정의합니다. 
 * 함수 컴포넌트는 생명주기 메서드를 사용할 수 없지만, React Hooks를 사용하여 상태 관리와 생명주기 기능을 구현할 수 있습니다. 
 * 함수 컴포넌트는 보통 간결하고 이해하기 쉬우며, React 팀은 최신 기능을 먼저 함수 컴포넌트에 도입하는 경향이 있습니다.
 * 
 */

export default function ChildFunction(props) {
    const { childComponent } = props;

    return (
        <div>
            <h1>Child</h1>
            {childComponent()}
        </div>
    )
}