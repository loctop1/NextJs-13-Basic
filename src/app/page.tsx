'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
// Kết hợp 2 class css với nhau
import x from '@/styles/app.module.css'
import y from '@/styles/loctop1.module.css'
import AppTable from '@/components/app.table'
import { useEffect } from 'react'
import useSWR from 'swr'
/**Hook này thường được sử dụng trong ứng dụng React để lấy và quản lý dữ liệu với sự tập trung vào việc cung cấp trải 
 * nghiệm người dùng tốt thông qua các tính năng như caching và revalidation. */
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export default function Home() {
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

  if (!data) {
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
      <div>{data?.length}</div>
      {/* Dấu ?. là toán tử kiểm tra động (optional chaining), đảm bảo rằng nếu data là null hoặc undefined, thì không 
      có lỗi xảy ra và biểu thức sẽ trả về undefined. */}
      <ul>
        <li className={x['red']}>
          {/* Giả sử x là một đối tượng chứa các lớp CSS, và 'red' có vẻ như là một trong các lớp CSS trong đối tượng x.
          Điều này có thể liên quan đến việc đặt màu đỏ cho phần tử hoặc các kiểu thiết lập CSS khác. */}
          <Link href={'/facebook'}>
            <span className={y['red']}>Facebook</span>
            {/* đối tượng y cho phần tử <span>, và 'red' có thể là một trong các lớp CSS trong đối tượng đó. */}
          </Link>
        </li>
        <li style={{ margin: '20px 0' }}>
          <Link href={'/youtube'}>
            Youtube
          </Link>
        </li>
        <li style={{ margin: '20px 0' }}>
          <Link href={'/tiktok'}>
            TikTok
          </Link>
        </li>
      </ul>
      <AppTable
        //Sắp xếp Id giảm dần
        blogs={data?.sort((a: any, b: any) => b.id - a.id)}
      />
    </div>
  )
}
