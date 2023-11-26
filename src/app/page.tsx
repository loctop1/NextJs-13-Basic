import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
// Kết hợp 2 class css với nhau
import x from '@/styles/app.module.css'
import y from '@/styles/loctop1.module.css'

export default function Home() {
  return (
    <div>
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
        <li>
          <Link href={'/tiktok'}>
            TikTok
          </Link>
        </li>
      </ul>
    </div>
  )
}
