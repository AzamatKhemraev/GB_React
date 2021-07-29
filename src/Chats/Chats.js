import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 250,
  },
}));

export default function SimpleList() {
  const classes = useStyles();

  const chats = [
    { chatName: "Chat 1", chatId: 123 },
    { chatName: "Chat 2", chatId: 657 },
    { chatName: "Chat 3", chatId: 345 },
  ];

  return (
    <div
      className={classes.root}
      style={{
        backgroundColor: "#0ba785",
        position: "absolute",
        left: "10px",
        bottom: "15px",
        borderRadius: "25px",
        color: "black",
      }}
    >
      <List component="nav" aria-label="main mailbox folders">
        {chats.map((chat) => {
          return (
            <ListItem button key={chat.chatId}>
              <ListItemText primary={chat.chatName} />
              <span
                style={{
                  fontSize: "10px",
                }}
              >
                id:{chat.chatId}
              </span>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
