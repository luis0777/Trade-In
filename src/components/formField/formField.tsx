import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormFieldProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  required?: boolean;
  type?: "text" | "textarea" | "select";
  options?: { value: string; label: string }[];
  showError?: boolean; 
  rows?: number;
  className?: string;
  onClick?: () => void;
}

export const FormField = ({
  label,
  placeholder,
  value,
  onChange,
  required = false,
  type = "text",
  options = [],
  showError = false,
  rows,
  className,
  onClick,
}: FormFieldProps) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (required && showError && !value.trim()) {
      setError(true);
    } else {
      setError(false);
    }
  }, [showError, value, required]);

  return (
    <div className="flex flex-col space-y-1.5">
      {label && <label className="font-semibold">{label}</label>}

      {type === "textarea" ? (
        <Textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          className={error ? "border-red-500" : ""}
        />
      ) : type === "select" ? (
        <select
          value={value}
          onChange={onChange}
          className={`border rounded-md p-2 ${error ? "border-red-500" : ""}`}
        >
          <option value="">Selecione uma opção</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={error ? "border-red-500" : ""}
        />
      )}

      {error && <span className="text-red-500 text-sm">Campo obrigatório</span>}
    </div>
  );
};
