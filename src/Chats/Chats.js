import "./Chats.css";
import React, { useCallback, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addChat, removeChat } from "../Store/Chatslist/actions";
import { selectChatsKeys } from "../Store/Chatslist/selectors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 250,
  },
}));

export default function Chats() {
  const chats = useSelector(selectChatsKeys);
  const classes = useStyles();

  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!value) {
        return;
      }
      dispatch(addChat(value));
      setValue("");
    },
    [dispatch, value]
  );

  const handleRemoveChat = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(removeChat(e.target.parentNode.id));
    },
    [dispatch]
  );

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
      <form className="add-chat" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          onChange={handleChange}
          type="text"
          placeholder="chat name"
          value={value}
        />
      </form>
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
                <form onSubmit={handleRemoveChat}>
                  <button
                    onClick={handleRemoveChat}
                    id={chat[0].chatId}
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      fontSize: "20px",
                      zIndex: 999,
                    }}
                  >
                    <i className="far fa-trash-alt"></i>
                  </button>
                </form>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </div>
  );
}
