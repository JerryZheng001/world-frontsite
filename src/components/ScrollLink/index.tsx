/* eslint-disable */
// import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

export default function Links({ href, key, children }: { href: string, key?: string, children: any }) {
    const [aLabel, setA] = useState(false)
    const [id, setId] = useState("")
    useEffect(() => {

        const id = href.split("#")[1]
        if (id) {
            setA(false)
            setId(id)
        } else {
            setA(true)
        }
    }, [href])
    const handleClick = () => {
        if (id) {
            const element = document.getElementById(id);
            element?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        }
    }
    return (
        <>
            {
                aLabel ?
                    <a href={href} key={key}>
                        {children}
                    </a> :
                    <span onClick={() => handleClick()}>
                        {children}
                    </span>
            }
        </>
    )
}