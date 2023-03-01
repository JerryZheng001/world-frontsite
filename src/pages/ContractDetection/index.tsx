import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ethPic from '../../assets/images/contrastDetec/ethPic.png'
import bscPic from '../../assets/images/contrastDetec/bscPic.png'
import ErrModel from './component/ErrModel'

import './antd.scss'
import { useActiveWeb3React } from '../../hooks'
import { useWalletModalToggle } from '../../state/application/hooks'
import { StyleCode } from './component/StyleCode'
import { ContainerCon, FileContent, ShowDecting, StyleButton, StyledInput, StyleSolInputUp, WidthDiv } from './styled'
import { Select } from 'antd';
import { useHistory } from 'react-router-dom'
import { getDetectAddressSubmit, getListsTotal, getTestResult, getTestStatus, getUserNonce, getUserToCore } from '../../utils/fetch/detect'
import { Dots, SmallLoading } from '../../components/styleds'
import { getEnv } from '../../utils/base/string'
import { clearTimeout } from 'timers'
const { Option } = Select;

// const inputRegex = RegExp(/^\d+\.?(\d{1})?$/)
const inputRegex = RegExp(/^[a-zA-Z\d]+$/)
const contrastRegex = RegExp(/^0x[a-fA-F0-9]{40}$/)
function Input({
    value,
    onUserInput,
    placeholder,
    ShowRed,
    setcontrastErrText,
    ...rest
}: {
    value: string | number
    onUserInput: (input: string) => void
    setcontrastErrText: (e: any) => void
    error?: boolean
    ShowRed?: boolean
    placeholder?: string
} & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>) {

    const enforcer = (nextUserInput: string) => {
        if (inputRegex.test(nextUserInput) || !nextUserInput) {
            onUserInput(nextUserInput)
        }
    }
    const testInput = (e: any) => {
        if (contrastRegex.test(e.target.value)) {
            setcontrastErrText('')
        } else {
            setcontrastErrText('Notice：Address is validated incorrectly')
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
            onBlur={event => testInput(event)}
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

    const [CurrentTestId, setCurrentTestId] = useState('' as unknown as number)
    const [TotalTest, setTotalTest] = useState(0)

    const [Testing, setTesting] = useState(false)
    const [TakeResultAllTime, setTakeResultAllTime] = useState(false)
    const [showUploadFileButton, setshowUploadFileButton] = useState(false)
    const [overTimer, setoverTimer] = useState(false)
    let timer1: any;
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
        xml.open('POST', baseURL + 'api/v1/upload/', true)
        xml.setRequestHeader('Authorization', window.sessionStorage.getItem('token') || '');

        xml.send(formdata)

        xml.onload = (res) => {
            const { code, data, msg } = JSON.parse(xml.responseText)

            if (code === 30001) {
                setErrOpen(true)
                seterrorMsg(msg)
            }
            if (code === 500) {
                setErrOpen(true)
                seterrorMsg('The service is busy, please try again')
            }
            if (code === 200) {
                if (data.status === 2) {
                    setErrOpen(true)
                    seterrorMsg(msg)
                }
                if (data.status === 1) {
                    setErrOpen(true)
                    seterrorMsg(msg)
                }
                

                if (data.id) {
                    setCurrentTestId(data.id)
                    localStorage.setItem('CurrentTestId', data.id)
                    localStorage.setItem('TakeResultAllTime', 'true')
                    setshowUploadFileButton(true)
                }
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
                GetTestStatusStart()
            }
        },
        // eslint-disable-next-line
        [AddressContract, history, account],
    )
    const testAddress = () => {
        console.log(selectChain, 'selectChain');

        const params = {
            address: AddressContract,
            network: localStorage.getItem('chain')
        }

        getDetectAddressSubmit(params).then((res: any) => {
            const { code, data, msg } = res
            if (code === 30001) {
                setErrOpen(true)
                seterrorMsg(msg)
            }
            if (code === 500) {
                setErrOpen(true)
                seterrorMsg('The service is busy, please try again')
            }
            if (code === 200) {
                const { id } = data
                setCurrentTestId(id)
                localStorage.setItem('CurrentTestId', id)
                localStorage.setItem('TakeResultAllTime', 'true')
                setdetectIng(true)
                ViewTestResult(id)
            }
        })




    }


    const detectFile = () => {
        const Id = CurrentTestId || localStorage.getItem('CurrentTestId')
        console.log(Id, 'Id');
        if (Id) {
            ViewTestResult(Id)

        }

    }


    //关闭错误弹框
    const closeErrTip = () => {
        setErrOpen(false)
        seterrorMsg('')
        setcontrastErrText('')
        setFileValue('')
        setFileShow(false)
        setAddressContract('')
        setdetectIng(false)
        setTesting(false)
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
                    <SmallLoading />
                    Detecting
                    <Dots />
                </>
            )
            return rst
        }
        if(overTimer){
            rst.text = 'Too many requests, please wait'
            return rst
        }
        return {
            text: 'Start detection',
            event: () => { currIndex === 0 ? detectContrast() : detectFile() },
            disabled: false
        }
        // eslint-disable-next-line
    }, [
        account,
        toggleWalletModal,
        detectContrast,
        currIndex,
        detectIng,
        useActiveWeb3React,
        overTimer
    ])
    const handleChange = (value: any) => {
        setselectChain(value)
        localStorage.setItem('chain', value)
    }
    //获取nonce
    const handelFiret = useCallback(
        () => {
            if (!account) return

            getUserNonce({ address: account }).then((res: any) => {
                if (res.code === 200) {
                    const { nonce } = res.data
                    const Params = { nonce: nonce, address: account }
                    getUserToCore(Params).then((re: any) => {
                        if (re.code === 200) {
                            const { token } = re.data
                            window.sessionStorage.setItem('token', 'Bearer ' + token)
                            GetTestStatusStart()
                        } else {
                            setErrOpen(true)
                            seterrorMsg(re.msg)
                        }


                    })
                } else {
                    setErrOpen(true)
                    seterrorMsg(res.msg)
                }

            })
        },
        // eslint-disable-next-line
        [account],
    )



    //检测总数
    const handleListTotal = () => {
        getListsTotal().then(res => {
            if (res.data) {
                setTotalTest(res.data)
            }
        })
    }
    //查看检测结果
    const ViewTestResult = useCallback(
        (testid: any) => {

            getTestResult({ id: testid }).then((res: any) => {
                const { code, data, msg } = res
                if (code === 200) {
                    if (JSON.stringify(data) === '{}') {
                        console.log(TakeResultAllTime, 'TakeResultAllTime==>', localStorage.getItem('TakeResultAllTime'), testid, localStorage.getItem('CurrentTestId'), localStorage.getItem('TakeResultAllTime') === 'true' && Number(testid) === Number(localStorage.getItem('CurrentTestId')));

                        if (localStorage.getItem('TakeResultAllTime') === 'true' && Number(testid) === Number(localStorage.getItem('CurrentTestId'))) {
                            setdetectIng(true)
                            setTimeout(() => {
                                ViewTestResult(testid)
                            }, 3000);
                        }

                    } else {
                        setTesting(false)
                        setdetectIng(false)

                        const Id = CurrentTestId || localStorage.getItem('CurrentTestId')
                        history.push(`/contract_detection/${Id}`)
                    }
                } else if(code === 201){
                    if (localStorage.getItem('TakeResultAllTime') === 'true' && Number(testid) === Number(localStorage.getItem('CurrentTestId'))) {
                        setoverTimer(true)
                        setdetectIng(false)
                        setTimeout(() => {
                            ViewTestResult(testid)
                        }, 3000);
                    }
                    
                }   
                
                
                else {
                    setErrOpen(true)
                    seterrorMsg(msg)
                    localStorage.setItem('TakeResultAllTime', 'false')
                    
                }

            })
        },
        [TakeResultAllTime, CurrentTestId, history],
    )


    //查询检测状态 0 （可以继续检测）1（当前正在检测）2（检测上限）
    const GetTestStatusStart = useCallback(
        () => {

            if (!account) return

            getTestStatus({ addr: account }).then((res: any) => {

                if (res.code === 200) {
                    const { data, msg } = res
                    if (data.status === 2) {
                        setErrOpen(true)
                        seterrorMsg(msg)
                    }
                    if (data.status === 1) {

                        localStorage.setItem('CurrentTestId', data.id)
                        localStorage.setItem('TakeResultAllTime', 'true')
                        setTakeResultAllTime(true)
                        setTimeout(() => {
                            setTesting(true)
                            ViewTestResult(data.id)
                        }, 0);

                    }
                    if (data.status === 0) {
                        setTesting(false)
                        setdetectIng(false)

                        if (contrastRegex.test(AddressContract)) {
                            testAddress()
                        }

                    }
                }

                else {

                    setErrOpen(true)
                    seterrorMsg(res.msg)
                }


            })
        },
        // eslint-disable-next-line
        [AddressContract, ViewTestResult, account, selectChain],
    )


    //初始化
    const PageStart = useCallback(
        () => {
            setErrOpen(false)
            seterrorMsg('')
            setcontrastErrText('')
            setFileValue('')
            setFileShow(false)
            setcurrIndex(0)
            setAddressContract('')
            setTakeResultAllTime(false)
            setoverTimer(false)
            localStorage.setItem('TakeResultAllTime', 'false')
            
        },
        // eslint-disable-next-line
        [account],
    )


    useEffect(() => {
        localStorage.setItem('chain', 'bsc')
        handelFiret()
        handleListTotal()
        PageStart()
        // eslint-disable-next-line
        return () => {

            if (timer1) {
                clearTimeout(timer1)
            }
        }
        // eslint-disable-next-line
    }, [account])




    return <ContainerCon className="ContractDetection">
        <div className="homeContainer">
            <div className="container">
                <WidthDiv className='ContracDec'>
                    <div className="title">Triathon Contract Detection</div>
                    <div className="tabs">
                        <span className={currIndex === 0 ? 'active tab1' : 'tab1'} onClick={() => setcurrIndex(0)}>Detect with address</span>
                        <span className={currIndex === 1 ? 'active tab2' : 'tab2'} onClick={() => setcurrIndex(1)}>Detect with file</span>
                    </div>
                    {
                        Testing ? <ShowDecting>
                            {
                                overTimer?
                                <>
                                 <div className="loading"></div>
                                <div className='text'>Too many requests, please wait</div>
                                </>:<>
                                 <div className="loading"></div>
                            <div className="text">Detecting…</div>
                                </>
                            }
                           
                        </ShowDecting> : (
                            currIndex === 0 ? <div className="addreccCon">
                                <div className="select">
                                    <Select defaultValue="bsc" onChange={handleChange} dropdownClassName='dropCon' showArrow >
                                        <Option value="bsc">  <img src={bscPic} alt="" /> BSC</Option>
                                        <Option value="eth">  <img src={ethPic} alt="" /> ETH</Option>
                                    </Select>
                                </div>
                                <div className="inputCon">
                                    <Input value={AddressContract} onUserInput={val => setAddressContract(val)} placeholder='Please enter the contact address' ShowRed={contrastErrText === '' || AddressContract === ''} setcontrastErrText={setcontrastErrText} ></Input>
                                </div>
                                <div className="err">{contrastErrText}</div>
                            </div> : <div className="fileCon">
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
                        )
                    }

                    {
                        (currIndex === 0 && !Testing) ? <StyleButton onClick={styleButton.event}>{styleButton.text}</StyleButton> : (
                            !account ? <StyleButton onClick={() => {
                                toggleWalletModal()
                            }} > Connect Wallet </StyleButton> : (FileValue !== '' && !Testing && showUploadFileButton) && <StyleButton onClick={styleButton.event}>{styleButton.text}</StyleButton>
                        )
                    }


                    <div className="notice">Notice : This detection is the basic item scan, please do not treat it as the final audit report.For the final report, please contract customer service for manual audit ( email : triathonspace@gmail.com )</div>
                    <div className="detect" >
                        <span onClick={() => {
                            history.push('/contract_detection/history')
                        }} >
                            {TotalTest}+ Detected <span className='pointRight'></span>
                        </span>
                    </div>
                </WidthDiv>
            </div>
            <div className="playContainer">

           
            <div className="play1"></div>
            <div className="play2"></div>
            <div className="play3"></div>
            <div className="play4"></div>
            <div className="play5"></div>
            <div className="play6"></div>
            </div>
        </div>

        <ErrModel
            isOpen={ErrOpen}
            onDismiss={closeErrTip}
            errorMsg={errorMsg}
        ></ErrModel>
    </ContainerCon>
}