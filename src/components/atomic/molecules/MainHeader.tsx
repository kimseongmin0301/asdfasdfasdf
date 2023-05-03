import { Box, ListItemText } from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import StarIcon from '@mui/icons-material/Star';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import { Logo } from "../atoms/area/Logo";
import { Li } from "../atoms/area/Li";
import { Ul } from "../atoms/area/Ul";


type MainHeaderProps = {
    children: React.ReactNode;
}

export const MainHeader = () => {
    const loginList: (string | JSX.Element)[] = ['로그인', '회원가입', <FaceIcon />, <LocalParkingIcon />, <StarIcon />];
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
                    {loginList.map((item, index) => (
                        <Li key={index} style={liStyle}>
                            <ListItemText>{item}</ListItemText>
                        </Li>
                    ))}
                </Ul>
            </Box>
        </Box>
    )
}
