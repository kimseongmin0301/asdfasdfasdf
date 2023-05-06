import { Box, ListItemText } from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import StarIcon from '@mui/icons-material/Star';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import { Logo } from "../atoms/area/Logo";
import { Li } from "../atoms/area/Li";
import { Ul } from "../atoms/area/Ul";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"

export const MainHeader = () => {

    const navigate = useNavigate();

      const [isLoggedIn, setIsLoggedIn] = useState(() => {
      const loggedIn = localStorage.getItem("login") === 'true';

      return loggedIn;
   });

    useEffect(() => {
        const loggedIn = localStorage.getItem("login") === 'true';
        
        if(loggedIn) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
    }, [isLoggedIn])

    const handleLoggedOut = () => {
        localStorage.setItem('loggedInUser', '');
        localStorage.setItem('login', 'false');

        setIsLoggedIn(false);
        navigate('/');
      }
    

    const loginFalse: (string | JSX.Element)[] = [<Link to="/login">로그인</Link>, <Link to="/join">회원가입</Link>, <Link to='/login'><FaceIcon /></Link>, <LocalParkingIcon />, <StarIcon />];
    const loginTrue: (string | JSX.Element)[] = [<Box onClick={handleLoggedOut}>로그아웃</Box>, <Link to={`/mypage/${localStorage.getItem("loggedInUser")}`}><FaceIcon /></Link>, <LocalParkingIcon />, <StarIcon />]    
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
                            <ListItemText sx={{cursor:"pointer"}}>{item}</ListItemText>
                          </Li>
                        ))
                      )}
                </Ul>
            </Box>
        </Box>
    )
}
