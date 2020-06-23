import React, { useState, useRef, useEffect } from 'react';

interface Props {
  placeholder?: string;
  onSave: (text: string) => void;
}

const TodoTextInput: React.FC<Props> = React.memo(
  ({ placeholder = 'What needs to be done?', onSave }) => {
    const [text, setText] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, [inputRef]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value.trim();
      setText(value);
    };

    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value.trim();
      if (event.which === 13) {
        onSave(value);
        setText(' ');
      }
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value.trim();
      onSave(value);
      setText(' ');
    };

    return (
      <>
        <input
          className="new-todo"
          type="text"
          placeholder={placeholder}
          ref={inputRef}
          value={text}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={handleSubmit}
        />
      </>
    );
  },
);

export default TodoTextInput;
