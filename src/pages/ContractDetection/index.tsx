import React, { useCallback, useEffect, useMemo, useState } from 'react'
// import ethPic from '../../assets/images/tokenDetec/ethPic@2x.png'
// import bscPic from '../../assets/images/tokenDetec/bscPic@2x.png'
// // import tronPic from '../../assets/images/tokenDetec/avaPic@2x.png'
// import polyPic from '../../assets/images/tokenDetec/polyPic@2x.png'
// import avaPic from '../../assets/images/tokenDetec/tronPic@2x.png'
// import optimismPic from '../../assets/images/tokenDetec/optimismPic.png'


import ErrModel from './component/ErrModel'
import leftShowPic from '../../assets/images/tokenDetec/leftShowPic.png'
import rightShowPic from '../../assets/images/tokenDetec/rightShowPic.png'
import AddressIcon from '../../assets/images/address_icon.png'
import './antd.scss'
import { useActiveWeb3React } from '../../hooks'
import { useWalletModalToggle } from '../../state/application/hooks'
import { BottomDiv, ComingDiv, ContainerCon, IntroDiv, ShowDecting, StyleButton, WidthDiv } from './styled'
// import { Select } from 'antd';
import { useHistory } from 'react-router-dom'
import { getDetectAddressSubmit, getListsTotal, getTestStatus } from '../../utils/fetch/detect'
import { Dots, SmallLoading } from '../../components/styleds'
import { clearTimeout } from 'timers'
// const { Option } = Select;

// const inputRegex = RegExp(/^\d+\.?(\d{1})?$/)
// const inputRegex = RegExp(/^[a-zA-Z\d]+$/)
const contrastRegex = RegExp(/^0x[a-fA-F0-9]{40}$/)
// function Input({
//     value,
//     onUserInput,
//     placeholder,
//     ShowRed,
//     setcontrastErrText,
//     ...rest
// }: {
//     value: string | number
//     onUserInput: (input: string) => void
//     setcontrastErrText: (e: any) => void
//     error?: boolean
//     ShowRed?: boolean
//     placeholder?: string
// } & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>) {

//     const enforcer = (nextUserInput: string) => {
//         if (inputRegex.test(nextUserInput) || !nextUserInput) {
//             onUserInput(nextUserInput)
//         }
//     }
//     const testInput = (e: any) => {
//         if (contrastRegex.test(e.target.value)) {
//             setcontrastErrText('')
//         } else {
//             setcontrastErrText('Notice：Address is validated incorrectly')
//         }
//     }


//     return (
//         <StyledInput
//             {...rest}
//             value={value}
//             onChange={event => enforcer(event.target.value)}
//             autoComplete="off"
//             autoCorrect="off"
//             type="text"
//             ShowRed={ShowRed}
//             placeholder={placeholder || ''}
//             onBlur={event => testInput(event)}
//         />

//     )
// }


