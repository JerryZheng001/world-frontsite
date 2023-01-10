import React, { useEffect, useState } from 'react'
import { ContainerCon } from './styled'

import { StyleCode } from './component/StyleCode'
import QRCodeDom from './component/Code'
import EchartsShow from './component/echartsShow'
export default function ContractDetection(): JSX.Element {
    const [FileValue, setFileValue] = useState('')



    function readSingleFile(e: any) {
        var file = e.target.files[0];
        console.log(file, 'file');

        if (!file) { return; }
        var reader = new FileReader();
        reader.onload = function (e: any) {
            var contents = e.target.result;
            setFileValue(contents)
        };
        reader.readAsText(file, "utf-8");
    }

    useEffect(() => {
        var fileInput = document.getElementById("file-input");
        fileInput && fileInput.addEventListener("change", readSingleFile, false);
        return () => {
            fileInput && fileInput.removeEventListener("change", readSingleFile, false);
        }
    }, [FileValue])



    return <ContainerCon className="ContractDetection">

        <div className="container">
            <h1>test</h1>
            <input type="file" id='file-input' />
            {
                FileValue !== '' && <StyleCode value={FileValue}></StyleCode>
            }
            <QRCodeDom url='http://164.52.93.82:8002/#/'/>
           <EchartsShow/>
        </div>

    </ContainerCon>
}