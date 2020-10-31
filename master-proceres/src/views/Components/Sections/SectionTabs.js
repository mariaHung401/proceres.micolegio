import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import HomeWorkIcon from "@material-ui/icons/HomeWork";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import FavoriteIcon from "@material-ui/icons/Favorite";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <h2 className={classes.title}>Valores</h2>
              <CustomTabs
                headerColor="success"
                tabs={[
                  {
                    tabName: "Calidad Educativa",
                    tabIcon: HomeWorkIcon,
                    tabContent: (
                      <h5 className={classes.textCenter}>
                        Afianza la acción hacia el servicio al cliente,
                        <br />
                        pensamiento hacia la excelencia satisfaciendo 
                        sus necesidades y expectativas de la comunidad educativa.
                      </h5>
                    ),
                  },
                  {
                    tabName: "Trabajo en equipo",
                    tabIcon: SupervisorAccountIcon,
                    tabContent: (
                      <h5 className={classes.textCenter}>
                        Es la forma de actuar integrados, colaborando
                        siendo compañeros creyendo firmemente "ninguno de nosotros
                        es tan bueno como todos nosotros", fomentando equipos de alto
                        rendimiento.
                      </h5>
                    ),
                  },
                  {
                    tabName: "Confianza",
                    tabIcon: FavoriteIcon,
                    tabContent: (
                      <h5 className={classes.textCenter}>
                        Es la forma en que nos tratamos unos a otros como familia.
                        Incentivando las relaciones humanas basadas en lealtad, 
                        apoyo y solidaridad.
                      </h5>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
