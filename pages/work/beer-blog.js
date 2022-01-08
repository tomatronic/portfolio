import NavBar from "../../components/navbar"
import Link from "next/link"
import styles from "./css/caseStudy.module.css"
import Footer from "../../components/footer"
import ChevronLeft from "@mui/icons-material/ChevronLeft";

function beerBlog() {
    return (
        <>
            <NavBar />
            <div className={styles.csIntroBannerbb} />
            <div className={styles.introContainer}>
                <div className="display">Beer blog</div>
            </div>
            
            <div className="mainContainer">
                <div className="row">
                    <div className="column">
                        Coming soon...
                    </div>
                </div>
            </div>
            <div className="projectNavContainer">
                <div className="row">
                <div className="column">
                        <Link href="/work/offer-management">
                            <div className="pNavButton">
                            <ChevronLeft />
                                <div className="pNavTopic">
                                    <div className="pNavDirection">Previous Project</div>
                                    <div className="pNavName">Offer management</div>
                                </div>                                
                            </div>
                        </Link>
                    </div>
                    <div className="blank-column">

                        <div className="pNavDirection">&nbsp;</div>

                        <div className="pNavName">&nbsp;</div>

                    </div>                    
                </div>
            </div>

            <Footer />
        </>
    )
}

export default beerBlog