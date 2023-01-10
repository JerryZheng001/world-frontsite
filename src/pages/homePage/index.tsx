import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import QRCodeDom from '../ContractDetection/component/Code';
import EchartsShow from '../ContractDetection/component/echartsShow';
import { StyleCode } from '../ContractDetection/component/StyleCode';

export default function HomePage(): JSX.Element{
  const history = useHistory()

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





  return <div className="homePage">

    <h1 style={{color:'#fff',margin:'100px'}} onClick={()=>{
      history.push('/contract_detection')
    }}>homePage To Detect</h1>


<input type="file" id='file-input' />
            {
                FileValue !== '' && <StyleCode value={FileValue}></StyleCode>
            }
            <QRCodeDom url='http://164.52.93.82:8002/#/'/>
           <EchartsShow/>

  </div>
}