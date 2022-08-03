import {useMemo, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import {Container, Input, Dropdown, Loading} from "@nextui-org/react";

import styles from './Sidebar.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo from '../public/Image/Logo.png';
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";


const Sidebar = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };

    const [selected, setSelected] = useState(new Set(["O'zbekcha"]));

    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );

    return (
        <div className={styles.sidebar}>
            <div className={styles.top}>
                <Container>
                    <div className={styles.navbar}>
                        <div className={styles.top_nav}>
                            <div className={styles.lang}>
                                <Dropdown>
                                    <Dropdown.Button flat color="#fff" css={{ tt: "capitalize"}}>
                                        <FaGlobeAsia style={{marginRight: '10px'}} size={25} />  {selectedValue}
                                    </Dropdown.Button>
                                    <Dropdown.Menu
                                        aria-label="Single selection actions"
                                        color="#6036F3"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        selectedKeys={selected}
                                        onSelectionChange={setSelected}
                                        css={{width: '150px', color:"#6036F3"}}
                                    >
                                        <Dropdown.Item key="O'zbekcha">O'zbekcha</Dropdown.Item>
                                        <Dropdown.Item key="English">English</Dropdown.Item>
                                        <Dropdown.Item key="Русский">Русский</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className={styles.leftCon}>
                                <div className={styles.location}>
                                    <Link href="tel:+998903778990" >
                                        <a className={styles.tel}>90 377-89-90</a>
                                    </Link>
                                    <FaMapMarkerAlt size={20} />
                                    <p>Tashkent</p>
                                </div>
                                <div className={styles.dostavka}>
                                    <Link href="/" >
                                        <a>
                                            Yetkazib berish va to'lov
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.middle_nav}>
                            <div className={styles.logo}>
                                <Link href="/">
                                    <a>
                                        <Image src={logo} alt="Kitoblar saytining logosi" height={90} width={200}  />
                                    </a>
                                </Link>
                            </div>
                            <div className={styles.searchbar}>
                                <form>
                                    <Input
                                        clearable
                                        width="100%"
                                        placeholder="Qanday kitob qidirayapsiz..."
                                        contentLeft={
                                            <BsSearch size="30" color="#808080"/>
                                        }
                                        // contentRight={<Loading size="sm" />}
                                    />
                                </form>
                            </div>
                            <div className={styles.user_nav}>
                                <ul>
                                    <li className={styles.heart}>
                                        <Link href="#">
                                            <a>
                                                <div>
                                                    <FaHeart/>
                                                    <p>sevimlilar</p>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={styles.user}>
                                        <Link href="#">
                                            <a>
                                                <div>
                                                    <FaUserAlt/>
                                                    <p>profil</p>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={styles.card}>
                                        <Link href="#">
                                            <a>
                                                <div>
                                                    <FaShoppingCart/>
                                                    <p>savat</p>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={styles.bottom}>
                <Container>
                    <div className={styles.bottom_nav}>
                        <nav className={styles.nav}>
                            <Slider {...settings}>
                                <li className={styles.active}>
                                    <Link href="/">
                                        <a>
                                            Bosh sahifa
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.nav_menu}>
                                    <Link href="#">
                                        <a>
                                            Barcha kitoblar
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.nav_menu}>
                                    <Link href="#">
                                        <a>
                                            Bestsellerlar
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.nav_menu}>
                                    <Link href="#">
                                        <a>
                                            Top kitoblar
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.nav_menu}>
                                    <Link href="#">
                                        <a>
                                            Yangi kitoblar
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.nav_menu}>
                                    <Link href="#">
                                        <a>
                                            Chegirmalar
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.nav_menu}>
                                    <Link href="#">
                                        <a>
                                            To'plamlar
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.nav_menu}>
                                    <Link href="#">
                                        <a>
                                            Avtorlar
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.nav_menu}>
                                    <Link href="#">
                                        <a>
                                            Qonunlar
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.nav_menu}>
                                    <Link href="#">
                                        <a>
                                            Yangiliklar
                                        </a>
                                    </Link>
                                </li>
                            </Slider>
                        </nav>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Sidebar;