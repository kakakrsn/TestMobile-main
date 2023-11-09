import request from './utils/request';

class Api {
    static urlAPI() {
        return "https://newsapi.org/v2/"
    }

    static getNews(q, from, sortBy, apiKey) {
        let path = `everything?q=${q}&from=${from}&sortBy=${sortBy}&apiKey=${apiKey}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }
}

export default Api

// everything?q=tesla&from=2023-09-30&sortBy=publishedAt&apiKey=ae9d63e642a2462f9304889476937b12