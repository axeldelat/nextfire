import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import toast from 'react-hot-toast';

import Loader from '../components/Loader'

export default function Home() {
  return (
    <div>
      <Loader />
      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: { username: 'axeldelat' }
      }}>
      <a>Axel Profile</a>
      </Link>
      <button onClick={() => toast.success('hello toast!')}>
        Toast Me
      </button>
    </div>
  )
}
