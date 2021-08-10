import "../App.css";

const Message = ({ text, author, style }) => {
  return (
    <div className="Message">
      <div className="Message-box send">
        <h3 className="Message-text ">{text}</h3>
      </div>
      <div className="Message-sender">
        <h2>{author}</h2>
      </div>
    </div>
  );
};

export default Message;
