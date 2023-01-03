import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ size, ...rest }: InputProps) {
  return <InputContainer {...rest} />
}
