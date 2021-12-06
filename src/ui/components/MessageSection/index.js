import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import useStyles from "./styles";

export default function MessageSection() {
  const { container } = useStyles();
  return (
    <div className={container}>
      <Box mb={3}>
        <TextField
          variant="outlined"
          label="Post a new message"
          style={{ width: "100%" }}
        />
      </Box>

      <Box display="flex" sx={{ width: "100%" }}>
        <Button variant="contained" style={{ marginLeft: "auto" }}>
          Post
        </Button>
      </Box>
    </div>
  );
}
