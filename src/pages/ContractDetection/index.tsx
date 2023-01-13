import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ethPic from '../../assets/images/contrastDetec/ethPic.png'
import bscPic from '../../assets/images/contrastDetec/bscPic.png'
import ErrModel from './component/ErrModel'

import './antd.scss'
import { useActiveWeb3React } from '../../hooks'
import { useWalletModalToggle } from '../../state/application/hooks'
import { StyleCode } from './component/StyleCode'
import { ContainerCon, FileContent, StyleButton, StyledInput, StyleSolInputUp, WidthDiv } from './styled'
import { Select } from 'antd';
import { useHistory } from 'react-router-dom'
import { getDetectAddressSubmit, getListsTotal, getUserNonce, getUserToCore } from '../../utils/fetch/detect'
import { Dots } from '../../components/styleds'
import { getEnv } from '../../utils/base/string'
const { Option } = Select;


// const inputRegex = RegExp(/^\d+\.?(\d{1})?$/)
const inputRegex = RegExp(/^[a-zA-Z\d]+$/)
const contrastRegex = RegExp(/^0x[a-fA-F0-9]{40}$/)
function Input({
    value,
    onUserInput,
    placeholder,
    ShowRed,
    ...rest
}: {
    value: string | number
    onUserInput: (input: string) => void
    error?: boolean
    ShowRed?: boolean
    placeholder?: string
} & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>) {

    const enforcer = (nextUserInput: string) => {
        if (inputRegex.test(nextUserInput) || !nextUserInput) {
            onUserInput(nextUserInput)
        }
    }



    return (
        <StyledInput
            {...rest}
            value={value}
            onChange={event => enforcer(event.target.value)}
            autoComplete="off"
            autoCorrect="off"
            type="text"
            ShowRed={ShowRed}
            placeholder={placeholder || ''}
        />

    )
}


