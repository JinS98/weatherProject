import { atom } from "recoil"; 

export const locationState = atom({
    key: 'locationState', // state의 이름
    default: '', //초기값
  });