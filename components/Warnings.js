import { Stack, Button } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';


export default function Warnings( {warns, setWarns} ) {
    console.log(warns)
    const getWarns = (index) => {
        if(warns[index]){
            return {
                color: "#FFB800", 
                fontSize: 35,
                webkitFilter: "drop-shadow( 0px 2px 1px black )",
                filter: "drop-shadow( 0px 2px 1px black )"
            }
        }
        else {
            return {
                color: "white", 
                fontSize: 35,
                webkitFilter: "drop-shadow( 0px 2px 1px black )",
                filter: "drop-shadow( 0px 2px 1px black )"
            }
        }
    }

    return (
        <Stack direction="row" spacing={7} justifyContent={"center"} width={"100%"} sx={{boxShadow: "0px 2px 0px 1px rgba(0, 0, 0, 0.2)", background: "#3A3A3A"}}> 
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