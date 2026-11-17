import { Link } from "react-router-dom"
import TodoMusica from "../assets/todomusica-logo.png"

const Logo = () => {
    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col text-center">
                    <Link to={"/"}>
                        <img src={TodoMusica} alt="Todo Música" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Logo