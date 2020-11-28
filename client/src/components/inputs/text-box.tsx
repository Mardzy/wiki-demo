import * as React from 'react';
import {  Input  } from 'antd';

type TextBoxProps = {
  handleChange(value: string): void
}

const TextBox: React.FC<TextBoxProps> = ({ handleChange }: TextBoxProps) =>
  <>
    <Input
      onChange={
        (e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e.target.value)
      }
      placeholder="Enter title to search"
    />
  </>
  ;

export default TextBox;
