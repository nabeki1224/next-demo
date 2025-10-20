'use client'

import {
  FieldValues,
  UseFormRegister,
  FieldErrors,
  Path,
} from 'react-hook-form'

type TextareaProps<TFieldValues extends FieldValues> = {
  id: Path<TFieldValues>
  label: string
  disabled?: boolean
  required?: boolean
  register: UseFormRegister<TFieldValues>
  errors: FieldErrors<TFieldValues>
}

function Textarea<TFieldValues extends FieldValues>({
  id,
  label,
  disabled,
  register,
  required,
  errors,
}: TextareaProps<TFieldValues>) {
  const error = errors[id]

  return (
    <div className="relative w-full">
      <div className="mb-2 font-bold">{label}</div>
      <textarea
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        rows={5}
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

export default Textarea