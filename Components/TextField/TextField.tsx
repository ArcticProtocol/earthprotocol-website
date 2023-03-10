type TextFieldProps = {
  placeholder?: string;
  value?: string;
  type?: string;
  width?: string;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextField(props: TextFieldProps) {
  var { width } = props;
  return (
    <input
      className="{{width ? width : w-1/2}}  text-white font-bold xl:w-1/2 rounded-md py-4 px-6 mt-6 focus:outline-none bg-white backdrop-filter backdrop-blur-sm bg-opacity-20 placeholder-white focus:bg-gradient-to-r from-teal-400 via-green-400 to-green-500"
      type={props.type ?? "text"}
      placeholder={props.placeholder ?? ""}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
