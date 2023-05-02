import { ListItem, ListItemButton, ListItemText } from "@mui/material"

type LiProps = {
    className?: string;
    children: React.ReactNode;
}

export const Li = (props:LiProps) => {
    return(
        <ListItem className={props.className}>
            <ListItemText>{props.children}</ListItemText>     
        </ListItem>
    )
}