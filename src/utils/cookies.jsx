import Cookies from "universal-cookie";


const cookies = new Cookies()

// kunci buat cookies
export const CookieKeys = {
    AuthToken: "MyAuth",
    User: "user"
}

// settingan Default Cookies
const CookiesOptions = {
    path: '/',
    secure: true,
}

// setting CRD Cookies

export const CookiesStorage = {
    set: (key, data, options)=>{
        return cookies.set(key, data, {...CookiesOptions, ...options})
    },
    get: (key, options)=>{
        return cookies.get(key, {...CookiesOptions, ...options})
    },
    remove: (key, options)=>{
        return cookies.remove(key, {...CookiesOptions, ...options})
    },
}