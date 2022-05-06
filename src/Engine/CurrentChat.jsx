const CurrentChat = (props) => {
  return (
    <section className="currentChat">
      <div className="conversation">
        <div className="profile-short">
          <div className="user-info">
            <img
              className="user-avatar"
              src={require("../assets/fake-salah.jpg")}
              alt=""
            ></img>
            <div className="userName">Mohamed Salah</div>
            <div className="status"></div>
            <div className="status-title">Active now</div>
          </div>
        </div>
        <div className="header-chat">
          <button>
            <i class="fa-solid fa-heart"></i>
          </button>
          <button>
            <i class="fa-solid fa-phone-flip"></i>
          </button>
          <button>
            <i class="fa-solid fa-video"></i>
          </button>
        </div>
      </div>
      {props.messages.map((l, i) => (
        <div className={l.userID === "Waled" ? "message" : "message-recived"}>
          <div className="text">{l.userText}</div>
        </div>
      ))}
       <div className="send-section">
         <input type="search" name="" id="" placeholder="Type a message ... " />
         <button className="send-btn"><i class="fa-solid fa-paper-plane"></i></button>
      </div>
    </section>
  );
};

export default CurrentChat;
