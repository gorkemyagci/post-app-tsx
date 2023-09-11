"use client";
import React, { useState, HTMLProps } from 'react';

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  type?: string;
  detail?: string;
}

export default function Input({ label, type = "text", ...props }: InputProps) {
  const [show, setShow] = useState<boolean>(false);
  const [inputType, setType] = useState<string>(type);

  return (
    <div className='flex flex-col space-y-2.5 w-full'>
      <div className={`${type === 'password' && 'relative flex'} w-full`}>
        <input
          id={inputType}
          type={inputType}
          placeholder={label}
          {...props}
          className="rounded-lg placeholder:text-[#98A2B3] border hover:border-[#626be94c] border-[#EAECF0] shadow-md shadow-[#0B162C0D]  placeholder:text-sm placeholder:font-medium placeholder:tracking-wider px-3 py-1.5 outline-none transition-all duration-150 bg-white w-full h-14"
        />
      </div>
    </div>
  );
}
