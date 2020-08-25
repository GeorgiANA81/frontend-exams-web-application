import {useRecoilState} from "recoil";
import {userAuth} from "../user/api/state";
import routes from "../routes";

function Logout() {
    const [auth, setAuth] = useRecoilState(userAuth)

    setAuth({
        authenticated: false,
        user: null
    })

    window.localStorage.clear()

    window.location.href = routes.pages.home
}

export default Logout