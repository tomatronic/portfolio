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
                    <div className="display"> Offer management</div>
            </div>
                <div className="mainContainer">
                <div className="row">
                    <div className="column">
                        <h1>About the project</h1>
                        <p>As a Publisher (a user that will promote an offer) I require a way to manage offers that are available to me from a host of available Advertisers (A user that wants to promote a business, product or marketing event), these offers are found in an Advertisers profile or the Advertiser may contact me directly with an offer proposal. I need to be able to see offers that are currently active as well as offers that may be beneficial to me and my affiliate development.</p><br /><br />
                        <h1>Solution</h1>
                        <p>The goal of the project was to focuse on the redesigning of how publishers manage affiliate based offers within the Rakuten Advertising dashboard and increase the usage of the platform. This in turn would provide a larger ROI for both Rakuten Advertising and the Publisher.</p>
                    </div>
                    <div className="column">
                    <Image src="/topBanner.png" layout="responsive" width="1116" height="766" alt="Small mock of end product" />
                    </div>
                </div>                
                <div className={`${["row"]} ${styles.bgRow}`}>
                    <div className="column">
                        <div>
                            <h1>My role</h1>
                            <p>UX Designer</p><br />                                               
                            <p><b>Project duration</b>: June 2021 - August 2021</p><br />
                        </div>
                    </div>
                    <div className="column">
                        <h1>What I did</h1>
                        <p>&bull; Sole UX designer on the project<br />
                            &bull; Stakeholders interviews to identify goals<br />
                            &bull; User interviews to help understand pain points<br />
                            &bull; Completed competitor analysis<br />
                            &bull; Created the information architecture<br />
                            &bull; Sketched out a variety of initial ideas<br />
                            &bull; Prototyping and user testing<br />
                            &bull; High fidelity mockups<br />
                        </p>
                    </div>
                </div>    
                <div className="row">                    
                    <div className="double-column">
                        <h1>Project background</h1>
                        <p>Rakuten Advertising offers a way for users to communicate using a variety of dashboards depending on their needs. These communications allow users to create and manage affiliate marketing across a range of mediums.</p>
                    </div>
                </div>               
            <div className="notm-row">
                    <div className="column">
                    <h1>Discovery</h1>
                    </div>                  
                    <div className="double-column">
                        <p>The key to any project is to ensure a thorough discovery process.</p>
                        <p>In order to understand the problem to the fullest I first reviewed the current platform and flows associated with the management of offers. I mapped out the flow within Miro using screenshots from the legacy dashboard. This ensured I had a full understanding of how the feature was already working and gain some inital insight into where improvements could be made.</p>
                        <p>However, I will not jump to conclusions without gaining input from the user.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="nopad-column">
                        <h1>Gaining insight</h1>
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
                    <div className="notm-row">
                    <div className="column">
                            <h1>Goals</h1>
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
                        <h1>Planning</h1>                   
                        <p>With my new knowledge I could start planning my next steps. I begun with creating a simple flowchart to illustrate the possible routes a user would take in order to accept a new offer request. I ensured to liaise with several members of user facing teams to make sure nothing was missed out and that flows made sense.</p>
                        </div>
                </div>
                <div className="row">
                    <div className="column">
                        <Image src="/flowchart.png" layout="responsive" width="1116" height="766" alt="Simple flowchart of a proposed solution" />
                    </div>                    
                </div>
                <div className="notm-row">                    
                    <div className="column">
                        <h1>Sketching</h1>                 
                        <p>Once happy with the flow I opened my notepad and began sketching some initial ideas. At this stage I scribble a lot of ideas down both illustrated and in note form, it can look like a mess but I find it helps to get all my ideas on paper. This also allows me to quickly eliminate ideas or come back to ideas at a later date if needed. As I develop an idea I start to sketch it into something of higher quality to allow me to easily translate it to a digital wireframe when the time comes.</p>
                    </div>                
                    <div className="column">
                        <Image src="/sketches.png" layout="responsive" width="1116" height="766" alt="Initial sketches and ideas - A bit messy but helps me gather thoughts" />
                    </div>
                </div>
                <div className="notm-row">                    
                    <div className="column">
                        <h1>Prototypes</h1>                    
                        <p>In order to validate my ideas I proceeded to complete a round of simple user testing. Rather than exposing my test candidates to my crude sketches I went ahead and created simple wireframes within sketch that I could share and gather some initial feedback. I used to Zoom to conduct interviews with the candidates and get them to complete a set of simple tasks. This first round of testing allowed me to identify that the users were wanting a dedicated landing page for offer invitations alongside the proposed notification based system.</p>
                    </div>                
                    <div className="column">
                        <Image src="/digitalwireframe.png" layout="responsive" width="1116" height="766" alt="Simple flowchart of a proposed solution" />
                    </div>
                </div>
                <div className="notm-row">                    
                    <div className="column">
                        <h1>Flow iteration</h1>                    
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
                        <h1>User testing</h1>
                        <p>After performing a number of protoype testing sessions I came to the conclusion a couple of further design adjustments were required. This involved a round of iterations to ensure functionality was highlighted in a relevant way and that offers were made easier to compare with existing options.</p>
                    </div>
                    <div className="column">
                        <Image src="/usertestingOffers.png" layout="responsive" width="1849" height="900" alt="An example of the complex web of interactions created to allow for testing of the prototype" />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <Image src="/prototypeMap.png" layout="responsive" width="1403" height="931" alt="An example of the complex web of interactions created to allow for testing of the prototype" />
                        <br />
                        <h1>Outcome</h1>
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