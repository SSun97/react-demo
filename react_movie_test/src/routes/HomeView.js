import styles from './HomeView.module.css';
const HomeView = () => {
  return ( 
    <div className={styles.homeView}>
      <div className={styles.hero_container}>
        <div className={styles.main_container}>
          <div className={styles.poster_container}>
            <a href="#"><img src="https://i.ibb.co/ThPNnzM/blade_runner.jpg" className={styles.poster} /></a>
          </div>
          <div className={styles.ticket_container}>
            <div className={styles.ticket__content}>
              <h4 className={styles.ticket__movie_title}>Blade Runner 2049</h4>
              <p className={styles.ticket__movie_slogan}>
                More human than human is our motto.
              </p>
              <p className={styles.ticket__current_price}>$28.00</p>
              <p className={styles.ticket__old_price}>$44.99</p>
              <button className={styles.ticket__buy_btn}>Buy now</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.hero_container}>
        <div className={styles.main_container}>
          <div className={styles.poster_container}>
            <a href="#"><img src="https://i.ibb.co/ThPNnzM/blade_runner.jpg" className={styles.poster} /></a>
          </div>
          <div className={styles.ticket_container}>
            <div className={styles.ticket__content}>
              <h4 className={styles.ticket__movie_title}>Blade Runner 2049</h4>
              <p className={styles.ticket__movie_slogan}>
                More human than human is our motto.
              </p>
              <p className={styles.ticket__current_price}>$28.00</p>
              <p className={styles.ticket__old_price}>$44.99</p>
              <button className={styles.ticket__buy_btn}>Buy now</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hero_container}>
        <div className={styles.main_container}>
          <div className={styles.poster_container}>
            <a href="#"><img src="https://i.ibb.co/ThPNnzM/blade_runner.jpg" className={styles.poster} /></a>
          </div>
          <div className={styles.ticket_container}>
            <div className={styles.ticket__content}>
              <h4 className={styles.ticket__movie_title}>Blade Runner 2049</h4>
              <p className={styles.ticket__movie_slogan}>
                More human than human is our motto.
              </p>
              <p className={styles.ticket__current_price}>$28.00</p>
              <p className={styles.ticket__old_price}>$44.99</p>
              <button className={styles.ticket__buy_btn}>Buy now</button>
            </div>
          </div>
        </div>
      </div>
      
        </div>
   );
}
 
export default HomeView;