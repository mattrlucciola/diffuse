export const getLsByKey = (_key_) => {
    localStorage.getItem(_key_);
}
export const setLsByKey = (_key_, _value_) => {
    localStorage.setItem(_key_, _value_);
}
export const deleteLsKey = (_key_) => {
    localStorage.removeItem(_key_);
}
export const getLsObj = () => {
    let lsObj = {}
    for (let _key_ in localStorage) {
        let _value_ = localStorage[_key_];
        if (!['key', 'getItem', 'setItem', 'removeItem', 'clear', 'length'].includes(_key_)) {
            lsObj[_key_] = _value_;
        }
    }
    return lsObj
}
export const setLsObj = (_lsObj_) => {
    for (let _key_ in _lsObj_) {
        setLsByKey(_key_, _lsObj_[_key_])
    }
}
export const deleteLsObj = () => {
    for (let _key_ in localStorage) {
        if (!['key', 'getItem', 'setItem', 'removeItem', 'clear', 'length'].includes(_key_)) {
            localStorage.removeItem(_key_);
        }
    }
}