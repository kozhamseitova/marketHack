import {useState} from "react";
import {Link} from "react-router-dom";

function LoginRegister() {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <div className={"login-wrapper"}>
            <div className={"login-box"}>
                <div><Link to={'/'} ><img className={"back"} src={require("../img/back.png")}/></Link></div>
                <input className={"login-input"} placeholder={"Email"}/>
                <input className={"login-input"} placeholder={"Password"}/>
                {isLogin ?
                    <div>
                        <div className={"login-button"}>Sign In</div>
                        <div className={"login-link"} onClick={()=>setIsLogin(false)}>
                            <a>Sign Up</a>
                        </div>
                    </div>
                    :
                    <div>
                        <div className={"login-button"}>Sign Up</div>
                        <div className={"login-link"} onClick={()=>setIsLogin(true)}>
                            <a>Sign In</a>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default LoginRegister
