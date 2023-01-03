import * as React from 'react'
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const author = data.site.siteMetadata.author.name
    return (
        <Layout location={location} title={siteTitle} author={author}>
            <Seo title="about" />
            <div className={StyleSheet.blog__section}>
                <h1>about</h1>
                <h2>プロフィール</h2>

                <p>ど、ども…(´･_･`)<br />
                    親交の深い間では「くろさん」と呼ばれていますが、ぷりえもんさん、ぷりめのんさん、ぷりちゃん、と呼ばれることもあります。
                    ちなみに、PRiMENON の意味は…</p>

                <ul>
                    <li>prime<ul>
                        <li>「主要な」「重要な」「優良の」「最良の」という形容詞</li>
                        <li>「全盛」「盛時」「初期」「春」「青春」という名詞</li></ul>
                    </li>
                    <li>non<ul>
                        <li>「非…」「不…」「無…」という接頭辞</li>
                    </ul></li>
                </ul>

                <p>の2つをあわせた造語です。</p>

                <p>色々なウェブサービスやゲームのアカウントとして Kuro を取得するのは困難なので、誰ともかぶらない造語を作りました。
                    Kuro334 のようにアカウント名に数字をつければ重複を回避できますが、さすがにカッコワルイのでやめました。</p>

                <h2>PC環境</h2>

                <h3>ゲームPC</h3>
                <ul>
                    <li>PCケース: Antec P100</li>
                    <li>電源ユニット: unknown</li>
                    <li>OS: Windows 10 Home 64bit</li>
                    <li>マザーボード: ASUS H97-PRO</li>
                    <li>CPU: Intel Core i7-4790</li>
                    <li>RAM: 16GiB DDR3 PC3-12800 8GB*2</li>
                    <li>SSD: Crucial CT1000MX500SSD1（1000GiB）</li>
                    <li>グラフィックカード: MSI GTX 2060 SUPER GAMING 8G</li>
                    <li>モニター: DELL S2721DGF*2</li>
                    <li>イヤフォン: Shure SE215</li>
                    <li>マウス: Logicool G603 Wireless</li>
                    <li>マウスパッド: Steelseries Qck heavy</li>
                    <li>キーボード: Topre Realforce108UDK</li>
                    <li>ゲームパッド:Xbox 360 Controller for Windows</li>
                    <li>ハンドルコントローラ:Thrustmaster T150</li>
                </ul>

                <h2>利用サービス</h2>
                <ul>
                    <li><a href="https://twitter.com/PRiMENON">Twitter</a></li>
                    <li><a href="https://steampowered.com/id/PRiMENON">Steam</a></li>
                    <li><a href="https://github.com/PRiMENON">GitHub</a></li>
                    <li><a href="https://truckersmp.com/user/266282">TruckersMP</a></li>
                    <li>Discord: <code className="language-text">PRiMENON#0371</code></li>
                    <li>LINE: やってません</li>
                    <li>Pinterest: やってません</li>
                    <li>Instagram: やってません</li>
                    <li>Tumblr: やってません</li>
                    <li>ICQ: 昔やってた</li>
                    <li>Skype: やってたけどほとんど使ってない</li>
                    <li>mixi: やってたけど退会した</li>
                    <li>Facebook: 興味本位でアカウント作って退会した</li>
                </ul>
                <Link to="/">別のページへ</Link>
            </div>
        </Layout>
    )
}

export default AboutPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                author {
                    name
                }
            }
        }
    }
`