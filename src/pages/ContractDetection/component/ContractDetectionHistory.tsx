
import React, { useEffect, useState } from 'react'
import { HistoryContainer, HistoryDom, InputCon, ItemDiv, SearchDom } from '../styled'
import Right from '../../../assets/images/contrastDetec/right@2x.png'
import ethPic from '../../../assets/images/contrastDetec/ethPic.png'
import bscPic from '../../../assets/images/contrastDetec/bscPic.png'
import { getHistoryLists, getListsTotal } from '../../../utils/fetch/detect'
import { shortenAddress } from '../../../utils'
import { useHistory } from 'react-router-dom'

interface ResultList {
  id: number;
  file_name: string;
  contract_address: string;
  network: string;
  score?: any;
}

export default function ContractDetectionHistory(): JSX.Element {

    const [TotalTest, setTotalTest] = useState(0)
    const [resultList, setresultList] = useState([] as ResultList[])

 
    const history = useHistory()
    const [InputValue, setInputValue] = useState('')

     //历史记录
     const getTestList = ()=>{
        const Params = {
            page:1,
            pagesize:100,
            name:InputValue
        }
        getHistoryLists(Params).then(res=>{
            if(res.data){
                const { results } = res.data
                setresultList(results)
            }
        })
    }
    //检测总数
    const handleListTotal = ()=>{
        getListsTotal().then(res=>{
            if(res.data){
                setTotalTest(res.data)
            }
        })
    }

    const changeValue = (e:any)=>{
        setInputValue(e.target.value)
        
    }
    useEffect(() => {
        getTestList()
        handleListTotal()
      return () => {
        
      }
       // eslint-disable-next-line
    }, [])
   

    return <HistoryContainer>
    <HistoryDom>
        <div className="title">Triathon Contract Detection Report</div>
        <div className="showTitle">{TotalTest} Detected</div>
        <SearchDom>
            <div className="icon"></div>
            <InputCon placeholder='search' value={InputValue} onChange={(e:any)=>changeValue(e)} ></InputCon>
            <div className="button" onClick={()=>getTestList()}>search</div>

        </SearchDom>
        <div className="listCom">
            <div className="headIntro">
                <ItemDiv width='70px' type={0} >#</ItemDiv>
                <ItemDiv width='340px' type={1}>Name</ItemDiv>
                <ItemDiv width='240px' type={2}>Contract address</ItemDiv>
                <ItemDiv width='225px' type={2}>Chain</ItemDiv>
                <ItemDiv width='225px' type={2}>Detect Score</ItemDiv>
                <ItemDiv width='194px' type={2}>Operation</ItemDiv>
            </div>
            <div className="container">
                {
                    resultList.length!==0 ? resultList.map((item, index) => {
                        return <div className="listItems" key={index}>
                            <ItemDiv width='70px' type={0} >{index+1}</ItemDiv>
                            <ItemDiv width='340px' type={1}>{item.file_name}</ItemDiv>
                            <ItemDiv width='240px' type={2}>{ shortenAddress(item.contract_address) }</ItemDiv>
                            <ItemDiv width='225px' type={2}> <img src={item.network==='bsc'?bscPic:ethPic} alt="" className='chainImg'/> {item.network}</ItemDiv>
                            <ItemDiv width='225px' type={2}>{item.score || 0}</ItemDiv>
                            <ItemDiv width='194px' type={2}>
                                <img src={Right} alt="" className='rightPoint' onClick={()=>{
                                    history.push(`/contract_detection/${item.id}`)
                                }} />
                            </ItemDiv>
                        </div>
                       
                    }) :<div className='empty'> No Data ~</div>
                }
            </div>

        </div>
        {
            resultList.length!==0 && <div className="footerIntro">Only Showing 1~100</div>
        }
        

    </HistoryDom>
    </HistoryContainer>
}