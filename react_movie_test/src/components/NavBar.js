import styles from './NavBar.module.css';
const NavBar = (props) => {
  return ( 
    <div className={styles.container}>
      <nav className={styles.nav}>
        <a className={styles.text}>Cinema Guru</a>
        <div className={styles.divRight}>
          <a className={styles.text}>Welcom</a>
          <a onClick={props.onLogOut} className={styles.logout}>Log Out</a>
        </div>
      </nav>
    </div>
   );
}
 
export default NavBar;