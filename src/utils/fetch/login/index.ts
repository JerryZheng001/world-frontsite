import httpUrl from '../axios'

export function captcha(params:any){ //get code
  return httpUrl.get("/api/captcha/",params)
}

export function signup(data:any){ //register
  return httpUrl.post("/api/signup/",data)
}

export function login(data:any){ //login
  return httpUrl.post("/api/login/",data)
}

export function logout(){ //logout
  return httpUrl.get("/api/logout/")
}


export function getNonce(params: any) { 
  return httpUrl.get("/api/oauth/nonce/", params)
}

export function getLogin(data: any) {
  return httpUrl.post("/api/oauth/login/", data)
}

export function getBastet(params: any) { 
  return httpUrl.get("/user/get-comps", params)
}