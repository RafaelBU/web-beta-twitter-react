import ProptTypes from "prop-types";
import { CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Container from "../Container";
import useStyles from "./styles";

export default function Timeline({ messages, isLoading }) {
  const { timeStyle } = useStyles();
  return (
    <>
      <Typography>Timeline</Typography>
      <Container>
        {isLoading ? (
          <CircularProgress />
        ) : (
          messages.map(({ id, author, date, content }) => (
            <Box mb={3} key={id}>
              <Container>
                <Grid container>
                  <Typography variant="body2">{author}</Typography>
                  <Typography variant="body2" className={timeStyle}>
                    {date}
                  </Typography>
                </Grid>
                <Typography>{content}</Typography>
              </Container>
            </Box>
          ))
        )}
      </Container>
    </>
  );
}

Timeline.propTypes = {
  isLoading: ProptTypes.bool,
  messages: ProptTypes.array,
};

Timeline.defaultProps = {
  isLoading: true,
  messages: [],
};
