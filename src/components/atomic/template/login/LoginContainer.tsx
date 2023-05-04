import { Box, Button } from "@mui/material"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

export const LoginContainer = () => {
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e:any) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const idValue = formData.get('id');
        const pwValue = formData.get('password');
        
        const local = localStorage.getItem('user');
        const data = JSON.parse(local!);
        
        if(idValue == data.id && pwValue == data.pw){
            localStorage.setItem("login", String(true));
            navigate('/');
        } else{
            setShowAlert(true);
        }

    }

    return (
        <Box className="container">
            <Box className="sub_container" sx={{width:'1180px', margin:'0 auto', border:'1px solid black'}}>
                <p className="location">
                    <span>홈 </span><span>&gt; 로그인</span>
                </p>
                <Box id="login_text">
                    <h2>로그인</h2>
                    <p>
                        로그인을 하세요<br />
                        즐거운 방송 즐기시길 바랍니다
                    </p>
                </Box>
                <Box className="login_box">
                    <form className='login_form' onSubmit={handleSubmit} id="login_f">
                        <Box id='login'>
                            <div id='login_input'>
                                <input type="text" id='id' size={16} placeholder="LOGIN" name="id"/>
                                <input type="password" id="password" size={16} placeholder="비밀번호" name="password"/>
                            </div>
                            <div id='login_button'>
                                <Button variant="contained" type="submit">확인</Button>
                            </div>
                        </Box>
                        <Box id="join">
                            <span>회원가입을 하시면 편리하게 이용하실 수 있습니다.</span> <Link to='/join'>회원가입</Link>
                        </Box>
                        {showAlert && (
                            <Alert severity="error" onClose={() => setShowAlert(false)}>아이디나 비밀번호가 잘못됐습니다.</Alert> 
                        )}
                    </form>
                </Box>
            </Box>
        </Box>
    )
}
