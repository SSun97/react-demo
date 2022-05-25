import styles from './Form.module.css';
import Button from '../components/Button';
const Form = (props) => {
  return (
    <div id={props.id} className={styles.form}>
      <h1>{props.title}</h1>
      <form onSubmit={props.onSubmit}>
        <label>Username:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
        <Button type='submit' className={styles.button}>{props.btnName}</Button>
      </form>
    </div>
  );
};

export default Form;
