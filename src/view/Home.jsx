import React from 'react';
import Input from '../components/Input/Input';
import styles from './Home.module.css';
import GoogleLogo from '../assets/Google_logo.png';
import { ReactComponent as MainImage } from '../assets/image.svg';

const Home = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.rightContainer}>
        <div>
          <header className={styles.header}>
            <p className={styles.titleh2}>Bem vindo de volta</p>
            <h1 className={styles.titleh1}>Faça login na sua conta</h1>
          </header>
          <form className={styles.body}>
            <Input
              label="E-mail"
              type="email"
              name="E-mail"
              maxLength={150}
              required
            />
            <Input
              label="Senha"
              type="password"
              name="Senha"
              maxLength={100}
              required
            />
            <div className={styles.selects}>
              <label className={styles.labelCheckbox}>
                <input type="radio" /> Lembre de mim
              </label>
              <a href="/">Esqueceu a senha?</a>
            </div>
            <div className={styles.btnSection}>
              <button className={styles.btn1} type="submit">
                Entrar
              </button>
              <button className={styles.btn2}>
                <img src={GoogleLogo} alt="" />
                <p style={{ paddingLeft: '1rem' }}>
                  Ou faça login com o Google
                </p>
              </button>
            </div>
          </form>
          <div className={styles.noAccount}>
            <p>
              Não tem uma conta? <a href="/">Cadastre-se</a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.leftContainer}>
        <MainImage className={styles.mainImg} />
      </div>
    </div>
  );
};

export default Home;
