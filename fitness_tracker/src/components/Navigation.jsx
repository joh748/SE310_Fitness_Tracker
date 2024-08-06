import { Link } from "react-router-dom"

function Navigation() {
    return (
        <>
            <Link to="index"><button>To Home Page</button></Link>
            <Link to="LandingPage"><button>To Landing Page</button></Link>
        </>
    )
}

export default Navigation