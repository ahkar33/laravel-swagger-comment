type ButtonProps = {
	bgColor?: string;
	hoverBgColor?: string;
	textColor?: string;
  text: string;
  onClick: () => void
};

const Button = ({ bgColor, hoverBgColor, textColor, text,onClick }: ButtonProps) => {
	return (
		<button
			className={`bg-${bgColor ?? "blue-500"} hover:bg-${
				hoverBgColor ?? "blue-700"
			} text-${textColor ?? "white"} font-bold py-2 px-4 my-2 rounded`}
      onClick={onClick}
		>
      {text}
		</button>
	);
};

export default Button;
