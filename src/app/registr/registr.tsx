import "./registr.css";

export function Registr() {
    return(
        <div className="registr_wrapper">
            <div className="registr_block">
                <p>РЕГИСТРАЦИЯ</p>
                <div className="d2">
                    <input className="input" type="text" placeholder="Email" />
                    <input className="input"  type="password" placeholder="Пароль" />
                </div>


                    <button className="b3">
                        ЗАРЕГИСТРИРОВАТЬСЯ
                    </button>

            </div>
        </div>
    )

}