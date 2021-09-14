import React from 'react';

const Messages: React.FC = () => {
  return (
    <div className="chat-container">
      <ul className="chat-box chatContainerScroll">
        <li className="chat-left">
          <div className="chat-avatar">
            <img
              src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
              alt="Retail Admin"
            />
            <div className="chat-name">Russell</div>
          </div>
          <div className="chat-text">
            Hello, Im Russell.
            <br />
            How can I help you today?
          </div>
          <div className="chat-hour">
            08:55 <span className="fa fa-check-circle" />
          </div>
        </li>
        <li className="chat-right">
          <div className="chat-hour">
            08:56 <span className="fa fa-check-circle" />
          </div>
          <div className="chat-text">
            Hi, Russell
            <br /> I need more information about Developer Plan.
          </div>
          <div className="chat-avatar">
            <img
              src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
              alt="Retail Admin"
            />
            <div className="chat-name">Sam</div>
          </div>
        </li>
        <li className="chat-left">
          <div className="chat-avatar">
            <img
              src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
              alt="Retail Admin"
            />
            <div className="chat-name">Russell</div>
          </div>
          <div className="chat-text">
            Are we meeting today?
            <br />
            Project has been already finished and I have results to show you.
          </div>
          <div className="chat-hour">
            08:57 <span className="fa fa-check-circle" />
          </div>
        </li>
        <li className="chat-right">
          <div className="chat-hour">
            08:59 <span className="fa fa-check-circle" />
          </div>
          <div className="chat-text">
            Well I am not sure.
            <br />I have results to show you.
          </div>
          <div className="chat-avatar">
            <img
              src="https://www.bootdey.com/img/Content/avatar/avatar5.png"
              alt="Retail Admin"
            />
            <div className="chat-name">Joyse</div>
          </div>
        </li>
        <li className="chat-left">
          <div className="chat-avatar">
            <img
              src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
              alt="Retail Admin"
            />
            <div className="chat-name">Russell</div>
          </div>
          <div className="chat-text">
            The rest of the team is not here yet.
            <br />
            Maybe in an hour or so?
          </div>
          <div className="chat-hour">
            08:57 <span className="fa fa-check-circle" />
          </div>
        </li>
        <li className="chat-right">
          <div className="chat-hour">
            08:59 <span className="fa fa-check-circle" />
          </div>
          <div className="chat-text">
            Have you faced any problems at the last phase of the project?
          </div>
          <div className="chat-avatar">
            <img
              src="https://www.bootdey.com/img/Content/avatar/avatar4.png"
              alt="Retail Admin"
            />
            <div className="chat-name">Jin</div>
          </div>
        </li>
        <li className="chat-left">
          <div className="chat-avatar">
            <img
              src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
              alt="Retail Admin"
            />
            <div className="chat-name">Russell</div>
          </div>
          <div className="chat-text">
            Actually everything was fine.
            <br />
            Im very excited to show this to our team.
          </div>
          <div className="chat-hour">
            07:00 <span className="fa fa-check-circle" />
          </div>
        </li>
      </ul>
      <div className="form-group mt-3 mb-0">
        <textarea
          className="form-control"
          rows={3}
          placeholder="Type your message here..."
          defaultValue=""
        />
      </div>
    </div>
  );
};

export default Messages;
