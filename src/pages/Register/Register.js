import axios from "axios";
import "../Register/Register.css";
import { useState } from "react";

export default function Register() {
    const [tipoMaterial, setTipoMaterial] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [ecopoint, setEcopoint] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "tipoMaterial") setTipoMaterial(value);
        else if (name === "quantidade") setQuantidade(value);
        else if (name === "ecopoint") setEcopoint(value);
    };

    const showSuccessPopup = () => {
        setPopupContent("Reciclagem enviada com sucesso!");
        setShowPopup(true);
    };

    const showErrorPopup = () => {
        setPopupContent("Erro ao enviar reciclagem. Tente novamente.");
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            type: tipoMaterial,
            quantity: quantidade,
            ecopoint: ecopoint,
        };

        try {
            await axios.post(
                "http://guizen.pythonanywhere.com/recycle/",
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            showSuccessPopup();
        } catch (error) {
            showErrorPopup();
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
            console.error("Erro ao registrar reciclagem:", error);
        }
    };
    return (
        <div className="register-container">
            <section id="registro">
                <h1>Registrar Reciclagem</h1>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label class="tipoDeMaterial" for="tipoMaterial">
                            Tipo de Material:
                        </label>
                        <select onChange={handleInputChange} id="tipoMaterial" name="tipoMaterial">
                            <option value="papel">Papel</option>
                            <option value="plastico">Plástico</option>
                            <option value="vidro">Vidro</option>
                            <option value="metal">Metal</option>
                            <option value="organico">Orgânico</option>
                        </select>
                        <br></br>
                    </div>

                    <div className="form-group">
                        <label for="quantidade">Quantidade (em gramas):</label>
                        <input
                            onChange={handleInputChange}
                            type="number"
                            id="quantidade"
                            name="quantidade"
                            min="0"
                            step="0.01"
                            required
                        />
                        <br />
                    </div>

                    <div className="form-group">
                        <label for="ecopoint">Selecione o Ecopoint:</label>
                        <select onChange={handleInputChange} id="ecopoint" name="ecopoint">
                            <option value="ecopoint1">UM</option>
                            <option value="ecopoint2">DOIS  </option>
                            <option value="ecopoint3">TRRES</option>
                            <option value="ecopoint4">QUATRO</option>
                        </select>
                        <br />
                    </div>

                    <p>Compartilhe sua reciclagem com nós!</p>
                    <br />
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept=".jpg, .pdf, .doc, .docx"
                    />
                    <br />
                    <input
                        className="btn-enviar"
                        type="submit"
                        value="Enviar"
                    />
                </form>
            </section>
            {showPopup && (
                <div className="popup">
                    <p>{popupContent}</p>
                    <button onClick={closePopup}>OK</button>
                </div>
            )}
        </div>
    );
}
