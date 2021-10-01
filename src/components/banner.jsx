import React from "react";
import {
  Section,
  Container,
  Button,
  Left,
  Right,
  Image,
} from "./styles/bannerStyles";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

const Banner = ({ heros }) => {
  return (
    <Section>
      <Container>
        <Left>
          <Typography
            variant="h4"
            color="white"
            style={{ marginBottom: "1rem", fontWeight: 650 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Welcome To The Codex
            </motion.div>
          </Typography>
          <Typography
            variant="h1"
            color="white"
            style={{ marginBottom: "2rem", lineHeight: "1.1" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Get to know your supers!
            </motion.div>
          </Typography>
          <a href="/#codex">
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.9,
                backgroundColor: "#fff",
                color: "#131313",
              }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            >
              Supers
            </Button>
          </a>
        </Left>
        <Right>
          {heros
            // .sort(() => Math.random() - 0.5)
            .filter((hero, id) => id < 5)
            .map((hero) => (
              <Image
                key={hero.id}
                src={hero.images.lg}
                alt="plan b"
                whileTap={{ scale: 0.9 }}
                drag={true}
                dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                initial={{ opacity: 0, x: -100, y: -200 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: { duration: 1.6 },
                }}
              />
            ))}
        </Right>
      </Container>
    </Section>
  );
};

export default Banner;
