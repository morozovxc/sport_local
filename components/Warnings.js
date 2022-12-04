import { Stack, Button, Typography } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';


export default function Warnings( {warns, setWarns} ) {
    console.log(warns)
    const getWarns = (index) => {
        if(warns[index]){
            return {color: "#FFB800", fontSize: 35}
        }
        else return {color: "white", fontSize: 35}
    }

    return (
        <Stack direction="row" justifyContent={"center"} width={"100%"} sx={{background: "#9E9E9E"}}> 
            <Stack direction="row">
                <Button onClick={() => setWarns([!warns[0], warns[1], warns[2], warns[3]])}>
                    <ReportIcon sx={() => getWarns(0)}/>
                </Button>
                <Button onClick={() => setWarns([warns[0], !warns[1], warns[2], warns[3]])}>
                    <ReportIcon sx={() => getWarns(1)}/>
                </Button>
            </Stack>
            <Stack direction="row">
                <Button onClick={() => setWarns([warns[0], warns[1], !warns[2], warns[3]])}>
                    <ReportIcon sx={() => getWarns(2)}/>
                </Button>
                <Button onClick={() => setWarns([warns[0], warns[1], warns[2], !warns[3]])}>
                    <ReportIcon sx={() => getWarns(3)}/>
                </Button>
            </Stack>
        </Stack>
    )
}