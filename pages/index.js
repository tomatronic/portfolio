import NavBar from "../components/navbar"
import styles from "./css/home.module.css"
import Link from "next/link"
import Footer from "../components/footer"
import React from "react"
import Head from "next/head"

function HomePage() {

  
  React.useEffect(() => {
    const path = window.location.hash
    if (path && path.includes("#")) {
      setTimeout(() => {
        const id = path.replace("#", "")
        const el = window.document.getElementById(id)
        const r = el.getBoundingClientRect()
        window.top.scroll({
          top: pageYOffset + r.top,
          behavior: "smooth",
        })
      }, 600)
    }
  })

    return <>
  <div>
  <Head>
    <title>Tom Spencer - UX/UI Designer</title>
    <meta property="og:title" content="Tom Spencer - Ux / UI Designer" />
  </Head>
    <NavBar />
    <div className={styles.mainIntroContainer}>
      <div className={styles.introContainer}>
        <div className="top-row-intro">
          <div className="column-image">
            <div className={styles.introImg}>
              <img src="/tomspencer.png" alt="Tom Spencer - UX/UI Designer" width="120" />
            </div>
          </div>
          <div className="column">
            <div className={styles.blurb}>Hi, I'm</div>
            <div className={styles.intro}>Tom Spencer.</div>
            <div className={styles.blurb}>
          <br /><div className={styles.highlight}>UX/UI designer
          </div>
             &nbsp;focused on delivering <div className={styles.keyPoint}><span>effective</span></div> user centric designs that drive engagement.<br /><br />Currently UX Designer @ <b>Rakuten Advertising</b>.<br/><br /><br />
        </div>
      
        <div className={styles.btnContainer}>
          <Link href="#work"><button className={styles.btnintro}>See my case studies</button></Link>
        </div>
          </div>
        </div>
      </div>
      </div>      
      <a name="work" id="work" />
      <div className="mainContainer">
      <div className="row">          
          <div className="column">
          <Link href="/work/designflows"><img src="/169competition.png" alt="Designflows 2021 - Coming Soon" className="imgRound" /></Link>
          </div>
          <div className="column">
          <div className={styles.csTitle}>Designflows 2021</div>
              <h3>Tool Hire App</h3>
              <p>A competition project to create a unique UI within a short amount of time.</p>
              <Link href="/work/designflows"><button className="secondary">View Case Study &#x2192;</button></Link>
          </div>
      </div>
      <div className="row">          
          <div className="column">
          <Link href="/work/offer-management"><img src="/169offers.png" alt="Offer management section of the new dashboard for Rakuten Advertising" className="imgRound" /></Link>
          </div>
          <div className="column">
          <div className={styles.csTitle}>Rakuten Advertising</div>
              <h3>Offer Management</h3>
              <p>The updating of a legacy application to offer a modern experience for the user.</p>
              <Link href="/work/offer-management"><button className="secondary">View Case Study &#x2192;</button></Link>
          </div>
      </div>
      <div className="row">          
          <div className="column">
          <Link href="/work/brewtiful"><img src="/169brewtiful.png" alt="Brewtiful - My own project looking at beers and design" className="imgRound" /></Link>
          </div>
          <div className="column">
          <div className={styles.csTitle}>Brewtiful</div>
              <h3>Beer Blog</h3>
              <p>A personal project where I set out to capture a range of beers and breweries and talk about both the beer itself and the can (and bottle) designs.</p>
              <Link href="/work/brewtiful"><button className="secondary">View Case Study &#x2192;</button></Link>
          </div>
      </div>
      </div>
    <Footer />
    </div>
    </>   
  }
  
  export default HomePage