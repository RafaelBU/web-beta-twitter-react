import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import FollowersSection from "../../components/FollowersSection";
import MessageSection from "../../components/MessageSection";
import TimelineSection from "../../components/TimelineSection";
import useLoadMessages from "../../hooks/useLoadMessages";
import useStyles from "./styles";
import usePostNewMessage from "../../hooks/usePostNewMessage";

export default function MainPage() {
  const { container, content, followersBlock, mainBlock } = useStyles();

  const { isLoadingMessages, messages } = useLoadMessages();

  const [currentTimeline, setCurrentTimeline] = useState([]);
  const [isUpdatingTimeline, setIsUpdatingTimeline] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  const { isPostingNewMessage } = usePostNewMessage({
    isUpdatingTimeline,
    setIsUpdatingTimeline,
    newMessage,
    currentTimeline,
    setCurrentTimeline,
  });

  useEffect(() => {
    setCurrentTimeline(messages);
  }, [messages]);

  return (
    <div className={container}>
      <Grid container className={content}>
        <Grid container item xs={3} className={followersBlock}>
          <FollowersSection />
        </Grid>
        <Grid container item xs={9} direction="column" className={mainBlock}>
          <TimelineSection
            isLoading={isLoadingMessages}
            messages={currentTimeline}
          />
          <MessageSection
            isPostingNewMessage={isPostingNewMessage}
            handlePostNewMessage={(newMessage) => {
              setIsUpdatingTimeline(true);
              setNewMessage(newMessage);
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
