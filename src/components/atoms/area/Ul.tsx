import { Box, List, createTheme } from "@mui/material"

type UlProps = {
    children: React.ReactNode;
}

const theme = createTheme({

})

export const Ul = (props: UlProps) => {
    return (
        <Box className="member_wrap" sx={{display: 'flex'}}>
            <List sx={{display: 'flex'}}>
                {props.children}
            </List>
        </Box>
    )
}