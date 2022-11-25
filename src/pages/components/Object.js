function Object({item}) {

    return(
        <div className={"object"}>
            <div className={"image-wrapper"}>
                <img className={"img"} src={item.img}/>
            </div>
            <div>
                <div className={"title"}>{item.name}</div>
                <div className={"desc"}>{item.description}</div>
                <div className={"price"}>{item.price} тг</div>
            </div>
        </div>
    )
}

export default Object
