import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Container from "../Container";
import useStyles from "./styles";

export default function Timeline() {
  const { timeStyle } = useStyles();
  return (
    <>
      <Typography>Timeline</Typography>
      <Container>
        <Box mb={3}>
          <Container>
            <Grid container>
              <Typography variant="body2">Alice</Typography>
              <Typography variant="body2" className={timeStyle}>
                21min
              </Typography>
            </Grid>
            <Typography>Mensaje de prueba 1</Typography>
          </Container>
        </Box>

        <Box mb={3}>
          <Container>
            <Grid container>
              <Typography variant="body2">Jose</Typography>
              <Typography variant="body2" className={timeStyle}>
                25min
              </Typography>
            </Grid>
            <Typography>Mensaje de prueba 2</Typography>
          </Container>
        </Box>

        <Box mb={3}>
          <Container>
            <Grid container>
              <Typography variant="body2">Pepe</Typography>
              <Typography variant="body2" className={timeStyle}>
                30min
              </Typography>
            </Grid>
            <Typography>Mensaje de prueba 3</Typography>
          </Container>
        </Box>
      </Container>
    </>
  );
}
