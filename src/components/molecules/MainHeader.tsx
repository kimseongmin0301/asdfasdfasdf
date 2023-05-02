import { Box, ListItemText } from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import { Logo } from "../atoms/area/Logo";
import { Li } from "../atoms/area/Li";
import { Ul } from "../atoms/area/Ul";


type MainHeaderProps = {
    children: React.ReactNode;
}

export const MainHeader = (props: MainHeaderProps) => {
    const loginList:(string | Element) = ['로그인', '회원가입', <FaceIcon />]
    const list = ['전문가방송', '카톡 문자', '아카데미', '투자전략', '공지사항', 'X1신규가이드', '로보스탁', 'X1 NOTICE'];


    return (
        <Box className="header_border" sx={{borderBottom:"1px solid #f4f4f4"}}>
            <Box className="main_header" sx={{display:'flex', justifyContent:"space-between", margin:"0 auto", overflow:"hidden", maxWidth:"1180px", minWidth:"1180px"}}>
                <Logo />
                <Ul>
                    {list.map((item, index) => (
                        <Li key={index}>
                            <ListItemText>{item}</ListItemText>
                        </Li>
                    ))}
                </Ul>
            </Box>
        </Box>
    )
}
