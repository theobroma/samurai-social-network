// UploadButton : https://medium.com/codex/use-a-button-to-upload-files-on-your-react-app-with-bootstrap-ef963cbe8280
// ref+TS : https://www.designcise.com/web/tutorial/how-to-fix-useref-react-hook-cannot-assign-to-read-only-property-typescript-error
import React, { useRef, useState } from 'react';

type Props = {
  handleUpload: (file: File) => void;
};

const UploadButton: React.FC<Props> = ({ handleUpload }) => {
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChoosing = () => {
    inputRef.current?.click();
  };
  const handleDisplayFileDetails = () => {
    if (inputRef.current?.files && inputRef.current?.files[0]) {
      setUploadedFileName(inputRef.current.files[0].name);
    }
  };

  const handleCancel = () => {
    // reset all
    // TODO: bug
    // inputRef.current = null;
    setUploadedFileName(null);
  };

  const handleSubmit = () => {
    if (inputRef.current?.files) {
      handleUpload(inputRef.current.files[0]);
      // reset all
      inputRef.current = null;
      setUploadedFileName(null);
    }
  };

  return (
    <div className="m-3">
      <input
        ref={inputRef}
        onChange={handleDisplayFileDetails}
        className="d-none"
        type="file"
      />
      <button
        type="button"
        onClick={handleChoosing}
        className={`mr-3 btn btn-outline-${
          uploadedFileName ? 'success' : 'primary'
        }`}
      >
        Choose file
      </button>
      {!!uploadedFileName && (
        <>
          <span className="mr-3">{uploadedFileName}</span>
          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-outline-primary"
          >
            Upload
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-outline-secondary"
          >
            Cancel
          </button>
        </>
      )}
    </div>
  );
};

export default UploadButton;
