import { useRef, useState } from "react";

const TextForm = () => {
	const [text, setText] = useState<string[]>([]);
	const textRef = useRef<HTMLTextAreaElement>(null);

	const convertText = (e: React.SyntheticEvent) => {
		e.preventDefault();
		if (!textRef.current?.value) {
			return;
		}
		let inputText = textRef.current.value
			.replace(/\[/g, "{")
			.replace(/\]/g, "}");
		let formattedTexts = inputText.split("\n");
		formattedTexts = formattedTexts.map((eachLine: string) => {
			return "*" + eachLine;
		});
		setText([...formattedTexts]);
	};

	return (
		<div className="flex items-center flex-col mt-1">
			<form onSubmit={convertText}>
				<div className="flex flex-col items-center gap-2">
					<label className="block text-sm font-medium text-gray-900 dark:text-white">
						Enter Your Api Response
					</label>
					<textarea
						className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						ref={textRef}
						cols={90}
						rows={15}
					></textarea>
					<div>
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Convert
						</button>
					</div>
				</div>
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
