import {
  Button,
  Checkbox,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import useLoadFollowers from "../../hooks/useLoadFollowers";
import Container from "../Container";

export default function FollowersSection() {
  const { isLoading, followers } = useLoadFollowers();

  return (
    <>
      <Box mb={2} sx={{ width: "100%" }}>
        <Container>
          <Typography>Following</Typography>
          {isLoading ? (
            <CircularProgress />
          ) : (
            followers.map(({ id, name }) => (
              <Box mb={2} key={id}>
                <Container>
                  <Grid container alignItems="center">
                    <Checkbox />
                    <Typography>{name}</Typography>
                    <Box ml="auto">
                      <Button size="small" variant="outlined" color="error">
                        Unfollow
                      </Button>
                    </Box>
                  </Grid>
                </Container>
              </Box>
            ))
          )}
        </Container>
      </Box>

      <Box mb={2} sx={{ width: "100%" }}>
        <Container>
          <Typography>Follow</Typography>
          <Box mb={2}>
            <Container>
              <Grid container alignItems="center">
                <Typography>Jaimito</Typography>
                <Box ml="auto">
                  <Button size="small" variant="outlined" color="success">
                    Follow
                  </Button>
                </Box>
              </Grid>
            </Container>
          </Box>
          <Box mb={2}>
            <Container>
              <Grid container alignItems="center">
                <Typography>Pepito</Typography>
                <Box ml="auto">
                  <Button size="small" variant="outlined" color="success">
                    Follow
                  </Button>
                </Box>
              </Grid>
            </Container>
          </Box>
          <Box mb={2}>
            <Container>
              <Grid container alignItems="center">
                <Typography>Pepito</Typography>
                <Box ml="auto">
                  <Button size="small" variant="outlined" color="success">
                    Follow
                  </Button>
                </Box>
              </Grid>
            </Container>
          </Box>
          <Box mb={2}>
            <Container>
              <Grid container alignItems="center">
                <Typography>Pepito</Typography>
                <Box ml="auto">
                  <Button size="small" variant="outlined" color="success">
                    Follow
                  </Button>
                </Box>
              </Grid>
            </Container>
          </Box>
        </Container>
      </Box>
    </>
  );
}
