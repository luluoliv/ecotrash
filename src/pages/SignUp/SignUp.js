import "../SignUp/SignUp.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SignUp() {
    const [errorPopup, setErrorPopup] = useState(false);

    const showErrorPopup = () => {
        setErrorPopup(true);
        setTimeout(() => {
            setErrorPopup(false);
        }, 3000);
    };

    const [showLoginForm, setShowLoginForm] = useState(false);

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        cpf: "",
        cep: "",
        senha: "",
    });

    const handleChange = (e) => {   
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8001/coletor",
                formData
            );

            if (response.status >= 200 && response.status < 300) {
                console.log("Cadastro realizado com sucesso!");
                setShowLoginForm(true);
            } else {
                console.error("Erro ao cadastrar. Código:", response.status);
                showErrorPopup();
            }
        } catch (error) {
            console.error("Erro ao realizar a requisição:", error.message);
            showErrorPopup();
        }
    };
    return (
        <div className="signup">
            <div className="container">
                {!showLoginForm ? (
                    <form className="form" onSubmit={handleSubmit}>
                        <h1>Cadastre-se</h1>
                        <div className="form-group">
                            <label htmlFor="nome">Nome:</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Digite seu nome"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Digite seu e-mail"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpf">CPF:</label>
                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                placeholder="Digite seu CPF"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cep">CEP:</label>
                            <input
                                type="text"
                                id="cep"
                                name="cep"
                                placeholder="Digite seu CEP"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                placeholder="Digite sua senha"
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="sign-btn">
                            Cadastrar
                        </button>
                    </form>
                ) : (
                    <div className="login-form">
                        <h1>Login</h1>

                        <Link to={"/entrar"}>
                            <button
                                className="login-btn"
                                onClick={() => setShowLoginForm(false)}
                            >
                                Voltar
                            </button>
                        </Link>
                    </div>
                )}
            </div>
            {errorPopup && (
                <div className="error-popup">
                    <p>Ocorreu um erro. Tente novamente.</p>
                </div>
            )}
        </div>
    );
}
