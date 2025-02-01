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
