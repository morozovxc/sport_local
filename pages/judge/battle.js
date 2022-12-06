import { useState } from 'react';
import { Stack, Box, Typography, Button } from '@mui/material';
import Warnings from "../../components/Warnings"
import Punches from "../../components/Punches"
import Errors from "../../components/Errors"
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useRouter } from 'next/router'

export default function Battle() {
    const router = useRouter();
    const { name, id } = router.query;
    const [ punchRed, setPunchRed ] = useState("");
    const [ punchBlue, setPunchBlue ] = useState("");
    const [ castRed, setCastRed] = useState("");
    const [ castBlue, setCastBlue] = useState("");
    const [ warns, setWarns] = useState([false, false, false, false]);
    const [ errors, setErrors ] = useState([false, false, false, false]);

    return (
        <Stack>
            <Stack 
                left={0} right={0}
                position="absolute"
                textAlign="center"
                spacing={3}
            >
                <Stack spacing={5} alignItems="center">
                    <Box minHeight="32px" width={"100%"} sx={{background: "#3A3A3A"}}>
                        <Typography m={0.5} fontWeight={600}>Судья: {name}</Typography>
                    </Box>
                    <Box minHeight="32px" minWidth={"40%"} sx={{background: "#3A3A3A", borderRadius: "0px 10px 0px 10px"}}>
                        <Typography m={0.5} >Поединок: №{id}</Typography>
                    </Box>
                </Stack>
                <Stack direction="row" justifyContent={"center"} spacing={9}>
                    <AccountCircleRoundedIcon sx={{fontSize: 100, color: "#B47E7E"}} />
                    <AccountCircleRoundedIcon sx={{fontSize: 100, color: "#7A80B4"}} />
                </Stack>
                <Stack direction="row" justifyContent={"center"} spacing={5}>
                    <Punches score={punchRed} setScore={setPunchRed} cast={castRed} setCast={setCastRed} color={"#B47E7E"}/>
                    <Punches score={punchBlue} setScore={setPunchBlue} cast={castBlue} setCast={setCastBlue} color={"#7A80B4"}/> 
                </Stack>
            </Stack>
        </Stack>
    )
}
//DABABA
//7A80B4
/*
    
*/  