'use client'
// Điều hướng trang
import { useRouter } from "next/navigation"

const page = () => {
    const router = useRouter()

    const handleBtn = () => {
        router.push('/')
    }
    return (
        <div>
            Facebook Page
            <div>
                <button style={{ cursor: 'pointer' }} onClick={() => handleBtn()}>Trở về trang chủ</button>
            </div>
        </div>
    )
}

export default page