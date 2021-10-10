import React, { FC, useRef, useState } from 'react';

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function clickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(value);
    console.log(inputRef.current?.value);
    setValue('');
  }

  function dragHandler(e: React.DragEvent<HTMLDivElement>) {
    console.log('DRAG');
  }

  function dragWithPreventHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDrag(true);
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    setIsDrag(false);
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDrag(false);
    console.log('DROP');
  }

  return (
    <div>
      <input
        type='text'
        value={value}
        onChange={changeHandler}
        placeholder='Управляемый'
      />
      <input type='text' ref={inputRef} placeholder='Неуправляемый' />
      <button onClick={clickHandler}>Click</button>
      <div
        draggable
        onDrag={dragHandler}
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'red',
          marginTop: 15,
        }}
      ></div>
      <div
        onDragOver={dragWithPreventHandler}
        onDragLeave={dragLeaveHandler}
        onDrop={dropHandler}
        style={{
          width: 200,
          height: 200,
          backgroundColor: isDrag ? 'blue' : 'red',
          marginTop: 15,
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
