function Dropdown({opt}) {
    const options = opt
    return(
        <div className="drop-down" >
            {options.map((option) => (
                <div className={"category"}>{option}</div>
            ))}
            <div className={"category"}>Reset</div>
        </div>
    )
}

export default Dropdown