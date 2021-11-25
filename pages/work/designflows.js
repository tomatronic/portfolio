import NavBar from "../../components/navbar"
import styles from "./css/caseStudy.module.css"
import Image from "next/image"
import Footer from "../../components/footer"

function caseStudy() {
    return (
        <>
            <NavBar />
            <div className={styles.csIntroBanner} />
            <div className={styles.introContainer}>
                    <div className="display">Tool hire app</div>
            </div>
                <div className="mainContainer">
                <div className="mainContainer">
                    <div className="row">
                        <div className="column">
                            <h1>About the project</h1>
                            <p>This is a little different to my other case studies as it was a competition in which I had only the weekend to complete the task at hand.</p>
                            <p>I received access to the brief at 7pm Friday night and had to submit my high fidelity mocks by the following Monday at 10am.</p>
                            <p>Safe to say that I drank a lot of coffee that weekend...☕</p>
                        </div>                        
                        <div className="column">
                            <Image src="/designflows.png" layout="responsive" width="394" height="214" alt="Designflows 2021 logo" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <div>
                                <h4>Role</h4>
                                <p>UX/UI Designer <span className={styles.tags}>(Sole Designer)</span></p>
                            </div>
                            <div>
                                <h4>Skills Used</h4>
                                <p>User Research, Interaction, Visual design, Prototyping &amp; Testing</p>
                            </div>
                            <div>
                                <h4>Project Duration</h4>
                                <p>8 Oct 2021 - 11 Oct 2021</p>
                            </div>
                        </div>
                        <div className="double-column">
                            <h1>Overview</h1>
                            <p>The brief itself requested a new mobile app to be designed to allow a user to hire a toolkit from a location nearby for a specific task.</p>
                            <p>For example I may need to put some shelves up, I would visit this app and find a location to pick a toolkit up containing required tools from a specified pick up location.</p>
                            <p>The brief specified 3 specific pages that required designing:</p>
                            <p>&bull; <b>Toolkit rental</b> - This had to include a search bar<br />
                                &bull; <b>My rentals</b> - Manage and rack bookings<br />
                                &bull; <b>How it works</b> - Instructions on how to collect a toolkit</p>
                            <p>As well as an app icon and a poster that presented the screens.</p>
                        </div>
                    </div>
                </div>
            </div>           
            <div className="mainContainer"> 
                <div className="row">
                    <div className="column">
                        <h1>App icon</h1>
                        <p>This was an area of the project I struggled. I have not had to design an app icon before which meant there was a bit of learning curve.</p>
                        <p>The initial step here was to make sure I was working to correct dimensions. I then spent some time understanding what was needed to create an app icon that stands out.</p>
                        <p>I spent a lot of effort and made many iterations to icon. I ended up settling on a simple icon that used the colour palette from the app to ensure a consistant expereince.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <Image src="/dfFinal.png" layout="responsive" width="1403" height="931" alt="Designflows final submission 2021" />
                        <br />
                        <h1>Outcome</h1>
                        <p>Overall I am happy with the result. However, I wish I had more time to perfect this.</p>
                        <p>The initial area I would have spent more time on would have been the research phase, I would have liked to have gained a better understanding of the competitor landscape. The addition of user interviews would have also assisted in the research and the end result.</p>
                        <h1>Final thoughts</h1>
                        <p>The competition was fun, and I will be looking out for the event again later this year. However, in the meantime I will take the judges feedback onboard and possibly revisit this project at a later date to try and improve the final result.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default caseStudy