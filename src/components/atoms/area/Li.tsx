import { ListItem, ListItemButton, ListItemText } from "@mui/material"

type LiProps = {
    children: React.ReactNode;
}

export const Li = (props:LiProps) => {
    return(
        <ListItem>
            <ListItemText>{props.children}</ListItemText>     
        </ListItem>
    )
}