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

export const MainHeader = (props: MainHeaderProps) => {
    const loginList: (string | JSX.Element)[] = ['로그인', '회원가입', <FaceIcon />, <StarIcon />, <LocalParkingIcon />];


    return (
        <Box className="header_border" sx={{borderBottom:"1px solid #f4f4f4"}}>
            <Box className="main_header" sx={{display:'flex', justifyContent:"space-between", margin:"0 auto", overflow:"hidden", maxWidth:"1180px", minWidth:"1180px"}}>
                <Logo />
                <Ul>
                    {loginList.map((item, index) => (
                        <Li key={index}>
                            <ListItemText>{item}</ListItemText>
                        </Li>
                    ))}
                </Ul>
            </Box>
        </Box>
    )
}
