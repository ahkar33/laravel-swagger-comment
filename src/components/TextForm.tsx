import { useRef, useState } from "react";
import Button from "./Button";

const TextForm = () => {
	const [formText, setFormText] = useState<string>("");
	const textRef = useRef<HTMLTextAreaElement>(null);

	const convertText = () => {
		if (!textRef.current?.value) {
			return;
		}
		let inputText = textRef.current.value
			.replace(/\[/g, "{")
			.replace(/\]/g, "}")
			.trim();
		let formattedTexts = inputText.split("\n");
		formattedTexts = formattedTexts.map((eachLine: string) => {
			return "*" + eachLine;
		});
		const formattedTextsStr = formattedTexts.join("\n");
		setFormText(formattedTextsStr);
	};
	const handleCopy = () => {
		navigator.clipboard.writeText(formText);
	};

	return (
		<div className="flex items-center flex-col mt-1">
				<div className="flex flex-col items-center gap-2">
					<label className="block text-xl font-bold text-blue-500">
						Enter Your Api Response
					</label>
					<textarea
						className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						ref={textRef}
						cols={150}
						rows={15}
					></textarea>
					<div>
						<Button onClick={convertText} text="Convert" />
					</div>
				</div>
			<div className="mt-2">
				<textarea
					className="block p-2.5 w-full text-sm text-gray-900 bg-blue-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					cols={150}
					rows={15}
					value={formText}
				></textarea>
				<div className="flex justify-center">
					<Button onClick={handleCopy} text="Copy Code" />
				</div>
			</div>
		</div>
	);
};

export default TextForm;
