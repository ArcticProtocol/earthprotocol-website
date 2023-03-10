type ButtonProps = {
  onClick: () => void;
  text: string;
  buttonStyle?: string;
  textStyle?: string;
};

export default function Button(props: ButtonProps) {
  return (
    <button className={props.buttonStyle} onClick={props.onClick}>
      <p className={props.textStyle}>{props.text}</p>
    </button>
  );
}
