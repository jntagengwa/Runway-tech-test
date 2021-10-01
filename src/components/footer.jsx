import React from "react";
import { Typography } from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="full-footer">
        <Typography
          className="footer-p"
          style={{ fontWeight: 600, textAlign: "center" }}
        >
          {new Date().getFullYear()} © Codex Inc. All Rights Reserved
        </Typography>
        <div className="icons">
          <a
            href="https://github.com/jntagengwa"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon id="icon" />
          </a>
          <a
            href="https://www.instagram.com/fidele.codes/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <InstagramIcon id="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jean-fidele-ntagengwa-b25b3776/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon id="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
