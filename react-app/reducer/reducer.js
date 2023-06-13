import {combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

let initAlert = true;

function reducer2(state = initAlert, action){
  if(action.type === 'alert닫기'){
    state = false;
    return state;
  } else{
    return state
  }
}

let initValue = [
  {id: 0, name: '멋진신발', quan : 2},
  {id: 1, name: '멋진신발2', quan : 1}
];

function reducer(state = initValue, action){
  if(action.type === '수량증가'){
    let copy = [...state];
    copy[0].quan++;
    return copy
  } else if(action.type === '수량감소'){
    let copy = [...state];
    copy[0].quan--;
    return copy
  } else{
    return state
  }
}

let store = configureStore(combineReducers({reducer,reducer2}));