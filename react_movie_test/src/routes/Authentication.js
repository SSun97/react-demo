import { useState } from 'react';
import styles from './auth.module.css';
import Form from './Form';
const Authentication = (props) => {
  const [_switch, setSwitch] = useState(false);
  const handleSwitch = (status) => {
    setSwitch(status);
  };
  return (
    <div className={styles.authBackground}>
      <div className={styles.authCard}>
        <div className={styles.switchBar}>
          <div
            className={styles.switchTag}
            onClick={() => {
              handleSwitch(true);
            }}
          >
            Sign In
          </div>
          <div
            className={styles.switchTag}
            onClick={() => {
              handleSwitch(false);
            }}
          >
            Sign up
          </div>
        </div>
        {_switch && (
          <Form onSubmit={props.onSubmit} title="Sign in with your account" btnName="Sign In" />
        )}
        {!_switch && <Form title="Create a new account" btnName="Sign up" />}
      </div>
    </div>
  );
};

export default Authentication;
