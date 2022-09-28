import { fetchList, fetchUser, fetchItem } from '../api/index.js';

export default {
    //promise api
    // FETCH_LIST_Promise(context, pageName) {
    //     return fetchList(pageName)
    //         .then(response => {
    //             context.commit('SET_LIST', response.data)
    //             return response;
    //         })
    //         .catch(error => console.log(error))
    // },
    //async await api
    async FETCH_LIST(context, pageName) {
        const response = await fetchList(pageName);
        context.commit('SET_LIST', response.data);
        return response;
    },
    FETCH_USER(context, userName) {
        fetchUser(userName)
            .then(response => context.commit('SET_USER', response.data))
            .catch(error => console.log(error))
    },
    FETCH_ITEM(context, itemId) {
        fetchItem(itemId)
            .then(response => context.commit('SET_ITEM', response.data))
            .catch(error => console.log(error))
    },
}