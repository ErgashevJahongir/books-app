import {Container} from "@nextui-org/react";
import styles from './Footer.module.css'
import Image from "next/image";
import Link from "next/link";

import { FaRegEnvelope, FaLinkedinIn, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import logo from './../public/Image/logo.png'


const Footer = () => {
    return(
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footerNav}>
                    <div className={styles.info}>
                        <Image src={logo} alt="logo" width={150} height={60}/>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a className={styles.flex}><FaRegEnvelope/> jahongirergawev2@gmail.com</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className={styles.flex}><FaPhoneAlt/> +998903778990</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.nav}>
                        <h4>Our servise</h4>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.nav}>
                        <h4>Our servise</h4>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.nav}>
                        <h4>Our servise</h4>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottomSocial}>
                    <p>Created by <Link href='https://t.me/JahongirErgashev'><a style={{color: "#6b38fd"}}>Jahongir Ergashev</a></Link></p>
                    <ul>
                        <li>
                            <Link href="https://www.facebook.com/jahongirergashev419">
                                <a><FaFacebookF size='25'/></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.facebook.com/jahongirergashev419">
                                <a><FaTwitter size='25'/></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/ergashevjahongir419">
                                <a><FaInstagram size='25'/></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://t.me/JahongirErgashev">
                                <a><FaTelegramPlane size='25'/></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/jahongirergashev">
                                <a><FaLinkedinIn size='25'/></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;