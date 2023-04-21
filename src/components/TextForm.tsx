import { useRef, useState } from "react";

const TextForm = () => {
	const [text, setText] = useState<string[]>([]);
	const textRef = useRef<HTMLTextAreaElement>(null);

	const convertText = (e: React.SyntheticEvent) => {
		e.preventDefault();
		if (!textRef.current?.value) {
			return;
		}
		let inputText = textRef.current.value.replace(/\[/g, "{");
		inputText = inputText.replace(/\]/g, "}");
		const arr = inputText.split("\n");
		let newArr = arr.map((element: string) => {
			return "*" + element;
		});
		setText([...newArr]);
	};

	return (
		<div>
			<form onSubmit={convertText}>
				<textarea ref={textRef} cols={90}></textarea>
				<button>Convert</button>
			</form>
			<div style={{ margin: "3rem" }}>
				{text.map((text, index) => (
					<pre key={index}>
						<span>{text}</span>
						<br />
					</pre>
				))}
			</div>
		</div>
	);
};

export default TextForm;
