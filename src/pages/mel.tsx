import Head from "next/head"
import { Inter } from "next/font/google"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from "@/styles/Mel.module.css"

const inter = Inter({ subsets: ["latin"] });

export default function Mel() {
  const pathname = usePathname().replace('/', '')

  return (
    <>
      <Head>
        <title>My NextJS App - Mel&apos;s page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <section className={styles.content}>
          <h1>Welcome to {pathname}&apos;s page</h1>
          <Link href="/">Go back to Homepage</Link>
        </section>
      </main>
    </>
  );
}