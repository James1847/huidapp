import Link from 'next/link'
import Image from 'next/image'
import {useContext} from "react";
import AuthContext from "../stores/authContext";

export default function Navbar() {
    const { user, login, logout } = useContext(AuthContext)
    console.log(user)
    return (
        <div className="container">
            <nav>
                <Image src="/rupee.png" width={50} height={48}/>
                <h1>HuiHui DAPP</h1>
                <ul>
                    <li><Link href="/"><a>主页</a></Link></li>
                    <li><Link href="/guides"><a>付费解锁内容</a></Link></li>
                    <li onClick={login} className="btn">登录/注册</li>
                    <li onClick={logout} className="btn">登出</li>
                </ul>
            </nav>
            <div className="banner">
                <Image src="/banner.png" width={966} height={276}/>
            </div>
        </div>
    )
}
