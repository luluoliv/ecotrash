import { useState } from "react";
import "../SignUp/SignUp.css";
import axios from "axios";
export default function SignUp() {
    const [f_name, setFname] = useState("");
    const [l_name, setLname] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState("");

    const data = {
        f_name: f_name,
        l_name: l_name,
        cpf: cpf,
        email: email,
        password: password,
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "f_name") setFname(value);
        else if (name === "l_name") setLname(value);
        else if (name === "cpf") setCpf(value);
        else if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
    };

    const showSuccessPopup = () => {
        setPopupContent("Usuário registrado com sucesso!");
        setShowPopup(true);
    };

    const showErrorPopup = () => {
        setPopupContent("Erro ao registrar usuário");
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("https://guizen.pythonanywhere.com/users/", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Usuário registrado com sucesso!");
            showSuccessPopup();
        } catch (error) {
            console.error("Erro ao registrar usuário:", error);
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
            console.error("Erro ao registrar usuário:", error);
            showErrorPopup();
        }
    };
    return (
        <form action="/" onSubmit={handleSubmit} className="sign-in-form">
            <h2 className="title">Cadastre-se</h2>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                    type="text"
                    placeholder="Nome"
                    name="f_name"
                    value={data.f_name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                    type="text"
                    placeholder="Sobrenome"
                    name="l_name"
                    value={data.l_name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                    type="text"
                    placeholder="CPF"
                    name="cpf"
                    value={data.cpf}
                    onChange={handleInputChange}
                />
            </div>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                    type="text"
                    placeholder="CEP"
                    name="cep"
                    value={data.cep}
                    onChange={handleInputChange}
                />
            </div>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    value={data.email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    value={data.password}
                    onChange={handleInputChange}
                />
            </div>
            <div className="field">
                <input type="submit" value="Cadastrar" className="btn solid" />
            </div>
            <p className="social-text">Cadastre-se com as suas redes sociais</p>
            <div className="social-media">
                <a href="/" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/" className="social-icon">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="/" className="social-icon">
                    <i className="fab fa-google"></i>
                </a>
                <a href="/" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
            <p className="form-link">
                New here? <a href="/">Sign up</a>
            </p>

            {showPopup && (
                <div className="popup">
                    <p>{popupContent}</p>
                    <button onClick={closePopup}>OK</button>
                </div>
            )}
        </form>
    );
}
