import Vue from 'vue'; //package.json 에 불러온 Vue.js 를 사용하겠다고 명시적으로 불러주기
import RockSP from './RockSP';

new Vue(RockSP).$mount('#root');//mount 는 el 역할을 한다