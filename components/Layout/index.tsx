import Image from "next/image";
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
import styles from "../../styles/Layout.module.css";
export const Layout = () => {
  return (
    <>
      <Box sx={{ display: "flex", alignContent: "center" }}>
        <Grid container spacing={2}>
          <Grid
            container
            alignContent="center"
            alignItems="center"
            justifyItems="center"
            spacing={2}
          >
            <Grid item xs={2} md={2} lg={1}>
              <Image
                src="/chaca_logo.png"
                alt="logo"
                height="80%"
                width="60%"
              />
            </Grid>
            <Grid item xs={8} md={4} lg={3}>
              <h1>CHACARITA JUNIORS</h1>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <hr />
      <br />
      <Box sx={{ display: "flex", alignContent: "center" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justifyItems="center"
              spacing={2}
            >
              <Grid
                item
                xs={12}
                md={12}
                lg={12}
                alignItems="center"
                textAlign="center"
              >
                <Image
                  className={styles.roundFull}
                  src="/estadio.jpeg"
                  alt="estadio"
                  height="500px"
                  width="990px"
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
