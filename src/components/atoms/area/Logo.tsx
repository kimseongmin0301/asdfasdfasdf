import { Box } from "@mui/material"

export const Logo = () => {
    const style = {
        width: "96px",
        paddingTop: "16px",
        height: "48px"
    }

    return (
        <Box sx={{display:"flex", alignItems:"center"}}>
            <img src="https://img.x1.co.kr/x1/images/common/logo_x1.png" style={style} alt="X1엑스원" />
        </Box>
    ) 
}