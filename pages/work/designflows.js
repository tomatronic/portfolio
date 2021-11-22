import NavBar from "../../components/navbar"
import styles from "./css/caseStudy.module.css"
import Image from "next/image"
import Footer from "../../components/footer"

function caseStudy() {
    return (
        <>
            <NavBar />
            <div className={styles.csIntroBannerDesignFlows}>
                <div className="mainContainer">
                    <div className="row">
                        <div className="nopad-column">
                            <div className={styles.pill}>
                                Designflows 2021
                            </div>
                            <div className={styles.csIdentity}>
                                <div className="display">Tool Hire <br />App</div>
                            </div>
                        </div>
                        <div className="nopad-double-column">    
                            <div className={styles.csIntroImage}>
                                <img src="/topBanner.png" layout="fill" className={styles.image} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.introContainer}>
                <div className="mainContainer">
                <div className="notm-row">
                    <div className="column">
                        <div className="display">About the project</div>
                    </div>
                    <div className="column">
                        <p>This is a little different to my other case studies as it was a competition in which I had only the weekend to complete the task at hand.</p>
                        <p>I received access to the brief at 7pm Friday night and had to submit my high fidelity mocks by the following Monday at 10am.</p>
                        <p>Safe to say that I drank a lot of coffee that weekend...☕</p>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <img src="/coffeeshop.png" layout="fill" className={styles.image} />
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
                        <div className="display">Overview</div>
                        <p>The brief itself requested a new mobile app to be designed to allow a user to hire a toolkit from a location nearby for a specific task.</p>
                        <p>For example I may need to put some shelves up, I would visit this app and find a location to pick a toolkit up containing required tools from a specified pick up location.</p>
                        <p>The brief specified 3 specific pages that required designing:</p>
                        <p>&bull; <b>Toolkit rental</b> - This had to include a search bar<br/>
                        &bull; <b>My rentals</b> - Manage and rack bookings<br/> 
                        &bull; <b>How it works</b> - Instructions on how to collect a toolkit</p>
                        <p>As well as an app icon and a poster that presented the screens.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="mainContainer">
                <div className="row">
                    <div className="column">
                    <div className="display">Discovery</div>
                    </div>                  
                    <div className="double-column">
                        <p>The key to any project is to ensure a thorough discovery process.</p>
                        <p>In order to understand the problem to the fullest I first reviewed the current platform and flows associated with the management of offers. I mapped out the flow within Miro using screenshots from the legacy dashboard. This ensured I had a full understanding of how the feature was already working and gain some inital insight into where improvements could be made.</p>
                        <p>However, I will not jump to conclusions without gaining input from the user.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="nopad-column">
                        <h2 className="display">Gaining insight</h2>
                        <p>In order to understand the problem to the fullest I first reviewed the current platform and flows associated with the management of offers. I mapped out the current screens in Miro to have a visual representation of the feature.</p>
                        <p>It was now time to capture some qualitative data. To do this created a small survey within a google form to distribute amongst the account management teams to help gather a better understanding of how they interacted with this feature, it was also a chance for me to understand known pain points that the team have been presented with over the years. The reason I chose the account managers was due to the level of exposure they have to both the platform and the end users. The personal connection created here often give valuable insight that may not be otherwise captured.</p>
                        <p>Once I had a pool of data collated I created a affinity diagram to help group the results I had received, this helped me to identify and prioritise points in the next step of the process. I was also able to follow up with some of the participants to further discuss their inputs. I feel this additional step is important, not only will it ensure that the survey answers are fully understood, it creates an additional layer of empathy to help understand the goal of the project.</p>
                    </div>
                </div>
                <div className="nopad-row">                    
                    <div className="column">
                        <img src="/affinitymap.jpg" alt="The affinity map was created to help understand the results from the completed user surveys" />
                    </div>
                </div>
            </div>
            <div className={styles.bgSection}>
                <div className="mainContainer">
                    <div className="top-row">
                    <div className="column">
                            <h2 className="display">Goals</h2>
                            <p>As a result of the survey data I was able to identify three main goals to focus on.</p>
                        </div>
                        <div className="double-column">
                        <div>
                            <h3>Comparison</h3>
                            <p>As a user, If I am presented with a new offer invitation I want to be able to compare it to my curret offer.</p>
                        </div>
                            <div>
                                <h3>Discovery</h3>
                                <p>There was no consistant answer to how a user would find a new offer invitation. Can I make a conistant point of discovery?</p>
                            </div>
                            <div>
                                <h3>Partnership status</h3>
                                <p>The current UI does not offer any identification of partnership status. A user wants to know if a partnership already exists.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainContainer">
                <div className="row">                    
                    <div className="column">
                        <h2 className="display">Planning</h2>
                    </div>
                    <div className="double-column">
                        <p className={styles.pSpacerBottom}>With my new knowledge I could start planning my next steps. I begun with creating a simple flowchart to illustrate the possible routes a user would take in order to accept a new offer request. I ensured to liaise with several members of user facing teams to make sure nothing was missed out and that flows made sense.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <Image src="/flowchart.png" layout="responsive" width="1116" height="766" alt="Simple flowchart of a proposed solution" />
                    </div>                    
                </div>
                <div className="row">                    
                    <div className="column">
                        <h2 className="display">sketching</h2>
                    </div>
                    <div className="double-column">                        
                        <p>Once happy with the flow I opened my notepad and began sketching some initial ideas. At this stage I scribble a lot of ideas down both illustrated and in note form, it can look like a mess but I find it helps to get all my ideas on paper. This also allows me to quickly eliminate ideas or come back to ideas at a later date if needed. As I develop an idea I start to sketch it into something of higher quality to allow me to easily translate it to a digital wireframe when the time comes.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <Image src="/sketches.png" layout="responsive" width="1116" height="766" alt="Initial sketches and ideas - A bit messy but helps me gather thoughts" />
                    </div>
                </div>
                <div className="row">                    
                    <div className="column">
                        <h2 className="display">prototypes</h2>
                    </div>
                    <div className="double-column">
                        <p>In order to validate my ideas I proceeded to complete a round of simple user testing. Rather than exposing my test candidates to my crude sketches I went ahead and created simple wireframes within sketch that I could share and gather some initial feedback. I used to Zoom to conduct interviews with the candidates and get them to complete a set of simple tasks. This first round of testing allowed me to identify that the users were wanting a dedicated landing page for offer invitations alongside the proposed notification based system.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <Image src="/digitalwireframe.png" layout="responsive" width="1116" height="766" alt="Simple flowchart of a proposed solution" />
                    </div>
                </div>
                <div className="row">                    
                    <div className="column">
                        <h2 className="display">Flow iteration</h2>
                    </div>
                    <div className="double-column">
                        <p>I continued to slowly increase the complexity of my mocks, allowing the user to gain more understanding of the goal driven outcome. Once the mockups reached a certain point I began mapping them into a map of hotspots within sketch to allow the creation of a interactive prototype. This prototype creates a more linear flow but enables a test candidate to become much more immersed in the test and provide much more beneficial feedback.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <Image src="/prototypeMap.png" layout="responsive" width="1403" height="931" alt="An example of the complex web of interactions created to allow for testing of the prototype" />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h2 className="display">User testing</h2>
                        <p>After performing a number of protoype testing sessions I came to the conclusion a couple of further design adjustments were required. This involved a round of iterations to ensure functionality was highlighted in a relevant way and that offers were made easier to compare with existing options.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h2 className="display">Outcome</h2>
                        <p>Since the updated offer management flow and UI has been implemented we have seen a reduction in the amount of support tickets raised, and account managers have reported less queries based around offer management. The account management have said that this reduction in queries has led to them having more time to focus on the users needs and build better relationships with them.</p>
                        <p>The product has only been released recently so I will continue to monitor usage through the FullStory application, allowing me to perform iterative design amends to ensure a continual progression to the applications development.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default caseStudy