import React, { useEffect, useMemo, useState } from 'react'
import { useActiveWeb3React } from '../../hooks'
import { useWalletModalToggle } from '../../state/application/hooks'
import { StyleCode } from './component/StyleCode'
import { ContainerCon, FileContent, StyleButton, StyledInput, StyleSolInputUp, WidthDiv } from './styled'



// const inputRegex = RegExp(/^\d+\.?(\d{1})?$/)
const inputRegex = RegExp(/^[a-zA-Z\d]+$/)
// const inputRegex = RegExp(/^0x[a-fA-F0-9]{40}$/)
function Input({
    value,
    onUserInput,
    placeholder,
    ...rest
}: {
    value: string | number
    onUserInput: (input: string) => void
    error?: boolean
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
            placeholder={placeholder || ''}
        />

    )
}


interface BtnProp {
    disabled: boolean
    text: JSX.Element | string
    event?: () => void
}


export default function ContractDetection(): JSX.Element {

    const { account } = useActiveWeb3React()
    const toggleWalletModal = useWalletModalToggle()


    const [currIndex, setcurrIndex] = useState(1)
    const [AddressContract, setAddressContract] = useState('')

    const [FileValue, setFileValue] = useState('')
    const [FileShow, setFileShow] = useState(false)
    //上传文件
    function readSingleFile(e: any) {
        var file = e.target.files[0];
        console.log(file, 'file');

        if (!file) { return; }
        var reader = new FileReader();
        reader.onload = function (e: any) {
            var contents = e.target.result;
            setFileValue(contents)
            setFileShow(true)

        };
        reader.readAsText(file, "utf-8");
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



        return {
            text: 'Start detection',
            event: () => { },
            disabled: false
        }
    }, [
        account,
        toggleWalletModal
    ])
    useEffect(() => {
        var fileInput = document.getElementById("file-input");
        fileInput && fileInput.addEventListener("change", readSingleFile, false);
        return () => {
            fileInput && fileInput.removeEventListener("change", readSingleFile, false);
        }
    }, [FileValue])



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
                        <div className="select"></div>
                        <div className="inputCon">
                            <Input value={AddressContract} onUserInput={val => setAddressContract(val)} placeholder='Please enter the contact address'></Input>
                        </div>
                    </div>
                }
                {
                    currIndex === 1 && <div className="fileCon">
                            {
                                !FileShow ?  <div className="uploadBefore"><StyleSolInputUp >
                                    <span></span>
                                    Upload file (.sol)
                                    <input type="file" id='file-input' accept=".sol" />
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
                <div className="detect">500+ Detected <span></span></div>
            </WidthDiv>
        </div>

    </ContainerCon>
}