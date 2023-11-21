import "../Register/Register.css";

export default function Register() {
    return (
        <div className="container">
            <section id="registro">
                <h1>Registrar Reciclagem</h1>

                <form>
                    <div className="form-group">
                        <label class="tipoDeMaterial" for="tipoMaterial">
                            Tipo de Material:
                        </label>
                        <select id="tipoMaterial" name="tipoMaterial">
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
                        <select id="ecopoint" name="ecopoint">
                            <option value="ecopoint1">Ecopoint 1</option>
                            <option value="ecopoint2">Ecopoint 2</option>
                            <option value="ecopoint3">Ecopoint 3</option>
                        </select>
                        <br />
                    </div>

                    <p>
                        Compartilhe sua reciclagem com nós!
                    </p>
                    <br/>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept=".pdf, .doc, .docx"
                    />
                    <br />

                    <input class="btn-enviar" type="submit" value="Enviar" />
                </form>
            </section>
        </div>
    );
}
