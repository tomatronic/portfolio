import NavBar from "../components/navbar"
import styles from "./css/home.module.css"
import Link from "next/link"
import Footer from "../components/footer"
import React from "react"

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
          <Link href="/about"><a href="/about">More about me</a></Link>
        </div>
          </div>
        </div>
      </div>
      </div>      
      <a  name="work" id="work" />
      <div className={styles.cs1}>
        <Link href="/work/offer-management">
          <a className={styles.csLink}>
          <div className={styles.caseStudy}>
            <div className={styles.csDescription}>
              <div className={styles.csTitle}>Case Study</div>
              <div className={styles.csInfo}>Offer Management - Rakuten Advertising</div>
            </div>          
          </div>
          </a>
        </Link>
      </div>
      <div className={styles.cs2}>
        <Link href="/">
          <a className={styles.csLink} href="#">
          <div className={styles.caseStudyRight}>
            <div className={styles.csDescriptionRight}>
              <div className={styles.csTitle}>Case Study</div>
              <div className={styles.csInfo}>Another Project - Rakuten Advertising</div>
            </div>          
          </div>
          </a>
        </Link>
        </div>
        <div className={styles.cs3}>
        <Link href="/">
          <a className={styles.csLink} href="#">
          <div className={styles.caseStudy3}>
            <div className={styles.csDescription}>
              <div className={styles.csTitle}>Case Study</div>
              <div className={styles.csInfo}>It's Brewtiful - Personal Project</div>
            </div>          
          </div>
          </a>
        </Link>
      </div>
    <Footer />
    </>   
  }
  
  export default HomePage