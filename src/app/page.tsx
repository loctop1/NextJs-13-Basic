import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href={'/facebook'}>
            Facebook
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
