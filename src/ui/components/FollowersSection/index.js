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
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";

export default function FollowersSection() {
  const { isLoading, followers, notFollowers } = useLoadFollowers();

  const followerRow = ({ index, style }) => {
    return (
      <Box style={style}>
        <Container>
          <Grid container alignItems="center">
            <Checkbox />
            <Typography>{followers[index].name}</Typography>
            <Box ml="auto">
              <Button size="small" variant="outlined" color="error">
                Unfollow
              </Button>
            </Box>
          </Grid>
        </Container>
      </Box>
    );
  };

  const notFollowerRow = ({ index, style }) => {
    return (
      <Box style={style}>
        <Container>
          <Grid container alignItems="center">
            <Typography>{notFollowers[index].name}</Typography>
            <Box ml="auto">
              <Button size="small" variant="outlined" color="success">
                Follow
              </Button>
            </Box>
          </Grid>
        </Container>
      </Box>
    );
  };

  return (
    <>
      <Container>
        <Typography>Following</Typography>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <AutoSizer>
            {({ width }) => (
              <List height={280} width={width} itemSize={50} itemCount={500}>
                {followerRow}
              </List>
            )}
          </AutoSizer>
        )}
      </Container>

      <Container>
        <Typography>Follow</Typography>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <AutoSizer>
            {({ width }) => (
              <List height={280} width={width} itemSize={50} itemCount={500}>
                {notFollowerRow}
              </List>
            )}
          </AutoSizer>
        )}
      </Container>
    </>
  );
}
