import { Box, List, createTheme } from "@mui/material"

type UlProps = {
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export const Ul = (props: UlProps) => {
    
    return (
        <Box className={props.className}>
            <List style={props.style} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
                {props.children}
            </List>
        </Box>
    )
}