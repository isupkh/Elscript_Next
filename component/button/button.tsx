import Link from "next/link";
import styles from "../../styles/Home.module.css";

export const Button = (props: any) => {
  return (
    <button className={`${styles.sec_btn}`}>
      <div className={styles.icon}>{props.icon}
      </div>
      {props.name}
    </button>
  );
};

export const SecButton = (props: any) => {
  return (
    <button className={styles.more_btn}>
      <div className={styles.icon}> {props.icon}</div>
      {props.name}
    </button>
  );
};
