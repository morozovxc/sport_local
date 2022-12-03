import { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { useRouter } from 'next/router'
import Head from "next/head"

export default function setJudge() {
    const router = useRouter();
    const [judge, setJudge] = useState(null)
    const [number, setNumber] = useState(null)
    const handleChangeName = (event) => setJudge(event.target.value)
    const handleChangeNumber = (event) => setNumber(event.target.value)
    return (
    <>
        <Head>
            <link rel="manifest" href="../manifest.json" />
        </Head>
        <Stack spacing={2}
            left={0} right={0} top={"40%"} m={"auto"}
            maxWidth={300}
            position="absolute"
        >
            <TextField label="Фамилия" variant="filled" onChange={handleChangeName} />
            <TextField label="Номер боя" variant="filled" onChange={handleChangeNumber} />
            <Button
                sx={{borderRadius: 30, background: "grey"}}
                variant="contained"
                onClick={() => router.push({pathname:"/judge/battle", query: { name: judge, id: number }})}
            >Далее</Button>
        </Stack>
    </>
    )
}