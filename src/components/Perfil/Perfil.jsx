import React from "react";
import styles from "./Perfil.module.scss";
import FotoPerfil from "../../assets/perfil.jpg";

function Perfil() {
  return (
    <>
      <section className={styles.perfil}>

        <article>
     <img src={FotoPerfil} alt="" />

     <div>
<h2>Nazy Fabricio</h2>
  <h3>Voluntário ativo</h3>



        <p className={styles.paragrafoSobreMim}>
          Sou uma aspirante na tecnologia, nunca me interessei muito nessa área,
          mas de 2023 pra cá começou a ser minha paixão e graças ao curso da Vai
          Na Web pude apreder muito. Muito Obriagda à Vai Na Web{" "}
        </p>

<address>
<p>Recife, PE</p>
        <p>nazym931@gmail.com</p>
        <p>Membro desde 2025</p>

</address>

<ul className={styles.AreasDeInteresse}>
 
          <li>Educação</li>
          <li>Meio Ambiente</li>
          <li>Assistência Social</li>
          <li>Design</li>
        

</ul>
     </div>

        </article>
   
        
      
        
        >
      </section>
    </>
  );
}
export default Perfil;