interface BtnProp {
    disabled: boolean
    text: JSX.Element | string
    event?: () => void
}
const baseURL = getEnv('REACT_APP_DEV_REQUEST_URL')
export default function ContractDetection(): JSX.Element {

    const { account } = useActiveWeb3React()
    const toggleWalletModal = useWalletModalToggle()
    const history = useHistory()

    const [currIndex, setcurrIndex] = useState(0)
    const [AddressContract, setAddressContract] = useState('')

    const [FileValue, setFileValue] = useState('')
    const [FileShow, setFileShow] = useState(false)
    const [selectChain, setselectChain] = useState('bsc')


    const [contrastErrText, setcontrastErrText] = useState('')
    const [ErrOpen, setErrOpen] = useState(false)
    const [errorMsg, seterrorMsg] = useState('')

    const [detectIng, setdetectIng] = useState(false)


    const [TotalTest, setTotalTest] = useState(0)

    //上传文件
    function readSingleFile(e: any) {
        var file = e.target.files[0];





        if (!file) { return; }

        const formdata = new FormData();
        // 这里只是基本设置，对应接口需求设置响应的类型属性值
        formdata.set('file', file);
        formdata.set('main_file', file.name);

        // 接口调用
        let xml = new XMLHttpRequest();
        xml.open('POST', baseURL + 'upload/', true)
        xml.setRequestHeader('Authorization', window.sessionStorage.getItem('token') || '');

        xml.send(formdata)

        xml.onload = (res) => {
            const { code, data, msg } = JSON.parse(xml.responseText)
            console.log('====================================');
            console.log(code, data, msg);
            console.log('====================================');
            if (code === 30001) {
                setErrOpen(true)
                seterrorMsg(msg)
            }
        }

        var reader = new FileReader();
        reader.onload = function (e: any) {
            var contents = e.target.result;
            setFileValue(contents)
            setFileShow(true)

        };
        reader.readAsText(file, "utf-8");
    }
    //合约地址检测
    const detectContrast = useCallback(
        () => {
            if (!contrastRegex.test(AddressContract)) {
                setcontrastErrText('Notice：Address is validated incorrectly')
            } else {
                setcontrastErrText('')
                testAddress()
            }
        },
        // eslint-disable-next-line
        [AddressContract, history,],
    )
    const testAddress = () => {
        const params = {
            address: AddressContract,
            network: selectChain
        }

        getDetectAddressSubmit(params).then((res: any) => {
            const { code, data, msg } = res
            if (code === 30001) {
                setErrOpen(true)
                seterrorMsg(msg)
            }
            if (code === 200) {
                console.log(data,'data');
                setdetectIng(true)
                setTimeout(() => {
                    history.push('/contract_detection/1')
                }, 100);
            }
        })




    }

    //上传文件检测
    // const detectFile = useCallback(
    //   () => {
    //         testFile()
    //   },
    //   [testFile],
    // )
    const detectFile = () => {
        console.log('====================================');
        console.log('检测文件夹结果');
        console.log('====================================');
    }


    //关闭错误弹框
    const closeErrTip = () => {
        setErrOpen(false)
        seterrorMsg('')
        setcontrastErrText('')
        setFileValue('')
        setFileShow(false)
    }

    const styleButton: BtnProp = useMemo(() => {
        const rst: BtnProp = {
            text: 'Start detection',
            event: () => ({}),
            disabled: true
        }
        if (!account) {
            rst.text = 'Connect Wallet'
            rst.disabled = false
            rst.event = () => {
                toggleWalletModal()
            }
            return rst
        }

        if (detectIng) {
            rst.text = (
                <>
                    Detecting
                    <Dots />
                </>
            )
            return rst
        }

        return {
            text: 'Start detection',
            event: () => { currIndex === 0 ? detectContrast() : detectFile() },
            disabled: false
        }
    }, [
        account,
        toggleWalletModal,
        detectContrast,
        currIndex,
        detectIng
    ])
    const handleChange = (value: any) => {
        setselectChain(value)
        localStorage.setItem('chain', value)
    }
    //获取nonce
    const handelFiret = () => {
        if (!account) return

        getUserNonce({ address: account }).then(res => {
            const { nonce } = res.data
            const Params = { nonce: nonce, address: account }
            getUserToCore(Params).then(re => {
                const { token } = re.data
                window.sessionStorage.setItem('token', 'Bearer ' + token)
            })
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

    useEffect(() => {
        localStorage.setItem('chain', 'bsc')
        handelFiret()
        handleListTotal()
        // eslint-disable-next-line
    }, [])


    return <ContainerCon className="ContractDetection">

        <div className="container">
            <WidthDiv className='ContracDec'>
                <div className="title">Triathon Contract Detection</div>
                <div className="tabs">
                    <span className={currIndex === 0 ? 'active tab1' : 'tab1'} onClick={() => setcurrIndex(0)}>Detect with address</span>
                    <span className={currIndex === 1 ? 'active tab2' : 'tab2'} onClick={() => setcurrIndex(1)}>Detect with file</span>
                </div>
                {
                    currIndex === 0 && <div className="addreccCon">
                        <div className="select">
                            <Select defaultValue="bsc" onChange={handleChange} dropdownClassName='dropCon' showArrow >
                                <Option value="bsc">  <img src={bscPic} alt="" /> BSC</Option>
                                <Option value="eth">  <img src={ethPic} alt="" /> ETH</Option>
                            </Select>
                        </div>
                        <div className="inputCon">
                            <Input value={AddressContract} onUserInput={val => setAddressContract(val)} placeholder='Please enter the contact address' ShowRed={contrastErrText === '' || AddressContract === ''} ></Input>
                        </div>
                        <div className="err">{contrastErrText}</div>
                    </div>
                }

                {
                    currIndex === 1 && <div className="fileCon">
                        {
                            !FileShow ? <div className="uploadBefore"><StyleSolInputUp >
                                <span></span>
                                Upload file (.sol)
                                <input type="file" id='file-input' accept=".sol" onChange={readSingleFile} />
                            </StyleSolInputUp></div> : <FileContent>
                                {
                                    FileValue !== '' && <StyleCode value={FileValue}></StyleCode>
                                }
                            </FileContent>
                        }

                    </div>
                }


                <StyleButton onClick={styleButton.event}>{styleButton.text}</StyleButton>
                <div className="notice">Notice : This detection is the basic item scan, please do not treat it as the final audit report.For the final report, please contact customer service for manual audit</div>
                <div className="detect" >
                    <span onClick={() => {
                    history.push('/contract_detection/history')
                }} >
                    {TotalTest}+ Detected <span className='pointRight'></span>
                    </span>
                </div>
            </WidthDiv>
        </div>
        <ErrModel
            isOpen={ErrOpen}
            onDismiss={closeErrTip}
            errorMsg={errorMsg}
        ></ErrModel>
    </ContainerCon>
}