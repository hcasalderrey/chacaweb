import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Divider,
  Box,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Script from "next/script";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  const xProveedor = "HC Soluciones";
  return (
    <div className={styles.container}>
      <Head>
        <title>:: Club Chacarita Juniors :: </title>
        <meta name="description" content="Club Chacarita Juniors" />
        <link rel="icon" href="/chaca_logo.ico" />
      </Head>

      <Layout />
      <br />
      <main>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid xs></Grid>
            <Grid xs={5}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/chacarita.jpeg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Ultimas Noticias
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Nostrud amet irure officia duis voluptate nulla anim culpa
                      eu consequat aliquip.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid xs={2}>
              <a
                className="twitter-timeline"
                data-height="450"
                href="https://twitter.com/ChacaOficial?ref_src=twsrc%5Etfw"
              >
                Tweets by ChacaOficial
              </a>
              <Script
                async
                src="https://platform.twitter.com/widgets.js"
              ></Script>
            </Grid>
          </Grid>
        </Box>

        {/* <Box sx={{ display: "flex" }}>
          <Container>
            <Grid container justifyContent="space-between" spacing={2}>
              <Grid item xs={4}>
                
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={3} height={500}>
                <a
                  className="twitter-timeline"
                  data-height="450"
                  href="https://twitter.com/ChacaOficial?ref_src=twsrc%5Etfw"
                >
                  Tweets by ChacaOficial
                </a>
                <Script
                  async
                  src="https://platform.twitter.com/widgets.js"
                ></Script>
              </Grid>
            </Grid>
          </Container>
        </Box> */}
      </main>

      <footer className={styles.footer}>
        <h1>Sponsor</h1>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by {xProveedor}
        </a>
      </footer>
    </div>
  );
};

export default Home;
