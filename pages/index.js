import { useState } from 'react';
import { TextField, Box, Button, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router'
import { styled } from '@mui/material/styles';

const ColorField = styled(TextField)({
    color: "white",
    border: "2px",
    borderColor: 'black',
    backgroundColor: "#3A3A3A",
    borderRadius: 5,
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            color: "white",
            borderColor: 'black',
        },
    },
});

const ColorButton = styled(Button)({
    color: "black",
    border: "1px",
    backgroundColor: "#FFFFFF",
    '&:hover': {
        color: "#FFFFFF",
        backgroundColor: "#3A3A3A",
    },
});

export default function setJudge() {
    const router = useRouter();
    const [judge, setJudge] = useState(null)
    const [number, setNumber] = useState(null)
    const handleChangeName = (event) => setJudge(event.target.value)
    const handleChangeNumber = (event) => setNumber(event.target.value)
    return (
        <>
            <Box textAlign="center" sx={{background: "#3A3A3A"}}>
                <Typography fontWeight={550} fontSize={18}>Судейская записка</Typography>
            </Box>
            <Stack spacing={2}
                left={0} right={0} top={"35%"} m={"auto"}
                maxWidth={300}
                position="absolute"
            >
                <ColorField placeholder="ФИО" onChange={handleChangeName} />
                <ColorField placeholder="Номер боя" onChange={handleChangeNumber} />
                <ColorButton
                    onClick={() => router.push({pathname:"/judge/battle", query: { name: judge, id: number }})}
                >Далее</ColorButton>
            </Stack>
        </>
    )
}