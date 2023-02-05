import './auth.css';

export function Auth() {
    return(
        <div className="auth_wrapper">
            <div className="auth_block">
                <p>ВХОД В ЛИЧНЫЙ КАБИНЕТ</p>
                <div className="d2">
                <input className="input" type="text" placeholder="Email" />
                <input className="input"  type="password" placeholder="Пароль" />
                </div>
                <div className="d1">
                <a href="/registration">Зарегистрироваться</a>
                <button className="b1">
                    Войти
                </button>
                </div>
            </div>
        </div>
    )
}