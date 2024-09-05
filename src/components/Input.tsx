import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  setValue: (value: string) => void;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  placeholder?: string;
}

const Input: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  setValue,
  register,
  errors,
  placeholder = "",
}) => {
  return (
    <div className="flex flex-col text-[13px]">
      <label className="mt-3 text-base font-medium">{label}</label>
      <div className={`flex items-center border-2 rounded-lg min-h-[50px] w-[470px] max-sm:max-w-[395px] ${errors[name] && " border-red-400"}`}>
        <input
          type="text"
          {...register(name, {
            required: true,
            onChange: (e) => setValue(e.target.value),
          })}
          value={value}
          className="flex-grow pl-3 pr-3 rounded-lg outline-none"
          placeholder={placeholder}
        />
        {errors[name] ? (
          <FontAwesomeIcon icon={faXmarkCircle} className="text-red-600 mr-5 size-4" />
        ) : value && (
          <FontAwesomeIcon icon={faCheckCircle} className="text-[#60E354] mr-5 size-4" />
        )}
      </div>
      {errors[name] && <p className="text-red-600 text-[13px] font-medium">This field is required.</p>}
    </div>
  );
};

export default Input;