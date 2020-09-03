var sczts_skeleton = {
    debounce: {},
    throttle: {}
}

/**
 * 拷贝
 * @param {*} val 
 */
function copy(val){
    return JSON.parse(JSON.stringify(val))
}

/**
 * 判断是否为空值
 * @param {*} value 
 */
function empty(value) {
    if (value instanceof Array) {
        return value.length == 0;
    } else if (value instanceof Object) {
        return Object.keys(value).length == 0;
    }
    return !Boolean(value);
}


/**
 * 防抖
 * @param {string} key 唯一标识 
 * @param {Function} fn
 * @param {Number} delay
 */
function debounce(key, fn, delay) {
    let timer = sczts_skeleton.debounce[key]
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        sczts_skeleton.debounce[key] = setTimeout(fn, delay)
    }
}

/**
 * 节流
 * @param {string} key 唯一标识 
 * @param {Function} fn
 * @param {Number} delay
 */
function throttle(key, fn, delay) {
    if (!(key in sczts_skeleton.throttle)) {
        sczts_skeleton.throttle[key] = {
            last_time: null,
            timer: null
        }
    }
    let last_time = sczts_skeleton.throttle[key].last_time
    let timer = sczts_skeleton.throttle[key].timer
    return function () {
        let cur_time = new Date().getTime()
        if (last_time && cur_time < last_time + delay) {
            clearTimeout(timer)
            sczts_skeleton.throttle[key].timer = setTimeout(() => {
                fn();
                sczts_skeleton.throttle[key].last_time = cur_time
            }, delay)
        } else {
            sczts_skeleton.throttle[key].last_time = cur_time;
            fn();
        }
    }
}


export default {
    copy,
    empty,
    debounce,
    throttle
}