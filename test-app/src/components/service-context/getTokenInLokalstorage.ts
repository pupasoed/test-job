

export const GetToken = () => {
    let userJson
    const userString = localStorage.getItem("user")
    if(userString){
        return userJson = JSON.parse(userString)
    }
}

