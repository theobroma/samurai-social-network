import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import usePrevious from '../../../../@hooks/usePrevious';

type PropsType = {
  status: string;
  updateStatus: (status: string) => void;
};

export const ProfileStatus: React.FC<PropsType> = ({
  status,
  updateStatus,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [statusVal, setStatus] = useState<string>(status);
  const prevStatusVal = usePrevious(statusVal);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => setStatus(status), [status]);

  const activateEditMode = () => setEditMode(true);

  const deactivateEditMode = () => {
    setEditMode(false);
    // prevent unnecessary api call
    if (statusVal !== prevStatusVal) {
      updateStatus(statusVal);
    }
    setEditMode(false);
  };

  // https://stackoverflow.com/a/53315615/3988363
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [editMode]);

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
          ref={inputRef}
          onChange={onStatusChange}
          // autoFocus
          onBlur={deactivateEditMode}
          value={statusVal}
        />
      )}
    </>
  );
};

export default ProfileStatus;
