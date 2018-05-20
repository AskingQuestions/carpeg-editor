importScripts("carbonite.js", "carpeg.js");

onmessage = (event) => {
	postMessage(buildGrammar(event.data.grammar, event.data.name));
};

function buildCarbonite(str, platform) {
	let c = new Carbonite.Compiler();
	c.addNativeLibrary();

	let main = c.addSource("main", str);
	main.file = "main";
	main.process();

	c.build(platform || "javascript.source.memory", {});

	if (c.status.hadError)
		console.error(c.status.firstError.stringify());
	
	return {code: c.rawOutput, error: c.status.hadError ? c.status.firstError.stringify() : false};
}

function buildGrammar(str, name) {
	let grammar = new Carpeg.grammar(str);
	grammar.parserClass = name || "DemoParser";
	try {
		var carbonOutput = grammar.generate();
	}catch(e) {
		return {code: "", error: e.toString()}
	}
	
	return buildCarbonite(carbonOutput);
}