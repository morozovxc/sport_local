import { useState } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import PunchScore from "../../components/PunchScore"
import CastScore from "../../components/CastScore"
import { useRouter } from 'next/router'


export default function Battle() {
    const router = useRouter()
    const { name, id } = router.query
    
    const [ punchRed, setPunchRed ] = useState("")
    const [ punchBlue, setPunchBlue ] = useState("")

    const [ castRed, setCastRed] = useState("")
    const [ castBlue, setCastBlue] = useState("")

    return (
        <Stack alignItems="center">
            <Box textAlign="center" height={30} width={"100%"} sx={{background: "#9E9E9E"}}>
                <Typography pt={0.5} sx={{fontWeight: 750}}>Судья: {name}</Typography>
            </Box>
            <Stack direction="row" justifyContent="center" height={30} width={"60%"} sx={{background: "#9E9E9E", borderRadius: "0px 0px 30px 30px"}}>
                <Typography>Поединок: №{id}</Typography>
            </Stack>
            <Stack pt={8}>
                <Stack textAlign="center">
                    <Stack direction="row" spacing={6}>
                        <Stack spacing={10}>
                            <Typography sx={{color: "red"}}>Красный</Typography>
                            <Stack spacing={10}>
                                <Stack>
                                    <Typography sx={{color: "black"}}>Удары</Typography>
                                    <PunchScore buttons={["1", "2", "4"]} score={punchRed} setScore={setPunchRed}/>
                                </Stack>
                                <Stack>
                                    <Typography sx={{color: "black"}}>Броски</Typography>
                                    <CastScore buttons={["1", "2", "[1]", "(1)"]} score={castRed} setScore={setCastRed}/>
                                </Stack>
                            </Stack>
                        </Stack>
                        
                        <Stack spacing={10}>
                            <Typography sx={{color: "blue"}}>Синий</Typography>
                            <Stack spacing={10}>
                                <Stack>
                                    <Typography sx={{color: "black"}}>Удары</Typography>
                                    <PunchScore buttons={["1", "2", "4"]} score={punchBlue} setScore={setPunchBlue}/>
                                </Stack>
                                <Stack>
                                    <Typography sx={{color: "black"}}>Броски</Typography>
                                    <CastScore buttons={["1", "2", "[1]", "(1)"]} score={castBlue} setScore={setCastBlue}/>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}