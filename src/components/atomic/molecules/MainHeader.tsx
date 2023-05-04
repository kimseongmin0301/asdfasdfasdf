import { Box, ListItemText } from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import StarIcon from '@mui/icons-material/Star';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import { Logo } from "../atoms/area/Logo";
import { Li } from "../atoms/area/Li";
import { Ul } from "../atoms/area/Ul";
import { useState } from "react";
import { Link } from "react-router-dom";


type MainHeaderProps = {
    children: React.ReactNode;
}

export const MainHeader = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const loginFalse: (string | JSX.Element)[] = [<Link to="/login">로그인</Link>, <Link to="/join">회원가입</Link>, <FaceIcon />, <LocalParkingIcon />, <StarIcon />];
    const loginTrue: (string | JSX.Element)[] = ['로그아웃', <FaceIcon />, <LocalParkingIcon />, <StarIcon />]
    
    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    const ulStyle = {
        display: 'flex',
        flexDecoration: 'column',
        height:"50px",
    }

    const liStyle = {
        display: 'flex',
        flex: 1,
        width:'85px',
        height: '50px',
        padding: '0 8px'
    }

    return (
        <Box className="header_border" sx={{borderBottom:"1px solid #f4f4f4"}}>
            <Box className="main_header" sx={{display:'flex', justifyContent:"space-between", margin:"0 auto", overflow:"hidden", maxWidth:"1180px", minWidth:"1180px"}}>
                <Logo />
                <Ul style={ulStyle}>
                    {!isLoggedIn ? (
                        loginFalse.map((item, index) => (
                          <Li key={index} style={liStyle}>
                            <ListItemText>{item}</ListItemText>
                          </Li>
                        ))
                      ) : (
                        loginTrue.map((item, index) => (
                          <Li key={index} style={liStyle}>
                            <ListItemText>{item}</ListItemText>
                          </Li>
                        ))
                      )}
                </Ul>
            </Box>
        </Box>
    )
}
