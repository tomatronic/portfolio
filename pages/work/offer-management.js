import NavBar from "../../components/navbar"
import styles from "./css/caseStudy.module.css"
import Image from "next/image"
import Footer from "../../components/footer"

function caseStudy () {
    return (
        <>
            <NavBar />
            <div className={styles.csIntroBanner}>
                <div className="mainContainer">
                    <div className={styles.csIntroduction}>
                        <div className={styles.csIdentity}>
                            <h1>Rakuten Advertising Offer Management Dashboard</h1>
                            
                        </div>
                        <div className={styles.csIntroImage}>
                            <img src="/topBanner.png" layout="fill" className={styles.image} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainContainer">
            <div className={styles.role}>
                                <div>
                                    <h3>Role</h3>
                                    <p>UX Designer <span className={styles.tags}>(Sole Designer)</span></p>
                                </div>
                                <div>
                                    <h3>Skills Used</h3>
                                    <p>User Research, Interaction, Visual design, Prototyping &amp; Testing</p>
                                </div>
                                <div>
                                    <h3>Project Duration</h3>
                                    <p>June 2021 - August 2021</p>
                                </div>
                            </div>
                <div className={styles.csOverview}>
                    <div className={styles.overview}>
                        <h2>Overview</h2>
                        <p className={styles.pSpacerBottom}>As a user I require a way to manage offers that are available to me from a host of available Advertisers, these may be found in an Advertisers profile or they may contact me directly with an offer proposal. I need to be able to see offers that are currently active as well as offers that may be beneficial to me and my affiliate development.</p>
                        <h2>Users and Audience</h2>
                    <p>The main users are the marketers that control a brands affiliate programme. They want to ensure they get the best possible return on commission. The users have a strong preference for a fast, easily accessible system.</p>
                    </div>
                    
                </div>
                <div className={styles.section}>
                    
                
                    <h2>Team &amp; Role</h2>
                    <p className={styles.pSpacerBottom}>I was the sole designer on this project only using the occasional support of other designers in the business for peer reviews, helping to ensure design consistency and aid in the creative development process. Other teams involved included a team of 7 engineers and 2 QA team members, with the project being overseen by a product owner.</p>
                    <h2>Understanding the Problem</h2>
                    <p>In order to understand the problem to the fullest I first reviewed the current platform and flows associated with the management of offers. I mapped out the current screens in Miro to have a visual representation of the feature.</p>
                    <p>I then created a small survey to distribute amongst the account management teams to help gather a better understanding of known pain points that the team have been presented with over the years. I chose the account managers due to the level of exposure they have to both the platform and the users.</p>
                <p className={styles.pSpacerBottom}>Once I had a pool of data collated I created a small affinity diagram to help group the results I had received, this helped me to identify and prioritise points in the next step of the process.</p>
                <Image src="/affinitymap.jpg" layout="responsive" width="1386" height="721" alt="The affinity map was created to help understand the results from the completed user surveys" />
                </div>
                </div>
                <div className={styles.bgSection}>
                    <div className="mainContainer">
                        <div className={styles.section}>
                            <h2><center>Points to consider</center></h2>
                            <div className={styles.insights}>
                                <div className={styles.key}>
                                    <h3>Ability to compare</h3>
                                    <p>As a user, If I am presented with a new offer invitation I want to be able to compare it to my curret offer.</p>
                                </div>
                                <div className={styles.key}>
                                    <h3>Discovery</h3>
                                    <p>There was no consistant answer to how a user would find a new offer invitation. Can I make a conistant point of discovery?</p>
                                </div>
                                <div className={styles.key}>
                                    <h3>Partnership Status</h3>
                                    <p>The current UI does not offer any identification of partnership status. A user wants to know if a partnership already exists.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainContainer">
                <div className={styles.section}>
                <h2>Planning</h2>
                <p className={styles.pSpacerBottom}>With my new knowledge I could start planning my next steps. I begun with creating a simple flowchart to illustrate the possible routes a user would take in order to accept a new offer request. I ensured to liaise with several members of user facing teams to make sure nothing was missed out and that flows made sense.</p>
                <Image src="/flowchart.png" layout="responsive" width="1116" height="766" alt="Simple flowchart of a proposed solution" />
                <p className={`${styles.pSpacerBottom} , ${styles.pSpacerTop}`}>Once happy with the flow I opened my notepad and began sketching some initial ideas. At this stage I scribble a lot of ideas down both illustrated and in note form, it can look like a mess but I find it helps to get all my ideas on paper. This also allows me to quickly eliminate ideas or come back to ideas at a later date if needed. As I develop an idea I start to sketch it into something of higher quality to allow me to easily translate it to a digital wireframe when the time comes.</p>
                <Image src="/sketches.png" layout="responsive" width="1116" height="766" alt="Initial sketches and ideas - A bit messy but helps me gather thoughts" />
                <h2>Design development</h2>
                <p className={styles.pSpacerBottom}>In order to validate my ideas I proceeded to complete a round of simple user testing. Rather than exposing my test candidates to my crude sketches I went ahead and created simple wireframes within sketch that I could share and gather some initial feedback. I used to Zoom to conduct interviews with the candidates and get them to complete a set of simple tasks. This first round of testing allowed me to identify that the users were wanting a dedicated landing page for offer invitations alongside the proposed notification based system.</p>
                <Image src="/digitalwireframe.png" layout="responsive" width="1116" height="766" alt="Simple flowchart of a proposed solution" />
                <p className={`${styles.pSpacerBottom} , ${styles.pSpacerTop}`}>I continued to slowly increase the complexity of my mocks, allowing the user to gain more understanding of the goal driven outcome. Once the mockups reach a certain point I began mapping them into a map of hotspots within sketch to allow the creation of a interactive prototype. This prototype creates a more linear flow but enables a test candidate to become much more immersed in the test and provide much more beneficial feedback.</p>
                <Image src="/prototypemap.png" layout="responsive" width="1403" height="931" alt="An example of the complex web of interactions created to allow for testing of the prototype" />
                <h2 className={styles.pSpacerTop}>Iteration</h2>
                <p className={styles.pSpacerBottom}>After performing a number of protoype testing sessions I came to the conclusion a couple of further design adjustments were required. This involved a round of iterations to ensure functionality was highlighted in a relevant way and that offers were made easier to compare with existing options.</p>
                <h2>How did it go?</h2>
                <p>Since the updated offer management flow and UI has been implemented we have seen a reduction in the amount of support tickets raised, and account managers have reported less queries based around offer management. The account management have said that this reduction in queries has led to them having more time to focus on the users needs and build better relationships with them.</p>
                <p className={styles.pSpacerBottom}>The product has only been released recently so I will continue to monitor usage through the FullStory application, allowing me to perform iterative design amends to ensure a continual progression to the applications development.</p>  
            </div>
            </div>
            <Footer />
        </>
    )
}

export default caseStudy