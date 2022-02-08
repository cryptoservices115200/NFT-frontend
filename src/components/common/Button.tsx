const Button = ({
  primary,
  secondary,
  text,
  onClick,
  styles,
}: {
  primary?: boolean;
  secondary?: boolean;
  text: string;
  onClick?: () => void;
  styles?: { [key: string]: string };
}) => {
  return (
    <>
      {primary && (
        <button
          className={"custom-btn primary-btn rounded-pill"}
          onClick={onClick}
          style={{ ...styles }}
        >
          {text}
        </button>
      )}
      {secondary && (
        <button
          style={{ ...styles }}
          className="custom-btn secondary-btn rounded-pill"
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
