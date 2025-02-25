import { Input } from "@/components/ui/input";
import { useState } from "react";

interface FormFieldProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  minLength?: number;
}

export const FormField = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  required = true,
  minLength,
}: FormFieldProps) => {
  const [touched, setTouched] = useState(false);

  const showError = touched && required && value.trim() === "";
  const showLengthError = touched && minLength && value.length < minLength;

  return (
    <div className="flex flex-col space-y-1">
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setTouched(true);
        }}
        onBlur={() => setTouched(true)}
        className={showError || showLengthError ? "border-red-500" : ""}
      />
      {showError && (
        <span className="text-red-500 text-sm">Este campo é obrigatório</span>
      )}
      {showLengthError && (
        <span className="text-red-500 text-sm">
          Mínimo de {minLength} caracteres
        </span>
      )}
    </div>
  );
};
