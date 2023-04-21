import { useRef, useState } from "react";

const TextForm = () => {
	const [text, setText] = useState<string[]>([]);
	const textRef = useRef<any>(null);

	const convertText = (e: any) => {
		e.preventDefault();
		const arr = textRef.current.value.split("\n");
		let newArr = arr.map((element: string) => {
			return "*" + element;
		});
		newArr = newArr.map((element: string) => {
			if (element.includes("[") && element.includes("]")) {
				let newElement = [...element];
				const startIndex: number = newElement.indexOf("[");
				const endIndex: number = newElement.indexOf("]");
				newElement[startIndex] = "{";
				newElement[endIndex] = "}";
				return newElement;
			}
			if (element.includes("[") || element === "[") {
				if (element === "[") {
					element = "{";
					return element;
				}
				let newElement = [...element];
				const startIndex: number = newElement.indexOf("[");
				newElement[startIndex] = "{";
				return newElement;
			}
			if (element.includes("]") || element === "]") {
				if (element === "]") {
					console.log("hello");
					element = "}";
					return element;
				}
				let newElement = [...element];
				const startIndex: number = newElement.indexOf("]");
				newElement[startIndex] = "}";
				return newElement;
			}

			return element;
		});
		newArr.unshift("*");
		newArr.push("*");
		setText([...newArr]);
	};

	return (
		<div>
			<form onSubmit={convertText}>
				<textarea ref={textRef} cols={90}></textarea>
				<button>Convert</button>
			</form>
			<div style={{margin: '3rem'}}>
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
