import { FC } from "react";
import styles from "styles/components/layout.module.sass";

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__wrapper}>{children}</div>
    </div>
  );
};

export default Layout;
