'use client'
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import useSWR, { Fetcher } from 'swr';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
    console.log(">>> check props: ", params.id);

    const fetcher: Fetcher<IBLog, string> = (url: string) => fetch(url).then((res) => res.json());
    /**Đây là một hàm có tên là fetcher nhận một URL làm tham số.
     * Nó sử dụng hàm fetch để tạo một yêu cầu mạng đến URL được chỉ định.
     * Kết quả (res) được giả định là một phản hồi JSON, và res.json() được gọi để phân tích dữ liệu JSON.
     * Toàn bộ quá trình trả về một Promise.*/

    const { data, error, isLoading } = useSWR(
        /**Dòng này sử dụng hook SWR (Stale-While-Revalidate) để lấy dữ liệu. */
        `http://localhost:8000/blogs/${params.id}`,
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
        <div>
            <div className='my-3'>
                <Link href={"/blogs"} className='btn btn-primary'> Quay lai</Link>
            </div>
            <Card className="text-center">
                <Card.Header>{data?.title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {data?.content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">Tac gia: {data?.author}</Card.Footer>
            </Card>
        </div>
    )
}
export default ViewDetailBlog;