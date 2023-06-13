import {combineReducers, createStore} from 'redux';

let alert초기값 = true;

function reducer2(state = alert초기값, 액션){
  if(액션.type === 'alert닫기'){
    state = false;
    return state;
  } else{
    return state
  }
}

let 초기값 = [
  {id: 0, name: '멋진신발', quan : 2},
  {id: 1, name: '멋진신발2', quan : 1}
];

function reducer(state = 초기값, 액션){
  if(액션.type === '수량증가'){
    let copy = [...state];
    copy[0].quan++;
    return copy
  } else if(액션.type === '수량감소'){
    let copy = [...state];
    copy[0].quan--;
    return copy
  } else{
    return state
  }
}

let store = createStore(combineReducers({reducer,reducer2}));