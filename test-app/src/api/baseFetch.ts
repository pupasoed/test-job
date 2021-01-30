let _token;

export const setToken = (token: string | null) => {
    _token = token;
}

export const baseFetch = async (url = "", metod = "GET") => {
    const baseHeaders = {
        'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
        method: "POST",
        headers: _token == null ? baseHeaders : {
            ...baseHeaders,
            'Authorization': 'Bearer ' + _token,
        }
    });
    return response.json();
};