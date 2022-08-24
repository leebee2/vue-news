import { fetchNewsList, fetchJobsList, fetchAskList, fetchUser, fetchItem } from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => context.commit('SET_NEWS', response.data))
            .catch(error => console.log(error))
    },
    FETCH_JOBS(context) {
        fetchJobsList()
            .then(response => context.commit('SET_JOBS', response.data))
            .catch(error => console.log(error))
    },
    FETCH_ASKS(context) {
        fetchAskList()
            .then(response => context.commit('SET_ASK', response.data))
            .catch(error => console.log(error))
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
    }
}