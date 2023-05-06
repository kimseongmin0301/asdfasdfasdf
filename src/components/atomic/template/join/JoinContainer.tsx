import { Box, Button } from "@mui/material"
import { useRef, useState } from "react"
import { regId, regPw } from "../../../../utils/modules"
import { Link, useNavigate } from "react-router-dom"


export const JoinContainer = () => {

    // error check
    const [errorId, setErrorId] = useState(["", false]);
    const [errorPw, setErrorPw] = useState(["", false]);
    const [errorCheckPw, setErrorCheckPw] = useState(["", false]);

    // localstorage members data
    const [members, setMembers] = useState<{id: string, pw: string}[]>(() => {
        const localData = localStorage.getItem('user');
        return localData ? JSON.parse(localData) : [];
    });
    
    // useRef
    const inputId = useRef<HTMLInputElement>(null);
    const inputPw = useRef<HTMLInputElement>(null);
    const inputCheckPw = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();
    
    const handleSubmit = (e:any) => {
        e.preventDefault();

        if(errorId[1] && errorPw[1] && errorCheckPw[1]){
            const formData = new FormData(e.target);
            const idValue = formData.get('id');
            const pwValue = formData.get('pw');

            const member = {
                id: idValue !== null ? idValue as string : '',
                pw: pwValue !== null ? pwValue as string : ''
            }
            
            setMembers((prevMembers) => {
                const updatedMembers = [...prevMembers, member];
                localStorage.setItem("user", JSON.stringify(updatedMembers));
                return updatedMembers;
            });

            alert("회원가입이 완료되었습니다.")
            navigate('/login');
        } else {
            alert("회원정보를 다시 입력해주세요");
        }
    }
    
    const handleChangeId = () => {
        const newUserId = inputId.current?.value || '';

        if(!regId(newUserId)) {
            setErrorId(["아이디는 4-12자, 소문자 영어+숫자로 작성바랍니다.", false])
        } else {
            setErrorId(["", true]);
            
            members.map((member: {id: string, pw: string}) => {
                if(member.id.includes(newUserId)){
                    setErrorId(["이미 사용중인 아이디입니다.", false]);
                }
            });
        }
    }
 
    const handleChangePw = () => {
        const newUserPw = inputPw.current?.value || '';
        const checkPw = inputCheckPw.current?.value || '';

        if(!regPw(newUserPw)) {
            setErrorPw(["비밀번호는 8-12자, 영어+숫자로 작성바랍니다", false])
        } else {
            setErrorPw(["", true]);
        }

        if(newUserPw !== checkPw) {
            setErrorCheckPw(['동일한 비밀번호를 작성해주세요', false]);
        } else {
            setErrorCheckPw(['', true]);
        }
    }

    const handleChangeCheckPw = () => {
        const userPw = inputPw.current?.value || '';
        const checkPw = inputCheckPw.current?.value || '';
    
        if(userPw !== checkPw) {
            setErrorCheckPw(['동일한 비밀번호를 작성해주세요', false]);
        } else {
            setErrorCheckPw(['', true]);
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
                                        <input type="text" name="id" className="join_id" onChange={handleChangeId} ref={inputId} />
                                    </Box>
                                    <span id="al_id" style={{color:'red'}}>{errorId}</span>
                                    <Box sx={{display:'flex', justifyContent:'space-between', width:'350px',margin:"10px"}}>
                                        <label style={{display:'flex', alignItems:'center'}}>패스워드</label>
                                        <input type="password" name="pw" className="join_pw" onChange={handleChangePw} ref={inputPw} />
                                    </Box>
                                    <span id="al_pw" style={{color:'red'}}>{errorPw}</span>
                                    <Box sx={{display:'flex', justifyContent:'space-between', width:'350px',margin:"10px"}}>
                                        <label style={{display:'flex', alignItems:'center'}}>패스워드 확인</label>
                                        <input type="password" name="pw" className="join_pw" onChange={handleChangeCheckPw} ref={inputCheckPw} />
                                    </Box>
                                    <span id="al_pw" style={{color:'red'}}>{errorCheckPw}</span>
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