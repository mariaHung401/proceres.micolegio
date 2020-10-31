import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import landing from "assets/img/colegio/verPagina.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";
import Success from "components/Typography/Success";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <div>
              <h3>Lo que la institución ofrece</h3>
            </div>
            <br />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <div>
              <Link to="landing-page" className={classes.link}>
                <Button color="info" size="lg" round>
                  click aqui
                </Button>
              </Link>
            </div>
            <br />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link to="landing-page" className={classes.link}>
              <img
                src={landing}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </Link>
            <Success>
              <h6>#SOMOSFAMILIAPRÓCERES</h6>
            </Success>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
