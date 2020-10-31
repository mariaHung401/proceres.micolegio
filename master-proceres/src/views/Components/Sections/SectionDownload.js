/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";
import Info from "components/Typography/Info";
import Danger from "components/Typography/Info";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>Contacta con nosotros!!</h3>
          </GridContainer>
          <br />
          <Button
            href="https://es-la.facebook.com/InstitutoLosProceresMcbo/"
            color="facebook">
            <i className={classes.socials + " fab fa-facebook-square"} /> siguenos
          </Button>
          <Button 
            href="https://www.instagram.com/inslosproceres/"
            color="instagram">
            <i className={classes.socials + " fab fa-instagram"} />
            siguenos
          </Button>
          <hr />
          <Info>
            <h6>
              <strong>DIRECCIÓN</strong>
            </h6>
            <h6>AVENIDA <br />
              PADILLA EDIF I.PE. NO. <br />
              5-68 CALLE 93 <br />
              CASCO CENTRAL.</h6>
            <h6>
              <strong>TELEFONOS</strong>
            </h6>
            <h6>
              0261.7222393 / <br />
              7228687 / <br /> 
              7213850
            </h6>
          </Info>
          <hr />
          <br/>
          <Danger>
            <h6>
              <strong>
                CORREO <br />
                PARA <br />
                INSCRIPCIONES
              </strong>
            </h6>
            <h6>inscripcionesproceres <br />
              @gmail.com
            </h6>
          </Danger>
        </div>
      </div>
    </div>
  );
}
