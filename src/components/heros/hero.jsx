import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";

import useStyles from "../styles/heroStyles";

const Hero = ({ hero }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={hero.images.lg}
        title={hero.biography.fullName}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            <strong>Code Name:</strong>
            <br />
            {hero.name}
          </Typography>
          {hero.biography.alignment === "good" && (
            <Typography variant="h5" className="green">
              {hero.biography.alignment}
            </Typography>
          )}
          {hero.biography.alignment === "bad" && (
            <Typography variant="h5" className="red">
              {hero.biography.alignment}
            </Typography>
          )}
          {hero.biography.alignment === "neutral" && (
            <Typography variant="h5" className="blue">
              {hero.biography.alignment}
            </Typography>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Button
            type="button"
            variant="contained"
            className="hero-btn"
            onClick={handleOpen}
          >
            Stats
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper} onClick={handleClose}>
                <img className="modal-img" src={hero.images.lg} alt="" />
                <div className="text">
                  <Typography variant="h4">
                    <strong>Real Name:</strong> {hero.biography.fullName}
                  </Typography>
                  <Typography variant="body1" style={{ fontWeight: 600 }}>
                    <strong>Affiliation:</strong>{" "}
                    {hero.connections.groupAffiliation}
                  </Typography>
                  <Typography variant="body1" style={{ fontWeight: 600 }}>
                    <strong>Known Aliases:</strong> {hero.biography.aliases}
                  </Typography>
                  <Typography variant="h5">
                    <strong>Powerstats:</strong>{" "}
                    <ul>
                      <li>Intelligence {hero.powerstats.intelligence}</li>
                      <li>Strength {hero.powerstats.strength}</li>
                      <li>Speed {hero.powerstats.speed}</li>
                      <li>Durability {hero.powerstats.durability}</li>
                      <li>Power {hero.powerstats.power}</li>
                      <li>Combat {hero.powerstats.combat}</li>
                    </ul>
                  </Typography>
                  <Typography variant="body1" style={{ fontWeight: 600 }}>
                    <strong>Hieght:</strong> {hero.appearance.hieght}
                  </Typography>
                  <Typography variant="body1" style={{ fontWeight: 600 }}>
                    <strong>Weight:</strong> {hero.appearance.weight}
                  </Typography>
                  <Typography variant="body1" style={{ fontWeight: 600 }}>
                    <strong>Publisher:</strong> {hero.biography.publisher}
                  </Typography>
                </div>
              </div>
            </Fade>
          </Modal>
        </div>
      </CardContent>
    </Card>
  );
};

export default Hero;
