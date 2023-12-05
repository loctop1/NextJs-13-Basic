'use client'

import AppTable from "@/components/app.table";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import useSWR from "swr";
/**Hook này thường được sử dụng trong ứng dụng React để lấy và quản lý dữ liệu với sự tập trung vào việc cung cấp trải 
 * nghiệm người dùng tốt thông qua các tính năng như caching và revalidation. */

const BlogsPage = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    /**Đây là một hàm có tên là fetcher nhận một URL làm tham số.
     * Nó sử dụng hàm fetch để tạo một yêu cầu mạng đến URL được chỉ định.
     * Kết quả (res) được giả định là một phản hồi JSON, và res.json() được gọi để phân tích dữ liệu JSON.
     * Toàn bộ quá trình trả về một Promise.*/

    const { data, error, isLoading } = useSWR(
        /**Dòng này sử dụng hook SWR (Stale-While-Revalidate) để lấy dữ liệu. */
        'http://localhost:8000/blogs',
        /**Tham số đầu tiên là URL ('http://localhost:8000/blogs') từ đó dữ liệu sẽ được lấy. */
        fetcher,
        /**Tham số thứ hai là hàm lấy dữ liệu (fetcher) sẽ được sử dụng để lấy dữ liệu. */
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
        /**Tham số thứ ba là một đối tượng tùy chọn cho hook SWR, trong đó ba tùy chọn (revalidateIfStale, 
         * revalidateOnFocus, và revalidateOnReconnect) được đặt là false. */
    );
    /**Kết quả của hook useSWR được giải tỏa thành ba biến: data (dữ liệu đã lấy), error (bất kỳ lỗi nào xảy ra trong quá 
     * trình lấy dữ liệu), và isLoading (một giá trị boolean chỉ ra liệu dữ liệu đang được lấy hay không). */

    if (isLoading) {
        return (
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Đang tải...
            </Button>
        )
    }
    return (
        <div className="mt-3">
            <AppTable
                //Sắp xếp Id giảm dần
                blogs={data?.sort((a: any, b: any) => b.id - a.id)}
            />
        </div>
    )
}
export default BlogsPage;