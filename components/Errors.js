import { Stack, Button } from '@mui/material';
import PersonOffIcon from '@mui/icons-material/PersonOff';


export default function Erros( { errors, setErrors } ) {

    const getErrors = (index) => {
        if(errors[index]){
            return {
                color: "#FF0000", 
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
                <Button onClick={() => setErrors([!errors[0], errors[1], errors[2], errors[3]])}>
                    <PersonOffIcon sx={() => getErrors(0)}/>
                </Button>
                <Button onClick={() => setErrors([errors[0], !errors[1], errors[2], errors[3]])}>
                    <PersonOffIcon sx={() => getErrors(1)}/>
                </Button>
            </Stack>
            <Stack direction="row">
                <Button onClick={() => setErrors([errors[0], errors[1], !errors[2], errors[3]])}>
                    <PersonOffIcon sx={() => getErrors(2)}/>
                </Button>
                <Button onClick={() => setErrors([errors[0], errors[1], errors[2], !errors[3]])}>
                    <PersonOffIcon sx={() => getErrors(3)}/>
                </Button>
            </Stack>
        </Stack>
    )
}