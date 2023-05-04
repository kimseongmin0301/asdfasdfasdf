import { Box, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { regId, regPw } from "../../../../utils/modules"
import { Link, useNavigate } from "react-router-dom"

export const JoinContainer = () => {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [errorId, setErrorId] = useState("");
    const [errorPw, setErrorPw] = useState("");
    const [checkPw, setCheckPw] = useState("");
    
    const [joinCheck, setJoinCheck] = useState(false);
    
    const navigate = useNavigate();

    const handleSubmit = (e:any) => {
        e.preventDefault();

        if(joinCheck){
            const formData = new FormData(e.target);
            const idValue = formData.get('id');
            const pwValue = formData.get('pw');
    
            const data = {
                id: idValue,
                pw: pwValue,
            }

            localStorage.setItem("user", JSON.stringify(data));
            navigate('/login');
        } else {
            alert("회원정보를 다시 입력해주세요")
        }
    }
    

    const handleChangeId = (e:any) => {
        const newUserId = e.target.value;
        setUserId(newUserId);

        if(!regId(userId)) {
            setErrorId("아이디는 4-12자, 영어+숫자로 작성바랍니다.")
        } else {
            setErrorId("");
            const localUser = localStorage.getItem("user");
            if(localUser){
                const user = JSON.parse(localUser);
                if(user.id === newUserId){
                    setErrorId("이미 사용중인 아이디입니다.");
                    setJoinCheck(false); 
                } else{
                    setErrorId("");
                    setJoinCheck(true);
                }
            }
        }
    }

    const handleChangePw = (e:any) => {
        setUserPw(e.target.value);
        console.log(e.target.value)
        if(!regPw(userPw)) {
            setErrorPw("비밀번호는 8-12자, 영어+숫자로 작성바랍니다.")
            setJoinCheck(false); 
        } else {
            setErrorPw("");
            setJoinCheck(true);
        }
    }

    const handleChangeCheckPw = (e:any) => {
        if(userPw !== e.target.value){
            setCheckPw("비밀번호가 일치하지 않습니다.")
            setJoinCheck(false); 
        } else{
            setCheckPw("")
            if(userPw !== checkPw) {
                setCheckPw("비밀번호가 일치하지 않습니다.")
                setJoinCheck(false);
            } else{
                setJoinCheck(true);
            }
        }
    }


    return (
        <Box>
            <Box sx={{width: '1180px', margin: '100px auto'}}>
                <h2 style={{margin: "0 0 0 80px"}}>회원가입</h2>
                <Box>
                    <Box sx={{display:'flex', flexDirection:'column', margin:"0 0 0 80px"}}>
                        <p>회원가입을 하시면 더욱 많은 컨텐츠를 이용하실 수 있습니다.</p> <br />
                        <h3>이용약관</h3>
                        <p>
                            이용약관 요약 <Link to="/clause" target="_blank">[상세보기]</Link>
                        </p>
                    </Box>
                    <Box sx={{display:'flex', margin: "40px", border:"3px solid gray", padding:"40px"}}>
                        <Box sx={{display:'flex', margin:'0 auto'}}>
                            <form id="join_form" onSubmit={handleSubmit}>
                                <div style={{display:"flex", flexDirection:"column"}}>
                                    <Box sx={{display:'flex', justifyContent:'space-between', width:'350px' ,margin:"10px"}}>
                                        <label style={{display:'flex', alignItems:'center'}}>아이디</label>
                                        <input type="text" name="id" className="join_id" onChange={handleChangeId}/>
                                    </Box>
                                    <span id="al_id" style={{color:'red'}}>{errorId}</span>
                                    <Box sx={{display:'flex', justifyContent:'space-between', width:'350px',margin:"10px"}}>
                                        <label style={{display:'flex', alignItems:'center'}}>패스워드</label>
                                        <input type="password" name="pw" className="join_pw" onChange={handleChangePw}/>
                                    </Box>
                                    <span id="al_pw" style={{color:'red'}}>{errorPw}</span>
                                    <Box sx={{display:'flex', justifyContent:'space-between', width:'350px',margin:"10px"}}>
                                        <label style={{display:'flex', alignItems:'center'}}>패스워드 확인</label>
                                        <input type="password" name="pw" className="join_pw" onChange={handleChangeCheckPw}/>
                                    </Box>
                                    <span id="al_pw" style={{color:'red'}}>{checkPw}</span>
                                </div>
                                <Button variant="contained" type="submit" style={{margin:'20px 0'}}>회원가입</Button>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}