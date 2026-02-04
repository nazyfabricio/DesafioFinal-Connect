import React from "react";
import styles from "./Inicio.module.scss";
import FotoInicio from "../../assets/img-tela-inicial.png";

function Inicio() {
  return (
    <section className={styles.inicio}>
      <div>
        <h1>Projetos Sociais que transformam</h1>
        <p>
          Conectamos sua empresa com projetos sociais impactantes. Juntos,
          criamos mudanças reais na comunidade.
        </p>
      </div>

      <img src={FotoInicio} alt="" />
    </section>
  );
}
export default Inicio;
