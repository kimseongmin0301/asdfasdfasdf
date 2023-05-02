import { Box } from "@mui/material"

interface HeaderProps {
    children: React.ReactNode
}

export const Header = (props: HeaderProps) => {

    return (
        <Box className="header" sx={{height:"120px"}}>
            {props.children}
        </Box>
    
    )
    
}