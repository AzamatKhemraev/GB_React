import "./Chats.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 250,
  },
}));

export default function Chats(props) {
  const chats = Object.values(props.chats);
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        backgroundColor: "#0ba785",
        position: "absolute",
        left: "10px",
        bottom: "15px",
        borderRadius: "10px",
        color: "black",
      }}
    >
      <List component="nav" aria-label="main mailbox folders">
        {chats.map((chat) => {
          return (
            <Link
              to={`/Chats/${chat[0].chatId}`}
              key={chat[0].chatId}
              className="chat-link"
            >
              <ListItem button>
                <ListItemText primary={chat[0].chatName} />
                <span
                  style={{
                    fontSize: "10px",
                  }}
                >
                  id:{chat[0].chatId}
                </span>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </div>
  );
}
