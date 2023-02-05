import "./burger.css"

export function Burger(props) {
    if (props.status) return(
        <div className="block">
            <div className="item">Мыльная основа </div>
            <div className="item">Ароматизаторы</div>
            <div className="item">Формы для мыла</div>
            <div className="item">Красители</div>
            <div className="item">Эфирные масла</div>
            <div className="item">Базовые масла</div>
        </div>
    )
}