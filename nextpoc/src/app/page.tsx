import Image from "next/image";
import styles from "./header.module.css";
import logo from './logo.jpg';
import screen1 from './screen1.jpg';
import { CgProfile } from "react-icons/cg";
import { FaCcDiscover } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
export default function Home() {
  return (
    <div className={styles.container}>
      {/* <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main> */}
      {/* <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            alt="Company Logo"
            width={15}
            height={15}
          />
          <span className={styles.brand}>BRAND</span>
        </div>
        <nav className={styles.nav}>
          <a href="#">
            <FaCcDiscover />
            Discover</a>
          <a href="#">
            <CgProfile />
            Profile</a>
          <a href="#">
            <CiSettings />
            Setting</a>
        </nav>
      </header>

      <div className={styles.imageContainer}>
        <Image
          src={screen1}
          alt="Wallpaper"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.centeredText}>
          NEXTJS POC
        </div>

      </div>

    </div>
  );
}
