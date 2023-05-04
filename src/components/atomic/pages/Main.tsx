import { useEffect, useState } from "react"
import { MainContainer } from "../template/main/MainContainer"
import { MainHeaderWrap } from "../template/main/MainHeaderWrap"

export const Main = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     const loginStatus = localStorage.getItem('login') === "true" ? true : false;
    //     setIsLoggedIn(loginStatus);
    // }, []);
    return(
        <>
            <MainHeaderWrap />
            <MainContainer />
        </>
    )
}