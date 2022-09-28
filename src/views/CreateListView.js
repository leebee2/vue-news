import ListView from './ListView.vue';
import bus from '../utils/bus';

export default function createListView(name) {
    return {
        //재사용할 인스턴스 옵션
        name: name + 'View',
        render(createElement) {
            return createElement(ListView);
        },
        mounted() {
            bus.$emit('end:spinner');
        }
    }
}



/**
 * 
 * 데이터 호출 시점
 * 
 * 1. 라우터 네비게이션 가드
 * - 특정 url로 접근하기 전의 동작을 정의하는 속성(함수)
 * 
 * 2. 컴포넌트 라이프 사이클 훅
 * - created : (컴포넌트가 생성)되자마자 호출되는 로직
 */