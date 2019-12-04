export const getCookieByKey = (key) => {
    let cookieStr = document.cookie
    if (!key) {
        alert("Please enter a valid key")
    } else if (!cookieStr || cookieStr === "") {
        console.log("Cookie is empty")
    } else if (!cookieStr.includes(key)) {
        alert("Key is not in cookie")
    }
    if (cookieStr && cookieStr !== '') {
        let returnVal;
        cookieStr.split(';').forEach((item) => {
            let kvPair = item.trim();
            let kvArr = kvPair.split('=');
            let cookieKey = kvArr[0]
            let cookieValue = kvArr[1]
            if (key === cookieKey) {
                returnVal = cookieValue.trim()
            }
        })
        if (returnVal) {
            return returnVal
        } else {
            alert('no return value!')
        }
    }
}
export const getCookieObj = () => {
    let cookieObj = {};
    let cookieStr = document.cookie;
    cookieStr.split(';').forEach((item) => {
        let kvPair = item.trim();
        let kvArr = kvPair.split('=');
        if ((kvArr[1].length > 0) && !(['null', 'undefined'].includes(kvArr[1]))) {
            cookieObj[kvArr[0]] = kvArr[1];
        } else if (!cookieObj['diffuse_jwt'] && cookieObj['csrftoken']) {
            document.cookie = `expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        } else {
            document.cookie = `${kvArr[0]}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        }
    })
    console.log(document.cookie)
    return cookieObj
}
export const deleteCookie = (_key_) => {
    if (document.cookie.split(';').filter((item) => item.trim().startsWith(_key_)).length) {
        document.cookie = `${_key_}=; expires=0`;
        document.cookie = `${_key_}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        console.log('deleted', _key_)
        console.log(document.cookie)
    }
}
export const createCookie = (_key_, _value_, _expiryMinutes_) => {
    if (((_value_) && (typeof _value_ === typeof '' && (_value_.length > 0 || !(['null', 'undefined'].includes(_value_)))))) {
        let expiryDt = new Date(+new Date() + _expiryMinutes_ * 60000);
        document.cookie = `${_key_}=${_value_}; expires=${expiryDt}`;
    }
}