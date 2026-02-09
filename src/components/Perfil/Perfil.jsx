import React from "react";
import styles from "./Perfil.module.scss";
import FotoPerfil from "../../assets/perfil.jpg";

function Perfil() {
  return (
    <section className={styles.containerTelaPerfil}>
      <article>
        <img src={FotoPerfil} alt="Foto de perfil de Nazy Fabricio" />

        <div className={styles.cardInfo}>
          <h2>Nazy Fabricio</h2>
          <h3>Voluntário ativo</h3>

          <p className={styles.paragrafoSobreMim}>
            Apaixonado por fazer a diferença na comunidade. Acredito que
            pequenas ações podem transformar vidas e estou sempre em busca de
            novas oportunidades para ajudar.
          </p>

          <address>
            <p>Recife, PE</p>
            <p>nazym931@gmail.com</p>
            <p>Membro desde 2025</p>
          </address>

          <ul className={styles.listaDeInteresse}>
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assistência Social</li>
            <li>Design</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
export default Perfil;
