import React from "react";
import Mutirao from "../../assets/mutirao.png";
import Futuro from "../../assets/futuro.png";
import Familia from "../../assets/familia.png";
import Esporte from "../../assets/esporte.png";
import Conecta from "../../assets/conecta.png";
import Aulas from "../../assets/aulas.png";

import styles from "./AcoesDaConnect.module.scss";

function AcoesDaConnect() {
  return (
    <>
      <section className={styles.acoesDaConnect}>
        <h2>Ações da Connect</h2>
        <p>
          Junte-se a quem acredita na mudança. Apoie, participe e transforme
          vidas através de ações sociais que geram impacto real nas comunidades.
        </p>

        <section>
          <article>
            <img src={Mutirao} alt="" />
            <h3>Mutirão de reciclagem</h3>
            <p>
              Coletar materiais recicláveis e orientar sobre descarte
              consciente.
            </p>
            <button>Quero participar</button>
          </article>

          <article>
            <img src={Aulas} alt="" />
            <h3>Aulas de Tecnologia</h3>
            <p>
              Ensinar noções básicas de informática, internet segura e
              programação. Preparar jovens para o mercado de trabalho digital.
            </p>
            <button>Quero participar</button>
          </article>

          <article>
            <img src={Esporte} alt="" />
            <h3>Esporte e Inclusão</h3>
            <p>
              Organizar treinos e jogos que incentivem a participação de todos.
              Promover disciplina, saúde e trabalho em equipe entre jovens.
            </p>
            <button>Quero participar</button>
          </article>

          <article>
            .
            <img src={Familia} alt="" />
            <h3>Instituto grande familia</h3>
            <p>
              Contribua com alimentos não perecíveis e ajude famílias em
              situação de vulnerabilidade.
            </p>
            <button>Quero participar</button>
          </article>

          <article>
            <img src={Futuro} alt="" />
            <h3>Projeto Futuro na Escola</h3>
            <p>
              Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens
              a continuarem seus estudos com mais estrutura.
            </p>
            <button>Quero participar</button>
          </article>

          <article>
            <img src={Conecta} alt="" />
            <h3>Instituto Conecta Jovem</h3>
            <p>
              Doe computadores usados, tablets ou celulares em bom estado para
              permitir que jovens tenham acesso ao mundo digital.
            </p>
            <button>Quero participar</button>
          </article>
        </section>
      </section>
    </>
  );
}
export default AcoesDaConnect;
