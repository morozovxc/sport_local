import { Stack, Button, Typography } from '@mui/material';
import PersonOffIcon from '@mui/icons-material/PersonOff';


export default function Erros( { errors, setErrors } ) {

    const getErrors = (index) => {
        if(errors[index]){
            return {color: "#FF0000", fontSize: 35}
        }
        else return {color: "white", fontSize: 35}
    }

    return (
        <Stack direction="row" justifyContent={"center"} width={"100%"} sx={{background: "#9E9E9E"}}> 
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