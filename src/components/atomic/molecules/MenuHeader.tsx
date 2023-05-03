import { Box, ListItem, ListItemText } from "@mui/material";
import { Ul } from "../atoms/area/Ul";
import { Li } from "../atoms/area/Li";
import React, { useState } from "react";

type MenuHedaer = {
    children: React.ReactNode;
}

export const MenuHeader = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const list = [
        {
            text: '전문가방송',
            children: [
                {text: 'Live방송'},
                {text: '수익률뽐내기'},
                {text: '감사후기'}
            ]
        },
        {
            text: '카톡문자',
            children: [
                {text: '카카오톡리딩'},
                {test: '카톡무료체험'},
                {test: '추천주 수익률'}
            ]
        },
        {
            text: '아카데미'
        },
        {
            text: '투자전략',
            children: [
                {text: '투자전략'},
                {text: '오늘의 리포트'},
                {text: '모멘텀이슈'}
            ]
        },
        {
            text: '공지사항',
            children: [
                {text: '공지사항'},
                {text: '이벤트'}
            ]
        },
        {
            text: 'X1신규가이드',
            children: [
                {text: "X1신규가이드"},
                {text: "WHY? X1"},
                {text: "신규가입혜택"},
                {text: "멘토찾기"}
            ]
        },
        {
            text: '로보스탁',
            children: [
                {text: "로보스탁"},
                {text: "로보퀀트"}
            ]
        },
    ]

    const parentUlStyle = {
        display: 'flex',
        listStyle: 'none',
        padding: '10px 0',
        alignItems: 'flex-start',
        height: isHovered ? '300px' : '60px',
        border: "1px solid #f4f4f4",
        margin: "0 auto",
        width: '100%',
        maxWidth: '1180px',
        minWidth: '1180px',
        backgroundColor: 'white',
        zIndex: 10,
    }

    const parentLiStyle = {
        flex: 1,
        lineHeight: 'normal',
        alineItems: 'baseline',
    }   

    const menuHeaderStyle = {
        height: isHovered ? '300px' : '60px',

    }


    return (
        <Box className="menu_header" style={menuHeaderStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Ul className="menu_list" style={parentUlStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {list.map((item, index) => (
                        <Li key={index} style={parentLiStyle}>
                            <ListItemText>{item.text}</ListItemText>
                            {item.children && item.children.length > 0 && isHovered && (
                                <Ul>                                 
                                    {item.children?.map((child, childIndex) => (
                                        <Li className="sub_menu" key={childIndex} style={{padding: 0, textAlign:'center', flexDirection:'column'}}>{child.text}</Li>
                                    ))}
                                </Ul>   
                            )}
                        </Li>
                    ))
                }
            </Ul>
        </Box>
    )
}