import { useState } from 'react';
import { Stack, Box, Typography, Button } from '@mui/material';
import Warnings from "../../components/Warnings"
import Punches from "../../components/Punches"
import Errors from "../../components/Errors"
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
            >
                <Stack spacing={8} alignItems="center">
                    <Box height="32px" width={"100%"} sx={{background: "#3A3A3A"}}>
                        <Typography m={0.5} fontWeight={600}>Судья: {name}</Typography>
                    </Box>
                    <Box height="32px" width={"40%"} sx={{background: "#3A3A3A", borderRadius: "0px 10px 0px 10px"}}>
                        <Typography m={0.5} >Поединок: №{id}</Typography>
                    </Box>
                </Stack>
            </Stack>

            <Stack p={20} direction="row" justifyContent={"center"} spacing={5}>
                <Stack sx={{background: "#DABABA"}}>
                    <Punches color="red" score={punchRed} setScore={setPunchRed} cast={castRed} setCast={setCastRed} />
                </Stack>
                <Stack sx={{background: "#7A80B4"}}>
                    <Punches color="blue" score={punchBlue} setScore={setPunchBlue} cast={castBlue} setCast={setCastBlue} /> 
                </Stack>
            </Stack>
        </Stack>
    )
}

/*
    
*/  