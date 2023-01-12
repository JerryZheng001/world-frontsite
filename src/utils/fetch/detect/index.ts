import httpUrl from '../axios'




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