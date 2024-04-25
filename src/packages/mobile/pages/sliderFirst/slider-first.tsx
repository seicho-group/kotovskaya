import { useParams } from "react-router-dom";
export function SliderFirst() {
    let { id } = useParams<{ id: string }>();
    return(<div>
        {id == "0" ?  (<div>
            Скидка 20% на подсвечники!!!
        </div>) : ""}
        </div>
    )
}