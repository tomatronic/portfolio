import styles from "../pages/css/navbar.module.css"



function NavBar() {
    return <>
    <div className={styles['site-header']}>
      <div className={`${styles.wrapper} , ${styles['site-header__wrapper']}`}>
            
              <a link="/" className={styles.logo}>TOM SPENCER.</a>
            
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