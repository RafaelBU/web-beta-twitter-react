import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import useStyles from "./styles";

export default function MessageSection({
  isPostingNewMessage,
  handlePostNewMessage,
}) {
  const { container } = useStyles();
  const [newMessage, setNewMessage] = useState("");

  const textInput = useRef(null);

  const confirNewMessage = ({ event }) => {
    const value = event.target.value;
    setNewMessage(value);
    textInput.current.value = "";
    handlePostNewMessage(value);
  };

  const handleKeyPress = ({ event }) => {
    const { key } = event;
    if (key === "Enter") {
      confirNewMessage({ event });
    }
  };

  return (
    <div className={container}>
      <Box mb={3}>
        <TextField
          variant="outlined"
          defaultValue={newMessage}
          onBlur={(e) => confirNewMessage({ event: e })}
          onKeyPress={(e) => handleKeyPress({ event: e })}
          inputRef={textInput}
          label="Post a new message"
          style={{ width: "100%" }}
        />
      </Box>

      <Box display="flex" sx={{ width: "100%" }}>
        <Button
          variant="contained"
          style={{ marginLeft: "auto" }}
          onClick={() => handlePostNewMessage(newMessage)}
          disabled={isPostingNewMessage}
        >
          Post
        </Button>
      </Box>
    </div>
  );
}

MessageSection.propTypes = {
  handlePostNewMessage: PropTypes.func.isRequired,
  isPostingNewMessage: PropTypes.bool,
};

MessageSection.defaultProps = {
  isPostingNewMessage: false,
};
