import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const AuthRoute = ({children, user}) => {
    const navigate = useNavigate()
    useEffect ( () => {
      if (!user) {
        navigate("/signup")
      }
    },[])

    return (
        <div>
            {children}
        </div>
    )
}
    export default AuthRoute