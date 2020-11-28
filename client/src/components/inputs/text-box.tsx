import * as React from 'react';
import {  Input  } from 'antd';
import {ChangeEvent} from "react";

type TextBoxProps = {
  handleChange: any
}

const TextBox: React.FC<TextBoxProps> = ({ handleChange }: TextBoxProps) =>
  <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.value: ", e.target.value);
    return handleChange(e.target.value)
  }} />;

export default TextBox;
