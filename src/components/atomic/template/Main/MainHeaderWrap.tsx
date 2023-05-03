import { MainHeader } from "../../molecules/MainHeader";
import { MenuHeader } from "../../molecules/MenuHeader";
import { HeaderWrap } from "../../organism/HeaderWrap";

export const MainHeaderWrap = () => {
    
    return (
        <HeaderWrap>
            <MainHeader />
            <MenuHeader />
        </HeaderWrap>
    )
}
