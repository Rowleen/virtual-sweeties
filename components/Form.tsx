import { useState } from "react";
import styles from "styles/components/form.module.sass";

const Form = () => {
  const [sender, setSender] = useState("");

  return (
    <div className={styles.form}>
      <input type="text" placeholder="Escribe tu nombre" />
    </div>
  );
};

export default Form;
