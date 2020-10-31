import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import PersonIcon from "@material-ui/icons/Person";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionNavbars() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div id="navbar" className={classes.navbar}>
        <Header
          color="info"
          rightLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Button
                  href="#"
                  className={classes.navLink + " " + classes.navLinkActive}
                  onClick={(e) => e.preventDefault()}
                  color="transparent"
                >
                  <EmojiEmotionsIcon className={classes.icons} /> Preescolar
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#"
                  className={classes.navLink}
                  onClick={(e) => e.preventDefault()}
                  color="transparent"
                >
                  <EmojiPeopleIcon className={classes.icons} /> Primaria
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#"
                  className={classes.navLink}
                  onClick={(e) => e.preventDefault()}
                  color="transparent"
                >
                  <PersonIcon className={classes.icons} /> Bachillerato
                </Button>
              </ListItem>
            </List>
          }
        />
      </div>
    </div>
  );
}
