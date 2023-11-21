import Navbar from "../../components/NavBar/Navbar";
import img from "../../assets/4.svg";
import img2 from "../../assets/6.svg";
import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <section className="main-container">
                <div className="left-container">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Explore a{" "}
                        <span style={{ color: "#0FB07C" }}>
                            sustentabilidade e seja bonificado{" "}
                        </span>
                        por cuidar do nosso meio ambiente.
                    </motion.h1>
                    <p>
                        "O aumento previsto de 1,3 bilhão para 2,2 bilhões de
                        toneladas na produção global de lixo até 2025 destaca a
                        urgência da gestão responsável de resíduos para alcançar
                        um desenvolvimento sustentável."
                    </p>
                    <Link to={"/cadastro"}>
                        <button className="signup-btn">
                            <span>Junte-se Agora</span>
                        </button>
                    </Link>
                </div>
                <div className="right-container">
                    <img src={img} alt=""></img>
                </div>
            </section>
            <section className="middle-container">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Por que{" "}
                    <span style={{ color: "#0FB07C" }}>eu deveria </span>
                    participar?
                </motion.h1>
                <div className="middle-container-content">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        src={img2}
                        alt=""
                    />
                    <ul className="motivos-lista">
                        <li>Impacto Ambiental Positivo</li>
                        <li>Estímulo à Reciclagem</li>
                        <li>
                            Organização de Coletas e Movimentações de Reciclagem
                        </li>
                        <li>Registro e Acompanhamento de Atividades</li>
                        <Link to={"/registrar"}>
                            <button className="register-btn">
                                <span>Registre sua Reciclagem</span>
                            </button>
                        </Link>
                    </ul>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-links">
                            <a href="/">Política de Privacidade</a>
                            <a href="/">Termos de Serviço</a>
                            <a href="/">Contato</a>
                        </div>
                    </div>
                    <div className="footer-social">
                        <a href="/" target="_blank">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="/" target="_blank">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="/" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
