import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import FollowersSection from "../../components/FollowersSection";
import MessageSection from "../../components/MessageSection";
import TimelineSection from "../../components/TimelineSection";
import useLoadMessages from "../../hooks/useLoadMessages";
import useStyles from "./styles";
import usePostNewMessage from "../../hooks/usePostNewMessage";
import useLoadFollowers from "../../hooks/useLoadFollowers";
import useAddFollower from "../../hooks/useAddFollower";
import useRemoveFollower from "../../hooks/useRemoveFollower";

export default function MainPage() {
  const { container, content, followersBlock, mainBlock } = useStyles();

  const { meUser, isLoadingUsers, notFollowers, setNotFollowers } =
    useLoadFollowers();

  const { isLoadingMessages, messages } = useLoadMessages();

  const [currentTimeline, setCurrentTimeline] = useState([]);
  const [fullTimeline, setFullTimeline] = useState([]);
  const [isUpdatingTimeline, setIsUpdatingTimeline] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [emailsToFilter, setEmailsToFilter] = useState([]);

  const [isAddingFollower, setIsAddingFollower] = useState(false);
  const [isRemovingFollower, setIsRemovingFollower] = useState(false);
  const [newFollower, setNewFollower] = useState({});
  const [oldFollower, setOldFollower] = useState({});

  useAddFollower({
    meUser,
    isAddingFollower,
    setIsAddingFollower,
    newFollower,
    setNotFollowers,
    setCurrentTimeline,
    setFullTimeline,
  });

  useRemoveFollower({
    meUser,
    isRemovingFollower,
    setIsRemovingFollower,
    oldFollower,
    setNotFollowers,
    setCurrentTimeline,
    setFullTimeline,
  });

  const { isPostingNewMessage } = usePostNewMessage({
    meUser,
    isUpdatingTimeline,
    setIsUpdatingTimeline,
    newMessage,
    currentTimeline,
    setCurrentTimeline,
    setFullTimeline,
  });

  useEffect(() => {
    setCurrentTimeline(messages);
    setFullTimeline(messages);
  }, [messages]);

  const getFilteredTimeline = ({ isChecked, email }) => {
    const auxEmails = isChecked
      ? [...emailsToFilter, email]
      : emailsToFilter.filter((item) => item !== email);

    const filteredTimeline = fullTimeline.filter(({ authorEmail }) =>
      auxEmails.includes(authorEmail)
    );
    meUser.messages.forEach((message) => filteredTimeline.push(message));

    const sortedArray = filteredTimeline.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    return sortedArray;
  };

  const handleFilterTimeline = ({ email, isChecked, hasNoFilters }) => {
    if (isChecked) {
      setEmailsToFilter((prev) => [...prev, email]);
    } else {
      setEmailsToFilter((prev) => {
        const auxState = [...prev];
        const result = auxState.filter((item) => item !== email);
        return result;
      });
    }
    const filteredTimeline = hasNoFilters
      ? fullTimeline
      : getFilteredTimeline({ isChecked, email });
    setCurrentTimeline(filteredTimeline);
  };

  return (
    <div className={container}>
      <Grid container className={content}>
        <Grid container item xs={3} className={followersBlock}>
          <FollowersSection
            followers={meUser.followers}
            notFollowers={notFollowers}
            isLoadingUsers={isLoadingUsers}
            isAddingFollower={isAddingFollower}
            isRemovingFollower={isRemovingFollower}
            onAddFollowUser={({ user }) => {
              setIsAddingFollower(true);
              setNewFollower(user);
            }}
            onRemoveFollower={({ user }) => {
              setIsRemovingFollower(true);
              setOldFollower(user);
            }}
            onFilterTimeline={handleFilterTimeline}
          />
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
