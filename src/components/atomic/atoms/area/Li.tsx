import { ListItem, ListItemButton, ListItemText } from "@mui/material"

type LiProps = {
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export const Li = (props:LiProps) => {
    return(
        <ListItem className={props.className} style={props.style} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            <ListItemText>{props.children}</ListItemText>     
        </ListItem>
    )
}