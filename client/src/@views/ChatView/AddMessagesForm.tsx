import React, { useEffect, useState } from 'react';

interface Props {
  wsChanel: any;
}

const AddMessagesForm: React.FC<Props> = ({ wsChanel }) => {
  const [message, setMessage] = useState('');
  const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>(
    'pending',
  );

  useEffect(() => {
    wsChanel.addEventListener('open', () => {
      setReadyStatus('ready');
    });
  }, [wsChanel]);

  const sendMessageHandler = () => {
    if (!message) {
      return;
    }
    // dispatch(sendMessage(message));
    wsChanel.send(message);
    setMessage('');
  };
  return (
    <div className="form-group mt-3 mb-0">
      <div>
        <textarea
          className="form-control"
          rows={3}
          placeholder="Type your message here..."
          defaultValue=""
          onChange={(e) => setMessage(e.currentTarget.value)}
          value={message}
        />
      </div>
      {/* <textarea
        className="form-control"
        rows={3}
        placeholder="Type your message here..."
        defaultValue=""
      /> */}
      <div>
        <button
          type="submit"
          disabled={readyStatus !== 'ready'}
          onClick={sendMessageHandler}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AddMessagesForm;
