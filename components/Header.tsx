import Image from "next/image";

import styles from "styles/components/header.module.sass";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Image
          src="/images/logo-cochescom.png"
          alt="Logo Coches.com"
          width="108"
          height="32"
        />

        <h1 className={styles.title}>Bomboncitos virtuales</h1>
      </div>
    </header>
  );
};

export default Header;
