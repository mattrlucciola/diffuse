import {getCookieByKey} from './cookies';

export const _post = async (url, body) => {
    let csrftoken = getCookieByKey("csrftoken");
    let response = await fetch(
        url,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            credentials: 'include',
            method: 'POST',
            mode: 'same-origin',
            body: JSON.stringify(body),
        }
    )
    return response
}
export const _put = async (url, body, token) => {
    let csrftoken = getCookieByKey("csrftoken");
    body['Authorization'] = `Token ${token}`;
    let response = await fetch(
        url,
        {
            credentials: 'include',
            method: 'PUT',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
                'Authorization': `Token ${token}`,
            },
            body: JSON.stringify(body),
        }
    )
    return response
}
export const _get = async (url, body) => {
    let csrftoken;
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    if (body && body['diffuse_jwt']) {
        csrftoken = getCookieByKey("csrftoken");
        headers['X-CSRFToken'] = csrftoken;
    }
    let response = await fetch(
        url,
        {
            credentials: 'include',
            method: 'GET',
            mode: 'same-origin',
            headers: headers,
            body,
        }
    )
    return response
}
export const _delete = async (url, body, token) => {
    let csrftoken = getCookieByKey("csrftoken");
    body['Authorization'] = `Token ${token}`;
    let response = await fetch(
        url,
        {
            credentials: 'include',
            method: 'DELETE',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
                'Authorization': `Token ${token}`,
            },
            body: JSON.stringify(body),
        }
    )
    return response
}

export const Post = async (url, body) => {
    let response = await _post(url, body);
    return response
}
export const PostJSON = async (url, body) => {
    let response = await _post(url, body);
    let responseJSON = await response.json();
    return responseJSON
}
export const Put = async (url, body, token) => {
    let response = await _put(url, body, token);
    return response
}
export const PutJSON = async (url, body, token) => {
    let response = await _put(url, body, token);
    let responseJSON = await response.json();
    return responseJSON
}
export const Get = async (url, body) => {
    let response = await _get(url, body);
    return response;
}
export const GetJSON = async (url, body) => {
    let response = await _get(url, body);
    let responseJSON = await response.json();
    return responseJSON;
}
export const Delete = async (url, body, token) => {
    let response = await _delete(url, body, token);
    return response;
}
export const DeleteJSON = async (url, body, token) => {
    let response = await _delete(url, body, token);
    let responseJSON = await response.json();
    return responseJSON;
}