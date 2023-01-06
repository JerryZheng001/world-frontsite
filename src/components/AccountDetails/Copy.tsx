import React from 'react'
import styled from 'styled-components'
import useCopyClipboard from '../../hooks/useCopyClipboard'

import { LinkStyledButton } from '../../theme'
// import { CheckCircle, Copy } from 'react-feather'


const CopyIcon = styled(LinkStyledButton)`
  color: #000;
  flex-shrink: 0;
  display: inline-block;
  text-decoration: none;
  font-size: 14px;
  :hover {
    text-decoration: none;

  }
  :active,
  :focus {
    text-decoration: none;
    /* color: ${({ theme }) => theme.text2}; */
  }
`
const TransactionStatusText = styled.span`
  margin-left: 0.25rem;
  font-size: 0.825rem;
  ${({ theme }) => theme.flexRowNoWrap};
  align-items: center;
`

export default function CopyHelper(props: { toCopy: string; children?: React.ReactNode,flag:any}) {
  const [isCopied, setCopied] = useCopyClipboard()
  // console.log(props.flag)

  return (
    <CopyIcon onClick={() => setCopied(props.toCopy)}>
      {isCopied ? (
        <TransactionStatusText>
        
          <TransactionStatusText></TransactionStatusText>
        </TransactionStatusText>
      ) : (
        <TransactionStatusText>
          {/* <Copy size={'20'} style={{color:props.flag === 'true' ?'#ddd':'rgba(255, 255, 255)'}} /> */}
        </TransactionStatusText>
      )}
      {isCopied ? <span>Copied </span>: props.children}
    </CopyIcon>
  )
}
