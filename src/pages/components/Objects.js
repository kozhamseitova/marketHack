import Object from "./Object";
import {useState} from "react";
import {Link} from "react-router-dom";

function Objects({items, firstIndexOfPage, lastIndexOfPage, handleClick}) {


    return (
        <div>
                <div className={"items"} id={"items"}>
                    {
                        items.slice(firstIndexOfPage, lastIndexOfPage)
                            .map((item: any) => {
                                return (
                                    <Link to="/object" state={{ item: item }}><Object item={item} /></Link>
                                )
                            })
                    }

                </div>
        </div>
    )
}

export default Objects

