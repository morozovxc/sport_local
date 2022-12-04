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
        <Stack alignItems="center">
            <Box textAlign="center" height={30} width={"100%"} sx={{background: "#9E9E9E"}}>
                <Typography pt={0.5} sx={{fontWeight: 750}}>Судья: {name}</Typography>
            </Box>
            <Stack direction="row" justifyContent="center" height={30} width={"60%"} sx={{background: "#9E9E9E", borderRadius: "0px 0px 30px 30px"}}>
                <Typography>Поединок: №{id}</Typography>
            </Stack>
            <Stack pt={2} textAlign="center" direction={"row"} spacing={1}>
                <Punches name={"Красный"} color="red" score={punchRed} setScore={setPunchRed} cast={castRed} setCast={setCastRed} />
                <Punches name={"Синий"} color="blue" score={punchBlue} setScore={setPunchBlue} cast={castBlue} setCast={setCastBlue} />
            </Stack>
            <Stack width={"100%"} pt={2} spacing={2}>
                <Warnings warns={warns} setWarns={setWarns} />
                <Errors errors={errors} setErrors={setErrors}/>
                <Button variant="outlined" onClick={() => router.push({
                    pathname: "/judge/winner",
                    query: {
                        punchRed: punchRed,
                        punchBlue: punchBlue,
                        castRed: castRed,
                        castBlue: castBlue,
                        warns: warns,
                        errors: errors
                    } 
                })}
                >Далее</Button>
            </Stack>
        </Stack>
    )
}