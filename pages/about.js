import styles from "./css/about.module.css"
import NavBar from "../components/navbar"
import Footer from "../components/footer"


function About() {
    return <>
        <NavBar />
        <div className="mainContainer">
            <div className={styles.mainContainer}>
                <div className="row">
                    <div className="column">
                        <h2>
                            Bio
                        </h2>
                        <p>Hello! I am Tom Spencer, a user experience designer based in the south of the UK (just outside of Brighton).</p>
                        <p>Being a UX designer allows me to solve complex problems and bring the end user a pleasurable experience. I make sure that products are enjoyable, accessible and beautiful to look at. I have a passion for getting fully immersed in a problem and experimenting with a range of possible solutions.</p>
                        <p>Seeing the impact of how I can influence a user's behaviour within a product or application fascinates me. Being empathetic and understanding helps ensure that I can make a product not just work for its intended users but be something they feel comfortable with.</p>
                        <p>Currently I work for Rakuten Advertising mainly focusing on the development of affiliate products within the B2B market. Projects involve me working alongside a team spread across the globe, adding a new level of complexity to understanding user needs which can vary greatly across regions. The role allows me to become fully submerged in a problem, learning everything possible about the challenge in order to come up with a solution that will push the companies products further, making them ever more user centric. The end result is a product that leaves a user feeling accomplished, an increased likelihood of them becoming a repeat user and in turn a larger chance of increased revenue for the company.</p>
                        <p>Outside of design I enjoy the great outdoors, whether it is a hike over the South Downs or a casual stroll along the river, I find these settings allow my creative mind to wander, and sometimes allow me to come up with new angles I had not previously considered.</p>
                        <p>I'm always looking for opportunities for collaboration. Reach out and let's chat!</p>
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