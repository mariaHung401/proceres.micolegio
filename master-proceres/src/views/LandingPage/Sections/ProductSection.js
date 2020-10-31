import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import BrushIcon from '@material-ui/icons/Brush';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import HomeIcon from '@material-ui/icons/Home';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import StarRateIcon from '@material-ui/icons/StarRate';
import WeekendIcon from '@material-ui/icons/Weekend';


import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h3>
            <strong>El instituto cuenta con:</strong>
          </h3>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              icon={AssignmentIndIcon}
              title="Docentes especializados, licenciados en cada área. "
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              icon={AirlineSeatReclineNormalIcon}
              title="Aulas adaptadas a sus necesidades. "
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              icon={SportsHandballIcon}
              title="Club deportivo."
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              icon={HowToRegIcon}
              title="Recurso humano altamente capacitado formado para el éxito. "
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              icon={MusicNoteIcon}
              title="Música"
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              icon={BrushIcon}
              title="Artes plásticas "
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              icon={GTranslateIcon}
              title="Ingles "
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              icon={FontDownloadIcon}
              title="Turno corrido tareas dirigidas (maternal a 6to grado) hasta las 5:00 p.m. (opcional) "
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              icon={PeopleOutlineIcon}
              title="Proyectos educativos. "
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              icon={DirectionsRunIcon}
              title="Canchas múltiples. "
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              icon={MeetingRoomIcon}
              title="Laboratorio biología, física y química. "
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              icon={HomeIcon}
              title="Granja recreativa. "
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              icon={EmojiEmotionsIcon}
              title="Orientación pedagógica especializada. "
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              icon={StarRateIcon}
              title="Área de recreación "
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Aulas dotadas con cámaras para que el representante pueda ver las actividades diarias desde la comodidad de su hogar o su oficina. (proceritos) "
              icon={WeekendIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