interface BtnProp {
    disabled: boolean
    text: JSX.Element | string
    event?: () => void
}
export default function ContractDetection(): JSX.Element {

    const { account } = useActiveWeb3React()
    const toggleWalletModal = useWalletModalToggle()
    const history = useHistory()

    const [currIndex, setcurrIndex] = useState(0)
    const [AddressContract, setAddressContract] = useState('')

    const [selectChain, setselectChain] = useState('BSC')


    const [contrastErrText, setcontrastErrText] = useState('')
    const [ErrOpen, setErrOpen] = useState(false)
    const [errorMsg, seterrorMsg] = useState('')

    const [detectIng, setdetectIng] = useState(false)

    const [TotalTest, setTotalTest] = useState(0)

    const [Testing, setTesting] = useState(false)
    // const [TakeResultAllTime, setTakeResultAllTime] = useState(false)
    const [overTimer, setoverTimer] = useState(false)
    let timer1: any;

    //合约地址检测
    // const detectContrast = useCallback(
    //     () => {

    //         if (!contrastRegex.test(AddressContract)) {
    //             setcontrastErrText('Notice：Address is validated incorrectly')
    //         } else {
    //             setcontrastErrText('')
    //             setdetectIng(true)
    //             GetTestStatusStart()
    //         }
    //     },
    //     // eslint-disable-next-line
    //     [AddressContract, history, account, selectChain, localStorage.getItem('chain')],
    // )
    const detectContrast =(()=>{
        history.push('/wallet_detection/detail')
    })
    //token检测
    const testAddress = (type?:number,newParams?:any) => {
        const params = {
            token_address: AddressContract,
            chain: localStorage.getItem('chain'),
            user_address: account
        }
        getDetectAddressSubmit(type===1?newParams:params).then((res: any) => {
            const { code, data, msg } = res
            if (code === 200) {
                if (JSON.stringify(data) === '{}') {
                    timer1 = setTimeout(() => {
                        testAddress()
                    }, 3000);
                } else {
                    const { id } = data

                    clearTimeout(timer1)
                    setTimeout(() => {
                        setTesting(false)
                        setdetectIng(false)
                        history.push(`/contract_detection/${id}`)
                    }, 1000);
                }
            } else {
                setErrOpen(true)
                seterrorMsg(msg)
            }
        })
    }





    //关闭错误弹框
    const closeErrTip = () => {
        setErrOpen(false)
        seterrorMsg('')
        setcontrastErrText('')
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
        if (overTimer) {
            rst.text = 'Too many requests, please wait'
            return rst
        }
        return {
            text: 'Start detection',
            event: () => { detectContrast() },
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
        overTimer,
        selectChain,
        // eslint-disable-next-line
        localStorage.getItem('chain'),
        AddressContract
    ])
    // const handleChange = (value: any) => {
    //     setselectChain(value)
    //     localStorage.setItem('chain', value)
    // }

    //检测总数
    const handleListTotal = () => {
        getListsTotal().then(res => {
            if (res.data) {
                const { total } = res.data
                setTotalTest(total)
            }
        })
            .catch(e => {
                console.log(e, 'wrong');

            })
    }


    //查询检测状态 0 （可以继续检测）1（当前正在检测）2（检测上限）
    const GetTestStatusStart = useCallback(
        () => {
            let timer2:any;

            if (!account) return

            getTestStatus({ user_address: account }).then((res: any) => {

                if (res.code === 200) {
                    const { data, msg } = res
                   
                    if (data.status === "2") {
                        setErrOpen(true)
                        seterrorMsg(msg)
                    }
                    if (data.status === "1") {
                        setAddressContract(data.address)
                        localStorage.setItem('chain', data.chain)
                        setselectChain(data.chain)
                        setTesting(true)
                        const reParams = {
                            token_address: data.address,
                            chain: data.chain,
                            user_address: account
                        }
                        timer2 = setTimeout(() => {
                            testAddress(1,reParams)
                        }, 3000);
                    }
                    if (data.status === "0") {
                        setTesting(false)
                        setdetectIng(false)
                        clearTimeout(timer2)
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
        [AddressContract, account, selectChain],
    )


    //初始化
    const PageStart = useCallback(
        () => {
            setErrOpen(false)
            seterrorMsg('')
            setcontrastErrText('')
            setcurrIndex(0)
            setAddressContract('')
            // setTakeResultAllTime(false)
            setoverTimer(false)
            localStorage.setItem('TakeResultAllTime', 'false')

        },
        // eslint-disable-next-line
        [account],
    )


    useEffect(() => {
        localStorage.setItem('chain', 'BSC')
        handleListTotal()
        PageStart()
        GetTestStatusStart()
        // eslint-disable-next-line
        return () => {

            if (timer1) {
                clearTimeout(timer1)
            }
        }
        // eslint-disable-next-line
    }, [account])




    return <ContainerCon className="ContractDetection">
        {/* 合约检测入口 */}
        <div className="homeContainer">
            {/* 内容区域 */}
            <div className="container">
                <WidthDiv className='ContracDec'>
                    <div className="title">Address Security Scan
                        <span></span></div>
                    <div className="tabs">
                    Conduct a comprehensive scan of your address for security vulnerabilities.
                    </div>
                    {
                        Testing ? <ShowDecting>
                            {
                                overTimer ?
                                    <>
                                        <div className="loading"></div>
                                        <div className='text'>Too many requests, please wait</div>
                                    </> : <>
                                        <div className="loading"></div>
                                        <div className="text">Detecting…</div>
                                    </>
                            }

                        </ShowDecting> : <div className="addreccCon">
                            {/* <div className="select">
                                <Select defaultValue="BSC" onChange={handleChange} dropdownClassName='dropCon' showArrow >
                                    <Option value="BSC">  <img src={bscPic} alt="" /> BSC</Option>
                                    <Option value="ETH">  <img src={ethPic} alt="" /> ETH</Option>
                                    <Option value="Optimism">  <img src={optimismPic} alt="" /> Optimism</Option>
                                    <Option value="Polygon">  <img src={polyPic} alt="" /> Polygon</Option>
                                    <Option value="Avalanche">  <img src={avaPic} alt="" /> Avalanche</Option>
                                </Select>
                            </div> */}
                            <div className="inputCon">
                                {/* <Input value={AddressContract} onUserInput={val => setAddressContract(val)} placeholder='Please enter the Token address' ShowRed={contrastErrText === '' || AddressContract === ''} setcontrastErrText={setcontrastErrText} ></Input> */}
                                 <img src={AddressIcon} alt="" /> <span>Your address: {account }</span>
                            </div>
                            <div className="err">{contrastErrText}</div>
                        </div>
                    }

                    {
                        !Testing && <StyleButton onClick={styleButton.event}>{styleButton.text}</StyleButton>
                    }
                  



                </WidthDiv>
            </div>
        </div>
        <IntroDiv>
            {/* <div>
                <div className="top">4</div>
                <div className="bottom">Engines</div>
            </div> */}
            <div>
                <div className="top">5</div>
                <div className="bottom">Public Chains Supported</div>
            </div>

            <div>
                <div className="top">119K+</div>
                <div className="bottom">Malicious Contracts Collected</div>
            </div>
            <div>
                <div className="top">{TotalTest || '--'} +</div>
                <div className="bottom">Scan Adresses</div>
            </div>
        </IntroDiv>
        <ComingDiv>
            <div className="tit">Address security scan</div>
            <div className="intro">Conduct a comprehensive scan of your address for security vulnerabilities</div>
            <div className="go" onClick={()=>{window.open("https://www.triathon.space/tokenDetections/#/")}}>Go</div>
        </ComingDiv>
        <BottomDiv>
            <div className="left">
                <img src={leftShowPic} alt="" />
            </div>
            <div className="right">
                <img src={rightShowPic} alt="" />
            </div>
        </BottomDiv>
        <ErrModel
            isOpen={ErrOpen}
            onDismiss={closeErrTip}
            errorMsg={errorMsg}
        ></ErrModel>
    </ContainerCon>
}