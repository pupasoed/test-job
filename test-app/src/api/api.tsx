

export class SwapiService{
    _apiBase = 'http://dev.trainee.dex-it.ru/api';

    // async getResource(url){
    //     const res = await fetch(`${this._apiBase}${url}`)
    //     if (!res.ok){
    //         throw new Error(`could not fetch ${res.status}`)
    //     }
    //     const body = await res.json();
    //     return body;
    // }

    // authSingIn(requestOptions){
    //     const authData = {
    //         url: '/Auth/SignUp'
    //     }
    //     return this.getResource(`/Auth/SignUp`)
    // }
    //
    // authSignUp(requestOptions){
    //     return this.getResource(`/Auth/SignUp`)
    // }
}
// const requestOptions = {
//     "name": "string",
//     "password": "string"
// }
//
// const swapi = new SwapiService();
// swapi.authSingIn(requestOptions).then((body) => {
//     console.log(body)
// });
//
// export default swapi
