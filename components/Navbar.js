import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={48} />
        <h1>HuiHui DAPP</h1>
        <ul>
          <li><Link href="/"><a>主页</a></Link></li>
          <li><Link href="/guides"><a>付费解锁内容</a></Link></li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={966} height={276} />
      </div>
    </div>
  )
}
