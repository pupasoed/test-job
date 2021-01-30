
interface nameInterface{
    login: string,
    password: string
}


export const loginService = async (data: nameInterface) => {
    console.log(data)
    const response = await fetch(`http://dev.trainee.dex-it.ru/api/Auth/SignIn`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}})
    return response.json()
}


// const Service = async (url, name) => {
//     // async function getResource(url: any, name) {
//     const res = await fetch(`http://dev.trainee.dex-it.ru/api${url}`,
//         {method: 'POST',headers:{'Content-Type': 'application/json'},
//             body: JSON.stringify(name),}
//     )
//     if (!res.ok) {
//         throw new Error(`could not fetch ${res.status}`)
//     }
//     const body: any = await res.json();
//     return body;
// }