import axios from "axios";

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUser(userName) {
    return axios.get(`${config.baseUrl}user/${userName}.json`)
}

function fetchItem(itemId) {
    return axios.get(`${config.baseUrl}item/${itemId}.json`)
}


export {
    fetchNewsList, fetchJobsList, fetchAskList, fetchUser, fetchItem
}