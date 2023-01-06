import httpUrl from '../axios'

export function getMyStatus(params:any){ //get code
  return httpUrl.get("/activity/mint-status",params)
}
//signature
export function getSignature(data: any) {
  return httpUrl.get("/activity/wallet-signature", data)
}
//
export function getUpdateStatus(data: any) {
  return httpUrl.post("/activity/update-mint-status", data)
}