import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Checkbox,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Container from "../Container";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";

export default function FollowersSection({
  followers,
  notFollowers,
  isLoadingUsers,
  isAddingFollower,
  isRemovingFollower,
  onAddFollowUser,
  onRemoveFollower,
  onFilterTimeline,
}) {
  const [newFollowerPosition, setNewFollowerPosition] = useState(0);
  const [oldFollowerPosition, setOldFollowerPosition] = useState(0);

  const [followersChecked, setFollowersChecked] = useState([]);

  useEffect(() => {
    setFollowersChecked(
      followers.map(({ email }) => ({ email, isChecked: false }))
    );
  }, [followers]);

  const isCorrectAddFollowerLoading = ({ position }) =>
    isAddingFollower && position === newFollowerPosition;

  const isCorrectRemoveFollowerLoading = ({ position }) =>
    isRemovingFollower && position === oldFollowerPosition;

  const handleChangeCheckbox = ({ index, event }) => {
    const email = followers[index].email;
    const value = event.target.checked;
    const auxState = [...followersChecked];
    auxState[index].isChecked = value;
    setFollowersChecked(auxState);
    onFilterTimeline({
      email: email,
      isChecked: value,
      hasNoFilters: followersChecked.every(
        ({ isChecked }) => isChecked === false
      ),
    });
  };

  const followerRow = ({ index, style }) => {
    return (
      <Box style={style}>
        <Container>
          <Grid container alignItems="center">
            <Checkbox
              checked={followersChecked[index]?.isChecked || false}
              onChange={(event) => {
                handleChangeCheckbox({ event, index });
              }}
            />
            <Typography>{followers[index].name}</Typography>
            <Box ml="auto">
              <Button
                size="small"
                variant="outlined"
                color="error"
                disabled={isCorrectRemoveFollowerLoading({ position: index })}
                onClick={() => {
                  setOldFollowerPosition(index);
                  onRemoveFollower({ user: followers[index] });
                }}
              >
                {isCorrectRemoveFollowerLoading({ position: index }) ? (
                  <CircularProgress color="error" size={16} />
                ) : (
                  "Unfollow"
                )}
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
              <Button
                size="small"
                variant="outlined"
                color="success"
                disabled={isCorrectAddFollowerLoading({ position: index })}
                onClick={() => {
                  setNewFollowerPosition(index);
                  onAddFollowUser({ user: notFollowers[index] });
                }}
              >
                {isCorrectAddFollowerLoading({ position: index }) ? (
                  <CircularProgress color="success" size={16} />
                ) : (
                  "Follow"
                )}
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
        {isLoadingUsers ? (
          <CircularProgress />
        ) : (
          <AutoSizer>
            {({ width }) => (
              <List
                height={280}
                width={width}
                itemSize={50}
                itemCount={followers.length}
              >
                {followerRow}
              </List>
            )}
          </AutoSizer>
        )}
      </Container>

      <Container>
        <Typography>Follow</Typography>
        {isLoadingUsers ? (
          <CircularProgress />
        ) : (
          <AutoSizer>
            {({ width }) => (
              <List
                height={280}
                width={width}
                itemSize={50}
                itemCount={notFollowers.length}
              >
                {notFollowerRow}
              </List>
            )}
          </AutoSizer>
        )}
      </Container>
    </>
  );
}

FollowersSection.propTypes = {
  followers: PropTypes.array,
  notFollowers: PropTypes.array,
  isLoadingUsers: PropTypes.bool,
  isAddingFollower: PropTypes.bool,
  isRemovingFollower: PropTypes.bool,
  onAddFollowUser: PropTypes.func.isRequired,
  onRemoveFollower: PropTypes.func.isRequired,
  onFilterTimeline: PropTypes.func.isRequired,
};

FollowersSection.defaultProps = {
  followers: [],
  notFollowers: [],
  isLoadingUsers: true,
  isAddingFollower: false,
  isRemovingFollower: false,
};
