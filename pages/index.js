import NavBar from "../components/navbar"
import styles from "./css/home.module.css"
import Link from "next/link"
import Footer from "../components/footer"
import React from "react"
import Head from "next/head"

function HomePage() {

  <Head>
    <title>Tom Spencer - UX/UI Designer</title>
    <meta property="og:title" content="Tom Spencer - Ux / UI Designer" />
  </Head>
  
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
    <NavBar />
    <div className={styles.mainIntroContainer}>
      <div className={styles.introContainer}>
        <div className="row">
          <div className="column">
            <div className={styles.introImg}>
              <img src="/tomspencer.png" alt="Tom Spencer - UX/UI Designer" width="120" />
            </div>
            <div className={styles.intro}>Hi, I'm Tom.</div>
            <div className={styles.blurb}>
          <div className={styles.highlight}>UX/UI designer
          </div>
             &nbsp;focused on delivering <div className={styles.keyPoint}><span>effective</span></div> user centric designs that drive engagement.
        </div>
        <div className={styles.btnContainer}>
          <Link href="#work"><button className={styles.btnintro}>See what I do</button></Link>
        </div>
          </div>
        </div>
      </div>
      </div>      
      <a name="work" id="work" />
      <div className="mainContainer">
      <div className="reverse-row">          
          <div className="column">
          <Link href="/work/offer-management"><img src="/169offers.png" alt="Offer management section of the new dashboard for Rakuten Advertising" className="imgRound" /></Link>
          </div>
          <div className="column">
          <div className={styles.csTitle}>Rakuten Advertising</div>
              <h3>Offer Management</h3>
              <p>This is a project about some stuff, I need to write something captivating here?</p>
              <Link href="/work/offer-management"><button className="secondary">View Case Study &#x2192;</button></Link>
          </div>
      </div>
      <div className="reverse-row">          
          <div className="column">
          <Link href="/work/brewtiful"><img src="/169brewtiful.png" alt="Brewtiful - My own project looking at beers and design" className="imgRound" /></Link>
          </div>
          <div className="column">
          <div className={styles.csTitle}>It's Brewtiful</div>
              <h3>Beer Blog</h3>
              <p>This is a personal project where I set out to capture a range of beers and breweries and talk about both the beer itself and the can (and bottle) designs.</p>
              <Link href="/work/brewtiful"><button className="secondary">View Case Study &#x2192;</button></Link>
          </div>
      </div>
      <div className="reverse-row">          
          <div className="column">
            <img src="/169competition.png" alt="Designflows 2021 - Coming Soon" className="imgRound" />
          </div>
          <div className="column">
          <div className={styles.csTitle}>🔒 Hidden Project</div>
              <h3>Coming Soon</h3>
              <p>Due to this being a competition I am unable to share this case study until March 2022.</p>
              <Link href="/work/designflows"><button className="secondary">View Case Study &#x2192;</button></Link>
          </div>
      </div>
      </div>
    <Footer />
    </>   
  }
  
  export default HomePage