import PunchScore from "../components/PunchScore"
import CastScore from "../components/CastScore"

import { Stack, Typography } from '@mui/material';

export default function Punches( { name, color, score, setScore, cast, setCast } ) {
    return (
        <Stack spacing={4.5}>
            <Typography sx={{color: {color}}}>{name}</Typography>
            <Stack spacing={10}>
                <Stack>
                    <Typography sx={{color: "black"}}>Удары</Typography>
                    <PunchScore buttons={["1", "2", "4"]} score={score} setScore={setScore}/>
                </Stack>
                <Stack>
                    <Typography sx={{color: "black"}}>Броски</Typography>
                    <CastScore buttons={["1", "2", "[1]", "(1)"]} score={cast} setScore={setCast}/>
                </Stack>
            </Stack>
        </Stack>
    )
}