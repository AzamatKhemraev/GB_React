import React, { useState } from "react";
import Form from "../Form/Form.js";
import Message from "../Message/Message.js";

const MessagesField = (props) => {
  return (
    <div>
      <Message />
      <Form />
    </div>
  );
};

export default MessagesField;
