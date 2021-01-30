
// interface teamsInterface{
//     token: string,
//     teamsId: string
// }
// interface userInterface{
//     avatarUrl: string | null,
//     name: string,
//     token: string
// }


import {RootState} from "../reducers";

export const getTeamsService = async () => {
    // console.log(data)
    const response = await fetch(`http://dev.trainee.dex-it.ru/api/Team/GetTeams`, {
        method: "GET",
        // body: JSON.stringify(data),
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token'), 'Content-Type': 'application/json'}})
    return response.json()
}