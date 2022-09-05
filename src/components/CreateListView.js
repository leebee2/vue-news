import ListView from '../views/ListView.vue';
import bus from '../utils/bus';

export default function createListView(name) {
    return {
        //재사용할 인스턴스 옵션
        name: name + 'View',
        created() {
            bus.$emit('start:spinner');
            this.$store.dispatch('FETCH_LIST', name)
                .then(() => bus.$emit('end:spinner'))
                .catch((error) => console.log(error));
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}