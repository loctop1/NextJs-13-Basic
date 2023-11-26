'use client'
// Điều hướng trang
import { useRouter } from "next/navigation"
/**useRouter là một trong những hook cung cấp bởi Next.js để giúp bạn quản lý định tuyến (routing) trong ứng dụng React 
 * của mình. Nó trả về một đối tượng router, từ đó bạn có thể trích xuất thông tin về địa chỉ URL hiện tại, tham số truy
 * vấn, và nhiều thông tin khác liên quan đến việc định tuyến trang. */

const page = () => {
    const router = useRouter()

    const handleBtn = () => {
        router.push('/')
        /**Phương thức push cho phép bạn thay đổi đường dẫn của trang mà không làm tải lại toàn bộ trang. */
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