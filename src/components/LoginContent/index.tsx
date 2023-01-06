import React from 'react'
import { Card } from 'antd'
import Content from './Content'


export default function Login({ children, title }: { children: any, title?: string }): JSX.Element {
    return (
        <Content MainColor="#fff">
            <Card title={title || 'Login'} headStyle={{fontSize:28,color:'#333333'}}>
                {children}
            </Card>
        </Content>
    )
}