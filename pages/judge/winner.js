import { useRouter } from 'next/router'

export default function Winner() {
    const router = useRouter()
    console.log(router.query)
    return (
        <>
        </>
    )
}