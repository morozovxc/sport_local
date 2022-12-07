import { useState } from 'react';
import { Stack, Box, Typography, Button } from '@mui/material';
import Warnings from "../../components/Warnings"
import Punches from "../../components/Punches"
import Errors from "../../components/Errors"
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useRouter } from 'next/router'
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)({
    color: "black",
    border: "1px",
    backgroundColor: "#FFFFFF",
    '&:hover': {
        color: "#FFFFFF",
        backgroundColor: "#3A3A3A",
    },
});

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
                    <Box minHeight="32px" width={"100%"} sx={{boxShadow: "0px 2px 0px 1px rgba(0, 0, 0, 0.2)", background: "#3A3A3A"}}>
                        <Typography m={0.5} fontWeight={600}>Судья: {name}</Typography>
                    </Box>
                    <Box minHeight="32px" minWidth={"40%"} sx={{boxShadow: "0px 2px 0px 1px rgba(0, 0, 0, 0.2)", background: "#3A3A3A", borderRadius: "0px 10px 0px 10px"}}>
                        <Typography m={0.5} >Поединок: №{id}</Typography>
                    </Box>
                </Stack>
                <Stack direction="row" justifyContent={"center"} spacing={9}>
                    <PersonRoundedIcon sx={{fontSize: 100, color: "#B47E7E", webkitFilter: "drop-shadow( 0px 2px 1px black )", filter: "drop-shadow( 0px 2px 1px black )"}} />
                    <PersonRoundedIcon sx={{fontSize: 100, color: "#7A80B4", webkitFilter: "drop-shadow( 0px 2px 1px black )", filter: "drop-shadow( 0px 2px 1px black )"}} />
                </Stack>
                <Stack direction="row" justifyContent={"center"} spacing={5}>
                    <Punches score={punchRed} setScore={setPunchRed} cast={castRed} setCast={setCastRed} color={"#B47E7E"}/>
                    <Punches score={punchBlue} setScore={setPunchBlue} cast={castBlue} setCast={setCastBlue} color={"#7A80B4"}/> 
                </Stack>
                <Stack spacing={1.5}>
                    <Warnings warns={warns} setWarns={setWarns} />
                    <Errors errors={errors} setErrors={setErrors}/>
                </Stack>
                <Box justifyContent={"center"}>
                    <ColorButton sx={{minWidth: "30%"}} onClick={() => router.push({
                        pathname: "/judge/winner",
                        query: {
                            punchRed: punchRed,
                            punchBlue: punchBlue,
                            castRed: castRed,
                            castBlue: castBlue,
                            warns: warns,
                            errors: errors
                        }})}
                    >Далее</ColorButton>
                </Box>
            </Stack>
        </Stack>
    )
}