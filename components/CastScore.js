import { styled } from '@mui/material/styles';
import { Stack, Box, Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: 30,
    color: "white",
    background: "#3A3A3A",
    '&:hover': {
        backgroundColor: "black",
    },
    boxShadow: "0px 2px 0px 1px rgba(0, 0, 0, 0.2)",
    padding: 3
}));

const wrn = ["(", ")", "[", "]"]
function DeleteLastValue(score, setScore) {
    for(let g = 0; g < wrn.length; g++){
        if(score[score.length - 1] == wrn[g]){
            setScore(score.slice(0, -3))
            return
        }
    }
    setScore(score.slice(0, -1))
}

export default function CastScore( {buttons, score, setScore, name, color} ){
    return (
        <Stack spacing={1} textAlign={"center"}>
            <Box sx={{ background: color, color: "black",borderRadius: 2, boxShadow: "0px 2px 0px 1px rgba(0, 0, 0, 0.2)"}}>
                <Typography m={0.2}>{!!score ? score : name}</Typography>
            </Box>
            <Stack direction="row" spacing={1}>
                <Stack spacing={1}>
                    <StyledButton onClick={() => setScore(score + buttons[0])}>{buttons[0]}</StyledButton>
                    <StyledButton onClick={() => setScore(score + buttons[1])}>{buttons[1]}</StyledButton>
                </Stack>
                <Stack spacing={1}>
                    <StyledButton onClick={() => setScore(score + buttons[2])}>{buttons[2]}</StyledButton>
                    <StyledButton onClick={() => setScore(score + buttons[3])}>{buttons[3]}</StyledButton>
                    <StyledButton sx={{background: color}} onClick={() => DeleteLastValue(score, setScore)}><DeleteIcon /></StyledButton>
                </Stack>
            </Stack>
        </Stack>
    )
}