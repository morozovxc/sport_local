import { styled } from '@mui/material/styles';
import { Stack, Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: 30,
    color: "white",
    background: "#9E9E9E",
    '&:hover': {
        backgroundColor: "grey",
    },
    padding: 0
}));

export default function PunchScore( {buttons, score, setScore, name} ){
    return (
        <Stack spacing={1} textAlign={"center"}>
            <Box  width={"100%"} maxWidth="136px" sx={{ background: "#9E9E9E", borderRadius: 2}}>
                {!!score ? score : name}
            </Box>
            <Stack direction="row" spacing={1}>
                <Stack spacing={1}>
                    <StyledButton onClick={() => setScore(score + buttons[0])}>{buttons[0]}</StyledButton>
                    <StyledButton onClick={() => setScore(score + buttons[1])}>{buttons[1]}</StyledButton>
                </Stack>
                <Stack spacing={1}>
                    <StyledButton onClick={() => setScore(score + buttons[2])}>{buttons[2]}</StyledButton>
                    <StyledButton sx={{background: "#B47E7E"}} onClick={() => setScore(score.slice(0, -1))}><DeleteIcon /></StyledButton>
                </Stack>
            </Stack>
        </Stack>
    )
}