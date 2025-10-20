'use client'

import { 
  FieldValues,
  UseFormRegister,
  FieldErrors,
  Path,
} from 'react-hook-form'

type InputProps<TFieldValues extends FieldValues> = {
  id: Path<TFieldValues>
  label: string
  type?: string
  disabled?: boolean
  required?: boolean
  register: UseFormRegister<TFieldValues>
  errors: FieldErrors<TFieldValues>
}

// 入力フォーム
function Input<TFieldValues extends FieldValues>({
  id,
  label,
  type = 'text',
  disabled,
  register,
  required,
  errors,
}: InputProps<TFieldValues>) {
  const error = errors[id]

  return (
    <div className="relative w-full">
      <div className="mb-2 font-bold">{label}</div>
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        type={type}
        className={`w-full rounded-lg border-2 p-4 outline-none transition disabled:cursor-not-allowed disabled:opacity-70
          ${
            error
              ? 'border-red-500 focus:border-red-500'
              : 'border-neutral-300 focus:border-sky-500'
          }`}
      />
      {error && (
        <div className="my-3 text-center text-sm text-red-500">
          {String(error.message ?? '')}
        </div>
      )}
    </div>
  )
}

export default Input