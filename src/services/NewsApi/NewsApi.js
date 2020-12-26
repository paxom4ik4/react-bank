class NewsApi {
    _apiBase = 'http://newsapi.org/v2/everything?';
    _apiKey = 'd949b013141e46be8acd84b5e252c079';

    async getData() {
        const res = await fetch(`${this._apiBase}q=finance&apiKey=${this._apiKey}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}, received ${res.status}`);
        }
        return res;
    }
}

export default NewsApi;