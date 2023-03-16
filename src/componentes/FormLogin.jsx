import React from "react";
import styles from "./FormLogin.module.css";
import EyeSvg from "../assets/eyeSvg";

const FormLogin = () => {
  return (
    <section className={styles.formulario}>
      <h1>Acesse a plataforma</h1>
      <p>
        Faça login ou registre-se para começar a construir seus projetos ainda
        hoje.
      </p>

      <form className={styles.form}>
        <label htmlFor="iemail">E-mail</label>
        <input
          type="email"
          name="email"
          id="iemail"
          placeholder="Digite seu e-mail"
        />

        <div className={styles.senha}>
          <label htmlFor="ipassword">Senha</label>
          <p className={styles.esqueceuSenha}>Esqueceu a senha?</p>
        </div>
        <div className={styles.password}>
          <input
            type="password"
            name="password"
            id="ipassword"
            placeholder="Digite sua senha"
          />
          <div className={styles.olho}>
            <EyeSvg />
          </div>
        </div>

        <button>Entrar</button>
      </form>

      <p className={styles.inscrevaSe}>
        Ainda não tem uma conta? <span>Inscreva-se</span>
      </p>
    </section>
  );
};

export default FormLogin;
