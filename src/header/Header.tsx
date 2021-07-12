import React, {useEffect, useState} from "react";
import styles from './header.module.scss'
import logo from './../common/img/logo.png'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer/SideDrawer";
import {Link} from "react-scroll";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [headerShow, setHeaderShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [headerShow]);

    const toggleDrawer = (value: boolean) => {
        setDrawerOpen(value);
    };
    const handleScroll = () => {
        (window.scrollY > 0) ? setHeaderShow(true) : setHeaderShow(false);
    }
    return (<div className="container">
            <AppBar
                position="fixed"
                style={{
                    background: headerShow ? "#fff" : "transparent",
                    padding: " 10px 0px",
                    boxShadow: headerShow ? "0 3px 10px 0 rgba(255, 69, 0, 0.1)" : "none"
                }}
            >
                <Toolbar>
                    <div className="container">
                        <div className={styles.header}>
                            <div className={styles.headerLogo}>
                                    <Link
                                        activeClass="active"
                                        to="main"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        <img src={logo} alt="logo"/>
                                    </Link>
                            </div>
                            <IconButton aria-label="Menu" onClick={() => toggleDrawer(true)}>
                                <MenuIcon className={styles.icon}/>
                            </IconButton>
                        </div>
                        <SideDrawer open={drawerOpen} onClose={(value: boolean) => toggleDrawer(value)}/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header