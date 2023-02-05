import "./new.css"
import {Card} from "./card/card";
import {useEffect, useState} from "react";
import {AssortmentItem} from "../../../model/assortment-item";
import {transport} from "../../../server";

export function New(){
    const [assortment, setAssortment] = useState<AssortmentItem>();
    useEffect(() => {
        transport.get("http://194.67.109.59:3000/assortment").then((response) => {console.log(response)})
    }, [])

    return(
        <div className="fullscreen_new">
        <h1 className="header_new">
            Новинки
        </h1>
            <div className="new_container">
            <Card name={assortment?.name || ""} price={256+"₽"} />
            <Card name={"ПРИВВВВВ"} price={199+"₽"} />
            <Card name={"ПРИВВВВВ"} price={199+"₽"} />
            <Card name={"ПРИВВВВВ"} price={199+"₽"} />
            <Card name={"ПРИВВВВВ"} price={199+"₽"} />
            <Card name={"ПРИВВВВВ"} price={199+"₽"} />
            <Card name={"ПРИВВВВВ"} price={199+"₽"} />
            <Card name={"ПРИВВВВВ"} price={199+"₽"} />
            </div>

        </div>


    )
}