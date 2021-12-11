import { useEffect, useRef } from "react";
import ProptTypes from "prop-types";
import { CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FixedSizeList as List } from "react-window";
import Container from "../Container";
import useStyles from "./styles";

export default function Timeline({ messages, isLoading }) {
  const { timeStyle, contentMessage } = useStyles();
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current !== null) {
      listRef.current.scrollToItem(0);
    }
  }, [messages]);

  const messageRow = ({ index, style }) => {
    const { author, date, content } = messages[index];
    return (
      <Box style={style}>
        <Container>
          <Grid container>
            <Typography variant="body2">{author}</Typography>
            <Typography variant="body2" className={timeStyle}>
              {date}
            </Typography>
          </Grid>
          <Typography className={contentMessage}>{content}</Typography>
        </Container>
      </Box>
    );
  };

  return (
    <>
      <Typography>Timeline</Typography>
      <Container>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <List
            height={480}
            ref={listRef}
            width="100%"
            itemSize={100}
            itemCount={messages.length}
          >
            {messageRow}
          </List>
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
