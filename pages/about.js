import styles from "./css/about.module.css"
import NavBar from "../components/navbar"
import Footer from "../components/footer"


function About() {
    return <>
        <NavBar />
        <div className="mainContainer">
            <div className={styles.mainContainer}>
                <div className="reverse-row">
                    <div className="column">
                        <img src="/bio.jpeg" alt="You will often find me out hiking in the South Downs National Park" className={styles.bioImg} />
                    </div>
                    <div className="double-column">
                        <h2>
                            Hello!
                        </h2>
                        <p>I'm Tom Spencer, a user experience designer based just outside of sunny Brighton, UK.</p>
                        <p>Being a UX designer allows me to solve complex problems and bring the end user a pleasurable experience. I make sure that products are enjoyable, accessible and beautiful to look at. I have a passion for getting fully immersed in a problem and experimenting with a range of possible solutions.</p>
                        <p>Seeing the impact of how I can influence a user's behaviour within a product or application fascinates me. Being empathetic and understanding helps ensure that I can make a product not just work for its intended users but be something they feel comfortable with.</p>
                        <p>I'm always looking for opportunities for collaboration. <a href="mailto:tom.m.spencer+portfolio@gmail.com">Reach out and let's chat!</a></p>
                        <button className={styles.btnintro}>Download Resume</button>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h2>Education</h2>
                        <p>Bachelor of Arts - Digital Media Design | 2011</p>
                    </div>
                    <div className="column">
                        <h2>Experience</h2>
                        <p>Rakuten Advertising | Feb 2020 - Present <br />
                            User Experience Designer
                        </p>
                        <p>
                            Rakuten Advertising | June 2018 - Feb 2020 <br />
                            Junior User Experience Designer
                        </p>
                        <p>
                            Pure360 | Feb 2016 - Jun 2018 <br />
                            Senior Creative Developer
                        </p>
                        <p>
                            Pure360 | Jun 2014 - Feb 2016 <br />
                            Creative Developer
                        </p>
                        <p>Friday Media Group | Nov 2014 - Apr 2014 <br />
                            Email Marketing Creator
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  }
  
  export default About