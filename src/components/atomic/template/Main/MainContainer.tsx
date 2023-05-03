import Box from '@mui/material/Box';
import { Ul } from '../../atoms/area/Ul';
import { Li } from '../../atoms/area/Li';
import FaceIcon from '@mui/icons-material/Face';
import Face2Icon from '@mui/icons-material/Face2';
import Face3Icon from '@mui/icons-material/Face3';
import Face4Icon from '@mui/icons-material/Face4';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import MySlider from '../../../MySlider';

export const MainContainer = () => {
    const slider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const profileList = [
        {
            face: <FaceIcon />,
            name: 'one',   
        },
        {
            face: <Face2Icon />,
            name: 'two',   
        },
        {
            face: <Face3Icon />,
            name: 'three',   
        },
        {
            face: <Face4Icon />,
            name: 'four',   
        },
        {
            face: <FaceIcon />,
            name: 'one',   
        },
        {
            face: <Face2Icon />,
            name: 'two',   
        },
        {
            face: <Face3Icon />,
            name: 'three',   
        },
        {
            face: <Face4Icon />,
            name: 'four',   
        },        {
            face: <FaceIcon />,
            name: 'one',   
        },
        {
            face: <Face2Icon />,
            name: 'two',   
        },
        {
            face: <Face3Icon />,
            name: 'three',   
        },
        {
            face: <Face4Icon />,
            name: 'four',   
        },        {
            face: <FaceIcon />,
            name: 'one',   
        },
        {
            face: <Face2Icon />,
            name: 'two',   
        },
        {
            face: <Face3Icon />,
            name: 'three',   
        },
        {
            face: <Face4Icon />,
            name: 'four',   
        },
    ]

    return (
        <Box className="wrap flex">
            <Box className="main_bnr" style={{opacity: "1"}}>
            <img src="https://www.x1.co.kr/attachfile/2022/03/60a4bf89-d47d-4fd6-984f-e5b2739df330.png" />
                <Box className="inner">
                    <Box className="main_slide_nav">
                        <Box className="main_slide_wrap">
                            <span className="nav_title">오늘의 공개방송</span>
                            <Ul className="main_nav_list">
                                <Li className="nav_list">
                                    <h3>최프로</h3>
                                    <h5>5월 특집방송 급등주가 넘치는 시장!</h5>
                                </Li>
                            </Ul>
                        </Box>
                        <Box className="main_banner_list">
                            <div className='content_wrap'>
                                <img src="https://img.x1.co.kr/x1/expert_img/251/main_proimg_251.png" />
                            </div>
                            <div className="pro_txt_wrap flex">
                                <ul className="flex">
                                    <li>FREE LIVE</li>
                                    <li>라이브</li>
                                </ul>
                                <h2>5월 특집방송<br />급등주가 넘치는 시장!</h2>
                                <div>
                                    <span>05/03 08:30~15:30</span>
                                </div>
                                <h1>최프로</h1>
                                <ul>
                                    <li>공개방송 입장</li>
                                    <li>전문가 홈</li>
                                </ul>
                            </div>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="firstTime_x1">
      
                    <div className='firstTime_tit'>
                        <b>엑스원</b>이 <br />
                        <b>처음</b>이신가요?
                    </div>
                    <div className="firstTime_list">
                        <ul>
                            <li>X1 소개</li>
                            <li>공지사항</li>
                            <li>카카오톡 무료신청</li>
                            <li>신규 혜택</li>
                        </ul>
                    </div>   
                
            </Box>
            <Box>
                <h2 style={{marginLeft:'200px', color:'red'}}><StarIcon />라이브 방송 전문가</h2>
                <Box className="inner">
                    <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', maxWidth:'1180px'}}>
                        {profileList.map((list, index) => (
                            <li key={index} className="proList" style={{ width: '25%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', margin:"20px 0"}}>
                                <div>
                                {list.face}
                                </div>
                                <div>
                                {list.name}<br /><Button variant="contained" sx={{backgroundColor:'green'}}>방송보기</Button>
                                </div>
                            </div>
                            </li>
                        ))}
                    </ul>
                </Box>
            </Box>   
            <Box>
                <Box className="inner">
                    <MySlider />
                </Box>
            </Box>                     
        </Box>
    )
}