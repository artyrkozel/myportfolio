import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import {Link} from "react-scroll";
const SideDrawer = (props: any) => {
    const drawerWidth = 240
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            drawerPaper: {
                width: drawerWidth,
            },
            nav: {
                padding: 20
            }
        }),
    );
    const classes = useStyles();
    return (
            <Drawer
                anchor={"right"}
                open={props.open}
                onClose={() => props.onClose(false)}
                className={classes.drawerPaper}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <List component="nav" className={classes.nav}>
                    <ListItem button>
                            <Link
                                activeClass="active"
                                to="main"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Home</Link>
                    </ListItem>
                    <ListItem button>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >About</Link>
                    </ListItem>
                    <ListItem button>
                        <Link
                            activeClass="active"
                            to="education"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Education</Link>
                    </ListItem>
                    <ListItem button>
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >Skills</Link>
                    </ListItem>
                    <ListItem button>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >Projects</Link>
                    </ListItem>
                    <ListItem button>
                        <Link
                            activeClass="active"
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >Contacts</Link>
                    </ListItem>
                </List>
            </Drawer>
    );
};

export default SideDrawer;