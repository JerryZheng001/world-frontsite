import httpUrl from '../axios'

//获取用户nonce
export function getUserNonce(params:any){ 
  return httpUrl.get("/user/get_nonce/",params)
}
//用户授权core
export function getUserToCore(params:any){ 
  return httpUrl.post("/user/login/",params)
}


//获取检测结果
export function getMyStatus(params:any){ 
  return httpUrl.get("/result/",params)
}

//上传合约地址
export function getDetectAddressSubmit(data: any) {
  return httpUrl.post("/submit/", data)
}

//上传文件
export function getDetectFileUpload(data: any) {
  return httpUrl.post("/upload/", data)
}