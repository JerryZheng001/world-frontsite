import React from 'react'
import PcModal from "../../../components/Modal/PcModal"
import { ErrWraper } from '../styled'



export default function ErrModel({
    isOpen,
    onDismiss,
    errorMsg,
  }:  {
    isOpen:boolean,
    onDismiss:()=>void,
    errorMsg:string
  }) {
    return (
        <PcModal isOpen={isOpen} minWidth={384} maxWidth={384} onDismiss={onDismiss} minHeight={214}>
            <ErrWraper>
                <div className='notice'>Notice</div>
                <div className="info">{errorMsg}</div>
                <div className="button">OK</div>
            </ErrWraper>
        </PcModal>
    )
  }