import { Li } from "../atoms/area/Li";
import { Ul } from "../atoms/area/Ul"
import Container from '@mui/system/Container';
import { MainHeaderWrap } from "../template/main/MainHeaderWrap";
import { LoginContainer } from "../template/login/LoginContainer";


export const Login = () => {
    return (
        <>
            <MainHeaderWrap />
            <LoginContainer />
        </>
    )
}