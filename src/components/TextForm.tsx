import { useRef, useState } from "react";
import Button from "./Button";

const TextForm = () => {
	const [formText, setFormText] = useState<string>("");
	const [rawText, setRawText] = useState<string>("");

	const convertText = (e: React.SyntheticEvent) => {
		e.preventDefault();
		let inputText = rawText.replace(/\[/g, "{").replace(/\]/g, "}").trim();

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
			<form onSubmit={convertText}>
				<div className="flex flex-col items-center gap-2">
					<label className="block text-xl font-bold text-blue-500">
						Enter Your Api Response
					</label>
					<textarea
						className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
						cols={150}
						rows={15}
						value={rawText}
						onChange={(e) => setRawText(e.target.value)}
					></textarea>
					<div>
						<Button text="Convert" />
					</div>
				</div>
			</form>
			<div className="mt-2">
				<textarea
					className="block p-2.5 w-full text-sm text-gray-900 bg-blue-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
					cols={150}
					rows={15}
					value={formText}
					readOnly
				></textarea>
				<div className="flex justify-center">
					<Button onClick={handleCopy} text="Copy Code" />
				</div>
			</div>
		</div>
	);
};

export default TextForm;
