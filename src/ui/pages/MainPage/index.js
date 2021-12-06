import { Grid } from "@mui/material";
import FollowersSection from "../../components/FollowersSection";
import MessageSection from "../../components/MessageSection";
import TimelineSection from "../../components/TimelineSection";
import useStyles from "./styles";

export default function MainPage() {
  const { container, content, followersBlock, mainBlock } = useStyles();
  return (
    <div className={container}>
      <Grid container className={content}>
        <Grid container item xs={3} className={followersBlock}>
          <FollowersSection />
        </Grid>
        <Grid container item xs={9} direction="column" className={mainBlock}>
          <TimelineSection />
          <MessageSection />
        </Grid>
      </Grid>
    </div>
  );
}
