import React from 'react'
import QRCode from 'qrcode.react';


export default function QRCodeDom({ url }:{url:string}) {

    return  <QRCode
    id="qrCode"
    value={url}
    size={200} // 二维码的大小
    fgColor="#000000" // 二维码的颜色
    style={{ margin: 'auto' }}
    imageSettings={{ // 二维码中间的logo图片
        src: 'logoUrl',
        height: 100,
        width: 100,
        excavate: true, // 中间图片所在的位置是否镂空
    }}
/>
}