import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#ADD8E6",
  },
  content: {
    width: "90%",
    height: "750px",
    boxShadow: "0px 4px 20px rgba(200, 200, 200, 0.25)",
    backgroundColor: "#EEEEEE",
  },
  followersBlock: {
    padding: "20px",
  },
  mainBlock: {
    padding: "20px",
  },
}));

export default useStyles;
