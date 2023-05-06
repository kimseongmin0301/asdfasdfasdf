import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Member {
    id: string;
    pw: string;
}

interface MyPageData {
    id: string | JSX.Element | null;
    pw: string | JSX.Element | null;
    button: string | JSX.Element | null;
}

export const MypageContainer = () =>{

    const [userInfo, setUserInfo] = useState<Member>({id: '', pw: ''});
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("loggedInUser");
        const data = localStorage.getItem("user");
        const members = JSON.parse(data!);

        members.map((member: Member) => {
            if(member.id === user!){
                setUserInfo({id: member.id, pw: member.pw});
            }
        })
    }, []);
    
    const createData = (
        id: string | JSX.Element | null,
        pw: string | JSX.Element | null,
        button: string | JSX.Element | null,
    ): MyPageData => ({
        id, pw, button
    });

    const handleWithDrawal = () => {
        const confirmMsg = '정말로 탈퇴하시겠습니까?';
        const result: boolean = window.confirm(confirmMsg);
        if(result) {
            const loggedInUser = localStorage.getItem("loggedInUser");

            const data = localStorage.getItem("user");
            const members = JSON.parse(data!);
            const newMembers = members.filter((member: Member) => {
                return member.id !== loggedInUser;
            });        
            const confirmMsg = "정말로 탈퇴하시겠습니가?"
            const result: boolean = window.confirm(confirmMsg);
            if(result){
                localStorage.setItem("user", JSON.stringify(newMembers));
                localStorage.setItem("loggedInUser", '');
                localStorage.setItem('login', 'false');
                alert('다시 만날 기회가 있으면 좋겠습니다.');

                navigate('/');
            } else {
                alert('다시 한번 생각해주셔서 감사합니다!');
            }

        } else{
            alert('다시 한번 생각해주셔서 감사합니다!');
        }
    }

    const rows = [
        createData('ID', userInfo.id, null),
        createData('PW', userInfo.pw, null),
        createData(<Button onClick={handleWithDrawal}>회원탈퇴</Button>, null, null),
    ]

    return (
        <>
            <Box className="wrap flex">
                <Box className="inner">
                    <Box className="mypage_table">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>마이페이지</TableCell>
                                        <TableCell align="left"></TableCell>
                                        <TableCell align="left"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row">{row.id}</TableCell>
                                            <TableCell align="left">{row.pw}</TableCell>
                                            <TableCell align="left">{row.button}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </Box>
        </>
    );
}