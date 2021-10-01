import Aos from "aos";
import { Grid, Typography } from "@material-ui/core";
import Hero from "./hero";
import { Pagination } from "antd";
import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";

import useStyles from "../styles/herosStyles";

const Heros = ({ heros }) => {
  const [current, setCurrent] = useState(1);
  const [herosPerPage, setHerosPerPage] = useState(12);

  let sort = heros.sort(function (a, p) {
    return a.id > p.id;
  });

  const lastHero = current * herosPerPage;
  const firstHero = lastHero - herosPerPage;
  const currentHeros = sort.slice(firstHero, lastHero);

  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <div className="container" style={{ marginBottom: "30px" }}>
      <div className="full">
        <div className="full-cart">
          <main className={classes.content}>
            <div data-aos="fade-right">
              <Typography variant="h2" style={{ marginTop: "40px" }}>
                The Codex
              </Typography>
            </div>
            <div className={classes.toolbar} />
            <div data-aos="fade-left" id="codex">
              <Grid container justifyContent="center" spacing={4}>
                {currentHeros.map((hero) => (
                  <Grid item key={hero.id} xs={12} sm={6} md={4} lg={3}>
                    <Hero hero={hero} />
                  </Grid>
                ))}
              </Grid>
            </div>
            <Pagination
              className="pag"
              size="medium"
              showSizeChanger
              style={{ marginTop: "30px", marginBottom: "30px" }}
              onShowSizeChange={setHerosPerPage}
              pageSize={herosPerPage}
              total={sort.length}
              defaultCurrent={current}
              onChange={setCurrent}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Heros;
