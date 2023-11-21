import "./Login.css"

export default function Login(){
    <div className="login">
            <div className="container">
                <div className="form">
                    <h1>Bem-vindo novamente!</h1>
                    <div className="form-group">
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="senha">Senha:</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Digite sua senha"
                        />
                    </div>
                    <button className=" btn" type="submit">Entrar</button>
                </div>
            </div>
        </div>
}