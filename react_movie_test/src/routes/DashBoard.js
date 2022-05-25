import styles from './DashBoard.module.css';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import HomeView from './HomeView';
const DashBoard = (props) => {
  return (
  <div className={styles.dashBoard}>
    <NavBar onLogOut={props.onLogOut}/>
    <div className={styles.content}>
      <SideBar />
      {/* <div className={styles.homeView}></div> */}
      <HomeView />
    </div>
  </div>);
};
export default DashBoard;
