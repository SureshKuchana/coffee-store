import { useRouter } from 'next/router';
import Link from "next/link"

const Coffee = () => {
    const router = useRouter();
    console.log(" router ", router)
    return(
        <h1>Hello</h1>
    )
}

export default Coffee