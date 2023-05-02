import { Box, List, createTheme } from "@mui/material"

type UlProps = {
    className?: string;
    children: React.ReactNode;
}

const theme = createTheme({

})

export const Ul = (props: UlProps) => {
    return (
        <Box  className={props.className}>
            <List>
                {props.children}
            </List>
        </Box>
    )
}