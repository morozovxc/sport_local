import PunchScore from "../components/PunchScore"
import CastScore from "../components/CastScore"

import { Stack, Typography } from '@mui/material';

export default function Punches( { score, setScore, cast, setCast } ) {
    return (
        <Stack spacing={4.5}>
            <Stack spacing={10}>
                <PunchScore buttons={["1", "2", "4"]} score={score} setScore={setScore} name={"Удары"}/>
                <CastScore buttons={["1", "2", "[1]", "(1)"]} score={cast} setScore={setCast} name={"Броски"}/>
            </Stack>
        </Stack>
    )
}