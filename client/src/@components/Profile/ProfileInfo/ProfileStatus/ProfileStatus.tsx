import React, { ChangeEvent, FC, useEffect, useState } from 'react';

type PropsType = {
  status: string;
  updateStatus: (status: string) => void;
};

const ProfileStatus: FC<PropsType> = ({ status, updateStatus }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [statusVal, setStatus] = useState<string>(status);

  useEffect(() => setStatus(status), [status]);

  const activateEditMode = () => setEditMode(true);
  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(statusVal);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) =>
    setStatus(e.currentTarget.value);

  return (
    <>
      Status:
      {!editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>{status || 'No status'}</span>
        </div>
      ) : (
        <input
          onChange={onStatusChange}
          autoFocus
          onBlur={deactivateEditMode}
          value={statusVal}
        />
      )}
    </>
  );
};

export default ProfileStatus;
