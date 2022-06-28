import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.home}>
            <h2>欢迎来到灰太狼DAPP</h2>
            <div>
                <p>本站是一个DAPP付费集合工具，请先注册账号并登录，完成订阅相关模块后即可使用本站工具，本站工具如下：</p>
                <p> 1、DEX价格查询 </p>
                <p> 2、CEX价格查询 </p>
            </div>
        </div>
    )
}
