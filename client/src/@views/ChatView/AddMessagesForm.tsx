import React from 'react';

const AddMessagesForm: React.FC = () => {
  return (
    <div className="form-group mt-3 mb-0">
      <textarea
        className="form-control"
        rows={3}
        placeholder="Type your message here..."
        defaultValue=""
      />
    </div>
  );
};

export default AddMessagesForm;
