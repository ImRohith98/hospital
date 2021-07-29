export const requestApi = async (
    url,
    method,
    body
) => {
    let options = {
        method: method || 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
    }

    return await fetch(url, options)
        .then((response) => response.json())
        .then(data => data)

}

