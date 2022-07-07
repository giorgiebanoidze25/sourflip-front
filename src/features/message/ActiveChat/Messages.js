import React, { useRef, useEffect } from "react";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

const useStyles = makeStyles(() => ({
  body: {
    overflowX: 'hidden',
    height: '100%',
    padding: 10,
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
    },
    backgroundColor: 'white',
    borderRadius: 20
  },
  bottom: {
    float: "left",
    clear: "both"
  }
}));

const Messages = (props) => {
  const messagesEndRef = useRef(null);
  const classes = useStyles();
  const [list, setList] = React.useState([]);
  const { messages, otherUser, userId } = props;

  useEffect(() => {
      setList(messages.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }).reverse())
  }, [messages])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [list])

  return (
    <div className={classes.body}>
      {list.map((message) => {
        const time = moment(message.createdAt).format("MM.DD h:mm");

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} />
        ) : (
          <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;