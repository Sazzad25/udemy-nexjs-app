
// import styles from '@/styles/Home.module.css'

import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link href='/clients'>Client</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home;
