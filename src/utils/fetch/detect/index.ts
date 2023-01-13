import httpUrl from '../axios'

//获取用户nonce
export function getUserNonce(params:any){ 
  return httpUrl.get("/user/get_nonce/",params)
}
//用户授权core
export function getUserToCore(params:any){ 
  return httpUrl.post("/user/login/",params)
}



//上传合约地址
export function getDetectAddressSubmit(data: any) {
  return httpUrl.post("/submit/", data)
}

//上传文件
export function getDetectFileUpload(data: any) {
  return httpUrl.post("/upload/", data)
}




//查询检查状态
export function getTestStatus(params:any){ 
  return httpUrl.get("/api/v1/check_status",params)
}

//历史记录

export function getHistoryLists(params:any){ 
  return httpUrl.get("/api/v1/history",params)
}

//检测记录总数

export function getListsTotal(){ 
  return httpUrl.get("/api/v1/total")
}



//获取检测结果
export function getTestResult(params:any){ 
  return httpUrl.get("/api/v1/details",params)
}