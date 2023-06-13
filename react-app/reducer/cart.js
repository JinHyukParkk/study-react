export default function Cart(props) {

    return (
        <>
            { props.alertClose === true
                ? (<div className="my-alert-pink">
                    <p>지금 구매하시면 신규할인 20%</p>
                    <button onClick={()=>{props.dispatch({ type: 'alert닫기' }) }}>X</button>
                </div>)
                : null
            }
    </>
    )
    
    function state를props화(state){
     return {
      state : state.reducer,
      alertClose : state.reducer2
     }
    }
}