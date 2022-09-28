import axios from "axios";

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

/**
 * 
 * @param {string} pageName : api 이름
 * @returns news,job,ask 데이터
 */
async function fetchList(pageName) {
    try {
        return await axios.get(`${config.baseUrl}${pageName}/1.json`)
    }
    catch (error) {
        console.log(error);
    }
}

function fetchUser(userName) {
    return axios.get(`${config.baseUrl}user/${userName}.json`)
}

function fetchItem(itemId) {
    return axios.get(`${config.baseUrl}item/${itemId}.json`)
}

export {
    fetchList, fetchUser, fetchItem
}