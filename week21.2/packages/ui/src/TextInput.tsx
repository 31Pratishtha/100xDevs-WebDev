
interface ITextInputProps {
  placeholder: string;
}
const TextInput = ({
  placeholder
}: ITextInputProps) => {
  return (
    <input placeholder={placeholder}></input>
  )
}

export default TextInput