import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

import Carousel from "react-slick";

import Card from "components/Card/Card.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import NavPills from "components/NavPills/NavPills.js";

import MenuBookIcon from "@material-ui/icons/MenuBook";
import SportsKabaddiIcon from "@material-ui/icons/SportsKabaddi";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import ClassIcon from "@material-ui/icons/Class";

import image1 from "assets/img/colegio/fachada-2.jpg";

import Info from "components/Typography/Info.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center" xs={12} sm={12} md={12}>
          <div className={classes.typo}>
            <h3>Reseña Histórica</h3>
          </div>
          <br />
          <GridItem xs={10} sm={10} md={10}>
            <h4>
              Nuestra institución desde su fundación en 1980 se ha proyectado como una alternativa válida al ofrecer un servicio educativo integral, ágil, serio y de calidad dada las condiciones físicas del inmueble, las características profesionales del recurso humano, su estructura organizacional acorde con los avances tecnológicos, gerenciales y psicopedagógicos.
            </h4>
          </GridItem>
        </GridContainer>
        <br />
        <GridContainer justify="center" xs={12} sm={12} md={12}>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
          <br />
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} lg={8}>
            <NavPills
              justify="center"
              color="info"
              tabs={[
                {
                  tabButton: "Misión",
                  tabIcon: ChildCareIcon,
                  tabContent: (
                    <span>
                      <h4>
                        Nuestra misión es educar y formar a los niños en el área de educación inicial con una  atención integral, mediante la presentación del servicio educativo eficiente con un personal altamente capacitado y formado para el éxito, cumpliendo con las exigencias tecnológicas, académicas individuales y organizacionales en función de desarrollo educativo de la región zuliana.
                      </h4>
                      <br />
                    </span>
                  ),
                },
                {
                  tabButton: "Visión",
                  tabIcon: ClassIcon,
                  tabContent: (
                    <span>
                      <h4>
                        Instituto líder en el ramo de la educación con el reconocimiento nacional, por la calidad académica y los servicios eficientes que ofrece, los cuales responden a las necesidades actuales y futuras, que garantizan la formación de individuos capaces de enfrentar los cambios sociales, económicos y políticos en función de los avances tecnológicos de próximo milenio.                       </h4>
                      <br />
                    </span>
                  ),
                },
              ]}
            />
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem justify="center" xs={12} sm={12} md={12}>
            <h3>Valores</h3>
            <h4>Organizacionales</h4>
          </GridItem>
          <GridItem justify="center" xs={12} sm={12} md={12}>
            <h6 className={classes.description}>
              <Info>UNA PUERTA ABIERTA HACIA EL FUTURO</Info>
            </h6>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={5} md={3}>
              <InfoArea
                title="Honestidad"
                icon={FavoriteBorderIcon}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={3}>
              <InfoArea
                title="Calidad educativa"
                icon={LocalLibraryIcon}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={3}>
              <InfoArea
                title="Confianza"
                icon={EmojiPeopleIcon}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={3}>
              <InfoArea
                title="Actitud"
                icon={InsertEmoticonIcon}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={3}>
              <InfoArea
                title="Sentido de pertenencia "
                icon={SupervisorAccountIcon}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={3}>
              <InfoArea
                title="Trabajo en equipo"
                icon={SportsKabaddiIcon}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={3}>
              <InfoArea
                title="Responsabilidad"
                icon={MenuBookIcon}
                iconColor="success"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
