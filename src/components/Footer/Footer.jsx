import React from "react";
import Logo from "../../assets/logo.png";
import WhatsApp from "../../assets/whatsapp.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footerLogo}>
        <img src={Logo} alt="Logo do Connect" />
        <h2>Connect</h2>
      </div>

      <p>
        © 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto
        destinado exclusivamente a fins educativos.
      </p>

      <nav className={styles.redesSociaisFooter}>
        <img src={WhatsApp} alt="Logo do WhatsApp" />
        <img src={Instagram} alt="Logo do Instagram" />
        <img src={LinkedIn} alt="Logo do LinkedIn" />
      </nav>
    </section>
  );
}
export default Footer;
