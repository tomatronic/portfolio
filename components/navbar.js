import styles from "../pages/css/navbar.module.css"
import Link from "next/link"


function NavBar() {
    return <>
    <div className={styles['site-header']}>
      <div className={`${styles.wrapper} , ${styles['site-header__wrapper']}`}>
            <Link href="/">
              <a link="/" className={styles.logo}>TOM SPENCER.</a>
            </Link>
            <nav className={styles.nav}>
              <ul> 
                <li>
                  <a link="/"> Home </a>
                </li>
                <li>     
                  <a href="/#work"> Work </a> 
                </li>
                <li>          
                  <a link="/about"> About </a> 
                </li>
              </ul>                      
            </nav>
        </div>
    </div>
    </>
    
  }
  
  export default NavBar