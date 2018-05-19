//Relative Carbon
//Relative Context
//Relative Error
//Relative FileSystem
//Relative File
//Relative Stat
Memory = function () {


}

//Relative Buffer
//Relative primitive
//Relative object
//Relative array
//Relative bool
//Relative byte
//Relative Console
//Relative everything
//Relative Exception
//Relative float
//Relative function
//Relative int
//Relative uint
//Relative uint8
//Relative int8
//Relative uint16
//Relative int16
//Relative uint32
//Relative int32
//Relative uint64
//Relative int64
//Relative map
//Relative null
//Relative empty
//Relative void
//Relative string
Carpeg = function () {


}

Carpeg.expressions = function () {


}

Carpeg.imports = function () {


}

Carpeg.context = function () {
	this.checkerIndex = 0;

	this.next = 0;

	this.parent = null;

	this.parentCapture = null;

	this.action = null;

	this.hasAction = false;

	this.childLabels = {};

	this.firstChild = null;

	this.firstNonComplexChild = null;

	this.customError = false;

	this.errorString = "";

	this.captureTo = 0;

	this.veryLast = false;

	this.putAfterLast = false;

	this.isLabeled = false;

	this.label = "";

	this.extraCheck = false;

	this.checkString = "";

	this.doPut = false;

	this.put = null;

	this.doMove = false;

	this.move = null;

	this.doOverError = false;

	this.error = null;

	this.moveBackOnFailure = false;

	if (arguments.length == 0) {

	}

}

Carpeg.context.prototype.capturePut = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var cap = arguments[0];
		var thing = arguments[1];
		var rtn = [];
		if (this.doPut) {
			return this.put.put(this, cap, thing);
			}else{
				rtn = [cap, "[\"", this.label, "\"] = ", thing, ";"];
			}
		return rtn.join("");
	}
}

Carpeg.context.prototype.doNext = function () {
	if (arguments.length == 0) {
		if (this.doMove) {

			}else{
				return "c = " + this.next + ";";
			}
	}
}

Carpeg.context.prototype.doError = function () {
	if (arguments.length == 3 && (typeof arguments[0] == 'number' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var code = arguments[0];
		var errorString = arguments[1];
		var char = arguments[2];
		if (this.doOverError) {

			}else{
				return "this.giveError(" + code + ", \"" + errorString + "\", " + char + ");";
			}
	}
}

Carpeg.context.prototype.captureRoot = function () {
	if (arguments.length == 0) {
		return "captureRoot" + this.captureTo;
	}
}

Carpeg.context.prototype.captureName = function () {
	if (arguments.length == 0) {
		var rtn = [];
		if (this.isLabeled) {
			var cap = "this.data";
			if (this.captureTo > 0) {
				cap = this.captureRoot();
				}
			if (this.hasAction && this.putAfterLast) {
				rtn = [this.action.capture(cap + "[\"" + this.label + "\"]", "")];
				}else{
					rtn = [cap, "[\"", this.label, "\"]"];
				}
			}else{

			}
		return rtn.join("");
	}
}

Carpeg.context.prototype.capture = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var thing = arguments[0];
		var rtn = [];
		if (this.isLabeled) {
			var cap = "this.data";
			if (this.captureTo > 0) {
				cap = "captureRoot" + this.captureTo;
				}
			if (this.hasAction && this.putAfterLast) {
				rtn = [this.action.capture(cap + "[\"" + this.label + "\"", thing)];
				}else{
					rtn = [this.capturePut(cap, thing)];
				}
			}else{

			}
		return rtn.join("");
	}
}

Carpeg.context.prototype.copyOverrides = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.context) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var from = arguments[0];
		this.doPut = from.doPut;
		this.put = from.put;
		this.doMove = from.doMove;
		this.move = from.move;
		this.doOverError = from.doOverError;
		this.error = from.error;
	}
}

Carpeg.context.prototype.buildCapture = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && ((arguments[1] instanceof Carpeg.expression || (arguments[1] instanceof Carpeg.expressions.stringLiteral) || (arguments[1] instanceof Carpeg.expressions.ruleRef) || (arguments[1] instanceof Carpeg.expressions.classCapture) || (arguments[1] instanceof Carpeg.expressions.native) || (arguments[1] instanceof Carpeg.expressions.any) || (arguments[1] instanceof Carpeg.expressions.sequence) || (arguments[1] instanceof Carpeg.expressions.choice) || (arguments[1] instanceof Carpeg.expressions.group) || (arguments[1] instanceof Carpeg.expressions.labeled) || (arguments[1] instanceof Carpeg.expressions.optional) || (arguments[1] instanceof Carpeg.expressions.not) || (arguments[1] instanceof Carpeg.expressions.action) || (arguments[1] instanceof Carpeg.expressions.list)) || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var type = arguments[0];
		var you = arguments[1];
		you.grammar.captures.push(this.captureVar("new " + type + "()", type));
	}
}

Carpeg.context.prototype.addCapture = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var you = arguments[0];
		you.parentRule.captureIndex++;
		this.captureTo = you.parentRule.captureIndex;
		return you.parentRule.captureIndex;
	}
}

Carpeg.context.prototype.captureVar = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var thing = arguments[0];
		var type = arguments[1];
		var rtn = ["var ", type, " captureRoot", this.captureTo, " = ", thing, ";"];
		return rtn.join("");
	}
}

Carpeg.context.prototype.doSuccess = function () {
	if (arguments.length == 0) {
		var rtn = [];
		if (this.putAfterLast) {
			if (this.hasAction) {
				rtn.push(this.action.capture("captureRoot" + this.captureTo + "[\"" + this.label + "\"]", ""));
				}else{
					if (this.parentCapture == null) {
						this.capture("captureRoot" + this.captureTo);
						}else{
							rtn.push(this.parentCapture.capture("captureRoot" + this.captureTo));
						}
				}
			}
		return rtn.join("\n");
	}
}

Carpeg.context.prototype.clone = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.context) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var ctx = arguments[0];
		this.parent = ctx;
		this.parentCapture = ctx.parentCapture;
		this.checkerIndex = ctx.checkerIndex;
		this.next = ctx.next;
		this.customError = ctx.customError;
		this.errorString = ctx.errorString;
		this.extraCheck = ctx.extraCheck;
		this.checkString = ctx.checkString;
		this.moveBackOnFailure = ctx.moveBackOnFailure;
		this.captureTo = ctx.captureTo;
		this.hasAction = ctx.hasAction;
		this.action = ctx.action;
	}
}

CarpegNativeParserLocation = function () {
	this.offset = 0;

	this.line = 1;

	this.column = 0;

	if (arguments.length == 3 && (typeof arguments[0] == 'number' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'number' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var offset = arguments[0];
		var line = arguments[1];
		var column = arguments[2];
		this.offset = offset;
		this.line = line;
		this.column = column;
	}

}

CarpegNativeParserError = function () {
	this.code = 0;

	this.found = 0;

	this.expected = 0;

	this.vested = 0;

	this.path = [];

	this.offset = 0;

	this.line = 1;

	this.column = 0;

	if (arguments.length == 3 && (typeof arguments[0] == 'number' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'number' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var offset = arguments[0];
		var line = arguments[1];
		var column = arguments[2];
		this.offset = offset;
		this.line = line;
		this.column = column;
	}

}

CarpegNativeParserError.prototype.clone = function () {
	if (arguments.length == 0) {
		var clone = new CarpegNativeParserError(this.offset, this.line, this.column);
		clone.code = this.code;
		clone.found = this.found;
		clone.expected = this.expected;
		clone.vested = this.vested;
		for (var i = 0; i < this.path.length; i++) {
			var current = this.path[i];
			clone.path.push(current.clone());
			}
		return clone;
	}
}

CarpegNativeParserOutput = function () {
	this.error = null;

	this.hadError = false;

	this.data = {};

	if (arguments.length == 3 && (typeof arguments[0] == 'boolean' || typeof arguments[0] == 'undefined' || arguments[0] === null) && ((arguments[1] instanceof CarpegNativeParserError) || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'object' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var hadError = arguments[0];
		var error = arguments[1];
		var data = arguments[2];
		this.hadError = hadError;
		this.error = error;
		this.data = data;
	}

}

CarpegNativeParser = function () {
	this.lastErrors = [];

	this.hadError = false;

	this.parsedChars = 0;

	this.currentInput = "";

	this.data = {};

	this.error = new CarpegNativeParserError(0, 0, 0);

	this.offset = 0;

	this.line = 1;

	this.column = 0;

	if (arguments.length == 0) {

	}

}

CarpegNativeParser.parse = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var input = arguments[0];
		var parser = new CarpegNativeParser();
		var output = parser.start(input);
		if (parser.hadError && parser.error.found == String.fromCharCode(1)) {
			parser.error.found = "End of input";
			}
		var rtn = new CarpegNativeParserOutput(parser.hadError, parser.error, parser.data["data"]);
		return rtn;
	}
}

CarpegNativeParser.prototype.assembleCodes = function () {
	if (arguments.length == 1 && (arguments[0]instanceof Array || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var codes = arguments[0];
		var rtn = "";
		for (var i = 0; i < codes.length; i++) {
			rtn += String.fromCharCode(codes[i]);
			}
		return rtn;
	}
}

CarpegNativeParser.prototype.giveError = function () {
	if (arguments.length == 3 && (typeof arguments[0] == 'number' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var code = arguments[0];
		var expected = arguments[1];
		var found = arguments[2];
		this.hadError = true;
		this.error.code = code;
		this.error.expected = expected;
		this.error.found = found;
		this.error.offset = this.offset;
		this.error.line = 1;
		this.error.column = 0;
	}
}

CarpegNativeParser.prototype.start = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var input = arguments[0];
		this.currentInput = input;
		input += String.fromCharCode(1);
		this.data["data"] = {};
		var data = this.data["data"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = 0;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (c == 0 - 1) {
				if (currentChar != String.fromCharCode(1)) {
					this.giveError(2, "EOF", currentChar);
					}
				}
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this.Grammar(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "Grammar(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						data["parsed"] = ruleOutCast0;
						c = 0 - 1;
						this.error.vested++;
					}
				}
			this.offset++;
			this.column++;
			if (this.hadError) {
				break;
				}
			}
		for (var i = 0;i < this.error.offset;i++) {
			this.error.column++;
			if (this.currentInput[i] == "\n") {
				this.error.line++;
				this.error.column = 0;
				}
			}
		if (false && this.hadError == false) {
			if (this.offset < input.length - 1) {
				this.giveError(2, "EOF", input[this.offset + 1]);
				}
			}
	}
}

CarpegNativeParser.prototype.Comment = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = "";
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		data = "";
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this._(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "White space(optional)(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						c = 1;
					}
				}else if (c == 1) {
				var lit1 = [47, 47];
				if (currentCode == lit1[literalChar]) {
					literalChar++;
					if (literalChar == 2) {
						c = 2;
						literalChar = 0;
						}
					this.error.vested++;
					}else{
						this.giveError(1, "" + this.assembleCodes(lit1) + "", currentChar);
					}
				}else if (c == 2) {
				var passed2 = false;
				if (currentCode == 10) {
					passed2 = true;
					}
				if (passed2 == false) {

					}
				if (passed2) {
					c = 0 - 1;
					charPos--;
					this.offset--;
					this.error.vested++;
					}else{
						c = 2;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Grammar = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		data["imports"] = [];
		data["rules"] = [];
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this.Importer(input, charPos);
				if (ruleOut0.hadError) {
					c = 1;
					charPos--;
					this.offset--;
					if (ruleOut0.error.vested > 1) {
						this.giveError(ruleOut0.error.code, ruleOut0.error.expected, ruleOut0.error.found);
						}
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						var castimports0 = data["imports"];
						castimports0.push(ruleOutCast0);
						if (charPos == input.length - 1) {
							this.giveError(2, "EOF", currentChar);
							}
						c = 0;
						this.error.vested++;
					}
				}else if (c == 1) {
				var ruleOut1 = this._(input, charPos);
				if (ruleOut1.hadError) {
					this.giveError(ruleOut1.error.code, "White space(optional)(" + ruleOut1.error.expected + ")", ruleOut1.error.found);
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						c = 2;
					}
				}else if (c == 2) {
				var ruleOut2 = this.Rule(input, charPos);
				if (ruleOut2.hadError) {
					c = 3;
					charPos--;
					this.offset--;
					if (ruleOut2.error.vested > 1) {
						this.giveError(ruleOut2.error.code, ruleOut2.error.expected, ruleOut2.error.found);
						}
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						var castrules2 = data["rules"];
						castrules2.push(ruleOutCast2);
						c = 2;
						this.error.vested++;
					}
				}else if (c == 3) {
				var ruleOut3 = this._(input, charPos);
				if (ruleOut3.hadError) {
					this.giveError(ruleOut3.error.code, "White space(optional)(" + ruleOut3.error.expected + ")", ruleOut3.error.found);
					}else{
						var ruleOutCast3 = ruleOut3.data["data"];
						charPos = this.offset;
						if (true) {
							var castac3 = data[""];
							var actionCap3imports = data["imports"];
							var actionCap3rules = data["rules"];
							dataStore["data"]["imports"] = actionCap3imports;
							dataStore["data"]["rules"] = actionCap3rules;
							}
						c = 0 - 1;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Importer = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var lit0 = [105, 109, 112, 111, 114, 116];
				if (currentCode == lit0[literalChar]) {
					literalChar++;
					if (literalChar == 6) {
						c = 1;
						literalChar = 0;
						}
					this.error.vested++;
					}else{
						this.giveError(1, "" + this.assembleCodes(lit0) + "", currentChar);
					}
				}else if (c == 1) {
				var ruleOut1 = this.__(input, charPos);
				if (ruleOut1.hadError) {
					this.giveError(ruleOut1.error.code, "White space(" + ruleOut1.error.expected + ")", ruleOut1.error.found);
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						c = 2;
					}
				}else if (c == 2) {
				var ruleOut2 = this.Safe_Name(input, charPos);
				if (ruleOut2.hadError) {
					this.giveError(ruleOut2.error.code, "Safe_Name(" + ruleOut2.error.expected + ")", ruleOut2.error.found);
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						data["name"] = ruleOutCast2;
						c = 3;
					}
				}else if (c == 3) {
				var ruleOut3 = this._(input, charPos);
				if (ruleOut3.hadError) {
					this.giveError(ruleOut3.error.code, "White space(optional)(" + ruleOut3.error.expected + ")", ruleOut3.error.found);
					}else{
						var ruleOutCast3 = ruleOut3.data["data"];
						charPos = this.offset;
						if (true) {
							var castac3 = data[""];
							var actionCap3name = data["name"];
							dataStore["data"]["name"] = actionCap3name;
							}
						c = 0 - 1;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Safe_Name = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = "";
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		data["str"] = "";
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var passed0 = false;
				if (currentCode == 95) {
					passed0 = true;
					}
				if (passed0 == false) {
					if (currentCode >= 65 && currentCode <= 90) {
						passed0 = true;
						}else if (currentCode >= 97 && currentCode <= 122) {
						passed0 = true;
						}else if (currentCode >= 48 && currentCode <= 57) {
						passed0 = true;
						}
					}
				if (passed0) {
					data["str"] += currentChar;
					if (true) {
						var castacstr0 = data["str"];
						var actionCap0str = data["str"];
						dataStore["data"] = actionCap0str;
						}
					c = 0;
					this.error.vested++;
					}else{
						var caststr0 = data["str"];
						if (caststr0.length >= 1) {
							if (true) {
								var castacstr0 = data["str"];
								var actionCap0str = data["str"];
								dataStore["data"] = actionCap0str;
								}
							c = 0 - 1;
							charPos--;
							this.offset--;
							}else{
								this.giveError(1, "A-Z, a-z, 0-9, _", currentChar);
							}
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Type_Name = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = "";
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		data["str"] = "";
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var passed0 = false;
				if (currentCode == 95) {
					passed0 = true;
					}else if (currentCode == 62) {
					passed0 = true;
					}else if (currentCode == 60) {
					passed0 = true;
					}
				if (passed0 == false) {
					if (currentCode >= 65 && currentCode <= 90) {
						passed0 = true;
						}else if (currentCode >= 97 && currentCode <= 122) {
						passed0 = true;
						}else if (currentCode >= 48 && currentCode <= 57) {
						passed0 = true;
						}
					}
				if (passed0) {
					data["str"] += currentChar;
					if (true) {
						var castacstr0 = data["str"];
						var actionCap0str = data["str"];
						dataStore["data"] = actionCap0str;
						}
					c = 0;
					this.error.vested++;
					}else{
						var caststr0 = data["str"];
						if (caststr0.length >= 1) {
							if (true) {
								var castacstr0 = data["str"];
								var actionCap0str = data["str"];
								dataStore["data"] = actionCap0str;
								}
							c = 0 - 1;
							charPos--;
							this.offset--;
							}else{
								this.giveError(1, "A-Z, a-z, 0-9, _, >, <", currentChar);
							}
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Rule = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		data = [];
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this._(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "White space(optional)(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						c = 1;
					}
				}else if (c == 1) {
				var ruleOut1 = this.Comment(input, charPos);
				if (ruleOut1.hadError) {
					c = 2;
					charPos--;
					this.offset--;
					if (ruleOut1.error.vested > 1) {
						this.giveError(ruleOut1.error.code, ruleOut1.error.expected, ruleOut1.error.found);
						}
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						c = 1;
						this.error.vested++;
					}
				}else if (c == 2) {
				var ruleOut2 = this._(input, charPos);
				if (ruleOut2.hadError) {
					this.giveError(ruleOut2.error.code, "White space(optional)(" + ruleOut2.error.expected + ")", ruleOut2.error.found);
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						c = 3;
					}
				}else if (c == 3) {
				var ruleOut3 = this.Type_Name(input, charPos);
				if (ruleOut3.hadError) {
					this.giveError(ruleOut3.error.code, "Type_Name(" + ruleOut3.error.expected + ")", ruleOut3.error.found);
					}else{
						var ruleOutCast3 = ruleOut3.data["data"];
						charPos = this.offset;
						data["outputType"] = ruleOutCast3;
						c = 4;
					}
				}else if (c == 4) {
				var ruleOut4 = this._(input, charPos);
				if (ruleOut4.hadError) {
					this.giveError(ruleOut4.error.code, "White space(optional)(" + ruleOut4.error.expected + ")", ruleOut4.error.found);
					}else{
						var ruleOutCast4 = ruleOut4.data["data"];
						charPos = this.offset;
						c = 5;
					}
				}else if (c == 5) {
				if (currentCode == 124) {
					c = 6;
					this.error.vested++;
					}else{
						this.giveError(1, "|", currentChar);
					}
				}else if (c == 6) {
				var ruleOut6 = this._(input, charPos);
				if (ruleOut6.hadError) {
					this.giveError(ruleOut6.error.code, "White space(optional)(" + ruleOut6.error.expected + ")", ruleOut6.error.found);
					}else{
						var ruleOutCast6 = ruleOut6.data["data"];
						charPos = this.offset;
						c = 7;
					}
				}else if (c == 7) {
				var ruleOut7 = this.Safe_Name(input, charPos);
				if (ruleOut7.hadError) {
					this.giveError(ruleOut7.error.code, "Safe_Name(" + ruleOut7.error.expected + ")", ruleOut7.error.found);
					}else{
						var ruleOutCast7 = ruleOut7.data["data"];
						charPos = this.offset;
						data["name"] = ruleOutCast7;
						c = 8;
					}
				}else if (c == 8) {
				var ruleOut8 = this._(input, charPos);
				if (ruleOut8.hadError) {
					this.giveError(ruleOut8.error.code, "White space(optional)(" + ruleOut8.error.expected + ")", ruleOut8.error.found);
					}else{
						var ruleOutCast8 = ruleOut8.data["data"];
						charPos = this.offset;
						c = 9;
					}
				}else if (c == 9) {
				var ruleOut9 = this.String(input, charPos);
				if (ruleOut9.hadError) {
					c = 10;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast9 = ruleOut9.data["data"];
						charPos = this.offset;
						data["label"] = ruleOutCast9;
						c = 10;
						this.error.vested++;
					}
				}else if (c == 10) {
				var ruleOut10 = this._(input, charPos);
				if (ruleOut10.hadError) {
					this.giveError(ruleOut10.error.code, "White space(optional)(" + ruleOut10.error.expected + ")", ruleOut10.error.found);
					}else{
						var ruleOutCast10 = ruleOut10.data["data"];
						charPos = this.offset;
						c = 11;
					}
				}else if (c == 11) {
				if (currentCode == 61) {
					c = 12;
					this.error.vested++;
					}else{
						this.giveError(1, "=", currentChar);
					}
				}else if (c == 12) {
				var ruleOut12 = this._(input, charPos);
				if (ruleOut12.hadError) {
					this.giveError(ruleOut12.error.code, "White space(optional)(" + ruleOut12.error.expected + ")", ruleOut12.error.found);
					}else{
						var ruleOutCast12 = ruleOut12.data["data"];
						charPos = this.offset;
						c = 13;
					}
				}else if (c == 13) {
				var ruleOut13 = this.Expression(input, charPos);
				if (ruleOut13.hadError) {
					this.giveError(ruleOut13.error.code, "Expression(" + ruleOut13.error.expected + ")", ruleOut13.error.found);
					}else{
						var ruleOutCast13 = ruleOut13.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast13;
						c = 14;
						this.error.vested++;
					}
				}else if (c == 14) {
				var ruleOut14 = this._(input, charPos);
				if (ruleOut14.hadError) {
					this.giveError(ruleOut14.error.code, "White space(optional)(" + ruleOut14.error.expected + ")", ruleOut14.error.found);
					}else{
						var ruleOutCast14 = ruleOut14.data["data"];
						charPos = this.offset;
						c = 15;
					}
				}else if (c == 15) {
				if (currentCode == 59) {
					c = 16;
					this.error.vested++;
					}else{
						this.giveError(1, ";", currentChar);
					}
				}else if (c == 16) {
				var ruleOut16 = this._(input, charPos);
				if (ruleOut16.hadError) {
					this.giveError(ruleOut16.error.code, "White space(optional)(" + ruleOut16.error.expected + ")", ruleOut16.error.found);
					}else{
						var ruleOutCast16 = ruleOut16.data["data"];
						charPos = this.offset;
						c = 17;
					}
				}else if (c == 17) {
				var ruleOut17 = this.Action_Block(input, charPos);
				if (ruleOut17.hadError) {
					c = 18;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast17 = ruleOut17.data["data"];
						charPos = this.offset;
						data["cap"] = ruleOutCast17;
						c = 18;
						this.error.vested++;
					}
				}else if (c == 18) {
				var ruleOut18 = this._(input, charPos);
				if (ruleOut18.hadError) {
					this.giveError(ruleOut18.error.code, "White space(optional)(" + ruleOut18.error.expected + ")", ruleOut18.error.found);
					}else{
						var ruleOutCast18 = ruleOut18.data["data"];
						charPos = this.offset;
						if (true) {
							var castac18 = data[""];
							var actionCap18name = data["name"];
							var actionCap18label = data["label"];
							var actionCap18cap = data["cap"];
							var actionCap18outputType = data["outputType"];
							var actionCap18exp = data["exp"];
							dataStore["data"]["name"] = actionCap18name;
							if (actionCap18label != null) {
								dataStore["data"]["label"] = actionCap18label;
								}
							if (actionCap18cap != null) {
								dataStore["data"]["cap"] = actionCap18cap;
								}
							dataStore["data"]["output"] = actionCap18outputType;
							dataStore["data"]["expression"] = actionCap18exp;
							}
						c = 0 - 1;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Expression = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this.Group_Expression(input, charPos);
				if (ruleOut0.hadError) {
					c = 1;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast0;
						if (true) {
							var castacexp0 = data["exp"];
							var actionCap0exp = data["exp"];
							dataStore["data"] = actionCap0exp;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}else if (c == 1) {
				var ruleOut1 = this.Modify_Expression(input, charPos);
				if (ruleOut1.hadError) {
					c = 2;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast1;
						if (true) {
							var castacexp0 = data["exp"];
							var actionCap0exp = data["exp"];
							dataStore["data"] = actionCap0exp;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}else if (c == 2) {
				var ruleOut2 = this.Group(input, charPos);
				if (ruleOut2.hadError) {
					c = 3;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast2;
						if (true) {
							var castacexp0 = data["exp"];
							var actionCap0exp = data["exp"];
							dataStore["data"] = actionCap0exp;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}else if (c == 3) {
				var ruleOut3 = this.Simple_Expression(input, charPos);
				if (ruleOut3.hadError) {
					this.giveError(1, "Group_Expression, Modify_Expression, Group, Simple_Expression", currentChar);
					}else{
						var ruleOutCast3 = ruleOut3.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast3;
						if (true) {
							var castacexp0 = data["exp"];
							var actionCap0exp = data["exp"];
							dataStore["data"] = actionCap0exp;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Sub_Expression = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this.Modify_Expression(input, charPos);
				if (ruleOut0.hadError) {
					c = 1;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast0;
						if (true) {
							var castacexp0 = data["exp"];
							var actionCap0exp = data["exp"];
							dataStore["data"] = actionCap0exp;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}else if (c == 1) {
				var ruleOut1 = this.Group(input, charPos);
				if (ruleOut1.hadError) {
					c = 2;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast1;
						if (true) {
							var castacexp0 = data["exp"];
							var actionCap0exp = data["exp"];
							dataStore["data"] = actionCap0exp;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}else if (c == 2) {
				var ruleOut2 = this.Simple_Expression(input, charPos);
				if (ruleOut2.hadError) {
					this.giveError(1, "Modify_Expression, Group, Simple_Expression", currentChar);
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast2;
						if (true) {
							var castacexp0 = data["exp"];
							var actionCap0exp = data["exp"];
							dataStore["data"] = actionCap0exp;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Group_Expression = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this._(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "White space(optional)(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						c = 1;
					}
				}else if (c == 1) {
				var ruleOut1 = this.Action(input, charPos);
				if (ruleOut1.hadError) {
					c = 2;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast1;
						if (true) {
							var castacexp1 = data["exp"];
							var actionCap1exp = data["exp"];
							dataStore["data"] = actionCap1exp;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}else if (c == 2) {
				var ruleOut2 = this.Sequence(input, charPos);
				if (ruleOut2.hadError) {
					c = 3;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast2;
						if (true) {
							var castacexp1 = data["exp"];
							var actionCap1exp = data["exp"];
							dataStore["data"] = actionCap1exp;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}else if (c == 3) {
				var ruleOut3 = this.Choice(input, charPos);
				if (ruleOut3.hadError) {
					this.giveError(1, "Action, Sequence, Choice", currentChar);
					}else{
						var ruleOutCast3 = ruleOut3.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast3;
						if (true) {
							var castacexp1 = data["exp"];
							var actionCap1exp = data["exp"];
							dataStore["data"] = actionCap1exp;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Code = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = "";
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		data["code"] = "";
		var brace = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var castnaccode0 = data["code"];
				if (currentChar == "}") {
					if (brace == 0) {
						if (true) {
							var castaccode0 = data["code"];
							var actionCap0code = data["code"];
							dataStore["data"] = actionCap0code;
							}
						c = 0 - 1;
						charPos--;
						this.offset--;
						}else{
							data["code"] += currentChar;
							if (true) {
								var castaccode0 = data["code"];
								var actionCap0code = data["code"];
								dataStore["data"] = actionCap0code;
								}
						}
					brace--;
					}else{
						if (currentChar == "{") {
							brace++;
							}
						data["code"] += currentChar;
						if (true) {
							var castaccode0 = data["code"];
							var actionCap0code = data["code"];
							dataStore["data"] = actionCap0code;
							}
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Action_Block = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				if (currentCode == 123) {
					c = 1;
					this.error.vested++;
					}else{
						this.giveError(1, "{", currentChar);
					}
				}else if (c == 1) {
				var ruleOut1 = this._(input, charPos);
				if (ruleOut1.hadError) {
					this.giveError(ruleOut1.error.code, "White space(optional)(" + ruleOut1.error.expected + ")", ruleOut1.error.found);
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						c = 2;
					}
				}else if (c == 2) {
				var ruleOut2 = this.Type_Name(input, charPos);
				if (ruleOut2.hadError) {
					this.giveError(ruleOut2.error.code, "Type_Name(" + ruleOut2.error.expected + ")", ruleOut2.error.found);
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						data["type"] = ruleOutCast2;
						c = 3;
					}
				}else if (c == 3) {
				var ruleOut3 = this._(input, charPos);
				if (ruleOut3.hadError) {
					this.giveError(ruleOut3.error.code, "White space(optional)(" + ruleOut3.error.expected + ")", ruleOut3.error.found);
					}else{
						var ruleOutCast3 = ruleOut3.data["data"];
						charPos = this.offset;
						c = 4;
					}
				}else if (c == 4) {
				if (currentCode == 124) {
					c = 5;
					this.error.vested++;
					}else{
						this.giveError(1, "|", currentChar);
					}
				}else if (c == 5) {
				var ruleOut5 = this.Code(input, charPos);
				if (ruleOut5.hadError) {
					this.giveError(ruleOut5.error.code, "Code(" + ruleOut5.error.expected + ")", ruleOut5.error.found);
					}else{
						var ruleOutCast5 = ruleOut5.data["data"];
						charPos = this.offset;
						data["code"] = ruleOutCast5;
						c = 6;
					}
				}else if (c == 6) {
				if (currentCode == 125) {
					if (true) {
						var castac6 = data[""];
						var actionCap6type = data["type"];
						var actionCap6code = data["code"];
						dataStore["data"]["type"] = actionCap6type;
						dataStore["data"]["code"] = actionCap6code;
						dataStore["data"]["typeType"] = "coded";
						}
					c = 0 - 1;
					this.error.vested++;
					}else{
						this.giveError(1, "}", currentChar);
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Action_String = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = "";
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this.String(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "String(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						data["str"] = ruleOutCast0;
						if (true) {
							var castacstr0 = data["str"];
							var actionCap0str = data["str"];
							dataStore["data"] = "\"" + actionCap0str + "\"";
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Action_Part = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		data["name"] = "";
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this._(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "White space(optional)(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						c = 1;
					}
				}else if (c == 1) {
				var passed1 = false;
				if (passed1 == false) {
					if (currentCode >= 65 && currentCode <= 90) {
						passed1 = true;
						}else if (currentCode >= 97 && currentCode <= 122) {
						passed1 = true;
						}else if (currentCode >= 48 && currentCode <= 57) {
						passed1 = true;
						}
					}
				if (passed1) {
					data["name"] += currentChar;
					if (charPos == input.length - 1) {
						this.giveError(2, "EOF", currentChar);
						}
					c = 1;
					this.error.vested++;
					}else{
						c = 2;
						charPos--;
						this.offset--;
					}
				}else if (c == 2) {
				var ruleOut2 = this._(input, charPos);
				if (ruleOut2.hadError) {
					this.giveError(ruleOut2.error.code, "White space(optional)(" + ruleOut2.error.expected + ")", ruleOut2.error.found);
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						c = 3;
					}
				}else if (c == 3) {
				if (currentCode == 58) {
					c = 4;
					this.error.vested++;
					}else{
						this.giveError(1, ":", currentChar);
					}
				}else if (c == 4) {
				var ruleOut4 = this._(input, charPos);
				if (ruleOut4.hadError) {
					this.giveError(ruleOut4.error.code, "White space(optional)(" + ruleOut4.error.expected + ")", ruleOut4.error.found);
					}else{
						var ruleOutCast4 = ruleOut4.data["data"];
						charPos = this.offset;
						c = 5;
					}
				}else if (c == 5) {
				var ruleOut5 = this.Action_String(input, charPos);
				if (ruleOut5.hadError) {
					c = 6;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast5 = ruleOut5.data["data"];
						charPos = this.offset;
						data["value"] = ruleOutCast5;
						if (true) {
							var castacvalue5 = data["value"];
							var actionCap5name = data["name"];
							var actionCap5value = data["value"];
							dataStore["data"]["name"] = actionCap5name;
							dataStore["data"]["value"] = actionCap5value;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}else if (c == 6) {
				var ruleOut6 = this.Code_Block(input, charPos);
				if (ruleOut6.hadError) {
					c = 7;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast6 = ruleOut6.data["data"];
						charPos = this.offset;
						data["value"] = ruleOutCast6;
						if (true) {
							var castacvalue5 = data["value"];
							var actionCap5name = data["name"];
							var actionCap5value = data["value"];
							dataStore["data"]["name"] = actionCap5name;
							dataStore["data"]["value"] = actionCap5value;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}else if (c == 7) {
				var ruleOut7 = this.Action_Map(input, charPos);
				if (ruleOut7.hadError) {
					this.giveError(1, "Action_String, Code_Block, Action_Map", currentChar);
					}else{
						var ruleOutCast7 = ruleOut7.data["data"];
						charPos = this.offset;
						data["value"] = ruleOutCast7;
						if (true) {
							var castacvalue5 = data["value"];
							var actionCap5name = data["name"];
							var actionCap5value = data["value"];
							dataStore["data"]["name"] = actionCap5name;
							dataStore["data"]["value"] = actionCap5value;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Action_Map = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		data["acts"] = [];
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				if (currentCode == 123) {
					c = 1;
					this.error.vested++;
					}else{
						this.giveError(1, "{", currentChar);
					}
				}else if (c == 1) {
				var ruleOut1 = this._(input, charPos);
				if (ruleOut1.hadError) {
					this.giveError(ruleOut1.error.code, "White space(optional)(" + ruleOut1.error.expected + ")", ruleOut1.error.found);
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						c = 2;
					}
				}else if (c == 2) {
				var ruleOut2 = this.Action_Part(input, charPos);
				if (ruleOut2.hadError) {
					c = 3;
					charPos--;
					this.offset--;
					if (ruleOut2.error.vested > 1) {
						this.giveError(ruleOut2.error.code, ruleOut2.error.expected, ruleOut2.error.found);
						}
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						var castacts2 = data["acts"];
						castacts2.push(ruleOutCast2);
						if (input.charCodeAt(charPos + 1) != 44) {
							c = 3;
							continue;
							}else{
								charPos++;
							}
						if (charPos == input.length - 1) {
							this.giveError(2, "EOF", currentChar);
							}
						c = 2;
						this.error.vested++;
					}
				}else if (c == 3) {
				var ruleOut3 = this._(input, charPos);
				if (ruleOut3.hadError) {
					this.giveError(ruleOut3.error.code, "White space(optional)(" + ruleOut3.error.expected + ")", ruleOut3.error.found);
					}else{
						var ruleOutCast3 = ruleOut3.data["data"];
						charPos = this.offset;
						c = 4;
					}
				}else if (c == 4) {
				if (currentCode == 125) {
					if (true) {
						var castac4 = data[""];
						var actionCap4acts = data["acts"];
						dataStore["data"]["type"] = "map";
						dataStore["data"]["code"] = {};
						for (var i = 0; i < actionCap4acts.length; i++) {
							var act = actionCap4acts[i];
							dataStore["data"]["code"][act["name"]] = act["value"];
							}
						dataStore["data"]["typeType"] = "maped";
						}
					c = 0 - 1;
					this.error.vested++;
					}else{
						this.giveError(1, "}", currentChar);
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Code_Block = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = "";
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				if (currentCode == 123) {
					c = 1;
					this.error.vested++;
					}else{
						this.giveError(1, "{", currentChar);
					}
				}else if (c == 1) {
				var ruleOut1 = this.Code(input, charPos);
				if (ruleOut1.hadError) {
					this.giveError(ruleOut1.error.code, "Code(" + ruleOut1.error.expected + ")", ruleOut1.error.found);
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						data["code"] = ruleOutCast1;
						c = 2;
					}
				}else if (c == 2) {
				if (currentCode == 125) {
					if (true) {
						var castac2 = data[""];
						var actionCap2code = data["code"];
						dataStore["data"] = actionCap2code;
						}
					c = 0 - 1;
					this.error.vested++;
					}else{
						this.giveError(1, "}", currentChar);
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Action = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this._(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "White space(optional)(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						c = 1;
					}
				}else if (c == 1) {
				var ruleOut1 = this.Sequence(input, charPos);
				if (ruleOut1.hadError) {
					c = 2;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast1;
						c = 4;
						this.error.vested++;
					}
				}else if (c == 2) {
				var ruleOut2 = this.Choice(input, charPos);
				if (ruleOut2.hadError) {
					c = 3;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast2;
						c = 4;
						this.error.vested++;
					}
				}else if (c == 3) {
				var ruleOut3 = this.Sub_Expression(input, charPos);
				if (ruleOut3.hadError) {
					this.giveError(1, "Sequence, Choice, Sub_Expression", currentChar);
					}else{
						var ruleOutCast3 = ruleOut3.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast3;
						c = 4;
						this.error.vested++;
					}
				}else if (c == 4) {
				var ruleOut4 = this._(input, charPos);
				if (ruleOut4.hadError) {
					this.giveError(ruleOut4.error.code, "White space(optional)(" + ruleOut4.error.expected + ")", ruleOut4.error.found);
					}else{
						var ruleOutCast4 = ruleOut4.data["data"];
						charPos = this.offset;
						c = 5;
					}
				}else if (c == 5) {
				var ruleOut5 = this.Action_Block(input, charPos);
				if (ruleOut5.hadError) {
					c = 6;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast5 = ruleOut5.data["data"];
						charPos = this.offset;
						data["act"] = ruleOutCast5;
						if (true) {
							var castacact5 = data["act"];
							var actionCap5act = data["act"];
							var actionCap5exp = data["exp"];
							dataStore["data"]["type"] = "action";
							dataStore["data"]["code"] = actionCap5act["code"];
							dataStore["data"]["outputType"] = actionCap5act["type"];
							dataStore["data"]["typeType"] = "coded";
							dataStore["data"]["expression"] = actionCap5exp;
							dataStore["data"]["location"] = false;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}else if (c == 6) {
				var ruleOut6 = this.Action_Map(input, charPos);
				if (ruleOut6.hadError) {
					this.giveError(1, "Action_Block, Action_Map", currentChar);
					}else{
						var ruleOutCast6 = ruleOut6.data["data"];
						charPos = this.offset;
						data["act"] = ruleOutCast6;
						if (true) {
							var castacact5 = data["act"];
							var actionCap5act = data["act"];
							var actionCap5exp = data["exp"];
							dataStore["data"]["type"] = "action";
							dataStore["data"]["code"] = actionCap5act["code"];
							dataStore["data"]["outputType"] = actionCap5act["type"];
							dataStore["data"]["typeType"] = "coded";
							dataStore["data"]["expression"] = actionCap5exp;
							dataStore["data"]["location"] = false;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Group = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this._(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "White space(optional)(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						c = 1;
					}
				}else if (c == 1) {
				if (currentCode == 40) {
					c = 2;
					this.error.vested++;
					}else{
						this.giveError(1, "(", currentChar);
					}
				}else if (c == 2) {
				var ruleOut2 = this.Expression(input, charPos);
				if (ruleOut2.hadError) {
					this.giveError(ruleOut2.error.code, "Expression(" + ruleOut2.error.expected + ")", ruleOut2.error.found);
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast2;
						c = 3;
						this.error.vested++;
					}
				}else if (c == 3) {
				var ruleOut3 = this._(input, charPos);
				if (ruleOut3.hadError) {
					this.giveError(ruleOut3.error.code, "White space(optional)(" + ruleOut3.error.expected + ")", ruleOut3.error.found);
					}else{
						var ruleOutCast3 = ruleOut3.data["data"];
						charPos = this.offset;
						c = 4;
					}
				}else if (c == 4) {
				if (currentCode == 41) {
					c = 5;
					this.error.vested++;
					}else{
						this.giveError(1, ")", currentChar);
					}
				}else if (c == 5) {
				var ruleOut5 = this._(input, charPos);
				if (ruleOut5.hadError) {
					this.giveError(ruleOut5.error.code, "White space(optional)(" + ruleOut5.error.expected + ")", ruleOut5.error.found);
					}else{
						var ruleOutCast5 = ruleOut5.data["data"];
						charPos = this.offset;
						if (true) {
							var castac5 = data[""];
							var actionCap5exp = data["exp"];
							var doAround = false;
							if (actionCap5exp["type"] == "labeled") {
								doAround = true;
								}else if (actionCap5exp["type"] == "sequence") {
								doAround = true;
								}
							if (doAround) {
								dataStore["data"]["type"] = "group";
								dataStore["data"]["expression"] = actionCap5exp;
								dataStore["data"]["location"] = false;
								}else{
									dataStore["data"] = actionCap5exp;
								}
							}
						c = 0 - 1;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Sequence = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		data["cont"] = {};
		var captureRoot1 = data["cont"];
		captureRoot1["exps"] = [];
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this.Sub_Expression(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "Sub_Expression(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						captureRoot1["exp"] = ruleOutCast0;
						c = 1;
						this.error.vested++;
					}
				}else if (c == 1) {
				var ruleOut1 = this.Sub_Expression(input, charPos);
				if (ruleOut1.hadError) {
					var castexps1 = captureRoot1["exps"];
					if (castexps1.length >= 1) {
						c = 0 - 1;
						charPos--;
						this.offset--;
						}else{
							this.giveError(1, "Sub_Expression", currentChar);
						}
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						var castexps1 = captureRoot1["exps"];
						castexps1.push(ruleOutCast1);
						c = 1;
						this.error.vested++;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				var actionCapendcont = data["cont"];
				dataStore["data"]["type"] = "sequence";
				dataStore["data"]["location"] = false;
				var exps = actionCapendcont["exps"];
				exps.unshift(actionCapendcont["exp"]);
				dataStore["data"]["elements"] = exps;
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Choice = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		data["exps"] = [];
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this.Sub_Expression(input, charPos);
				if (ruleOut0.hadError) {
					var castexps0 = data["exps"];
					if (castexps0.length >= 1) {
						c = 1;
						charPos--;
						this.offset--;
						}else{
							this.giveError(1, "Sub_Expression", currentChar);
						}
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						var castexps0 = data["exps"];
						castexps0.push(ruleOutCast0);
						if (input.charCodeAt(charPos + 1) != 47) {
							c = 1;
							continue;
							}else{
								charPos++;
							}
						c = 0;
						this.error.vested++;
					}
				}else if (c == 1) {
				var ruleOut1 = this._(input, charPos);
				if (ruleOut1.hadError) {
					this.giveError(ruleOut1.error.code, "White space(optional)(" + ruleOut1.error.expected + ")", ruleOut1.error.found);
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						c = 0 - 1;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				var actionCapendexps = data["exps"];
				dataStore["data"]["type"] = "choice";
				dataStore["data"]["location"] = false;
				if (actionCapendexps.length < 2) {
					this.giveError(1, "" + "" + "", "");
					}
				dataStore["data"]["alternatives"] = actionCapendexps;
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Simple_Expression = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this._(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "White space(optional)(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						c = 1;
					}
				}else if (c == 1) {
				var ruleOut1 = this.Any(input, charPos);
				if (ruleOut1.hadError) {
					c = 2;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast1;
						c = 7;
						this.error.vested++;
					}
				}else if (c == 2) {
				var ruleOut2 = this.Rule_Reference(input, charPos);
				if (ruleOut2.hadError) {
					c = 3;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast2;
						c = 7;
					}
				}else if (c == 3) {
				var ruleOut3 = this.String_Literal(input, charPos);
				if (ruleOut3.hadError) {
					c = 4;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast3 = ruleOut3.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast3;
						c = 7;
						this.error.vested++;
					}
				}else if (c == 4) {
				var ruleOut4 = this.Class(input, charPos);
				if (ruleOut4.hadError) {
					c = 5;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast4 = ruleOut4.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast4;
						c = 7;
						this.error.vested++;
					}
				}else if (c == 5) {
				var ruleOut5 = this.Native(input, charPos);
				if (ruleOut5.hadError) {
					c = 6;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast5 = ruleOut5.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast5;
						c = 7;
						this.error.vested++;
					}
				}else if (c == 6) {
				var ruleOut6 = this.Group(input, charPos);
				if (ruleOut6.hadError) {
					this.giveError(1, "Any, Rule_Reference, String_Literal, Class, Native, Group", currentChar);
					}else{
						var ruleOutCast6 = ruleOut6.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast6;
						c = 7;
						this.error.vested++;
					}
				}else if (c == 7) {
				var ruleOut7 = this._(input, charPos);
				if (ruleOut7.hadError) {
					this.giveError(ruleOut7.error.code, "White space(optional)(" + ruleOut7.error.expected + ")", ruleOut7.error.found);
					}else{
						var ruleOutCast7 = ruleOut7.data["data"];
						charPos = this.offset;
						if (true) {
							var castac7 = data[""];
							var actionCap7exp = data["exp"];
							dataStore["data"] = actionCap7exp;
							}
						c = 0 - 1;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.String_Literal = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this.String(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "String(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						data["string"] = ruleOutCast0;
						if (true) {
							var castacstring0 = data["string"];
							var actionCap0string = data["string"];
							dataStore["data"]["type"] = "literal";
							dataStore["data"]["value"] = actionCap0string;
							dataStore["data"]["ignoreCase"] = false;
							dataStore["data"]["location"] = false;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Rule_Reference = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this.Safe_Name(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "Safe_Name(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						data["rule"] = ruleOutCast0;
						if (true) {
							var castacrule0 = data["rule"];
							var actionCap0rule = data["rule"];
							dataStore["data"]["type"] = "rule_ref";
							dataStore["data"]["name"] = actionCap0rule;
							dataStore["data"]["location"] = false;
							}
						c = 0 - 1;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Class_Range = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				if (currentChar == "undefined0001") {
					this.giveError(1, "Anything", currentChar);
					}else{
						data["first"] = currentChar;
						c = 1;
						this.error.vested++;
					}
				}else if (c == 1) {
				if (currentCode == 45) {
					c = 2;
					this.error.vested++;
					}else{
						this.giveError(1, "-", currentChar);
					}
				}else if (c == 2) {
				if (currentChar == "undefined0001") {
					this.giveError(1, "Anything", currentChar);
					}else{
						data["last"] = currentChar;
						if (true) {
							var castaclast2 = data["last"];
							var actionCap2first = data["first"];
							var actionCap2last = data["last"];
							dataStore["data"] = [actionCap2first, actionCap2last];
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Class = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		data["r"] = [];
		var escaped = false;
		var escapeCodes = {};
		escapeCodes["n"] = "\n";
		escapeCodes["b"] = "";
		escapeCodes["f"] = "";
		escapeCodes["r"] = "\\r";
		escapeCodes["t"] = "	";
		escapeCodes["v"] = "";
		escapeCodes["\\"] = "\\";
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				if (currentCode == 91) {
					c = 1;
					this.error.vested++;
					}else{
						this.giveError(1, "[", currentChar);
					}
				}else if (c == 1) {
				if (currentCode == 94) {
					data["neg"] = "^";
					c = 2;
					this.error.vested++;
					}else{
						c = 2;
						charPos--;
						this.offset--;
					}
				}else if (c == 2) {
				var ruleOut2 = this.Class_Range(input, charPos);
				if (ruleOut2.hadError) {
					c = 3;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						var castr2 = data["r"];
						castr2.push(ruleOutCast2);
						if (charPos == input.length - 1) {
							this.giveError(2, "EOF", currentChar);
							}
						c = 2;
						this.error.vested++;
					}
				}else if (c == 3) {
				var castnacr3 = data["r"];
				var doCapture = true;
				if (currentChar == "\\") {
					if (escaped == false) {
						escaped = true;
						doCapture = false;
						}
					}
				if (escaped && doCapture) {
					doCapture = false;
					var castr2 = data["r"];
					castr2.push(escapeCodes[currentChar]);
					if (charPos == input.length - 1) {
						this.giveError(2, "EOF", currentChar);
						}
					escaped = false;
					}
				if (escaped == false) {
					if (currentChar == "]") {
						c = 4;
						charPos--;
						this.offset--;
						doCapture = false;
						}
					}
				if (doCapture) {
					var castr2 = data["r"];
					castr2.push(currentChar);
					if (charPos == input.length - 1) {
						this.giveError(2, "EOF", currentChar);
						}
					}
				}else if (c == 4) {
				if (currentCode == 93) {
					if (true) {
						var castac4 = data[""];
						var actionCap4r = data["r"];
						var actionCap4neg = data["neg"];
						dataStore["data"]["type"] = "class";
						dataStore["data"]["parts"] = actionCap4r;
						dataStore["data"]["inverted"] = false;
						if (actionCap4neg != null) {
							dataStore["data"]["inverted"] = true;
							}
						dataStore["data"]["location"] = false;
						}
					c = 0 - 1;
					this.error.vested++;
					}else{
						this.giveError(1, "]", currentChar);
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Any = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				if (currentCode == 46) {
					if (true) {
						var castac0 = data[""];
						dataStore["data"]["type"] = "any";
						dataStore["data"]["location"] = false;
						}
					c = 0 - 1;
					this.error.vested++;
					}else{
						this.giveError(1, ".", currentChar);
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Native = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		data["code"] = "";
		var endChar = ">";
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				if (currentCode == 60) {
					c = 1;
					this.error.vested++;
					}else{
						this.giveError(1, "<", currentChar);
					}
				}else if (c == 1) {
				var ruleOut1 = this._(input, charPos);
				if (ruleOut1.hadError) {
					this.giveError(ruleOut1.error.code, "White space(optional)(" + ruleOut1.error.expected + ")", ruleOut1.error.found);
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						c = 2;
					}
				}else if (c == 2) {
				var ruleOut2 = this.Type_Name(input, charPos);
				if (ruleOut2.hadError) {
					this.giveError(ruleOut2.error.code, "Type_Name(" + ruleOut2.error.expected + ")", ruleOut2.error.found);
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						data["type"] = ruleOutCast2;
						c = 3;
					}
				}else if (c == 3) {
				var ruleOut3 = this._(input, charPos);
				if (ruleOut3.hadError) {
					this.giveError(ruleOut3.error.code, "White space(optional)(" + ruleOut3.error.expected + ")", ruleOut3.error.found);
					}else{
						var ruleOutCast3 = ruleOut3.data["data"];
						charPos = this.offset;
						c = 4;
					}
				}else if (c == 4) {
				var ruleOut4 = this.Code_Block(input, charPos);
				if (ruleOut4.hadError) {
					c = 5;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast4 = ruleOut4.data["data"];
						charPos = this.offset;
						data["act"] = ruleOutCast4;
						c = 6;
						this.error.vested++;
					}
				}else if (c == 5) {
				var ruleOut5 = this._(input, charPos);
				if (ruleOut5.hadError) {
					this.giveError(1, "Code_Block, White space(optional)", currentChar);
					}else{
						var ruleOutCast5 = ruleOut5.data["data"];
						charPos = this.offset;
						data["act"] = ruleOutCast5;
						c = 6;
					}
				}else if (c == 6) {
				var ruleOut6 = this._(input, charPos);
				if (ruleOut6.hadError) {
					this.giveError(ruleOut6.error.code, "White space(optional)(" + ruleOut6.error.expected + ")", ruleOut6.error.found);
					}else{
						var ruleOutCast6 = ruleOut6.data["data"];
						charPos = this.offset;
						c = 7;
					}
				}else if (c == 7) {
				if (currentCode == 124) {
					c = 8;
					this.error.vested++;
					}else{
						this.giveError(1, "|", currentChar);
					}
				}else if (c == 8) {
				var castnaccode8 = data["code"];
				if (currentChar == endChar) {
					c = 9;
					charPos--;
					this.offset--;
					}else{
						data["code"] += currentChar;
					}
				}else if (c == 9) {
				if (currentCode == 62) {
					if (true) {
						var castac9 = data[""];
						var actionCap9type = data["type"];
						var actionCap9act = data["act"];
						var actionCap9code = data["code"];
						dataStore["data"]["type"] = "native";
						dataStore["data"]["outputType"] = actionCap9type;
						dataStore["data"]["initializer"] = actionCap9act;
						dataStore["data"]["code"] = actionCap9code;
						}
					c = 0 - 1;
					this.error.vested++;
					}else{
						this.giveError(1, ">", currentChar);
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Modify_Expression = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this._(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "White space(optional)(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						c = 1;
					}
				}else if (c == 1) {
				var ruleOut1 = this.Labeled(input, charPos);
				if (ruleOut1.hadError) {
					c = 2;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast1;
						c = 6;
						this.error.vested++;
					}
				}else if (c == 2) {
				var ruleOut2 = this.Optional(input, charPos);
				if (ruleOut2.hadError) {
					c = 3;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast2;
						c = 6;
						this.error.vested++;
					}
				}else if (c == 3) {
				var ruleOut3 = this.Not(input, charPos);
				if (ruleOut3.hadError) {
					c = 4;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast3 = ruleOut3.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast3;
						c = 6;
						this.error.vested++;
					}
				}else if (c == 4) {
				var ruleOut4 = this.List_Pipe(input, charPos);
				if (ruleOut4.hadError) {
					c = 5;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast4 = ruleOut4.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast4;
						c = 6;
						this.error.vested++;
					}
				}else if (c == 5) {
				var ruleOut5 = this.List(input, charPos);
				if (ruleOut5.hadError) {
					this.giveError(1, "Labeled, Optional, Not, List_Pipe, List", currentChar);
					}else{
						var ruleOutCast5 = ruleOut5.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast5;
						c = 6;
						this.error.vested++;
					}
				}else if (c == 6) {
				var ruleOut6 = this._(input, charPos);
				if (ruleOut6.hadError) {
					this.giveError(ruleOut6.error.code, "White space(optional)(" + ruleOut6.error.expected + ")", ruleOut6.error.found);
					}else{
						var ruleOutCast6 = ruleOut6.data["data"];
						charPos = this.offset;
						if (true) {
							var castac6 = data[""];
							var actionCap6exp = data["exp"];
							dataStore["data"] = actionCap6exp;
							}
						c = 0 - 1;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Labeled = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this._(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "White space(optional)(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						c = 1;
					}
				}else if (c == 1) {
				var ruleOut1 = this.Safe_Name(input, charPos);
				if (ruleOut1.hadError) {
					this.giveError(ruleOut1.error.code, "Safe_Name(" + ruleOut1.error.expected + ")", ruleOut1.error.found);
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						data["label"] = ruleOutCast1;
						c = 2;
					}
				}else if (c == 2) {
				var ruleOut2 = this._(input, charPos);
				if (ruleOut2.hadError) {
					this.giveError(ruleOut2.error.code, "White space(optional)(" + ruleOut2.error.expected + ")", ruleOut2.error.found);
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						c = 3;
					}
				}else if (c == 3) {
				if (currentCode == 58) {
					c = 4;
					this.error.vested++;
					}else{
						this.giveError(1, ":", currentChar);
					}
				}else if (c == 4) {
				var ruleOut4 = this.Sub_Expression(input, charPos);
				if (ruleOut4.hadError) {
					this.giveError(ruleOut4.error.code, "Sub_Expression(" + ruleOut4.error.expected + ")", ruleOut4.error.found);
					}else{
						var ruleOutCast4 = ruleOut4.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast4;
						c = 5;
						this.error.vested++;
					}
				}else if (c == 5) {
				var ruleOut5 = this._(input, charPos);
				if (ruleOut5.hadError) {
					this.giveError(ruleOut5.error.code, "White space(optional)(" + ruleOut5.error.expected + ")", ruleOut5.error.found);
					}else{
						var ruleOutCast5 = ruleOut5.data["data"];
						charPos = this.offset;
						if (true) {
							var castac5 = data[""];
							var actionCap5label = data["label"];
							var actionCap5exp = data["exp"];
							dataStore["data"]["type"] = "labeled";
							dataStore["data"]["label"] = actionCap5label;
							dataStore["data"]["expression"] = actionCap5exp;
							dataStore["data"]["location"] = false;
							}
						c = 0 - 1;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.List_Pipe = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this.List_One_Raw(input, charPos);
				if (ruleOut0.hadError) {
					c = 1;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						data["l"] = ruleOutCast0;
						c = 4;
						this.error.vested++;
					}
				}else if (c == 1) {
				var ruleOut1 = this.List_One(input, charPos);
				if (ruleOut1.hadError) {
					c = 2;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						data["l"] = ruleOutCast1;
						c = 4;
						this.error.vested++;
					}
				}else if (c == 2) {
				var ruleOut2 = this.List_Zero_Raw(input, charPos);
				if (ruleOut2.hadError) {
					c = 3;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						data["l"] = ruleOutCast2;
						c = 4;
						this.error.vested++;
					}
				}else if (c == 3) {
				var ruleOut3 = this.List_Zero(input, charPos);
				if (ruleOut3.hadError) {
					this.giveError(1, "List_One_Raw, List_One, List_Zero_Raw, List_Zero", currentChar);
					}else{
						var ruleOutCast3 = ruleOut3.data["data"];
						charPos = this.offset;
						data["l"] = ruleOutCast3;
						c = 4;
						this.error.vested++;
					}
				}else if (c == 4) {
				var ruleOut4 = this._(input, charPos);
				if (ruleOut4.hadError) {
					this.giveError(ruleOut4.error.code, "White space(optional)(" + ruleOut4.error.expected + ")", ruleOut4.error.found);
					}else{
						var ruleOutCast4 = ruleOut4.data["data"];
						charPos = this.offset;
						c = 5;
					}
				}else if (c == 5) {
				if (currentCode == 124) {
					c = 6;
					this.error.vested++;
					}else{
						this.giveError(1, "|", currentChar);
					}
				}else if (c == 6) {
				var ruleOut6 = this._(input, charPos);
				if (ruleOut6.hadError) {
					this.giveError(ruleOut6.error.code, "White space(optional)(" + ruleOut6.error.expected + ")", ruleOut6.error.found);
					}else{
						var ruleOutCast6 = ruleOut6.data["data"];
						charPos = this.offset;
						c = 7;
					}
				}else if (c == 7) {
				var ruleOut7 = this.String_Literal(input, charPos);
				if (ruleOut7.hadError) {
					c = 8;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast7 = ruleOut7.data["data"];
						charPos = this.offset;
						data["pipe"] = ruleOutCast7;
						if (true) {
							var castacpipe7 = data["pipe"];
							var actionCap7l = data["l"];
							var actionCap7pipe = data["pipe"];
							dataStore["data"] = actionCap7l;
							dataStore["data"]["pipe"] = actionCap7pipe;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}else if (c == 8) {
				var ruleOut8 = this.Rule_Reference(input, charPos);
				if (ruleOut8.hadError) {
					this.giveError(1, "String_Literal, Rule_Reference", currentChar);
					}else{
						var ruleOutCast8 = ruleOut8.data["data"];
						charPos = this.offset;
						data["pipe"] = ruleOutCast8;
						if (true) {
							var castacpipe7 = data["pipe"];
							var actionCap7l = data["l"];
							var actionCap7pipe = data["pipe"];
							dataStore["data"] = actionCap7l;
							dataStore["data"]["pipe"] = actionCap7pipe;
							}
						c = 0 - 1;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.List = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this.List_One_Raw(input, charPos);
				if (ruleOut0.hadError) {
					c = 1;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						data["l"] = ruleOutCast0;
						if (true) {
							var castacl0 = data["l"];
							var actionCap0l = data["l"];
							dataStore["data"] = actionCap0l;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}else if (c == 1) {
				var ruleOut1 = this.List_One(input, charPos);
				if (ruleOut1.hadError) {
					c = 2;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						data["l"] = ruleOutCast1;
						if (true) {
							var castacl0 = data["l"];
							var actionCap0l = data["l"];
							dataStore["data"] = actionCap0l;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}else if (c == 2) {
				var ruleOut2 = this.List_Zero_Raw(input, charPos);
				if (ruleOut2.hadError) {
					c = 3;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						data["l"] = ruleOutCast2;
						if (true) {
							var castacl0 = data["l"];
							var actionCap0l = data["l"];
							dataStore["data"] = actionCap0l;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}else if (c == 3) {
				var ruleOut3 = this.List_Zero(input, charPos);
				if (ruleOut3.hadError) {
					this.giveError(1, "List_One_Raw, List_One, List_Zero_Raw, List_Zero", currentChar);
					}else{
						var ruleOutCast3 = ruleOut3.data["data"];
						charPos = this.offset;
						data["l"] = ruleOutCast3;
						if (true) {
							var castacl0 = data["l"];
							var actionCap0l = data["l"];
							dataStore["data"] = actionCap0l;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.List_Zero = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this.Simple_Expression(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "Simple_Expression(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast0;
						c = 1;
						this.error.vested++;
					}
				}else if (c == 1) {
				if (currentCode == 42) {
					if (true) {
						var castac1 = data[""];
						var actionCap1exp = data["exp"];
						dataStore["data"]["type"] = "zero_or_more";
						dataStore["data"]["expression"] = actionCap1exp;
						dataStore["data"]["location"] = false;
						}
					c = 0 - 1;
					this.error.vested++;
					}else{
						this.giveError(1, "*", currentChar);
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.List_Zero_Raw = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this.Simple_Expression(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "Simple_Expression(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast0;
						c = 1;
						this.error.vested++;
					}
				}else if (c == 1) {
				var lit1 = [42, 42];
				if (currentCode == lit1[literalChar]) {
					literalChar++;
					if (literalChar == 2) {
						if (true) {
							var castac1 = data[""];
							var actionCap1exp = data["exp"];
							dataStore["data"]["type"] = "zero_or_more_raw";
							dataStore["data"]["expression"] = actionCap1exp;
							dataStore["data"]["location"] = false;
							}
						c = 0 - 1;
						literalChar = 0;
						}
					this.error.vested++;
					}else{
						this.giveError(1, "" + this.assembleCodes(lit1) + "", currentChar);
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.List_One = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this.Simple_Expression(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "Simple_Expression(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast0;
						c = 1;
						this.error.vested++;
					}
				}else if (c == 1) {
				if (currentCode == 43) {
					if (true) {
						var castac1 = data[""];
						var actionCap1exp = data["exp"];
						dataStore["data"]["type"] = "one_or_more";
						dataStore["data"]["expression"] = actionCap1exp;
						dataStore["data"]["location"] = false;
						}
					c = 0 - 1;
					this.error.vested++;
					}else{
						this.giveError(1, "+", currentChar);
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.List_One_Raw = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this.Simple_Expression(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "Simple_Expression(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast0;
						c = 1;
						this.error.vested++;
					}
				}else if (c == 1) {
				var lit1 = [43, 43];
				if (currentCode == lit1[literalChar]) {
					literalChar++;
					if (literalChar == 2) {
						if (true) {
							var castac1 = data[""];
							var actionCap1exp = data["exp"];
							dataStore["data"]["type"] = "one_or_more_raw";
							dataStore["data"]["expression"] = actionCap1exp;
							dataStore["data"]["location"] = false;
							}
						c = 0 - 1;
						literalChar = 0;
						}
					this.error.vested++;
					}else{
						this.giveError(1, "" + this.assembleCodes(lit1) + "", currentChar);
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Optional = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this.Simple_Expression(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "Simple_Expression(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast0;
						c = 1;
						this.error.vested++;
					}
				}else if (c == 1) {
				if (currentCode == 63) {
					if (true) {
						var castac1 = data[""];
						var actionCap1exp = data["exp"];
						dataStore["data"]["type"] = "optional";
						dataStore["data"]["expression"] = actionCap1exp;
						dataStore["data"]["location"] = false;
						}
					c = 0 - 1;
					this.error.vested++;
					}else{
						this.giveError(1, "?", currentChar);
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Not = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				if (currentCode == 33) {
					c = 1;
					this.error.vested++;
					}else{
						this.giveError(1, "!", currentChar);
					}
				}else if (c == 1) {
				var ruleOut1 = this.Simple_Expression(input, charPos);
				if (ruleOut1.hadError) {
					this.giveError(ruleOut1.error.code, "Simple_Expression(" + ruleOut1.error.expected + ")", ruleOut1.error.found);
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast1;
						if (true) {
							var castacexp1 = data["exp"];
							var actionCap1exp = data["exp"];
							dataStore["data"]["type"] = "simple_not";
							dataStore["data"]["expression"] = actionCap1exp;
							dataStore["data"]["location"] = false;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype._ = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = "";
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		data = [];
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var passed0 = false;
				if (currentCode == 32) {
					passed0 = true;
					}else if (currentCode == 9) {
					passed0 = true;
					}else if (currentCode == 13) {
					passed0 = true;
					}else if (currentCode == 10) {
					passed0 = true;
					}
				if (passed0 == false) {

					}
				if (passed0) {
					c = 0;
					this.error.vested++;
					}else{
						c = 0 - 1;
						charPos--;
						this.offset--;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.__ = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = "";
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		data["w"] = [];
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var passed0 = false;
				if (currentCode == 32) {
					passed0 = true;
					}else if (currentCode == 9) {
					passed0 = true;
					}else if (currentCode == 13) {
					passed0 = true;
					}else if (currentCode == 10) {
					passed0 = true;
					}
				if (passed0 == false) {

					}
				if (passed0) {
					var castw0 = data["w"];
					castw0.push(currentChar);
					c = 0;
					this.error.vested++;
					}else{
						var castw0 = data["w"];
						if (castw0.length >= 1) {
							c = 0 - 1;
							charPos--;
							this.offset--;
							}else{
								this.giveError(1, " , 	, \n, \n", currentChar);
							}
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.String = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = "";
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this.String_Double(input, charPos);
				if (ruleOut0.hadError) {
					c = 1;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						data["str"] = ruleOutCast0;
						if (true) {
							var castacstr0 = data["str"];
							var actionCap0str = data["str"];
							dataStore["data"] = actionCap0str;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}else if (c == 1) {
				var ruleOut1 = this.String_Single(input, charPos);
				if (ruleOut1.hadError) {
					this.giveError(1, "String_Double, String_Single", currentChar);
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						data["str"] = ruleOutCast1;
						if (true) {
							var castacstr0 = data["str"];
							var actionCap0str = data["str"];
							dataStore["data"] = actionCap0str;
							}
						c = 0 - 1;
						this.error.vested++;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.String_Double = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = "";
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		data["str"] = "";
		var escaped = false;
		var escapeCodes = {};
		escapeCodes["n"] = "\n";
		escapeCodes["b"] = "";
		escapeCodes["f"] = "";
		escapeCodes["r"] = "\\r";
		escapeCodes["t"] = "	";
		escapeCodes["v"] = "";
		escapeCodes["\\"] = "\\";
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				if (currentCode == 34) {
					c = 1;
					this.error.vested++;
					}else{
						this.giveError(1, "\"", currentChar);
					}
				}else if (c == 1) {
				var castnacstr1 = data["str"];
				var doCapture = true;
				if (currentChar == "\\") {
					if (escaped == false) {
						escaped = true;
						doCapture = false;
						}
					}
				if (currentChar == "\"") {
					if (escaped == false) {
						doCapture = false;
						c = 2;
						charPos--;
						this.offset--;
						}
					escaped = false;
					}else if (escaped && doCapture == true) {
					doCapture = false;
					data["str"] += escapeCodes[currentChar];
					escaped = false;
					}
				if (doCapture) {
					data["str"] += currentChar;
					}
				}else if (c == 2) {
				if (currentCode == 34) {
					if (true) {
						var castac2 = data[""];
						var actionCap2str = data["str"];
						dataStore["data"] = actionCap2str;
						}
					c = 0 - 1;
					this.error.vested++;
					}else{
						this.giveError(1, "\"", currentChar);
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.String_Single = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = "";
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		data["str"] = "";
		var escaped = false;
		var escapeCodes = {};
		escapeCodes["n"] = "\n";
		escapeCodes["b"] = "";
		escapeCodes["f"] = "";
		escapeCodes["r"] = "\\r";
		escapeCodes["t"] = "	";
		escapeCodes["v"] = "";
		escapeCodes["\\"] = "\\";
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				if (currentCode == 39) {
					c = 1;
					this.error.vested++;
					}else{
						this.giveError(1, "'", currentChar);
					}
				}else if (c == 1) {
				var castnacstr1 = data["str"];
				var doCapture = true;
				if (currentChar == "\\") {
					if (escaped == false) {
						escaped = true;
						doCapture = false;
						}
					}
				if (currentChar == "'") {
					if (escaped == false) {
						doCapture = false;
						c = 2;
						charPos--;
						this.offset--;
						}
					escaped = false;
					}else if (escaped && doCapture == true) {
					doCapture = false;
					data["str"] += escapeCodes[currentChar];
					escaped = false;
					}
				if (doCapture) {
					data["str"] += currentChar;
					}
				}else if (c == 2) {
				if (currentCode == 39) {
					if (true) {
						var castac2 = data[""];
						var actionCap2str = data["str"];
						dataStore["data"] = actionCap2str;
						}
					c = 0 - 1;
					this.error.vested++;
					}else{
						this.giveError(1, "'", currentChar);
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Json = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		data["keys"] = [];
		var captureRoot1 = {};
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				if (currentCode == 123) {
					c = 1;
					this.error.vested++;
					}else{
						this.giveError(1, "{", currentChar);
					}
				}else if (c == 1) {
				var ruleOut1 = this._(input, charPos);
				if (ruleOut1.hadError) {
					this.giveError(ruleOut1.error.code, "White space(optional)(" + ruleOut1.error.expected + ")", ruleOut1.error.found);
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						c = 2;
					}
				}else if (c == 2) {
				var ruleOut2 = this._(input, charPos);
				if (ruleOut2.hadError) {
					c = 9;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						c = 3;
					}
				}else if (c == 3) {
				var ruleOut3 = this.String(input, charPos);
				if (ruleOut3.hadError) {
					this.giveError(ruleOut3.error.code, "String(" + ruleOut3.error.expected + ")", ruleOut3.error.found);
					}else{
						var ruleOutCast3 = ruleOut3.data["data"];
						charPos = this.offset;
						captureRoot1["key"] = ruleOutCast3;
						c = 4;
						this.error.vested++;
					}
				}else if (c == 4) {
				var ruleOut4 = this._(input, charPos);
				if (ruleOut4.hadError) {
					this.giveError(ruleOut4.error.code, "White space(optional)(" + ruleOut4.error.expected + ")", ruleOut4.error.found);
					}else{
						var ruleOutCast4 = ruleOut4.data["data"];
						charPos = this.offset;
						c = 5;
					}
				}else if (c == 5) {
				if (currentCode == 58) {
					c = 6;
					this.error.vested++;
					}else{
						this.giveError(1, ":", currentChar);
					}
				}else if (c == 6) {
				var ruleOut6 = this._(input, charPos);
				if (ruleOut6.hadError) {
					this.giveError(ruleOut6.error.code, "White space(optional)(" + ruleOut6.error.expected + ")", ruleOut6.error.found);
					}else{
						var ruleOutCast6 = ruleOut6.data["data"];
						charPos = this.offset;
						c = 7;
					}
				}else if (c == 7) {
				var ruleOut7 = this.Json_Value(input, charPos);
				if (ruleOut7.hadError) {
					this.giveError(ruleOut7.error.code, "Json_Value(" + ruleOut7.error.expected + ")", ruleOut7.error.found);
					}else{
						var ruleOutCast7 = ruleOut7.data["data"];
						charPos = this.offset;
						captureRoot1["val"] = ruleOutCast7;
						c = 8;
						this.error.vested++;
					}
				}else if (c == 8) {
				var ruleOut8 = this._(input, charPos);
				if (ruleOut8.hadError) {
					c = 9;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast8 = ruleOut8.data["data"];
						charPos = this.offset;
						var castkeys2 = data["keys"];
						castkeys2.push(captureRoot1);
						if (input.charCodeAt(charPos + 1) != 44) {
							c = 9;
							continue;
							}else{
								charPos++;
							}
						if (charPos == input.length - 1) {
							this.giveError(2, "EOF", currentChar);
							}
						captureRoot1 = {};
						c = 2;
					}
				}else if (c == 9) {
				var ruleOut9 = this._(input, charPos);
				if (ruleOut9.hadError) {
					this.giveError(ruleOut9.error.code, "White space(optional)(" + ruleOut9.error.expected + ")", ruleOut9.error.found);
					}else{
						var ruleOutCast9 = ruleOut9.data["data"];
						charPos = this.offset;
						c = 10;
					}
				}else if (c == 10) {
				if (currentCode == 125) {
					if (true) {
						var castac10 = data[""];
						var actionCap10keys = data["keys"];
						for (var i = 0; i < actionCap10keys.length; i++) {
							var k = actionCap10keys[i];
							var key = k["key"];
							dataStore["data"][key] = k["val"];
							}
						}
					c = 0 - 1;
					this.error.vested++;
					}else{
						this.giveError(1, "}", currentChar);
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Json_Array = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		data["vals"] = [];
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				if (currentCode == 91) {
					c = 1;
					this.error.vested++;
					}else{
						this.giveError(1, "[", currentChar);
					}
				}else if (c == 1) {
				var ruleOut1 = this._(input, charPos);
				if (ruleOut1.hadError) {
					this.giveError(ruleOut1.error.code, "White space(optional)(" + ruleOut1.error.expected + ")", ruleOut1.error.found);
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						c = 2;
					}
				}else if (c == 2) {
				var ruleOut2 = this.Json_Value(input, charPos);
				if (ruleOut2.hadError) {
					c = 3;
					charPos--;
					this.offset--;
					if (ruleOut2.error.vested > 1) {
						this.giveError(ruleOut2.error.code, ruleOut2.error.expected, ruleOut2.error.found);
						}
					}else{
						var ruleOutCast2 = ruleOut2.data["data"];
						charPos = this.offset;
						var castvals2 = data["vals"];
						castvals2.push(ruleOutCast2);
						if (input.charCodeAt(charPos + 1) != 44) {
							c = 3;
							continue;
							}else{
								charPos++;
							}
						if (charPos == input.length - 1) {
							this.giveError(2, "EOF", currentChar);
							}
						c = 2;
						this.error.vested++;
					}
				}else if (c == 3) {
				var ruleOut3 = this._(input, charPos);
				if (ruleOut3.hadError) {
					this.giveError(ruleOut3.error.code, "White space(optional)(" + ruleOut3.error.expected + ")", ruleOut3.error.found);
					}else{
						var ruleOutCast3 = ruleOut3.data["data"];
						charPos = this.offset;
						c = 4;
					}
				}else if (c == 4) {
				if (currentCode == 93) {
					if (true) {
						var castac4 = data[""];
						var actionCap4vals = data["vals"];
						dataStore["data"] = actionCap4vals;
						}
					c = 0 - 1;
					this.error.vested++;
					}else{
						this.giveError(1, "]", currentChar);
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Json_EmptyArray = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = [];
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				if (currentCode == 91) {
					c = 1;
					this.error.vested++;
					}else{
						this.giveError(1, "[", currentChar);
					}
				}else if (c == 1) {
				var ruleOut1 = this._(input, charPos);
				if (ruleOut1.hadError) {
					this.giveError(ruleOut1.error.code, "White space(optional)(" + ruleOut1.error.expected + ")", ruleOut1.error.found);
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						c = 2;
					}
				}else if (c == 2) {
				if (currentCode == 93) {
					if (true) {
						var castac2 = data[""];
						data = [];
						}
					c = 0 - 1;
					this.error.vested++;
					}else{
						this.giveError(1, "]", currentChar);
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Json_EmptyMap = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = {};
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				if (currentCode == 123) {
					c = 1;
					this.error.vested++;
					}else{
						this.giveError(1, "{", currentChar);
					}
				}else if (c == 1) {
				var ruleOut1 = this._(input, charPos);
				if (ruleOut1.hadError) {
					this.giveError(ruleOut1.error.code, "White space(optional)(" + ruleOut1.error.expected + ")", ruleOut1.error.found);
					}else{
						var ruleOutCast1 = ruleOut1.data["data"];
						charPos = this.offset;
						c = 2;
					}
				}else if (c == 2) {
				if (currentCode == 125) {
					if (true) {
						var castac2 = data[""];
						data = {};
						}
					c = 0 - 1;
					this.error.vested++;
					}else{
						this.giveError(1, "}", currentChar);
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Json_Value = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = 0;
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var ruleOut0 = this._(input, charPos);
				if (ruleOut0.hadError) {
					this.giveError(ruleOut0.error.code, "White space(optional)(" + ruleOut0.error.expected + ")", ruleOut0.error.found);
					}else{
						var ruleOutCast0 = ruleOut0.data["data"];
						charPos = this.offset;
						c = 1;
					}
				}else if (c == 1) {
				var lit1 = [110, 117, 108, 108];
				if (currentCode == lit1[literalChar]) {
					literalChar++;
					if (literalChar == 4) {
						if (true) {
							var castacexp1 = data["exp"];
							data["exp"] = null;
							}
						c = 10;
						literalChar = 0;
						}
					this.error.vested++;
					}else{
						c = 2;
						charPos--;
						this.offset--;
					}
				}else if (c == 2) {
				var lit2 = [116, 114, 117, 101];
				if (currentCode == lit2[literalChar]) {
					literalChar++;
					if (literalChar == 4) {
						if (true) {
							var castacexp2 = data["exp"];
							data["exp"] = true;
							}
						c = 10;
						literalChar = 0;
						}
					this.error.vested++;
					}else{
						c = 3;
						charPos--;
						this.offset--;
					}
				}else if (c == 3) {
				var lit3 = [102, 97, 108, 115, 101];
				if (currentCode == lit3[literalChar]) {
					literalChar++;
					if (literalChar == 5) {
						if (true) {
							var castacexp3 = data["exp"];
							data["exp"] = false;
							}
						c = 10;
						literalChar = 0;
						}
					this.error.vested++;
					}else{
						c = 4;
						charPos--;
						this.offset--;
					}
				}else if (c == 4) {
				var ruleOut4 = this.Json_EmptyArray(input, charPos);
				if (ruleOut4.hadError) {
					c = 5;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast4 = ruleOut4.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast4;
						c = 10;
						this.error.vested++;
					}
				}else if (c == 5) {
				var ruleOut5 = this.Json_EmptyMap(input, charPos);
				if (ruleOut5.hadError) {
					c = 6;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast5 = ruleOut5.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast5;
						c = 10;
						this.error.vested++;
					}
				}else if (c == 6) {
				var ruleOut6 = this.Json_Array(input, charPos);
				if (ruleOut6.hadError) {
					c = 7;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast6 = ruleOut6.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast6;
						c = 10;
						this.error.vested++;
					}
				}else if (c == 7) {
				var ruleOut7 = this.Json(input, charPos);
				if (ruleOut7.hadError) {
					c = 8;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast7 = ruleOut7.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast7;
						c = 10;
						this.error.vested++;
					}
				}else if (c == 8) {
				var ruleOut8 = this.String(input, charPos);
				if (ruleOut8.hadError) {
					c = 9;
					charPos--;
					this.offset--;
					}else{
						var ruleOutCast8 = ruleOut8.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast8;
						c = 10;
						this.error.vested++;
					}
				}else if (c == 9) {
				var ruleOut9 = this.Json_Number(input, charPos);
				if (ruleOut9.hadError) {
					this.giveError(1, "null, true, false, Json_EmptyArray, Json_EmptyMap, Json_Array, Json, String, Json_Number", currentChar);
					}else{
						var ruleOutCast9 = ruleOut9.data["data"];
						charPos = this.offset;
						data["exp"] = ruleOutCast9;
						c = 10;
					}
				}else if (c == 10) {
				var ruleOut10 = this._(input, charPos);
				if (ruleOut10.hadError) {
					this.giveError(ruleOut10.error.code, "White space(optional)(" + ruleOut10.error.expected + ")", ruleOut10.error.found);
					}else{
						var ruleOutCast10 = ruleOut10.data["data"];
						charPos = this.offset;
						if (true) {
							var castac10 = data[""];
							var actionCap10exp = data["exp"];
							dataStore["data"] = actionCap10exp;
							}
						c = 0 - 1;
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

CarpegNativeParser.prototype.Json_Number = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'number' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var input = arguments[0];
		var startPos = arguments[1];
		var oldVest = this.error.vested;
		var dataStore = {};
		dataStore["data"] = 0;
		dataStore["temp"] = {};
		var data = dataStore["temp"];
		var c = 0;
		data["nums"] = "";
		var literalChar = 0;
		for (var charPos = startPos;charPos < input.length;charPos++) {
			var currentChar = input[charPos];
			var currentCode = input.charCodeAt(charPos);
			if (currentCode == 10) {
				this.line++;
				this.column = 0;
				}
			if (c == 0) {
				var passed0 = false;
				if (currentCode == 46) {
					passed0 = true;
					}else if (currentCode == 45) {
					passed0 = true;
					}
				if (passed0 == false) {
					if (currentCode >= 48 && currentCode <= 57) {
						passed0 = true;
						}
					}
				if (passed0) {
					data["nums"] += currentChar;
					if (true) {
						var castacnums0 = data["nums"];
						var actionCap0nums = data["nums"];
						dataStore["data"] = parseInt(actionCap0nums);
						}
					c = 0;
					this.error.vested++;
					}else{
						var castnums0 = data["nums"];
						if (castnums0.length >= 1) {
							if (true) {
								var castacnums0 = data["nums"];
								var actionCap0nums = data["nums"];
								dataStore["data"] = parseInt(actionCap0nums);
								}
							c = 0 - 1;
							charPos--;
							this.offset--;
							}else{
								this.giveError(1, "0-9, ., -", currentChar);
							}
					}
				}
			this.offset++;
			this.column++;
			if (c == 0 - 1) {
				this.offset = charPos;
				break;
				}
			if (this.hadError) {
				break;
				}
			}
		var parseOutput = new CarpegNativeParserOutput(this.hadError, this.error.clone(), dataStore);
		parseOutput.error.vested = this.error.vested - oldVest;
		this.error.vested = oldVest;
		this.hadError = false;
		return parseOutput;
	}
}

Carpeg.expression = function () {
	this.captureTo = 0;

	this.realCaptureTo = 0;

	this.expressionType = "";

	this.isComplex = false;

	this.complexChild = false;

	this.thatComplexChild = null;

	this.dynamicCapture = false;

	this.captures = [];

	this.initializers = [];

	this.doOwnCapture = false;

	this.isLoose = false;

	this.parentLabel = "";

	this.directLabel = false;

	this.isLabeled = false;

	this.doMove = false;

	this.overMove = null;

	this.doError = false;

	this.overError = null;

	this.outputType = "";

	this.context = new Carpeg.context();

	this.parentRule = null;

	this.grammar = null;

	this.hasParentExpression = false;

	this.parentExpression = null;

	this.baked = {};


}

Carpeg.expression.prototype.display = function () {
	if (arguments.length == 0) {
		return this.expressionType;
	}
}

Carpeg.expression.prototype.copy = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.parentLabel = exp.parentLabel;
		this.directLabel = false;
		this.isLabeled = exp.isLabeled;
		this.doError = exp.doError;
		this.overError = exp.overError;
		this.doMove = exp.doMove;
		this.overMove = exp.overMove;
		this.captureTo = exp.captureTo;
		this.dynamicCapture = exp.dynamicCapture;
		for (var i = 0; i < exp.captures.length; i++) {
			this.captures.push(exp.captures[i]);
			}
		for (var j = 0; j < exp.initializers.length; j++) {
			this.initializers.push(exp.initializers[j]);
			}
	}
}

Carpeg.expression.prototype.hasComplexChild = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.complexChild = true;
		this.thatComplexChild = exp;
		if (this.isComplex == false) {
			if (this.parentExpression !== null) {
				this.parentExpression.hasComplexChild(exp);
				}
			}
	}
}

Carpeg.expression.prototype.updateChildren = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expression.prototype.overCapture = function () {
	if (arguments.length == 2 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var exp = arguments[0];
		var data = arguments[1];

	}
}

Carpeg.expression.prototype.overInitialize = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expression.prototype.resetDatas = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'boolean' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var already = arguments[0];
		return "";
	}
}

Carpeg.expression.prototype.updateLoose = function () {
	if (arguments.length == 0) {
		if (this.parentExpression !== null) {
			this.parentExpression.isLoose = this.isLoose;
			}
	}
}

Carpeg.expression.prototype.capturePlace = function () {
	if (arguments.length == 0) {
		var rtn = this.captureRoot();
		if (this.isLabeled) {
			rtn += "[\"" + this.parentLabel + "\"]";
			}
		return rtn;
	}
}

Carpeg.expression.prototype.captureRoot = function () {
	if (arguments.length == 0) {
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		return cap;
	}
}

Carpeg.expression.prototype.callParentCapture = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var rtn = "";
		for (var i = this.captures.length - 1;i > 0 - 1;i--) {
			var capExp = this.captures[i];
			rtn += capExp.overCapture(this, data);
			}
		return rtn;
	}
}

Carpeg.expression.prototype.captureData = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		var rtn = [];
		if (this.doOwnCapture) {
			rtn = [cap, "[\"", this.parentLabel, "\"] = ", data, ";"];
			}
		rtn.push(this.callParentCapture(data));
		return rtn.join("");
	}
}

Carpeg.expression.prototype.callMove = function () {
	if (arguments.length == 0) {
		if (this.doMove) {
			return this.overMove.move(this);
			}else{
				return this.parentRule.moveNext(this.context.next);
			}
	}
}

Carpeg.expression.prototype.callError = function () {
	if (arguments.length == 3 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var code = arguments[0];
		var expected = arguments[1];
		var found = arguments[2];
		if (this.doError) {
			return this.overError.error(this, code, expected, found);
			}else{
				return "this.giveError(" + code + ", \"" + expected + "\", " + found + ");";
			}
	}
}

Carpeg.expression.prototype.generate = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expression.prototype.build = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expression.prototype.resetAllCaptureData = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expression.prototype.error = function () {
	if (arguments.length == 4 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null) && (typeof arguments[3] == 'string' || typeof arguments[3] == 'undefined' || arguments[3] === null)) {
		var exp = arguments[0];
		var code = arguments[1];
		var err = arguments[2];
		var char = arguments[3];

	}
}

Carpeg.expression.prototype.move = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expression.prototype.put = function () {
	if (arguments.length == 3 && ((arguments[0] instanceof Carpeg.context) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var ctx = arguments[0];
		var cap = arguments[1];
		var thing = arguments[2];

	}
}

Carpeg.expression.prototype.apply = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var you = arguments[0];
		this.parentRule = you.parentRule;
		this.grammar = you.grammar;
		this.hasParentExpression = true;
		this.parentExpression = you;
	}
}

Carpeg.expression.make = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var type = data["type"];
		var output = null;
		if (type == "sequence") {
			output = new Carpeg.expressions.sequence(data);
			output.expressionType = "sequence";
			}else if (type == "group") {
			output = new Carpeg.expressions.group(data);
			output.expressionType = "group";
			}else if (type == "choice") {
			output = new Carpeg.expressions.choice(data);
			output.expressionType = "choice";
			}else if (type == "optional") {
			output = new Carpeg.expressions.optional(data);
			output.expressionType = "optional";
			}else if (type == "simple_not") {
			output = new Carpeg.expressions.not(data);
			output.expressionType = "not";
			}else if (type == "literal") {
			output = new Carpeg.expressions.stringLiteral(data);
			output.expressionType = "literal";
			}else if (type == "rule_ref") {
			output = new Carpeg.expressions.ruleRef(data);
			output.expressionType = "ruleRef";
			}else if (type == "class") {
			output = new Carpeg.expressions.classCapture(data);
			output.expressionType = "class";
			}else if (type == "native") {
			output = new Carpeg.expressions.native(data);
			output.expressionType = "native";
			}else if (type == "any") {
			output = new Carpeg.expressions.any(data);
			output.expressionType = "any";
			}else if (type == "labeled") {
			output = new Carpeg.expressions.labeled(data);
			output.expressionType = "labeled";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "zero_or_more") {
			output = new Carpeg.expressions.list(data);
			output.expressionType = "zero_or_more";
			}else if (type == "zero_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.raw = true;
			output.expressionType = "zero_or_more";
			}else if (type == "one_or_more") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			output.expressionType = "one_or_more";
			}else if (type == "one_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			cast.raw = true;
			output.expressionType = "one_or_more";
			}
		return output;
	}
}

Carpeg.expressions.stringLiteral = function () {
	this.literal = "";

	this.captureTo = 0;

	this.realCaptureTo = 0;

	this.expressionType = "";

	this.isComplex = false;

	this.complexChild = false;

	this.thatComplexChild = null;

	this.dynamicCapture = false;

	this.captures = [];

	this.initializers = [];

	this.doOwnCapture = false;

	this.isLoose = false;

	this.parentLabel = "";

	this.directLabel = false;

	this.isLabeled = false;

	this.doMove = false;

	this.overMove = null;

	this.doError = false;

	this.overError = null;

	this.outputType = "";

	this.context = new Carpeg.context();

	this.parentRule = null;

	this.grammar = null;

	this.hasParentExpression = false;

	this.parentExpression = null;

	this.baked = {};

	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		this.baked = data;
	}

}

Carpeg.expressions.stringLiteral.prototype.display = function () {
	if (arguments.length == 0) {
		var disp = this.literal;
		if (this.literal == "\"") {
			disp = "\\\"";
			}
		return disp;
	}
}

Carpeg.expressions.stringLiteral.prototype.generate = function () {
	if (arguments.length == 0) {
		var elser = "else if";
		if (this.context.checkerIndex == 0) {
			elser = "if";
			}
		if (this.parentRule.checkerIndex == 0) {
			this.context.next = 2;
			}
		var codes = [];
		for (var i in this.literal) {
			codes.push(this.literal.charCodeAt(i));
			}
		var out = [];
		if (this.literal.length > 1) {
			out = [elser, " (c == ", this.context.checkerIndex, ") {\n", "	var <int>array lit", this.context.checkerIndex, " = [", codes.join(", "), "];\n", "	if (currentCode == lit", this.context.checkerIndex, "[literalChar]) {\n", "		literalChar++;\n", "		if (literalChar == ", this.literal.length, ") {\n", "			", this.captureData("this.assembleCodes(lit" + this.context.checkerIndex + ")"), "\n", "			", this.callMove(), "\n", "			literalChar = 0;\n}\n", "			this.error.vested++;\n", "	}else{\n", "		", this.callError("1", "\" + this.assembleCodes(lit" + this.context.checkerIndex + ") + \"", "currentChar"), "\n", "	}\n", "}"];
			}else{
				var disp = this.literal;
				if (this.literal == "\"") {
					disp = "\\\"";
					}
				out = [elser, " (c == ", this.context.checkerIndex, ") {\n", "	if (currentCode == ", codes[0], ") {\n", "			", this.captureData("\"" + this.display() + "\""), "\n", "			", this.callMove(), "\n", "			this.error.vested++;\n", "	}else{\n", "		", this.callError("1", this.display(), "currentChar"), "\n", "	}\n", "}"];
			}
		return out.join("");
	}
}

Carpeg.expressions.stringLiteral.prototype.build = function () {
	if (arguments.length == 0) {
		var data = this.baked;
		this.outputType = "string";
		this.literal = data["value"];
		if (this.isLabeled && this.directLabel) {
			this.doOwnCapture = true;
			}
	}
}

Carpeg.expressions.stringLiteral.prototype.copy = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.parentLabel = exp.parentLabel;
		this.directLabel = false;
		this.isLabeled = exp.isLabeled;
		this.doError = exp.doError;
		this.overError = exp.overError;
		this.doMove = exp.doMove;
		this.overMove = exp.overMove;
		this.captureTo = exp.captureTo;
		this.dynamicCapture = exp.dynamicCapture;
		for (var i = 0; i < exp.captures.length; i++) {
			this.captures.push(exp.captures[i]);
			}
		for (var j = 0; j < exp.initializers.length; j++) {
			this.initializers.push(exp.initializers[j]);
			}
	}
}

Carpeg.expressions.stringLiteral.prototype.hasComplexChild = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.complexChild = true;
		this.thatComplexChild = exp;
		if (this.isComplex == false) {
			if (this.parentExpression !== null) {
				this.parentExpression.hasComplexChild(exp);
				}
			}
	}
}

Carpeg.expressions.stringLiteral.prototype.updateChildren = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.stringLiteral.prototype.overCapture = function () {
	if (arguments.length == 2 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var exp = arguments[0];
		var data = arguments[1];

	}
}

Carpeg.expressions.stringLiteral.prototype.overInitialize = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.stringLiteral.prototype.resetDatas = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'boolean' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var already = arguments[0];
		return "";
	}
}

Carpeg.expressions.stringLiteral.prototype.updateLoose = function () {
	if (arguments.length == 0) {
		if (this.parentExpression !== null) {
			this.parentExpression.isLoose = this.isLoose;
			}
	}
}

Carpeg.expressions.stringLiteral.prototype.capturePlace = function () {
	if (arguments.length == 0) {
		var rtn = this.captureRoot();
		if (this.isLabeled) {
			rtn += "[\"" + this.parentLabel + "\"]";
			}
		return rtn;
	}
}

Carpeg.expressions.stringLiteral.prototype.captureRoot = function () {
	if (arguments.length == 0) {
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		return cap;
	}
}

Carpeg.expressions.stringLiteral.prototype.callParentCapture = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var rtn = "";
		for (var i = this.captures.length - 1;i > 0 - 1;i--) {
			var capExp = this.captures[i];
			rtn += capExp.overCapture(this, data);
			}
		return rtn;
	}
}

Carpeg.expressions.stringLiteral.prototype.captureData = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		var rtn = [];
		if (this.doOwnCapture) {
			rtn = [cap, "[\"", this.parentLabel, "\"] = ", data, ";"];
			}
		rtn.push(this.callParentCapture(data));
		return rtn.join("");
	}
}

Carpeg.expressions.stringLiteral.prototype.callMove = function () {
	if (arguments.length == 0) {
		if (this.doMove) {
			return this.overMove.move(this);
			}else{
				return this.parentRule.moveNext(this.context.next);
			}
	}
}

Carpeg.expressions.stringLiteral.prototype.callError = function () {
	if (arguments.length == 3 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var code = arguments[0];
		var expected = arguments[1];
		var found = arguments[2];
		if (this.doError) {
			return this.overError.error(this, code, expected, found);
			}else{
				return "this.giveError(" + code + ", \"" + expected + "\", " + found + ");";
			}
	}
}

Carpeg.expressions.stringLiteral.prototype.resetAllCaptureData = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.stringLiteral.prototype.error = function () {
	if (arguments.length == 4 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null) && (typeof arguments[3] == 'string' || typeof arguments[3] == 'undefined' || arguments[3] === null)) {
		var exp = arguments[0];
		var code = arguments[1];
		var err = arguments[2];
		var char = arguments[3];

	}
}

Carpeg.expressions.stringLiteral.prototype.move = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.stringLiteral.prototype.put = function () {
	if (arguments.length == 3 && ((arguments[0] instanceof Carpeg.context) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var ctx = arguments[0];
		var cap = arguments[1];
		var thing = arguments[2];

	}
}

Carpeg.expressions.stringLiteral.prototype.apply = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var you = arguments[0];
		this.parentRule = you.parentRule;
		this.grammar = you.grammar;
		this.hasParentExpression = true;
		this.parentExpression = you;
	}
}

Carpeg.expressions.stringLiteral.make = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var type = data["type"];
		var output = null;
		if (type == "sequence") {
			output = new Carpeg.expressions.sequence(data);
			output.expressionType = "sequence";
			}else if (type == "group") {
			output = new Carpeg.expressions.group(data);
			output.expressionType = "group";
			}else if (type == "choice") {
			output = new Carpeg.expressions.choice(data);
			output.expressionType = "choice";
			}else if (type == "optional") {
			output = new Carpeg.expressions.optional(data);
			output.expressionType = "optional";
			}else if (type == "simple_not") {
			output = new Carpeg.expressions.not(data);
			output.expressionType = "not";
			}else if (type == "literal") {
			output = new Carpeg.expressions.stringLiteral(data);
			output.expressionType = "literal";
			}else if (type == "rule_ref") {
			output = new Carpeg.expressions.ruleRef(data);
			output.expressionType = "ruleRef";
			}else if (type == "class") {
			output = new Carpeg.expressions.classCapture(data);
			output.expressionType = "class";
			}else if (type == "native") {
			output = new Carpeg.expressions.native(data);
			output.expressionType = "native";
			}else if (type == "any") {
			output = new Carpeg.expressions.any(data);
			output.expressionType = "any";
			}else if (type == "labeled") {
			output = new Carpeg.expressions.labeled(data);
			output.expressionType = "labeled";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "zero_or_more") {
			output = new Carpeg.expressions.list(data);
			output.expressionType = "zero_or_more";
			}else if (type == "zero_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.raw = true;
			output.expressionType = "zero_or_more";
			}else if (type == "one_or_more") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			output.expressionType = "one_or_more";
			}else if (type == "one_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			cast.raw = true;
			output.expressionType = "one_or_more";
			}
		return output;
	}
}

Carpeg.expressions.ruleRef = function () {
	this.rule = "";

	this.captureTo = 0;

	this.realCaptureTo = 0;

	this.expressionType = "";

	this.isComplex = false;

	this.complexChild = false;

	this.thatComplexChild = null;

	this.dynamicCapture = false;

	this.captures = [];

	this.initializers = [];

	this.doOwnCapture = false;

	this.isLoose = false;

	this.parentLabel = "";

	this.directLabel = false;

	this.isLabeled = false;

	this.doMove = false;

	this.overMove = null;

	this.doError = false;

	this.overError = null;

	this.outputType = "";

	this.context = new Carpeg.context();

	this.parentRule = null;

	this.grammar = null;

	this.hasParentExpression = false;

	this.parentExpression = null;

	this.baked = {};

	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		this.baked = data;
	}

}

Carpeg.expressions.ruleRef.prototype.display = function () {
	if (arguments.length == 0) {
		var rule = this.grammar.getRule(this.rule);
		return rule.display();
	}
}

Carpeg.expressions.ruleRef.prototype.generate = function () {
	if (arguments.length == 0) {
		var elser = "else if";
		if (this.context.checkerIndex == 0) {
			elser = "if";
			}
		var outputType = this.grammar.getRuleOutput(this.rule);
		var rule = this.grammar.getRule(this.rule);
		if (this.parentRule.checkerIndex == 0) {
			this.context.next = 2;
			}
		var vestedError = "";
		var outCast = "ruleOut" + this.context.checkerIndex;
		var upVest = "this.error.vested++;";
		if (rule.expression.isLoose) {
			upVest = "";
			}
		if (this.parentExpression.expressionType == "zero_or_more") {
			vestedError = "if (" + outCast + ".error.vested > 1) {this.giveError(" + outCast + ".error.code, " + outCast + ".error.expected, " + outCast + ".error.found);}";
			}
		var out = [elser, " (c == ", this.context.checkerIndex, ") {\n", "	var <", outputType, ">", this.grammar.parserClass, "Output ruleOut", this.context.checkerIndex, " = this.", this.rule, "(input, charPos);\n", "	\nif (ruleOut", this.context.checkerIndex, ".hadError) {\n", "		", this.callError("ruleOut" + this.context.checkerIndex + ".error.code", rule.display() + "(\" + ruleOut" + this.context.checkerIndex + ".error.expected + \")", "ruleOut" + this.context.checkerIndex + ".error.found") + "\n", "		", vestedError, "\n", "	}else{\n", "		var ", outputType, " ruleOutCast", this.context.checkerIndex, " = ruleOut", this.context.checkerIndex, ".data[\"data\"];\ncharPos = this.offset;\n", "		", this.captureData("ruleOutCast" + this.context.checkerIndex), "\n", "		", this.callMove(), "\n", "		", upVest, "\n", "	}\n", "}"];
		return out.join("");
	}
}

Carpeg.expressions.ruleRef.prototype.build = function () {
	if (arguments.length == 0) {
		var data = this.baked;
		this.rule = data["name"];
		this.outputType = this.grammar.getRuleOutput(this.rule);
		var r = this.grammar.getRule(this.rule);
		if (r.expression.isLoose) {
			if (this.parentExpression.expressionType == "sequence") {

				}else{
					this.isLoose = true;
					this.updateLoose();
				}
			}
		if (this.isLabeled && this.directLabel) {
			this.doOwnCapture = true;
			}
	}
}

Carpeg.expressions.ruleRef.prototype.copy = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.parentLabel = exp.parentLabel;
		this.directLabel = false;
		this.isLabeled = exp.isLabeled;
		this.doError = exp.doError;
		this.overError = exp.overError;
		this.doMove = exp.doMove;
		this.overMove = exp.overMove;
		this.captureTo = exp.captureTo;
		this.dynamicCapture = exp.dynamicCapture;
		for (var i = 0; i < exp.captures.length; i++) {
			this.captures.push(exp.captures[i]);
			}
		for (var j = 0; j < exp.initializers.length; j++) {
			this.initializers.push(exp.initializers[j]);
			}
	}
}

Carpeg.expressions.ruleRef.prototype.hasComplexChild = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.complexChild = true;
		this.thatComplexChild = exp;
		if (this.isComplex == false) {
			if (this.parentExpression !== null) {
				this.parentExpression.hasComplexChild(exp);
				}
			}
	}
}

Carpeg.expressions.ruleRef.prototype.updateChildren = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.ruleRef.prototype.overCapture = function () {
	if (arguments.length == 2 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var exp = arguments[0];
		var data = arguments[1];

	}
}

Carpeg.expressions.ruleRef.prototype.overInitialize = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.ruleRef.prototype.resetDatas = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'boolean' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var already = arguments[0];
		return "";
	}
}

Carpeg.expressions.ruleRef.prototype.updateLoose = function () {
	if (arguments.length == 0) {
		if (this.parentExpression !== null) {
			this.parentExpression.isLoose = this.isLoose;
			}
	}
}

Carpeg.expressions.ruleRef.prototype.capturePlace = function () {
	if (arguments.length == 0) {
		var rtn = this.captureRoot();
		if (this.isLabeled) {
			rtn += "[\"" + this.parentLabel + "\"]";
			}
		return rtn;
	}
}

Carpeg.expressions.ruleRef.prototype.captureRoot = function () {
	if (arguments.length == 0) {
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		return cap;
	}
}

Carpeg.expressions.ruleRef.prototype.callParentCapture = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var rtn = "";
		for (var i = this.captures.length - 1;i > 0 - 1;i--) {
			var capExp = this.captures[i];
			rtn += capExp.overCapture(this, data);
			}
		return rtn;
	}
}

Carpeg.expressions.ruleRef.prototype.captureData = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		var rtn = [];
		if (this.doOwnCapture) {
			rtn = [cap, "[\"", this.parentLabel, "\"] = ", data, ";"];
			}
		rtn.push(this.callParentCapture(data));
		return rtn.join("");
	}
}

Carpeg.expressions.ruleRef.prototype.callMove = function () {
	if (arguments.length == 0) {
		if (this.doMove) {
			return this.overMove.move(this);
			}else{
				return this.parentRule.moveNext(this.context.next);
			}
	}
}

Carpeg.expressions.ruleRef.prototype.callError = function () {
	if (arguments.length == 3 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var code = arguments[0];
		var expected = arguments[1];
		var found = arguments[2];
		if (this.doError) {
			return this.overError.error(this, code, expected, found);
			}else{
				return "this.giveError(" + code + ", \"" + expected + "\", " + found + ");";
			}
	}
}

Carpeg.expressions.ruleRef.prototype.resetAllCaptureData = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.ruleRef.prototype.error = function () {
	if (arguments.length == 4 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null) && (typeof arguments[3] == 'string' || typeof arguments[3] == 'undefined' || arguments[3] === null)) {
		var exp = arguments[0];
		var code = arguments[1];
		var err = arguments[2];
		var char = arguments[3];

	}
}

Carpeg.expressions.ruleRef.prototype.move = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.ruleRef.prototype.put = function () {
	if (arguments.length == 3 && ((arguments[0] instanceof Carpeg.context) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var ctx = arguments[0];
		var cap = arguments[1];
		var thing = arguments[2];

	}
}

Carpeg.expressions.ruleRef.prototype.apply = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var you = arguments[0];
		this.parentRule = you.parentRule;
		this.grammar = you.grammar;
		this.hasParentExpression = true;
		this.parentExpression = you;
	}
}

Carpeg.expressions.ruleRef.make = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var type = data["type"];
		var output = null;
		if (type == "sequence") {
			output = new Carpeg.expressions.sequence(data);
			output.expressionType = "sequence";
			}else if (type == "group") {
			output = new Carpeg.expressions.group(data);
			output.expressionType = "group";
			}else if (type == "choice") {
			output = new Carpeg.expressions.choice(data);
			output.expressionType = "choice";
			}else if (type == "optional") {
			output = new Carpeg.expressions.optional(data);
			output.expressionType = "optional";
			}else if (type == "simple_not") {
			output = new Carpeg.expressions.not(data);
			output.expressionType = "not";
			}else if (type == "literal") {
			output = new Carpeg.expressions.stringLiteral(data);
			output.expressionType = "literal";
			}else if (type == "rule_ref") {
			output = new Carpeg.expressions.ruleRef(data);
			output.expressionType = "ruleRef";
			}else if (type == "class") {
			output = new Carpeg.expressions.classCapture(data);
			output.expressionType = "class";
			}else if (type == "native") {
			output = new Carpeg.expressions.native(data);
			output.expressionType = "native";
			}else if (type == "any") {
			output = new Carpeg.expressions.any(data);
			output.expressionType = "any";
			}else if (type == "labeled") {
			output = new Carpeg.expressions.labeled(data);
			output.expressionType = "labeled";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "zero_or_more") {
			output = new Carpeg.expressions.list(data);
			output.expressionType = "zero_or_more";
			}else if (type == "zero_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.raw = true;
			output.expressionType = "zero_or_more";
			}else if (type == "one_or_more") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			output.expressionType = "one_or_more";
			}else if (type == "one_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			cast.raw = true;
			output.expressionType = "one_or_more";
			}
		return output;
	}
}

Carpeg.expressions.classCapture = function () {
	this.ranges = null;

	this.literals = [];

	this.inverted = false;

	this.data = {};

	this.captureTo = 0;

	this.realCaptureTo = 0;

	this.expressionType = "";

	this.isComplex = false;

	this.complexChild = false;

	this.thatComplexChild = null;

	this.dynamicCapture = false;

	this.captures = [];

	this.initializers = [];

	this.doOwnCapture = false;

	this.isLoose = false;

	this.parentLabel = "";

	this.directLabel = false;

	this.isLabeled = false;

	this.doMove = false;

	this.overMove = null;

	this.doError = false;

	this.overError = null;

	this.outputType = "";

	this.context = new Carpeg.context();

	this.parentRule = null;

	this.grammar = null;

	this.hasParentExpression = false;

	this.parentExpression = null;

	this.baked = {};

	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		this.baked = data;
	}

}

Carpeg.expressions.classCapture.prototype.display = function () {
	if (arguments.length == 0) {
		var things = [];
		for (var i = 0; i < this.ranges.length; i++) {
			var start = this.ranges[i][0];
			var end = this.ranges[i][1];
			things.push(start + "-" + end);
			}
		for (var i = 0; i < this.literals.length; i++) {
			var char = this.literals[i];
			things.push(char);
			}
		return things.join(", ");
	}
}

Carpeg.expressions.classCapture.prototype.generate = function () {
	if (arguments.length == 0) {
		var capture = "";
		var elser = "else if";
		if (this.context.checkerIndex == 0) {
			elser = "if";
			}
		if (this.parentRule.checkerIndex == 0) {
			this.context.next = 2;
			}
		var range = [];
		var ranges = this.ranges;
		for (var i = 0; i < ranges.length; i++) {
			var cRange = ranges[i];
			var my = cRange[0];
			var my2 = cRange[1];
			range.push("if (int.mid(currentCode, " + my.charCodeAt(0) + ", " + my2.charCodeAt(0) + ")) {passed" + this.context.checkerIndex + " = true;}");
			}
		var literal = [];
		for (var j = 0; j < this.literals.length; j++) {
			var cast = this.literals[j];
			var code = cast.charCodeAt(0);
			if (cast == "\\r") {
				code = 13;
				}
			literal.push("if (currentCode == " + code + ") {passed" + this.context.checkerIndex + " = true;}");
			}
		if (false) {
			var out = [elser, " (c == ", this.context.checkerIndex, ") {\n", "	var bool passed", this.context.checkerIndex, " = false;\n", "	for (var int rangeIndex in ranges", this.context.checkerIndex, ") {\n", "		var <int>array currentRange = ranges", this.context.checkerIndex, "[rangeIndex];\nif (currentCode >= currentRange[0]) {if (currentCode <= currentRange[1]) {passed", this.context.checkerIndex, " = true;break;}}\n", "	}\n", "	if (passed", this.context.checkerIndex, " == false) {for (var int literalIndex in literals", this.context.checkerIndex, ") {\n", "		var int currentLiteral = literals", this.context.checkerIndex, "[literalIndex];\nif (currentCode == currentLiteral) {passed", this.context.checkerIndex, " = true;break;}\n", "	}}\n", "	if (passed", this.context.checkerIndex, ") {\n", "		", this.captureData("currentChar"), "\n", "		", this.callMove(), "\n", "\n	}else{\n", "		", this.callError("1", this.display(), "currentChar"), "\n", "	}\n", "}"];
			}
		var onPass = this.captureData("currentChar") + "\n" + this.callMove();
		var onError = this.callError("1", this.display(), "currentChar");
		if (this.inverted) {
			var oldPass = onPass;
			onPass = onError;
			onError = oldPass;
			}
		var out = [elser, " (c == ", this.context.checkerIndex, ") {\n", "	var bool passed", this.context.checkerIndex, " = false;\n", "	", literal.join("else "), "\n", "	if (passed", this.context.checkerIndex, " == false) {\n", "		", range.join("else "), "\n", "	}\n", "	if (passed", this.context.checkerIndex, ") {\n", "		", onPass, "		this.error.vested++;\n", "\n	}else{\n", "		", onError, "\n", "	}\n", "}"];
		return out.join("");
	}
}

Carpeg.expressions.classCapture.prototype.build = function () {
	if (arguments.length == 0) {
		this.outputType = "string";
		this.ranges = [];
		this.inverted = this.baked["inverted"];
		for (var i in this.baked["parts"]) {
			var thing = this.baked["parts"][i];
			if ((typeof thing == 'object' ? (Array.isArray(thing) ? 'array' : 'map') : (typeof thing == 'number' ? 'float' : typeof thing)) == "string") {
				var cast = thing;
				this.literals.push(cast);
				}else{
					var cast2 = thing;
					this.ranges.push(cast2);
				}
			}
		if (this.isLabeled && this.directLabel) {
			this.doOwnCapture = true;
			}
		if (false) {
			var range = [];
			var ranges = this.ranges;
			for (var i = 0; i < ranges.length; i++) {
				var cRange = ranges[i];
				var my = cRange[0];
				var my2 = cRange[1];
				range.push("if (currentCode >= " + my.charCodeAt(0) + " and currentCode <= " + my2.charCodeAt(0) + ") {passed" + this.context.checkerIndex + " = true;}");
				}
			var literal = [];
			for (var j = 0; j < this.literals.length; j++) {
				var cast = this.literals[j];
				if (cast == "\\r") {
					cast = "\\r";
					}
				literal.push("if (currentCode == " + cast.charCodeAt(0) + ") {passed" + this.context.checkerIndex + " = true;}");
				}
			var fullRange = "[" + range.join(", ") + "]";
			var fullLiteral = "[" + literal.join(", ") + "]";
			if (range.length == 0) {
				fullRange = "new <string>array()";
				}
			if (literal.length == 0) {
				fullLiteral = "new <string>array()";
				}
			var init = ["	var <string>array ranges", this.context.checkerIndex, " = ", fullRange, ";\n", "	var <string>array literals", this.context.checkerIndex, " = ", fullLiteral, ";\n"];
			this.parentRule.initializers.push(init.join(""));
			}
	}
}

Carpeg.expressions.classCapture.prototype.copy = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.parentLabel = exp.parentLabel;
		this.directLabel = false;
		this.isLabeled = exp.isLabeled;
		this.doError = exp.doError;
		this.overError = exp.overError;
		this.doMove = exp.doMove;
		this.overMove = exp.overMove;
		this.captureTo = exp.captureTo;
		this.dynamicCapture = exp.dynamicCapture;
		for (var i = 0; i < exp.captures.length; i++) {
			this.captures.push(exp.captures[i]);
			}
		for (var j = 0; j < exp.initializers.length; j++) {
			this.initializers.push(exp.initializers[j]);
			}
	}
}

Carpeg.expressions.classCapture.prototype.hasComplexChild = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.complexChild = true;
		this.thatComplexChild = exp;
		if (this.isComplex == false) {
			if (this.parentExpression !== null) {
				this.parentExpression.hasComplexChild(exp);
				}
			}
	}
}

Carpeg.expressions.classCapture.prototype.updateChildren = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.classCapture.prototype.overCapture = function () {
	if (arguments.length == 2 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var exp = arguments[0];
		var data = arguments[1];

	}
}

Carpeg.expressions.classCapture.prototype.overInitialize = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.classCapture.prototype.resetDatas = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'boolean' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var already = arguments[0];
		return "";
	}
}

Carpeg.expressions.classCapture.prototype.updateLoose = function () {
	if (arguments.length == 0) {
		if (this.parentExpression !== null) {
			this.parentExpression.isLoose = this.isLoose;
			}
	}
}

Carpeg.expressions.classCapture.prototype.capturePlace = function () {
	if (arguments.length == 0) {
		var rtn = this.captureRoot();
		if (this.isLabeled) {
			rtn += "[\"" + this.parentLabel + "\"]";
			}
		return rtn;
	}
}

Carpeg.expressions.classCapture.prototype.captureRoot = function () {
	if (arguments.length == 0) {
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		return cap;
	}
}

Carpeg.expressions.classCapture.prototype.callParentCapture = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var rtn = "";
		for (var i = this.captures.length - 1;i > 0 - 1;i--) {
			var capExp = this.captures[i];
			rtn += capExp.overCapture(this, data);
			}
		return rtn;
	}
}

Carpeg.expressions.classCapture.prototype.captureData = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		var rtn = [];
		if (this.doOwnCapture) {
			rtn = [cap, "[\"", this.parentLabel, "\"] = ", data, ";"];
			}
		rtn.push(this.callParentCapture(data));
		return rtn.join("");
	}
}

Carpeg.expressions.classCapture.prototype.callMove = function () {
	if (arguments.length == 0) {
		if (this.doMove) {
			return this.overMove.move(this);
			}else{
				return this.parentRule.moveNext(this.context.next);
			}
	}
}

Carpeg.expressions.classCapture.prototype.callError = function () {
	if (arguments.length == 3 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var code = arguments[0];
		var expected = arguments[1];
		var found = arguments[2];
		if (this.doError) {
			return this.overError.error(this, code, expected, found);
			}else{
				return "this.giveError(" + code + ", \"" + expected + "\", " + found + ");";
			}
	}
}

Carpeg.expressions.classCapture.prototype.resetAllCaptureData = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.classCapture.prototype.error = function () {
	if (arguments.length == 4 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null) && (typeof arguments[3] == 'string' || typeof arguments[3] == 'undefined' || arguments[3] === null)) {
		var exp = arguments[0];
		var code = arguments[1];
		var err = arguments[2];
		var char = arguments[3];

	}
}

Carpeg.expressions.classCapture.prototype.move = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.classCapture.prototype.put = function () {
	if (arguments.length == 3 && ((arguments[0] instanceof Carpeg.context) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var ctx = arguments[0];
		var cap = arguments[1];
		var thing = arguments[2];

	}
}

Carpeg.expressions.classCapture.prototype.apply = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var you = arguments[0];
		this.parentRule = you.parentRule;
		this.grammar = you.grammar;
		this.hasParentExpression = true;
		this.parentExpression = you;
	}
}

Carpeg.expressions.classCapture.make = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var type = data["type"];
		var output = null;
		if (type == "sequence") {
			output = new Carpeg.expressions.sequence(data);
			output.expressionType = "sequence";
			}else if (type == "group") {
			output = new Carpeg.expressions.group(data);
			output.expressionType = "group";
			}else if (type == "choice") {
			output = new Carpeg.expressions.choice(data);
			output.expressionType = "choice";
			}else if (type == "optional") {
			output = new Carpeg.expressions.optional(data);
			output.expressionType = "optional";
			}else if (type == "simple_not") {
			output = new Carpeg.expressions.not(data);
			output.expressionType = "not";
			}else if (type == "literal") {
			output = new Carpeg.expressions.stringLiteral(data);
			output.expressionType = "literal";
			}else if (type == "rule_ref") {
			output = new Carpeg.expressions.ruleRef(data);
			output.expressionType = "ruleRef";
			}else if (type == "class") {
			output = new Carpeg.expressions.classCapture(data);
			output.expressionType = "class";
			}else if (type == "native") {
			output = new Carpeg.expressions.native(data);
			output.expressionType = "native";
			}else if (type == "any") {
			output = new Carpeg.expressions.any(data);
			output.expressionType = "any";
			}else if (type == "labeled") {
			output = new Carpeg.expressions.labeled(data);
			output.expressionType = "labeled";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "zero_or_more") {
			output = new Carpeg.expressions.list(data);
			output.expressionType = "zero_or_more";
			}else if (type == "zero_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.raw = true;
			output.expressionType = "zero_or_more";
			}else if (type == "one_or_more") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			output.expressionType = "one_or_more";
			}else if (type == "one_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			cast.raw = true;
			output.expressionType = "one_or_more";
			}
		return output;
	}
}

Carpeg.expressions.native = function () {
	this.code = "";

	this.initializer = "";

	this.captureTo = 0;

	this.realCaptureTo = 0;

	this.expressionType = "";

	this.isComplex = false;

	this.complexChild = false;

	this.thatComplexChild = null;

	this.dynamicCapture = false;

	this.captures = [];

	this.initializers = [];

	this.doOwnCapture = false;

	this.isLoose = false;

	this.parentLabel = "";

	this.directLabel = false;

	this.isLabeled = false;

	this.doMove = false;

	this.overMove = null;

	this.doError = false;

	this.overError = null;

	this.outputType = "";

	this.context = new Carpeg.context();

	this.parentRule = null;

	this.grammar = null;

	this.hasParentExpression = false;

	this.parentExpression = null;

	this.baked = {};

	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		this.baked = data;
	}

}

Carpeg.expressions.native.prototype.display = function () {
	if (arguments.length == 0) {
		return "Native";
	}
}

Carpeg.expressions.native.prototype.generate = function () {
	if (arguments.length == 0) {
		var elser = "else if";
		if (this.context.checkerIndex == 0) {
			elser = "if";
			}
		if (this.parentRule.checkerIndex == 0) {
			this.context.next = 2;
			}
		var code = this.code;
		var cast = "castnac" + this.parentLabel + this.context.checkerIndex;
		var ref = this.code.match(new RegExp("[\\$]([A-Za-z_0-9]*)", 'g'));
		var casters = {};
		if (ref != null) {
			for (var i = 0; i < ref.length; i++) {
				var iRef = ref[i];
				var removed = iRef.substr(1,iRef.length - 1);
				var cLab = this.context.childLabels;
				if (removed in cLab) {
					var labelRef = cLab[removed];
					var oType = labelRef.outputType;
					casters[removed] = "var " + oType + " actionCap" + this.context.checkerIndex + removed + " = " + this.parentRule.expression.capturePlace() + "[\"" + removed + "\"];";
					}else{
						throw new Error("No variable " + removed + " found.");
					}
				}
			}
		var casterCode = "";
		for (var rem in casters) {
			casterCode += casters[rem];
			}
		code = code.replace(new RegExp("[\\$]([A-Za-z_0-9]*)", 'g'), "actionCap" + this.context.checkerIndex + "$1");
		code = code.replace(new RegExp("[\\@](move)\\(\\)", 'g'), this.callMove());
		code = code.replace(new RegExp("[\\@](capture)\\(\\s*([^)]*)\\s*\\)", 'g'), this.captureData("$2"));
		code = code.replace(new RegExp("[\\@](error)\\(\\s*([0-9]*)\\s*,\\s*([^,]*)\\s*,\\s*([^)]*)\\s*\\)", 'g'), this.callError("$2", "\" + $3 + \"", "$4"));
		var out = [];
		out = [elser, " (c == ", this.context.checkerIndex, ") {\n", "	var ", this.outputType, " ", cast, " = ", this.captureRoot(), "[\"", this.parentLabel, "\"];\n", "	", casterCode, "\n", "	", code, "\n}"];
		return out.join("");
	}
}

Carpeg.expressions.native.prototype.build = function () {
	if (arguments.length == 0) {
		var data = this.baked;
		this.outputType = data["outputType"];
		this.code = data["code"];
		this.initializer = data["initializer"];
		if (this.isLabeled && this.directLabel) {
			this.doOwnCapture = true;
			}
		this.parentRule.initializers.push(this.initializer);
	}
}

Carpeg.expressions.native.prototype.copy = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.parentLabel = exp.parentLabel;
		this.directLabel = false;
		this.isLabeled = exp.isLabeled;
		this.doError = exp.doError;
		this.overError = exp.overError;
		this.doMove = exp.doMove;
		this.overMove = exp.overMove;
		this.captureTo = exp.captureTo;
		this.dynamicCapture = exp.dynamicCapture;
		for (var i = 0; i < exp.captures.length; i++) {
			this.captures.push(exp.captures[i]);
			}
		for (var j = 0; j < exp.initializers.length; j++) {
			this.initializers.push(exp.initializers[j]);
			}
	}
}

Carpeg.expressions.native.prototype.hasComplexChild = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.complexChild = true;
		this.thatComplexChild = exp;
		if (this.isComplex == false) {
			if (this.parentExpression !== null) {
				this.parentExpression.hasComplexChild(exp);
				}
			}
	}
}

Carpeg.expressions.native.prototype.updateChildren = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.native.prototype.overCapture = function () {
	if (arguments.length == 2 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var exp = arguments[0];
		var data = arguments[1];

	}
}

Carpeg.expressions.native.prototype.overInitialize = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.native.prototype.resetDatas = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'boolean' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var already = arguments[0];
		return "";
	}
}

Carpeg.expressions.native.prototype.updateLoose = function () {
	if (arguments.length == 0) {
		if (this.parentExpression !== null) {
			this.parentExpression.isLoose = this.isLoose;
			}
	}
}

Carpeg.expressions.native.prototype.capturePlace = function () {
	if (arguments.length == 0) {
		var rtn = this.captureRoot();
		if (this.isLabeled) {
			rtn += "[\"" + this.parentLabel + "\"]";
			}
		return rtn;
	}
}

Carpeg.expressions.native.prototype.captureRoot = function () {
	if (arguments.length == 0) {
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		return cap;
	}
}

Carpeg.expressions.native.prototype.callParentCapture = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var rtn = "";
		for (var i = this.captures.length - 1;i > 0 - 1;i--) {
			var capExp = this.captures[i];
			rtn += capExp.overCapture(this, data);
			}
		return rtn;
	}
}

Carpeg.expressions.native.prototype.captureData = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		var rtn = [];
		if (this.doOwnCapture) {
			rtn = [cap, "[\"", this.parentLabel, "\"] = ", data, ";"];
			}
		rtn.push(this.callParentCapture(data));
		return rtn.join("");
	}
}

Carpeg.expressions.native.prototype.callMove = function () {
	if (arguments.length == 0) {
		if (this.doMove) {
			return this.overMove.move(this);
			}else{
				return this.parentRule.moveNext(this.context.next);
			}
	}
}

Carpeg.expressions.native.prototype.callError = function () {
	if (arguments.length == 3 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var code = arguments[0];
		var expected = arguments[1];
		var found = arguments[2];
		if (this.doError) {
			return this.overError.error(this, code, expected, found);
			}else{
				return "this.giveError(" + code + ", \"" + expected + "\", " + found + ");";
			}
	}
}

Carpeg.expressions.native.prototype.resetAllCaptureData = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.native.prototype.error = function () {
	if (arguments.length == 4 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null) && (typeof arguments[3] == 'string' || typeof arguments[3] == 'undefined' || arguments[3] === null)) {
		var exp = arguments[0];
		var code = arguments[1];
		var err = arguments[2];
		var char = arguments[3];

	}
}

Carpeg.expressions.native.prototype.move = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.native.prototype.put = function () {
	if (arguments.length == 3 && ((arguments[0] instanceof Carpeg.context) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var ctx = arguments[0];
		var cap = arguments[1];
		var thing = arguments[2];

	}
}

Carpeg.expressions.native.prototype.apply = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var you = arguments[0];
		this.parentRule = you.parentRule;
		this.grammar = you.grammar;
		this.hasParentExpression = true;
		this.parentExpression = you;
	}
}

Carpeg.expressions.native.make = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var type = data["type"];
		var output = null;
		if (type == "sequence") {
			output = new Carpeg.expressions.sequence(data);
			output.expressionType = "sequence";
			}else if (type == "group") {
			output = new Carpeg.expressions.group(data);
			output.expressionType = "group";
			}else if (type == "choice") {
			output = new Carpeg.expressions.choice(data);
			output.expressionType = "choice";
			}else if (type == "optional") {
			output = new Carpeg.expressions.optional(data);
			output.expressionType = "optional";
			}else if (type == "simple_not") {
			output = new Carpeg.expressions.not(data);
			output.expressionType = "not";
			}else if (type == "literal") {
			output = new Carpeg.expressions.stringLiteral(data);
			output.expressionType = "literal";
			}else if (type == "rule_ref") {
			output = new Carpeg.expressions.ruleRef(data);
			output.expressionType = "ruleRef";
			}else if (type == "class") {
			output = new Carpeg.expressions.classCapture(data);
			output.expressionType = "class";
			}else if (type == "native") {
			output = new Carpeg.expressions.native(data);
			output.expressionType = "native";
			}else if (type == "any") {
			output = new Carpeg.expressions.any(data);
			output.expressionType = "any";
			}else if (type == "labeled") {
			output = new Carpeg.expressions.labeled(data);
			output.expressionType = "labeled";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "zero_or_more") {
			output = new Carpeg.expressions.list(data);
			output.expressionType = "zero_or_more";
			}else if (type == "zero_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.raw = true;
			output.expressionType = "zero_or_more";
			}else if (type == "one_or_more") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			output.expressionType = "one_or_more";
			}else if (type == "one_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			cast.raw = true;
			output.expressionType = "one_or_more";
			}
		return output;
	}
}

Carpeg.expressions.any = function () {
	this.captureTo = 0;

	this.realCaptureTo = 0;

	this.expressionType = "";

	this.isComplex = false;

	this.complexChild = false;

	this.thatComplexChild = null;

	this.dynamicCapture = false;

	this.captures = [];

	this.initializers = [];

	this.doOwnCapture = false;

	this.isLoose = false;

	this.parentLabel = "";

	this.directLabel = false;

	this.isLabeled = false;

	this.doMove = false;

	this.overMove = null;

	this.doError = false;

	this.overError = null;

	this.outputType = "";

	this.context = new Carpeg.context();

	this.parentRule = null;

	this.grammar = null;

	this.hasParentExpression = false;

	this.parentExpression = null;

	this.baked = {};

	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		this.baked = data;
	}

}

Carpeg.expressions.any.prototype.display = function () {
	if (arguments.length == 0) {
		return "Anything";
	}
}

Carpeg.expressions.any.prototype.generate = function () {
	if (arguments.length == 0) {
		var elser = "else if";
		if (this.context.checkerIndex == 0) {
			elser = "if";
			}
		if (this.parentRule.checkerIndex == 0) {
			this.context.next = 2;
			}
		var out = [];
		out = [elser, " (c == ", this.context.checkerIndex, ") {\n", "	if (currentChar == \"\\u0001\") {\n", "		", this.callError("1", this.display(), "currentChar"), "\n", "	}else{\n", "		", this.captureData("currentChar"), "\n", "		", this.callMove(), "\n", "		this.error.vested++;\n", "	}", "}"];
		return out.join("");
	}
}

Carpeg.expressions.any.prototype.build = function () {
	if (arguments.length == 0) {
		var data = this.baked;
		this.outputType = "string";
		if (this.isLabeled && this.directLabel) {
			this.doOwnCapture = true;
			}
	}
}

Carpeg.expressions.any.prototype.copy = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.parentLabel = exp.parentLabel;
		this.directLabel = false;
		this.isLabeled = exp.isLabeled;
		this.doError = exp.doError;
		this.overError = exp.overError;
		this.doMove = exp.doMove;
		this.overMove = exp.overMove;
		this.captureTo = exp.captureTo;
		this.dynamicCapture = exp.dynamicCapture;
		for (var i = 0; i < exp.captures.length; i++) {
			this.captures.push(exp.captures[i]);
			}
		for (var j = 0; j < exp.initializers.length; j++) {
			this.initializers.push(exp.initializers[j]);
			}
	}
}

Carpeg.expressions.any.prototype.hasComplexChild = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.complexChild = true;
		this.thatComplexChild = exp;
		if (this.isComplex == false) {
			if (this.parentExpression !== null) {
				this.parentExpression.hasComplexChild(exp);
				}
			}
	}
}

Carpeg.expressions.any.prototype.updateChildren = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.any.prototype.overCapture = function () {
	if (arguments.length == 2 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var exp = arguments[0];
		var data = arguments[1];

	}
}

Carpeg.expressions.any.prototype.overInitialize = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.any.prototype.resetDatas = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'boolean' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var already = arguments[0];
		return "";
	}
}

Carpeg.expressions.any.prototype.updateLoose = function () {
	if (arguments.length == 0) {
		if (this.parentExpression !== null) {
			this.parentExpression.isLoose = this.isLoose;
			}
	}
}

Carpeg.expressions.any.prototype.capturePlace = function () {
	if (arguments.length == 0) {
		var rtn = this.captureRoot();
		if (this.isLabeled) {
			rtn += "[\"" + this.parentLabel + "\"]";
			}
		return rtn;
	}
}

Carpeg.expressions.any.prototype.captureRoot = function () {
	if (arguments.length == 0) {
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		return cap;
	}
}

Carpeg.expressions.any.prototype.callParentCapture = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var rtn = "";
		for (var i = this.captures.length - 1;i > 0 - 1;i--) {
			var capExp = this.captures[i];
			rtn += capExp.overCapture(this, data);
			}
		return rtn;
	}
}

Carpeg.expressions.any.prototype.captureData = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		var rtn = [];
		if (this.doOwnCapture) {
			rtn = [cap, "[\"", this.parentLabel, "\"] = ", data, ";"];
			}
		rtn.push(this.callParentCapture(data));
		return rtn.join("");
	}
}

Carpeg.expressions.any.prototype.callMove = function () {
	if (arguments.length == 0) {
		if (this.doMove) {
			return this.overMove.move(this);
			}else{
				return this.parentRule.moveNext(this.context.next);
			}
	}
}

Carpeg.expressions.any.prototype.callError = function () {
	if (arguments.length == 3 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var code = arguments[0];
		var expected = arguments[1];
		var found = arguments[2];
		if (this.doError) {
			return this.overError.error(this, code, expected, found);
			}else{
				return "this.giveError(" + code + ", \"" + expected + "\", " + found + ");";
			}
	}
}

Carpeg.expressions.any.prototype.resetAllCaptureData = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.any.prototype.error = function () {
	if (arguments.length == 4 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null) && (typeof arguments[3] == 'string' || typeof arguments[3] == 'undefined' || arguments[3] === null)) {
		var exp = arguments[0];
		var code = arguments[1];
		var err = arguments[2];
		var char = arguments[3];

	}
}

Carpeg.expressions.any.prototype.move = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.any.prototype.put = function () {
	if (arguments.length == 3 && ((arguments[0] instanceof Carpeg.context) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var ctx = arguments[0];
		var cap = arguments[1];
		var thing = arguments[2];

	}
}

Carpeg.expressions.any.prototype.apply = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var you = arguments[0];
		this.parentRule = you.parentRule;
		this.grammar = you.grammar;
		this.hasParentExpression = true;
		this.parentExpression = you;
	}
}

Carpeg.expressions.any.make = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var type = data["type"];
		var output = null;
		if (type == "sequence") {
			output = new Carpeg.expressions.sequence(data);
			output.expressionType = "sequence";
			}else if (type == "group") {
			output = new Carpeg.expressions.group(data);
			output.expressionType = "group";
			}else if (type == "choice") {
			output = new Carpeg.expressions.choice(data);
			output.expressionType = "choice";
			}else if (type == "optional") {
			output = new Carpeg.expressions.optional(data);
			output.expressionType = "optional";
			}else if (type == "simple_not") {
			output = new Carpeg.expressions.not(data);
			output.expressionType = "not";
			}else if (type == "literal") {
			output = new Carpeg.expressions.stringLiteral(data);
			output.expressionType = "literal";
			}else if (type == "rule_ref") {
			output = new Carpeg.expressions.ruleRef(data);
			output.expressionType = "ruleRef";
			}else if (type == "class") {
			output = new Carpeg.expressions.classCapture(data);
			output.expressionType = "class";
			}else if (type == "native") {
			output = new Carpeg.expressions.native(data);
			output.expressionType = "native";
			}else if (type == "any") {
			output = new Carpeg.expressions.any(data);
			output.expressionType = "any";
			}else if (type == "labeled") {
			output = new Carpeg.expressions.labeled(data);
			output.expressionType = "labeled";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "zero_or_more") {
			output = new Carpeg.expressions.list(data);
			output.expressionType = "zero_or_more";
			}else if (type == "zero_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.raw = true;
			output.expressionType = "zero_or_more";
			}else if (type == "one_or_more") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			output.expressionType = "one_or_more";
			}else if (type == "one_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			cast.raw = true;
			output.expressionType = "one_or_more";
			}
		return output;
	}
}

Carpeg.expressions.sequence = function () {
	this.list = [];

	this.captureTo = 0;

	this.realCaptureTo = 0;

	this.expressionType = "";

	this.isComplex = false;

	this.complexChild = false;

	this.thatComplexChild = null;

	this.dynamicCapture = false;

	this.captures = [];

	this.initializers = [];

	this.doOwnCapture = false;

	this.isLoose = false;

	this.parentLabel = "";

	this.directLabel = false;

	this.isLabeled = false;

	this.doMove = false;

	this.overMove = null;

	this.doError = false;

	this.overError = null;

	this.outputType = "";

	this.context = new Carpeg.context();

	this.parentRule = null;

	this.grammar = null;

	this.hasParentExpression = false;

	this.parentExpression = null;

	this.baked = {};

	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		this.baked = data;
	}

}

Carpeg.expressions.sequence.prototype.generate = function () {
	if (arguments.length == 0) {
		var out = "";
		var list = this.list;
		for (var i = 0; i < list.length; i++) {
			var sub = list[i];
			out += sub.generate();
			}
		return out;
	}
}

Carpeg.expressions.sequence.prototype.overCapture = function () {
	if (arguments.length == 2 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var exp = arguments[0];
		var data = arguments[1];
		return "";
	}
}

Carpeg.expressions.sequence.prototype.resetDatas = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'boolean' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var already = arguments[0];
		var rtn = [];
		for (var i = 0; i < this.list.length; i++) {
			var exp = this.list[i];
			rtn.push(exp.resetDatas(already));
			}
		return rtn.join("\n");
	}
}

Carpeg.expressions.sequence.prototype.display = function () {
	if (arguments.length == 0) {
		var strs = [];
		for (var i = 0; i < this.list.length; i++) {
			var exp = this.list[i];
			strs.push(exp.display());
			}
		return strs.join(" -> ");
	}
}

Carpeg.expressions.sequence.prototype.build = function () {
	if (arguments.length == 0) {
		this.outputType = "map";
		var bakedData = this.baked;
		var expressions = bakedData["elements"];
		for (var i = 0; i < expressions.length; i++) {
			var data = expressions[i];
			var out = Carpeg.expression.make(data);
			out.apply(this);
			out.context = new Carpeg.context();
			out.context.hasAction = this.context.hasAction;
			out.context.action = this.context.action;
			out.context.childLabels = this.context.childLabels;
			out.context.clone(this.context);
			var subType = data["type"];
			out.context.checkerIndex = this.parentRule.checkerIndex;
			out.context.firstChild = out;
			out.captureTo = this.captureTo;
			var conv = i;
			if (parseInt(conv) != expressions.length - 1) {
				out.build();
				out.context.next = this.parentRule.checkerIndex + 1;
				this.parentRule.checkerIndex++;
				}else{
					out.context.putAfterLast = true;
					out.copy(this);
					out.build();
					out.context.next = this.parentRule.checkerIndex + 1;
				}
			if (out.isLoose == false && this.context.firstNonComplexChild === null) {
				this.context.firstNonComplexChild = out;
				}
			this.list.push(out);
			}
		if (this.context.putAfterLast) {
			var ind = this.list.length - 1;
			var exp = this.list[ind];
			exp.context.putAfterLast = true;
			exp.context.copyOverrides(this.context);
			}
		var first = this.list["0"];
		this.context.firstChild = first;
		if (this.context.parent !== null) {
			this.context.parent.firstChild = first;
			this.context.parent.firstNonComplexChild = this.context.firstNonComplexChild;
			}
		if (this.parentExpression !== null) {
			this.parentExpression.context.next = this.parentRule.checkerIndex + 1;
			}
		var isLos = true;
		for (var i = 0; i < this.list.length; i++) {
			var exp = this.list[i];
			if (exp.isLoose == false) {
				isLos = false;
				}
			}
		if (isLos == false) {
			this.isLoose = false;
			this.updateLoose();
			}
	}
}

Carpeg.expressions.sequence.prototype.copy = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.parentLabel = exp.parentLabel;
		this.directLabel = false;
		this.isLabeled = exp.isLabeled;
		this.doError = exp.doError;
		this.overError = exp.overError;
		this.doMove = exp.doMove;
		this.overMove = exp.overMove;
		this.captureTo = exp.captureTo;
		this.dynamicCapture = exp.dynamicCapture;
		for (var i = 0; i < exp.captures.length; i++) {
			this.captures.push(exp.captures[i]);
			}
		for (var j = 0; j < exp.initializers.length; j++) {
			this.initializers.push(exp.initializers[j]);
			}
	}
}

Carpeg.expressions.sequence.prototype.hasComplexChild = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.complexChild = true;
		this.thatComplexChild = exp;
		if (this.isComplex == false) {
			if (this.parentExpression !== null) {
				this.parentExpression.hasComplexChild(exp);
				}
			}
	}
}

Carpeg.expressions.sequence.prototype.updateChildren = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.sequence.prototype.overInitialize = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.sequence.prototype.updateLoose = function () {
	if (arguments.length == 0) {
		if (this.parentExpression !== null) {
			this.parentExpression.isLoose = this.isLoose;
			}
	}
}

Carpeg.expressions.sequence.prototype.capturePlace = function () {
	if (arguments.length == 0) {
		var rtn = this.captureRoot();
		if (this.isLabeled) {
			rtn += "[\"" + this.parentLabel + "\"]";
			}
		return rtn;
	}
}

Carpeg.expressions.sequence.prototype.captureRoot = function () {
	if (arguments.length == 0) {
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		return cap;
	}
}

Carpeg.expressions.sequence.prototype.callParentCapture = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var rtn = "";
		for (var i = this.captures.length - 1;i > 0 - 1;i--) {
			var capExp = this.captures[i];
			rtn += capExp.overCapture(this, data);
			}
		return rtn;
	}
}

Carpeg.expressions.sequence.prototype.captureData = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		var rtn = [];
		if (this.doOwnCapture) {
			rtn = [cap, "[\"", this.parentLabel, "\"] = ", data, ";"];
			}
		rtn.push(this.callParentCapture(data));
		return rtn.join("");
	}
}

Carpeg.expressions.sequence.prototype.callMove = function () {
	if (arguments.length == 0) {
		if (this.doMove) {
			return this.overMove.move(this);
			}else{
				return this.parentRule.moveNext(this.context.next);
			}
	}
}

Carpeg.expressions.sequence.prototype.callError = function () {
	if (arguments.length == 3 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var code = arguments[0];
		var expected = arguments[1];
		var found = arguments[2];
		if (this.doError) {
			return this.overError.error(this, code, expected, found);
			}else{
				return "this.giveError(" + code + ", \"" + expected + "\", " + found + ");";
			}
	}
}

Carpeg.expressions.sequence.prototype.resetAllCaptureData = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.sequence.prototype.error = function () {
	if (arguments.length == 4 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null) && (typeof arguments[3] == 'string' || typeof arguments[3] == 'undefined' || arguments[3] === null)) {
		var exp = arguments[0];
		var code = arguments[1];
		var err = arguments[2];
		var char = arguments[3];

	}
}

Carpeg.expressions.sequence.prototype.move = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.sequence.prototype.put = function () {
	if (arguments.length == 3 && ((arguments[0] instanceof Carpeg.context) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var ctx = arguments[0];
		var cap = arguments[1];
		var thing = arguments[2];

	}
}

Carpeg.expressions.sequence.prototype.apply = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var you = arguments[0];
		this.parentRule = you.parentRule;
		this.grammar = you.grammar;
		this.hasParentExpression = true;
		this.parentExpression = you;
	}
}

Carpeg.expressions.sequence.make = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var type = data["type"];
		var output = null;
		if (type == "sequence") {
			output = new Carpeg.expressions.sequence(data);
			output.expressionType = "sequence";
			}else if (type == "group") {
			output = new Carpeg.expressions.group(data);
			output.expressionType = "group";
			}else if (type == "choice") {
			output = new Carpeg.expressions.choice(data);
			output.expressionType = "choice";
			}else if (type == "optional") {
			output = new Carpeg.expressions.optional(data);
			output.expressionType = "optional";
			}else if (type == "simple_not") {
			output = new Carpeg.expressions.not(data);
			output.expressionType = "not";
			}else if (type == "literal") {
			output = new Carpeg.expressions.stringLiteral(data);
			output.expressionType = "literal";
			}else if (type == "rule_ref") {
			output = new Carpeg.expressions.ruleRef(data);
			output.expressionType = "ruleRef";
			}else if (type == "class") {
			output = new Carpeg.expressions.classCapture(data);
			output.expressionType = "class";
			}else if (type == "native") {
			output = new Carpeg.expressions.native(data);
			output.expressionType = "native";
			}else if (type == "any") {
			output = new Carpeg.expressions.any(data);
			output.expressionType = "any";
			}else if (type == "labeled") {
			output = new Carpeg.expressions.labeled(data);
			output.expressionType = "labeled";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "zero_or_more") {
			output = new Carpeg.expressions.list(data);
			output.expressionType = "zero_or_more";
			}else if (type == "zero_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.raw = true;
			output.expressionType = "zero_or_more";
			}else if (type == "one_or_more") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			output.expressionType = "one_or_more";
			}else if (type == "one_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			cast.raw = true;
			output.expressionType = "one_or_more";
			}
		return output;
	}
}

Carpeg.expressions.choice = function () {
	this.list = [];

	this.groupTop = null;

	this.last = 0;

	this.captureTo = 0;

	this.realCaptureTo = 0;

	this.expressionType = "";

	this.isComplex = false;

	this.complexChild = false;

	this.thatComplexChild = null;

	this.dynamicCapture = false;

	this.captures = [];

	this.initializers = [];

	this.doOwnCapture = false;

	this.isLoose = false;

	this.parentLabel = "";

	this.directLabel = false;

	this.isLabeled = false;

	this.doMove = false;

	this.overMove = null;

	this.doError = false;

	this.overError = null;

	this.outputType = "";

	this.context = new Carpeg.context();

	this.parentRule = null;

	this.grammar = null;

	this.hasParentExpression = false;

	this.parentExpression = null;

	this.baked = {};

	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		this.baked = data;
	}

}

Carpeg.expressions.choice.prototype.display = function () {
	if (arguments.length == 0) {
		var strs = [];
		for (var i = 0; i < this.list.length; i++) {
			var exp = this.list[i];
			strs.push(exp.display());
			}
		return strs.join(", ");
	}
}

Carpeg.expressions.choice.prototype.generate = function () {
	if (arguments.length == 0) {
		var out = "";
		var list = this.list;
		for (var i = 0; i < list.length; i++) {
			var sub = list[i];
			out += sub.generate();
			}
		return out;
	}
}

Carpeg.expressions.choice.prototype.move = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		return this.parentRule.moveNext(this.context.next);
	}
}

Carpeg.expressions.choice.prototype.error = function () {
	if (arguments.length == 4 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null) && (typeof arguments[3] == 'string' || typeof arguments[3] == 'undefined' || arguments[3] === null)) {
		var exp = arguments[0];
		var code = arguments[1];
		var err = arguments[2];
		var char = arguments[3];
		var ctx = exp.context.next;
		if (this.parentRule.checkerIndex == 0) {
			ctx = 2;
			}
		if (exp.context.checkerIndex == this.last) {
			return this.callError("1", this.display(), "currentChar");
			}else{
				return this.parentRule.moveNext(ctx) + " charPos--; this.offset--;";
			}
	}
}

Carpeg.expressions.choice.prototype.build = function () {
	if (arguments.length == 0) {
		this.outputType = "map";
		var bakedData = this.baked;
		var expressions = bakedData["alternatives"];
		for (var i = 0; i < expressions.length; i++) {
			var data = expressions[i];
			var out = Carpeg.expression.make(data);
			out.apply(this);
			out.context = new Carpeg.context();
			out.context.hasAction = this.context.hasAction;
			out.context.action = this.context.action;
			out.context.childLabels = this.context.childLabels;
			out.context.clone(this.context);
			var subType = data["type"];
			out.context.checkerIndex = this.parentRule.checkerIndex;
			out.context.firstChild = out;
			out.captureTo = this.captureTo;
			out.context.putAfterLast = true;
			out.copy(this);
			if (this.dynamicCapture) {
				out.doOwnCapture = false;
				}else{
					out.directLabel = true;
				}
			var conv = i;
			if (parseInt(conv) != expressions.length - 1) {
				out.doError = true;
				out.overError = this;
				if (this.dynamicCapture == false) {
					out.doMove = true;
					out.overMove = this;
					}
				out.build();
				out.context.next = this.parentRule.checkerIndex + 1;
				this.parentRule.checkerIndex++;
				}else{
					out.doError = true;
					out.overError = this;
					if (this.dynamicCapture == false) {
						out.doMove = true;
						out.overMove = this;
						}
					out.build();
					out.context.next = this.parentRule.checkerIndex + 1;
					this.last = out.context.checkerIndex;
				}
			this.list.push(out);
			}
		if (this.context.putAfterLast) {
			var ind = this.list.length - 1;
			var exp = this.list[ind];
			exp.context.putAfterLast = true;
			exp.context.copyOverrides(this.context);
			}
		var first = this.list["0"];
		this.context.firstChild = first;
		if (this.context.parent !== null) {
			this.context.parent.firstChild = first;
			}
		if (this.parentExpression !== null) {
			this.parentExpression.context.next = this.parentRule.checkerIndex + 1;
			}
	}
}

Carpeg.expressions.choice.prototype.copy = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.parentLabel = exp.parentLabel;
		this.directLabel = false;
		this.isLabeled = exp.isLabeled;
		this.doError = exp.doError;
		this.overError = exp.overError;
		this.doMove = exp.doMove;
		this.overMove = exp.overMove;
		this.captureTo = exp.captureTo;
		this.dynamicCapture = exp.dynamicCapture;
		for (var i = 0; i < exp.captures.length; i++) {
			this.captures.push(exp.captures[i]);
			}
		for (var j = 0; j < exp.initializers.length; j++) {
			this.initializers.push(exp.initializers[j]);
			}
	}
}

Carpeg.expressions.choice.prototype.hasComplexChild = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.complexChild = true;
		this.thatComplexChild = exp;
		if (this.isComplex == false) {
			if (this.parentExpression !== null) {
				this.parentExpression.hasComplexChild(exp);
				}
			}
	}
}

Carpeg.expressions.choice.prototype.updateChildren = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.choice.prototype.overCapture = function () {
	if (arguments.length == 2 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var exp = arguments[0];
		var data = arguments[1];

	}
}

Carpeg.expressions.choice.prototype.overInitialize = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.choice.prototype.resetDatas = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'boolean' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var already = arguments[0];
		return "";
	}
}

Carpeg.expressions.choice.prototype.updateLoose = function () {
	if (arguments.length == 0) {
		if (this.parentExpression !== null) {
			this.parentExpression.isLoose = this.isLoose;
			}
	}
}

Carpeg.expressions.choice.prototype.capturePlace = function () {
	if (arguments.length == 0) {
		var rtn = this.captureRoot();
		if (this.isLabeled) {
			rtn += "[\"" + this.parentLabel + "\"]";
			}
		return rtn;
	}
}

Carpeg.expressions.choice.prototype.captureRoot = function () {
	if (arguments.length == 0) {
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		return cap;
	}
}

Carpeg.expressions.choice.prototype.callParentCapture = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var rtn = "";
		for (var i = this.captures.length - 1;i > 0 - 1;i--) {
			var capExp = this.captures[i];
			rtn += capExp.overCapture(this, data);
			}
		return rtn;
	}
}

Carpeg.expressions.choice.prototype.captureData = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		var rtn = [];
		if (this.doOwnCapture) {
			rtn = [cap, "[\"", this.parentLabel, "\"] = ", data, ";"];
			}
		rtn.push(this.callParentCapture(data));
		return rtn.join("");
	}
}

Carpeg.expressions.choice.prototype.callMove = function () {
	if (arguments.length == 0) {
		if (this.doMove) {
			return this.overMove.move(this);
			}else{
				return this.parentRule.moveNext(this.context.next);
			}
	}
}

Carpeg.expressions.choice.prototype.callError = function () {
	if (arguments.length == 3 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var code = arguments[0];
		var expected = arguments[1];
		var found = arguments[2];
		if (this.doError) {
			return this.overError.error(this, code, expected, found);
			}else{
				return "this.giveError(" + code + ", \"" + expected + "\", " + found + ");";
			}
	}
}

Carpeg.expressions.choice.prototype.resetAllCaptureData = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.choice.prototype.put = function () {
	if (arguments.length == 3 && ((arguments[0] instanceof Carpeg.context) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var ctx = arguments[0];
		var cap = arguments[1];
		var thing = arguments[2];

	}
}

Carpeg.expressions.choice.prototype.apply = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var you = arguments[0];
		this.parentRule = you.parentRule;
		this.grammar = you.grammar;
		this.hasParentExpression = true;
		this.parentExpression = you;
	}
}

Carpeg.expressions.choice.make = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var type = data["type"];
		var output = null;
		if (type == "sequence") {
			output = new Carpeg.expressions.sequence(data);
			output.expressionType = "sequence";
			}else if (type == "group") {
			output = new Carpeg.expressions.group(data);
			output.expressionType = "group";
			}else if (type == "choice") {
			output = new Carpeg.expressions.choice(data);
			output.expressionType = "choice";
			}else if (type == "optional") {
			output = new Carpeg.expressions.optional(data);
			output.expressionType = "optional";
			}else if (type == "simple_not") {
			output = new Carpeg.expressions.not(data);
			output.expressionType = "not";
			}else if (type == "literal") {
			output = new Carpeg.expressions.stringLiteral(data);
			output.expressionType = "literal";
			}else if (type == "rule_ref") {
			output = new Carpeg.expressions.ruleRef(data);
			output.expressionType = "ruleRef";
			}else if (type == "class") {
			output = new Carpeg.expressions.classCapture(data);
			output.expressionType = "class";
			}else if (type == "native") {
			output = new Carpeg.expressions.native(data);
			output.expressionType = "native";
			}else if (type == "any") {
			output = new Carpeg.expressions.any(data);
			output.expressionType = "any";
			}else if (type == "labeled") {
			output = new Carpeg.expressions.labeled(data);
			output.expressionType = "labeled";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "zero_or_more") {
			output = new Carpeg.expressions.list(data);
			output.expressionType = "zero_or_more";
			}else if (type == "zero_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.raw = true;
			output.expressionType = "zero_or_more";
			}else if (type == "one_or_more") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			output.expressionType = "one_or_more";
			}else if (type == "one_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			cast.raw = true;
			output.expressionType = "one_or_more";
			}
		return output;
	}
}

Carpeg.expressions.group = function () {
	this.expression = null;

	this.isComplex = true;

	this.captureTo = 0;

	this.realCaptureTo = 0;

	this.expressionType = "";

	this.complexChild = false;

	this.thatComplexChild = null;

	this.dynamicCapture = false;

	this.captures = [];

	this.initializers = [];

	this.doOwnCapture = false;

	this.isLoose = false;

	this.parentLabel = "";

	this.directLabel = false;

	this.isLabeled = false;

	this.doMove = false;

	this.overMove = null;

	this.doError = false;

	this.overError = null;

	this.outputType = "";

	this.context = new Carpeg.context();

	this.parentRule = null;

	this.grammar = null;

	this.hasParentExpression = false;

	this.parentExpression = null;

	this.baked = {};

	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		this.baked = data;
	}

}

Carpeg.expressions.group.prototype.generate = function () {
	if (arguments.length == 0) {
		return this.expression.generate();
	}
}

Carpeg.expressions.group.prototype.display = function () {
	if (arguments.length == 0) {
		return this.expression.display();
	}
}

Carpeg.expressions.group.prototype.resetDatas = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'boolean' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var already = arguments[0];
		var root = this.expression.captureTo;
		var rtn = [];
		var set = "new map();";
		if (this.dynamicCapture) {

			}else{
				set = this.capturePlace() + ";";
				rtn.push(this.capturePlace() + " = new map();\n");
			}
		var create = "";
		if (already == false) {
			create = "var map ";
			}
		rtn.push(create + "captureRoot" + root + " = " + set + "\n" + this.expression.resetDatas(already));
		return rtn.join("");
	}
}

Carpeg.expressions.group.prototype.build = function () {
	if (arguments.length == 0) {
		if (this.parentExpression !== null) {
			this.parentExpression.hasComplexChild(this);
			}
		var data = this.baked["expression"];
		this.expression = Carpeg.expression.make(data);
		this.expression.apply(this);
		this.expression.context = new Carpeg.context();
		this.expression.context.copyOverrides(this.context);
		this.expression.context.hasAction = this.context.hasAction;
		this.expression.context.action = this.context.action;
		this.expression.context.parent = this.context;
		this.expression.context.parentCapture = this.context;
		this.expression.context.checkerIndex = this.context.checkerIndex;
		this.expression.context.next = this.context.next;
		this.expression.copy(this);
		this.parentRule.captureIndex++;
		this.expression.captureTo = this.parentRule.captureIndex;
		this.realCaptureTo = this.expression.captureTo;
		this.expression.context.putAfterLast = true;
		var prev = this.expression.context.addCapture(this);
		this.expression.build();
		this.outputType = this.expression.outputType;
	}
}

Carpeg.expressions.group.prototype.copy = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.parentLabel = exp.parentLabel;
		this.directLabel = false;
		this.isLabeled = exp.isLabeled;
		this.doError = exp.doError;
		this.overError = exp.overError;
		this.doMove = exp.doMove;
		this.overMove = exp.overMove;
		this.captureTo = exp.captureTo;
		this.dynamicCapture = exp.dynamicCapture;
		for (var i = 0; i < exp.captures.length; i++) {
			this.captures.push(exp.captures[i]);
			}
		for (var j = 0; j < exp.initializers.length; j++) {
			this.initializers.push(exp.initializers[j]);
			}
	}
}

Carpeg.expressions.group.prototype.hasComplexChild = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.complexChild = true;
		this.thatComplexChild = exp;
		if (this.isComplex == false) {
			if (this.parentExpression !== null) {
				this.parentExpression.hasComplexChild(exp);
				}
			}
	}
}

Carpeg.expressions.group.prototype.updateChildren = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.group.prototype.overCapture = function () {
	if (arguments.length == 2 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var exp = arguments[0];
		var data = arguments[1];

	}
}

Carpeg.expressions.group.prototype.overInitialize = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.group.prototype.updateLoose = function () {
	if (arguments.length == 0) {
		if (this.parentExpression !== null) {
			this.parentExpression.isLoose = this.isLoose;
			}
	}
}

Carpeg.expressions.group.prototype.capturePlace = function () {
	if (arguments.length == 0) {
		var rtn = this.captureRoot();
		if (this.isLabeled) {
			rtn += "[\"" + this.parentLabel + "\"]";
			}
		return rtn;
	}
}

Carpeg.expressions.group.prototype.captureRoot = function () {
	if (arguments.length == 0) {
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		return cap;
	}
}

Carpeg.expressions.group.prototype.callParentCapture = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var rtn = "";
		for (var i = this.captures.length - 1;i > 0 - 1;i--) {
			var capExp = this.captures[i];
			rtn += capExp.overCapture(this, data);
			}
		return rtn;
	}
}

Carpeg.expressions.group.prototype.captureData = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		var rtn = [];
		if (this.doOwnCapture) {
			rtn = [cap, "[\"", this.parentLabel, "\"] = ", data, ";"];
			}
		rtn.push(this.callParentCapture(data));
		return rtn.join("");
	}
}

Carpeg.expressions.group.prototype.callMove = function () {
	if (arguments.length == 0) {
		if (this.doMove) {
			return this.overMove.move(this);
			}else{
				return this.parentRule.moveNext(this.context.next);
			}
	}
}

Carpeg.expressions.group.prototype.callError = function () {
	if (arguments.length == 3 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var code = arguments[0];
		var expected = arguments[1];
		var found = arguments[2];
		if (this.doError) {
			return this.overError.error(this, code, expected, found);
			}else{
				return "this.giveError(" + code + ", \"" + expected + "\", " + found + ");";
			}
	}
}

Carpeg.expressions.group.prototype.resetAllCaptureData = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.group.prototype.error = function () {
	if (arguments.length == 4 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null) && (typeof arguments[3] == 'string' || typeof arguments[3] == 'undefined' || arguments[3] === null)) {
		var exp = arguments[0];
		var code = arguments[1];
		var err = arguments[2];
		var char = arguments[3];

	}
}

Carpeg.expressions.group.prototype.move = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.group.prototype.put = function () {
	if (arguments.length == 3 && ((arguments[0] instanceof Carpeg.context) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var ctx = arguments[0];
		var cap = arguments[1];
		var thing = arguments[2];

	}
}

Carpeg.expressions.group.prototype.apply = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var you = arguments[0];
		this.parentRule = you.parentRule;
		this.grammar = you.grammar;
		this.hasParentExpression = true;
		this.parentExpression = you;
	}
}

Carpeg.expressions.group.make = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var type = data["type"];
		var output = null;
		if (type == "sequence") {
			output = new Carpeg.expressions.sequence(data);
			output.expressionType = "sequence";
			}else if (type == "group") {
			output = new Carpeg.expressions.group(data);
			output.expressionType = "group";
			}else if (type == "choice") {
			output = new Carpeg.expressions.choice(data);
			output.expressionType = "choice";
			}else if (type == "optional") {
			output = new Carpeg.expressions.optional(data);
			output.expressionType = "optional";
			}else if (type == "simple_not") {
			output = new Carpeg.expressions.not(data);
			output.expressionType = "not";
			}else if (type == "literal") {
			output = new Carpeg.expressions.stringLiteral(data);
			output.expressionType = "literal";
			}else if (type == "rule_ref") {
			output = new Carpeg.expressions.ruleRef(data);
			output.expressionType = "ruleRef";
			}else if (type == "class") {
			output = new Carpeg.expressions.classCapture(data);
			output.expressionType = "class";
			}else if (type == "native") {
			output = new Carpeg.expressions.native(data);
			output.expressionType = "native";
			}else if (type == "any") {
			output = new Carpeg.expressions.any(data);
			output.expressionType = "any";
			}else if (type == "labeled") {
			output = new Carpeg.expressions.labeled(data);
			output.expressionType = "labeled";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "zero_or_more") {
			output = new Carpeg.expressions.list(data);
			output.expressionType = "zero_or_more";
			}else if (type == "zero_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.raw = true;
			output.expressionType = "zero_or_more";
			}else if (type == "one_or_more") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			output.expressionType = "one_or_more";
			}else if (type == "one_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			cast.raw = true;
			output.expressionType = "one_or_more";
			}
		return output;
	}
}

Carpeg.expressions.labeled = function () {
	this.child = null;

	this.label = "";

	this.captureTo = 0;

	this.realCaptureTo = 0;

	this.expressionType = "";

	this.isComplex = false;

	this.complexChild = false;

	this.thatComplexChild = null;

	this.dynamicCapture = false;

	this.captures = [];

	this.initializers = [];

	this.doOwnCapture = false;

	this.isLoose = false;

	this.parentLabel = "";

	this.directLabel = false;

	this.isLabeled = false;

	this.doMove = false;

	this.overMove = null;

	this.doError = false;

	this.overError = null;

	this.outputType = "";

	this.context = new Carpeg.context();

	this.parentRule = null;

	this.grammar = null;

	this.hasParentExpression = false;

	this.parentExpression = null;

	this.baked = {};

	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		this.baked = data;
	}

}

Carpeg.expressions.labeled.prototype.resetAllCaptureData = function () {
	if (arguments.length == 0) {
		return this.child.resetAllCaptureData();
	}
}

Carpeg.expressions.labeled.prototype.generate = function () {
	if (arguments.length == 0) {
		return this.child.generate();
	}
}

Carpeg.expressions.labeled.prototype.resetDatas = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'boolean' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var already = arguments[0];
		return this.child.resetDatas(already);
	}
}

Carpeg.expressions.labeled.prototype.display = function () {
	if (arguments.length == 0) {
		return this.child.display();
	}
}

Carpeg.expressions.labeled.prototype.updateChildren = function () {
	if (arguments.length == 0) {
		this.child.overError = this.overError;
		this.child.doError = this.doError;
		this.child.overMove = this.overMove;
		this.child.doMove = this.doMove;
	}
}

Carpeg.expressions.labeled.prototype.build = function () {
	if (arguments.length == 0) {
		var bakedData = this.baked;
		var label = bakedData["label"];
		this.label = label;
		this.context.childLabels[this.label] = this;
		this.child = Carpeg.expression.make(bakedData["expression"]);
		this.child.apply(this);
		this.context.isLabeled = true;
		this.context.label = this.label;
		this.child.context = this.context;
		this.child.copy(this);
		this.child.directLabel = true;
		this.child.parentLabel = label;
		this.child.isLabeled = true;
		this.child.build();
		this.updateLoose();
		this.outputType = this.child.outputType;
	}
}

Carpeg.expressions.labeled.prototype.copy = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.parentLabel = exp.parentLabel;
		this.directLabel = false;
		this.isLabeled = exp.isLabeled;
		this.doError = exp.doError;
		this.overError = exp.overError;
		this.doMove = exp.doMove;
		this.overMove = exp.overMove;
		this.captureTo = exp.captureTo;
		this.dynamicCapture = exp.dynamicCapture;
		for (var i = 0; i < exp.captures.length; i++) {
			this.captures.push(exp.captures[i]);
			}
		for (var j = 0; j < exp.initializers.length; j++) {
			this.initializers.push(exp.initializers[j]);
			}
	}
}

Carpeg.expressions.labeled.prototype.hasComplexChild = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.complexChild = true;
		this.thatComplexChild = exp;
		if (this.isComplex == false) {
			if (this.parentExpression !== null) {
				this.parentExpression.hasComplexChild(exp);
				}
			}
	}
}

Carpeg.expressions.labeled.prototype.overCapture = function () {
	if (arguments.length == 2 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var exp = arguments[0];
		var data = arguments[1];

	}
}

Carpeg.expressions.labeled.prototype.overInitialize = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.labeled.prototype.updateLoose = function () {
	if (arguments.length == 0) {
		if (this.parentExpression !== null) {
			this.parentExpression.isLoose = this.isLoose;
			}
	}
}

Carpeg.expressions.labeled.prototype.capturePlace = function () {
	if (arguments.length == 0) {
		var rtn = this.captureRoot();
		if (this.isLabeled) {
			rtn += "[\"" + this.parentLabel + "\"]";
			}
		return rtn;
	}
}

Carpeg.expressions.labeled.prototype.captureRoot = function () {
	if (arguments.length == 0) {
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		return cap;
	}
}

Carpeg.expressions.labeled.prototype.callParentCapture = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var rtn = "";
		for (var i = this.captures.length - 1;i > 0 - 1;i--) {
			var capExp = this.captures[i];
			rtn += capExp.overCapture(this, data);
			}
		return rtn;
	}
}

Carpeg.expressions.labeled.prototype.captureData = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		var rtn = [];
		if (this.doOwnCapture) {
			rtn = [cap, "[\"", this.parentLabel, "\"] = ", data, ";"];
			}
		rtn.push(this.callParentCapture(data));
		return rtn.join("");
	}
}

Carpeg.expressions.labeled.prototype.callMove = function () {
	if (arguments.length == 0) {
		if (this.doMove) {
			return this.overMove.move(this);
			}else{
				return this.parentRule.moveNext(this.context.next);
			}
	}
}

Carpeg.expressions.labeled.prototype.callError = function () {
	if (arguments.length == 3 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var code = arguments[0];
		var expected = arguments[1];
		var found = arguments[2];
		if (this.doError) {
			return this.overError.error(this, code, expected, found);
			}else{
				return "this.giveError(" + code + ", \"" + expected + "\", " + found + ");";
			}
	}
}

Carpeg.expressions.labeled.prototype.error = function () {
	if (arguments.length == 4 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null) && (typeof arguments[3] == 'string' || typeof arguments[3] == 'undefined' || arguments[3] === null)) {
		var exp = arguments[0];
		var code = arguments[1];
		var err = arguments[2];
		var char = arguments[3];

	}
}

Carpeg.expressions.labeled.prototype.move = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.labeled.prototype.put = function () {
	if (arguments.length == 3 && ((arguments[0] instanceof Carpeg.context) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var ctx = arguments[0];
		var cap = arguments[1];
		var thing = arguments[2];

	}
}

Carpeg.expressions.labeled.prototype.apply = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var you = arguments[0];
		this.parentRule = you.parentRule;
		this.grammar = you.grammar;
		this.hasParentExpression = true;
		this.parentExpression = you;
	}
}

Carpeg.expressions.labeled.make = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var type = data["type"];
		var output = null;
		if (type == "sequence") {
			output = new Carpeg.expressions.sequence(data);
			output.expressionType = "sequence";
			}else if (type == "group") {
			output = new Carpeg.expressions.group(data);
			output.expressionType = "group";
			}else if (type == "choice") {
			output = new Carpeg.expressions.choice(data);
			output.expressionType = "choice";
			}else if (type == "optional") {
			output = new Carpeg.expressions.optional(data);
			output.expressionType = "optional";
			}else if (type == "simple_not") {
			output = new Carpeg.expressions.not(data);
			output.expressionType = "not";
			}else if (type == "literal") {
			output = new Carpeg.expressions.stringLiteral(data);
			output.expressionType = "literal";
			}else if (type == "rule_ref") {
			output = new Carpeg.expressions.ruleRef(data);
			output.expressionType = "ruleRef";
			}else if (type == "class") {
			output = new Carpeg.expressions.classCapture(data);
			output.expressionType = "class";
			}else if (type == "native") {
			output = new Carpeg.expressions.native(data);
			output.expressionType = "native";
			}else if (type == "any") {
			output = new Carpeg.expressions.any(data);
			output.expressionType = "any";
			}else if (type == "labeled") {
			output = new Carpeg.expressions.labeled(data);
			output.expressionType = "labeled";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "zero_or_more") {
			output = new Carpeg.expressions.list(data);
			output.expressionType = "zero_or_more";
			}else if (type == "zero_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.raw = true;
			output.expressionType = "zero_or_more";
			}else if (type == "one_or_more") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			output.expressionType = "one_or_more";
			}else if (type == "one_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			cast.raw = true;
			output.expressionType = "one_or_more";
			}
		return output;
	}
}

Carpeg.expressions.optional = function () {
	this.expression = null;

	this.captureTo = 0;

	this.realCaptureTo = 0;

	this.expressionType = "";

	this.isComplex = false;

	this.complexChild = false;

	this.thatComplexChild = null;

	this.dynamicCapture = false;

	this.captures = [];

	this.initializers = [];

	this.doOwnCapture = false;

	this.isLoose = false;

	this.parentLabel = "";

	this.directLabel = false;

	this.isLabeled = false;

	this.doMove = false;

	this.overMove = null;

	this.doError = false;

	this.overError = null;

	this.outputType = "";

	this.context = new Carpeg.context();

	this.parentRule = null;

	this.grammar = null;

	this.hasParentExpression = false;

	this.parentExpression = null;

	this.baked = {};

	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		this.baked = data;
	}

}

Carpeg.expressions.optional.prototype.display = function () {
	if (arguments.length == 0) {
		return "Optional " + this.expression.display();
	}
}

Carpeg.expressions.optional.prototype.generate = function () {
	if (arguments.length == 0) {
		return this.expression.generate();
	}
}

Carpeg.expressions.optional.prototype.build = function () {
	if (arguments.length == 0) {
		var bakedData = this.baked;
		this.isLoose = true;
		this.updateLoose();
		this.expression = Carpeg.expression.make(bakedData["expression"]);
		this.expression.apply(this);
		this.context.doOverError = true;
		this.context.error = this;
		this.expression.context = this.context;
		this.expression.copy(this);
		this.expression.directLabel = this.directLabel;
		this.expression.doError = true;
		this.expression.overError = this;
		this.expression.build();
		this.outputType = this.expression.outputType;
	}
}

Carpeg.expressions.optional.prototype.resetDatas = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'boolean' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var already = arguments[0];
		return this.expression.resetDatas(already);
	}
}

Carpeg.expressions.optional.prototype.error = function () {
	if (arguments.length == 4 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null) && (typeof arguments[3] == 'string' || typeof arguments[3] == 'undefined' || arguments[3] === null)) {
		var exp = arguments[0];
		var code = arguments[1];
		var err = arguments[2];
		var char = arguments[3];
		var ctx = this.expression.context.next;
		if (this.parentRule.checkerIndex == 0) {
			ctx = 2;
			}
		return this.parentRule.moveNext(ctx) + " charPos--; this.offset--;";
	}
}

Carpeg.expressions.optional.prototype.copy = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.parentLabel = exp.parentLabel;
		this.directLabel = false;
		this.isLabeled = exp.isLabeled;
		this.doError = exp.doError;
		this.overError = exp.overError;
		this.doMove = exp.doMove;
		this.overMove = exp.overMove;
		this.captureTo = exp.captureTo;
		this.dynamicCapture = exp.dynamicCapture;
		for (var i = 0; i < exp.captures.length; i++) {
			this.captures.push(exp.captures[i]);
			}
		for (var j = 0; j < exp.initializers.length; j++) {
			this.initializers.push(exp.initializers[j]);
			}
	}
}

Carpeg.expressions.optional.prototype.hasComplexChild = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.complexChild = true;
		this.thatComplexChild = exp;
		if (this.isComplex == false) {
			if (this.parentExpression !== null) {
				this.parentExpression.hasComplexChild(exp);
				}
			}
	}
}

Carpeg.expressions.optional.prototype.updateChildren = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.optional.prototype.overCapture = function () {
	if (arguments.length == 2 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var exp = arguments[0];
		var data = arguments[1];

	}
}

Carpeg.expressions.optional.prototype.overInitialize = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.optional.prototype.updateLoose = function () {
	if (arguments.length == 0) {
		if (this.parentExpression !== null) {
			this.parentExpression.isLoose = this.isLoose;
			}
	}
}

Carpeg.expressions.optional.prototype.capturePlace = function () {
	if (arguments.length == 0) {
		var rtn = this.captureRoot();
		if (this.isLabeled) {
			rtn += "[\"" + this.parentLabel + "\"]";
			}
		return rtn;
	}
}

Carpeg.expressions.optional.prototype.captureRoot = function () {
	if (arguments.length == 0) {
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		return cap;
	}
}

Carpeg.expressions.optional.prototype.callParentCapture = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var rtn = "";
		for (var i = this.captures.length - 1;i > 0 - 1;i--) {
			var capExp = this.captures[i];
			rtn += capExp.overCapture(this, data);
			}
		return rtn;
	}
}

Carpeg.expressions.optional.prototype.captureData = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		var rtn = [];
		if (this.doOwnCapture) {
			rtn = [cap, "[\"", this.parentLabel, "\"] = ", data, ";"];
			}
		rtn.push(this.callParentCapture(data));
		return rtn.join("");
	}
}

Carpeg.expressions.optional.prototype.callMove = function () {
	if (arguments.length == 0) {
		if (this.doMove) {
			return this.overMove.move(this);
			}else{
				return this.parentRule.moveNext(this.context.next);
			}
	}
}

Carpeg.expressions.optional.prototype.callError = function () {
	if (arguments.length == 3 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var code = arguments[0];
		var expected = arguments[1];
		var found = arguments[2];
		if (this.doError) {
			return this.overError.error(this, code, expected, found);
			}else{
				return "this.giveError(" + code + ", \"" + expected + "\", " + found + ");";
			}
	}
}

Carpeg.expressions.optional.prototype.resetAllCaptureData = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.optional.prototype.move = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.optional.prototype.put = function () {
	if (arguments.length == 3 && ((arguments[0] instanceof Carpeg.context) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var ctx = arguments[0];
		var cap = arguments[1];
		var thing = arguments[2];

	}
}

Carpeg.expressions.optional.prototype.apply = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var you = arguments[0];
		this.parentRule = you.parentRule;
		this.grammar = you.grammar;
		this.hasParentExpression = true;
		this.parentExpression = you;
	}
}

Carpeg.expressions.optional.make = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var type = data["type"];
		var output = null;
		if (type == "sequence") {
			output = new Carpeg.expressions.sequence(data);
			output.expressionType = "sequence";
			}else if (type == "group") {
			output = new Carpeg.expressions.group(data);
			output.expressionType = "group";
			}else if (type == "choice") {
			output = new Carpeg.expressions.choice(data);
			output.expressionType = "choice";
			}else if (type == "optional") {
			output = new Carpeg.expressions.optional(data);
			output.expressionType = "optional";
			}else if (type == "simple_not") {
			output = new Carpeg.expressions.not(data);
			output.expressionType = "not";
			}else if (type == "literal") {
			output = new Carpeg.expressions.stringLiteral(data);
			output.expressionType = "literal";
			}else if (type == "rule_ref") {
			output = new Carpeg.expressions.ruleRef(data);
			output.expressionType = "ruleRef";
			}else if (type == "class") {
			output = new Carpeg.expressions.classCapture(data);
			output.expressionType = "class";
			}else if (type == "native") {
			output = new Carpeg.expressions.native(data);
			output.expressionType = "native";
			}else if (type == "any") {
			output = new Carpeg.expressions.any(data);
			output.expressionType = "any";
			}else if (type == "labeled") {
			output = new Carpeg.expressions.labeled(data);
			output.expressionType = "labeled";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "zero_or_more") {
			output = new Carpeg.expressions.list(data);
			output.expressionType = "zero_or_more";
			}else if (type == "zero_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.raw = true;
			output.expressionType = "zero_or_more";
			}else if (type == "one_or_more") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			output.expressionType = "one_or_more";
			}else if (type == "one_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			cast.raw = true;
			output.expressionType = "one_or_more";
			}
		return output;
	}
}

Carpeg.expressions.not = function () {
	this.expression = null;

	this.captureTo = 0;

	this.realCaptureTo = 0;

	this.expressionType = "";

	this.isComplex = false;

	this.complexChild = false;

	this.thatComplexChild = null;

	this.dynamicCapture = false;

	this.captures = [];

	this.initializers = [];

	this.doOwnCapture = false;

	this.isLoose = false;

	this.parentLabel = "";

	this.directLabel = false;

	this.isLabeled = false;

	this.doMove = false;

	this.overMove = null;

	this.doError = false;

	this.overError = null;

	this.outputType = "";

	this.context = new Carpeg.context();

	this.parentRule = null;

	this.grammar = null;

	this.hasParentExpression = false;

	this.parentExpression = null;

	this.baked = {};

	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		this.baked = data;
	}

}

Carpeg.expressions.not.prototype.display = function () {
	if (arguments.length == 0) {
		return "Not " + this.expression.display();
	}
}

Carpeg.expressions.not.prototype.generate = function () {
	if (arguments.length == 0) {
		return this.expression.generate();
	}
}

Carpeg.expressions.not.prototype.build = function () {
	if (arguments.length == 0) {
		var bakedData = this.baked;
		this.expression = Carpeg.expression.make(bakedData["expression"]);
		this.expression.apply(this);
		this.context.doOverError = true;
		this.context.error = this;
		this.expression.context = this.context;
		this.expression.copy(this);
		this.expression.directLabel = this.directLabel;
		this.expression.doError = true;
		this.expression.overError = this;
		this.expression.captures.push(this);
		this.expression.build();
		this.outputType = this.expression.outputType;
	}
}

Carpeg.expressions.not.prototype.resetDatas = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'boolean' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var already = arguments[0];
		return this.expression.resetDatas(already);
	}
}

Carpeg.expressions.not.prototype.overCapture = function () {
	if (arguments.length == 2 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var exp = arguments[0];
		var data = arguments[1];
		return this.callError("1", this.display(), "currentChar");
	}
}

Carpeg.expressions.not.prototype.error = function () {
	if (arguments.length == 4 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null) && (typeof arguments[3] == 'string' || typeof arguments[3] == 'undefined' || arguments[3] === null)) {
		var exp = arguments[0];
		var code = arguments[1];
		var err = arguments[2];
		var char = arguments[3];
		var ctx = this.expression.context.next;
		if (this.parentRule.checkerIndex == 0) {
			ctx = 2;
			}
		return this.callMove();
	}
}

Carpeg.expressions.not.prototype.copy = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.parentLabel = exp.parentLabel;
		this.directLabel = false;
		this.isLabeled = exp.isLabeled;
		this.doError = exp.doError;
		this.overError = exp.overError;
		this.doMove = exp.doMove;
		this.overMove = exp.overMove;
		this.captureTo = exp.captureTo;
		this.dynamicCapture = exp.dynamicCapture;
		for (var i = 0; i < exp.captures.length; i++) {
			this.captures.push(exp.captures[i]);
			}
		for (var j = 0; j < exp.initializers.length; j++) {
			this.initializers.push(exp.initializers[j]);
			}
	}
}

Carpeg.expressions.not.prototype.hasComplexChild = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.complexChild = true;
		this.thatComplexChild = exp;
		if (this.isComplex == false) {
			if (this.parentExpression !== null) {
				this.parentExpression.hasComplexChild(exp);
				}
			}
	}
}

Carpeg.expressions.not.prototype.updateChildren = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.not.prototype.overInitialize = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.not.prototype.updateLoose = function () {
	if (arguments.length == 0) {
		if (this.parentExpression !== null) {
			this.parentExpression.isLoose = this.isLoose;
			}
	}
}

Carpeg.expressions.not.prototype.capturePlace = function () {
	if (arguments.length == 0) {
		var rtn = this.captureRoot();
		if (this.isLabeled) {
			rtn += "[\"" + this.parentLabel + "\"]";
			}
		return rtn;
	}
}

Carpeg.expressions.not.prototype.captureRoot = function () {
	if (arguments.length == 0) {
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		return cap;
	}
}

Carpeg.expressions.not.prototype.callParentCapture = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var rtn = "";
		for (var i = this.captures.length - 1;i > 0 - 1;i--) {
			var capExp = this.captures[i];
			rtn += capExp.overCapture(this, data);
			}
		return rtn;
	}
}

Carpeg.expressions.not.prototype.captureData = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		var rtn = [];
		if (this.doOwnCapture) {
			rtn = [cap, "[\"", this.parentLabel, "\"] = ", data, ";"];
			}
		rtn.push(this.callParentCapture(data));
		return rtn.join("");
	}
}

Carpeg.expressions.not.prototype.callMove = function () {
	if (arguments.length == 0) {
		if (this.doMove) {
			return this.overMove.move(this);
			}else{
				return this.parentRule.moveNext(this.context.next);
			}
	}
}

Carpeg.expressions.not.prototype.callError = function () {
	if (arguments.length == 3 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var code = arguments[0];
		var expected = arguments[1];
		var found = arguments[2];
		if (this.doError) {
			return this.overError.error(this, code, expected, found);
			}else{
				return "this.giveError(" + code + ", \"" + expected + "\", " + found + ");";
			}
	}
}

Carpeg.expressions.not.prototype.resetAllCaptureData = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.not.prototype.move = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.not.prototype.put = function () {
	if (arguments.length == 3 && ((arguments[0] instanceof Carpeg.context) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var ctx = arguments[0];
		var cap = arguments[1];
		var thing = arguments[2];

	}
}

Carpeg.expressions.not.prototype.apply = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var you = arguments[0];
		this.parentRule = you.parentRule;
		this.grammar = you.grammar;
		this.hasParentExpression = true;
		this.parentExpression = you;
	}
}

Carpeg.expressions.not.make = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var type = data["type"];
		var output = null;
		if (type == "sequence") {
			output = new Carpeg.expressions.sequence(data);
			output.expressionType = "sequence";
			}else if (type == "group") {
			output = new Carpeg.expressions.group(data);
			output.expressionType = "group";
			}else if (type == "choice") {
			output = new Carpeg.expressions.choice(data);
			output.expressionType = "choice";
			}else if (type == "optional") {
			output = new Carpeg.expressions.optional(data);
			output.expressionType = "optional";
			}else if (type == "simple_not") {
			output = new Carpeg.expressions.not(data);
			output.expressionType = "not";
			}else if (type == "literal") {
			output = new Carpeg.expressions.stringLiteral(data);
			output.expressionType = "literal";
			}else if (type == "rule_ref") {
			output = new Carpeg.expressions.ruleRef(data);
			output.expressionType = "ruleRef";
			}else if (type == "class") {
			output = new Carpeg.expressions.classCapture(data);
			output.expressionType = "class";
			}else if (type == "native") {
			output = new Carpeg.expressions.native(data);
			output.expressionType = "native";
			}else if (type == "any") {
			output = new Carpeg.expressions.any(data);
			output.expressionType = "any";
			}else if (type == "labeled") {
			output = new Carpeg.expressions.labeled(data);
			output.expressionType = "labeled";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "zero_or_more") {
			output = new Carpeg.expressions.list(data);
			output.expressionType = "zero_or_more";
			}else if (type == "zero_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.raw = true;
			output.expressionType = "zero_or_more";
			}else if (type == "one_or_more") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			output.expressionType = "one_or_more";
			}else if (type == "one_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			cast.raw = true;
			output.expressionType = "one_or_more";
			}
		return output;
	}
}

Carpeg.expressions.action = function () {
	this.expression = null;

	this.code = "";

	this.typeType = "";

	this.captureTo = 0;

	this.realCaptureTo = 0;

	this.expressionType = "";

	this.isComplex = false;

	this.complexChild = false;

	this.thatComplexChild = null;

	this.dynamicCapture = false;

	this.captures = [];

	this.initializers = [];

	this.doOwnCapture = false;

	this.isLoose = false;

	this.parentLabel = "";

	this.directLabel = false;

	this.isLabeled = false;

	this.doMove = false;

	this.overMove = null;

	this.doError = false;

	this.overError = null;

	this.outputType = "";

	this.context = new Carpeg.context();

	this.parentRule = null;

	this.grammar = null;

	this.hasParentExpression = false;

	this.parentExpression = null;

	this.baked = {};

	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		this.baked = data;
	}

}

Carpeg.expressions.action.prototype.generate = function () {
	if (arguments.length == 0) {
		return this.expression.generate();
	}
}

Carpeg.expressions.action.prototype.display = function () {
	if (arguments.length == 0) {
		return this.expression.display();
	}
}

Carpeg.expressions.action.prototype.mapped = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var data = arguments[0];
		var route = arguments[1];
		var rtn = "";
		for (var key in data) {
			var type = (typeof data[key] == 'object' ? (Array.isArray(data[key]) ? 'array' : 'map') : (typeof data[key] == 'number' ? 'float' : typeof data[key]));
			if (type == "string") {
				var cast = data[key];
				rtn += "export" + route + "[\"" + key + "\"] = " + cast + ";\n";
				}else if (type == "map") {
				rtn += "export" + route + "[\"" + key + "\"] = new map();\n" + this.mapped(data[key], route + "[\"" + key + "\"]");
				}
			}
		return rtn;
	}
}

Carpeg.expressions.action.prototype.build = function () {
	if (arguments.length == 0) {
		var bakedData = this.baked;
		this.outputType = bakedData["outputType"];
		this.typeType = bakedData["typeType"];
		if (this.typeType == "mapped" || (typeof bakedData["code"] == 'object' ? (Array.isArray(bakedData["code"]) ? 'array' : 'map') : (typeof bakedData["code"] == 'number' ? 'float' : typeof bakedData["code"])) == "map") {
			this.code = this.mapped(bakedData["code"], "");
			}else{
				this.code = bakedData["code"];
			}
		this.expression = Carpeg.expression.make(bakedData["expression"]);
		this.expression.apply(this);
		this.context.put = this;
		this.context.doPut = true;
		this.expression.context = this.context;
		this.expression.copy(this);
		this.expression.captures.push(this);
		this.expression.build();
		this.updateLoose();
	}
}

Carpeg.expressions.action.prototype.overCapture = function () {
	if (arguments.length == 2 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var exp = arguments[0];
		var data = arguments[1];
		if (this.complexChild) {
			data = "captureRoot" + this.thatComplexChild.realCaptureTo;
			}
		var rtn = [];
		var cast = "castac" + exp.parentLabel + this.context.checkerIndex;
		var capRoot = this.captureRoot();
		var indexRoot = "[\"" + exp.parentLabel + "\"]";
		if (exp.parentLabel.length == 0) {
			indexRoot = "";
			}
		rtn = ["\nvar ", this.expression.outputType, " ", cast, " = ", capRoot, indexRoot, ";\n"];
		var ref = this.code.match(new RegExp("[\\$]([A-Za-z_0-9]*)", 'g'));
		var casters = {};
		if (ref != null) {
			for (var i = 0; i < ref.length; i++) {
				var iRef = ref[i];
				var removed = iRef.substr(1,iRef.length - 1);
				var cLab = this.context.childLabels;
				if (removed in cLab) {
					var labelRef = cLab[removed];
					var oType = labelRef.outputType;
					casters[removed] = "var " + oType + " actionCap" + this.context.checkerIndex + removed + " = " + this.capturePlace() + "[\"" + removed + "\"];";
					}else{
						throw new Error("No variable " + removed + " found.");
					}
				}
			}
		var casterCode = "";
		for (var rem in casters) {
			casterCode += casters[rem];
			}
		var cCode = "";
		cCode = this.code.replace(new RegExp("[\\$]([A-Za-z_0-9]*)", 'g'), "actionCap" + this.context.checkerIndex + "$1");
		cCode = cCode.replace(new RegExp("[\\~]", 'g'), this.capturePlace());
		cCode = cCode.replace(new RegExp("export".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'), 'g'), "dataStore[\"data\"]");
		cCode = cCode.replace(new RegExp("[\\@](move)\\(\\)", 'g'), this.callMove());
		cCode = cCode.replace(new RegExp("[\\@](capture)\\(\\s*([^)]*)\\s*\\)", 'g'), this.captureData("$2"));
		cCode = cCode.replace(new RegExp("[\\@](error)\\(\\s*([0-9]*)\\s*,\\s*([^,]*)\\s*,\\s*([^)]*)\\s*\\)", 'g'), this.callError("$2", "\" + $3 + \"", "$4"));
		rtn.push(casterCode + cCode);
		return "if (true) {\n" + rtn.join("") + "}" + this.callParentCapture("");
	}
}

Carpeg.expressions.action.prototype.resetDatas = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'boolean' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var already = arguments[0];
		return this.expression.resetDatas(already);
		if (this.complexChild) {
			var root = this.expression.captureTo;
			var rtn = [];
			if (this.dynamicCapture) {

				}else{
					rtn.push(this.capturePlace() + " = new map();\n");
				}
			var create = "";
			if (already == false) {
				create = "var map ";
				}
			rtn.push(create + "captureRoot" + root + " = new map();\n" + this.expression.resetDatas(already));
			return rtn.join("");
			}else{
				return this.expression.resetDatas(already);
			}
	}
}

Carpeg.expressions.action.prototype.capture = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var cap = arguments[0];
		var thing = arguments[1];
		return "";
	}
}

Carpeg.expressions.action.prototype.copy = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.parentLabel = exp.parentLabel;
		this.directLabel = false;
		this.isLabeled = exp.isLabeled;
		this.doError = exp.doError;
		this.overError = exp.overError;
		this.doMove = exp.doMove;
		this.overMove = exp.overMove;
		this.captureTo = exp.captureTo;
		this.dynamicCapture = exp.dynamicCapture;
		for (var i = 0; i < exp.captures.length; i++) {
			this.captures.push(exp.captures[i]);
			}
		for (var j = 0; j < exp.initializers.length; j++) {
			this.initializers.push(exp.initializers[j]);
			}
	}
}

Carpeg.expressions.action.prototype.hasComplexChild = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.complexChild = true;
		this.thatComplexChild = exp;
		if (this.isComplex == false) {
			if (this.parentExpression !== null) {
				this.parentExpression.hasComplexChild(exp);
				}
			}
	}
}

Carpeg.expressions.action.prototype.updateChildren = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.action.prototype.overInitialize = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.action.prototype.updateLoose = function () {
	if (arguments.length == 0) {
		if (this.parentExpression !== null) {
			this.parentExpression.isLoose = this.isLoose;
			}
	}
}

Carpeg.expressions.action.prototype.capturePlace = function () {
	if (arguments.length == 0) {
		var rtn = this.captureRoot();
		if (this.isLabeled) {
			rtn += "[\"" + this.parentLabel + "\"]";
			}
		return rtn;
	}
}

Carpeg.expressions.action.prototype.captureRoot = function () {
	if (arguments.length == 0) {
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		return cap;
	}
}

Carpeg.expressions.action.prototype.callParentCapture = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var rtn = "";
		for (var i = this.captures.length - 1;i > 0 - 1;i--) {
			var capExp = this.captures[i];
			rtn += capExp.overCapture(this, data);
			}
		return rtn;
	}
}

Carpeg.expressions.action.prototype.captureData = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		var rtn = [];
		if (this.doOwnCapture) {
			rtn = [cap, "[\"", this.parentLabel, "\"] = ", data, ";"];
			}
		rtn.push(this.callParentCapture(data));
		return rtn.join("");
	}
}

Carpeg.expressions.action.prototype.callMove = function () {
	if (arguments.length == 0) {
		if (this.doMove) {
			return this.overMove.move(this);
			}else{
				return this.parentRule.moveNext(this.context.next);
			}
	}
}

Carpeg.expressions.action.prototype.callError = function () {
	if (arguments.length == 3 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var code = arguments[0];
		var expected = arguments[1];
		var found = arguments[2];
		if (this.doError) {
			return this.overError.error(this, code, expected, found);
			}else{
				return "this.giveError(" + code + ", \"" + expected + "\", " + found + ");";
			}
	}
}

Carpeg.expressions.action.prototype.resetAllCaptureData = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.action.prototype.error = function () {
	if (arguments.length == 4 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null) && (typeof arguments[3] == 'string' || typeof arguments[3] == 'undefined' || arguments[3] === null)) {
		var exp = arguments[0];
		var code = arguments[1];
		var err = arguments[2];
		var char = arguments[3];

	}
}

Carpeg.expressions.action.prototype.move = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];

	}
}

Carpeg.expressions.action.prototype.put = function () {
	if (arguments.length == 3 && ((arguments[0] instanceof Carpeg.context) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var ctx = arguments[0];
		var cap = arguments[1];
		var thing = arguments[2];

	}
}

Carpeg.expressions.action.prototype.apply = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var you = arguments[0];
		this.parentRule = you.parentRule;
		this.grammar = you.grammar;
		this.hasParentExpression = true;
		this.parentExpression = you;
	}
}

Carpeg.expressions.action.make = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var type = data["type"];
		var output = null;
		if (type == "sequence") {
			output = new Carpeg.expressions.sequence(data);
			output.expressionType = "sequence";
			}else if (type == "group") {
			output = new Carpeg.expressions.group(data);
			output.expressionType = "group";
			}else if (type == "choice") {
			output = new Carpeg.expressions.choice(data);
			output.expressionType = "choice";
			}else if (type == "optional") {
			output = new Carpeg.expressions.optional(data);
			output.expressionType = "optional";
			}else if (type == "simple_not") {
			output = new Carpeg.expressions.not(data);
			output.expressionType = "not";
			}else if (type == "literal") {
			output = new Carpeg.expressions.stringLiteral(data);
			output.expressionType = "literal";
			}else if (type == "rule_ref") {
			output = new Carpeg.expressions.ruleRef(data);
			output.expressionType = "ruleRef";
			}else if (type == "class") {
			output = new Carpeg.expressions.classCapture(data);
			output.expressionType = "class";
			}else if (type == "native") {
			output = new Carpeg.expressions.native(data);
			output.expressionType = "native";
			}else if (type == "any") {
			output = new Carpeg.expressions.any(data);
			output.expressionType = "any";
			}else if (type == "labeled") {
			output = new Carpeg.expressions.labeled(data);
			output.expressionType = "labeled";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "zero_or_more") {
			output = new Carpeg.expressions.list(data);
			output.expressionType = "zero_or_more";
			}else if (type == "zero_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.raw = true;
			output.expressionType = "zero_or_more";
			}else if (type == "one_or_more") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			output.expressionType = "one_or_more";
			}else if (type == "one_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			cast.raw = true;
			output.expressionType = "one_or_more";
			}
		return output;
	}
}

Carpeg.expressions.list = function () {
	this.expression = null;

	this.piped = false;

	this.pipeExpression = null;

	this.vested = true;

	this.raw = false;

	this.min = 0;

	this.captureTo = 0;

	this.realCaptureTo = 0;

	this.expressionType = "";

	this.isComplex = false;

	this.complexChild = false;

	this.thatComplexChild = null;

	this.dynamicCapture = false;

	this.captures = [];

	this.initializers = [];

	this.doOwnCapture = false;

	this.isLoose = false;

	this.parentLabel = "";

	this.directLabel = false;

	this.isLabeled = false;

	this.doMove = false;

	this.overMove = null;

	this.doError = false;

	this.overError = null;

	this.outputType = "";

	this.context = new Carpeg.context();

	this.parentRule = null;

	this.grammar = null;

	this.hasParentExpression = false;

	this.parentExpression = null;

	this.baked = {};

	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		this.baked = data;
	}

}

Carpeg.expressions.list.prototype.display = function () {
	if (arguments.length == 0) {
		return this.expression.display();
	}
}

Carpeg.expressions.list.prototype.generate = function () {
	if (arguments.length == 0) {
		return this.expression.generate();
	}
}

Carpeg.expressions.list.prototype.build = function () {
	if (arguments.length == 0) {
		var bakedData = this.baked;
		this.isLoose = true;
		this.updateLoose();
		if ("pipe" in bakedData) {
			this.piped = true;
			this.pipeExpression = Carpeg.expression.make(bakedData["pipe"]);
			this.pipeExpression.apply(this);
			this.pipeExpression.isLabeled = false;
			this.pipeExpression.build();
			}
		this.expression = Carpeg.expression.make(bakedData["expression"]);
		this.expression.apply(this);
		this.context.doMove = true;
		this.context.move = this;
		this.context.doOverError = true;
		this.context.error = this;
		this.context.put = this;
		this.context.doPut = true;
		this.expression.context = this.context;
		this.expression.copy(this);
		this.expression.dynamicCapture = true;
		this.expression.doError = true;
		this.expression.overError = this;
		this.expression.doMove = true;
		this.expression.overMove = this;
		this.expression.captures.push(this);
		this.expression.initializers.push(this);
		this.expression.build();
		if (this.expression.context.firstNonComplexChild !== null && this.expression.expressionType != "choice") {
			this.expression.context.firstNonComplexChild.doError = true;
			this.expression.context.firstNonComplexChild.overError = this;
			this.expression.context.firstNonComplexChild.updateChildren();
			}
		if (this.raw) {
			this.outputType = "string";
			}else{
				this.outputType = "<" + this.expression.outputType + ">array";
			}
	}
}

Carpeg.expressions.list.prototype.overCapture = function () {
	if (arguments.length == 2 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var exp = arguments[0];
		var data = arguments[1];
		if (this.complexChild) {
			data = "captureRoot" + this.thatComplexChild.realCaptureTo;
			}
		var rtn = [];
		if (this.isLabeled && this.directLabel) {
			var cast = "cast" + this.parentLabel + this.context.checkerIndex;
			if (this.raw) {
				rtn = [this.captureRoot(), "[\"", this.parentLabel, "\"] += ", data, ";\n"];
				}else{
					rtn = ["var <", this.expression.outputType, ">array ", cast, " = ", this.captureRoot(), "[\"", this.parentLabel, "\"];\n", cast, ".push(", data, ");\n"];
				}
			if (this.piped) {
				if (this.pipeExpression.expressionType == "literal") {
					var expCast = this.pipeExpression;
					var ctx = this.expression.context.next;
					if (this.parentRule.checkerIndex == 0) {
						ctx = 2;
						}
					rtn.push("if (input.charCodeAt(charPos + 1) != " + expCast.literal.charCodeAt(0) + ") {\n" + this.callParentCapture("") + this.parentRule.moveNext(ctx) + "continue;}else {charPos++;}");
					}
				}
			if (this.parentRule.checkerIndex > 0) {
				if (this.context.checkerIndex < this.parentRule.checkerIndex - 1) {
					rtn.push("if (charPos == input.length() - 1) {this.giveError(2, \"EOF\", currentChar);}\n");
					}
				}
			if (this.complexChild) {
				rtn.push(this.thatComplexChild.resetDatas(true));
				}
			}
		return rtn.join("");
	}
}

Carpeg.expressions.list.prototype.resetDatas = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'boolean' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var already = arguments[0];
		return this.capturePlace() + " = new " + this.outputType + "();\n" + this.expression.resetDatas(already);
	}
}

Carpeg.expressions.list.prototype.overInitialize = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		return "var <" + this.outputType + ">array = new <" + this.outputType + ">array();";
	}
}

Carpeg.expressions.list.prototype.error = function () {
	if (arguments.length == 4 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null) && (typeof arguments[3] == 'string' || typeof arguments[3] == 'undefined' || arguments[3] === null)) {
		var exp = arguments[0];
		var code = arguments[1];
		var err = arguments[2];
		var char = arguments[3];
		var ctx = this.expression.context.next;
		if (this.parentRule.checkerIndex == 0) {
			ctx = 2;
			}
		var move = this.callParentCapture("") + this.parentRule.moveNext(ctx) + " charPos--; this.offset--;";
		if (this.min > 0) {
			var cast = "cast" + this.parentLabel + this.context.checkerIndex;
			var castType = "<" + this.expression.outputType + ">array";
			if (this.raw) {
				castType = "string";
				}
			var val = "var " + castType + " " + cast + " = " + this.captureRoot() + "[\"" + this.parentLabel + "\"];\n";
			var rtn = [val, "if (", cast, ".length() >= ", this.min, ") {\n", move, "}else{\nthis.giveError(1, \"", this.expression.display(), "\", currentChar);}\n"];
			return rtn.join("");
			}else{
				return move;
			}
	}
}

Carpeg.expressions.list.prototype.move = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		var next = exp.context.next;
		if (this.expression.context.firstChild !== null) {
			next = this.expression.context.firstChild.context.checkerIndex;
			}else{
				if (next > this.parentRule.checkerIndex) {
					next = 0;
					}
			}
		return this.parentRule.moveNext(next);
	}
}

Carpeg.expressions.list.prototype.resetAllCaptureData = function () {
	if (arguments.length == 0) {
		return this.context.captureName() + " =  new <" + this.expression.outputType + ">array();";
	}
}

Carpeg.expressions.list.prototype.put = function () {
	if (arguments.length == 3 && ((arguments[0] instanceof Carpeg.context) || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var ctx = arguments[0];
		var cap = arguments[1];
		var thing = arguments[2];
		var rtn = [];
		var beg = this.context.firstChild.context.checkerIndex;
		var uniq = "cast" + ctx.label + ctx.checkerIndex;
		ctx.doPut = false;
		rtn = ["if (\"", this.context.label, "\" notIn ", this.context.captureRoot(), ") {\n", "	", this.context.captureRoot(), "[\"", this.context.label, "\"] = new <", this.expression.outputType, ">array();\n", "}\n", ctx.capture(thing), "\n", "var <", this.expression.outputType, ">array ", uniq, " = ", this.context.captureRoot(), "[\"", this.context.label, "\"];\n", uniq, ".push(object.clone(", ctx.captureRoot(), "));\n", this.parentRule.moveNext(beg), this.expression.resetAllCaptureData()];
		return rtn.join("");
	}
}

Carpeg.expressions.list.prototype.copy = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.parentLabel = exp.parentLabel;
		this.directLabel = false;
		this.isLabeled = exp.isLabeled;
		this.doError = exp.doError;
		this.overError = exp.overError;
		this.doMove = exp.doMove;
		this.overMove = exp.overMove;
		this.captureTo = exp.captureTo;
		this.dynamicCapture = exp.dynamicCapture;
		for (var i = 0; i < exp.captures.length; i++) {
			this.captures.push(exp.captures[i]);
			}
		for (var j = 0; j < exp.initializers.length; j++) {
			this.initializers.push(exp.initializers[j]);
			}
	}
}

Carpeg.expressions.list.prototype.hasComplexChild = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var exp = arguments[0];
		this.complexChild = true;
		this.thatComplexChild = exp;
		if (this.isComplex == false) {
			if (this.parentExpression !== null) {
				this.parentExpression.hasComplexChild(exp);
				}
			}
	}
}

Carpeg.expressions.list.prototype.updateChildren = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.expressions.list.prototype.updateLoose = function () {
	if (arguments.length == 0) {
		if (this.parentExpression !== null) {
			this.parentExpression.isLoose = this.isLoose;
			}
	}
}

Carpeg.expressions.list.prototype.capturePlace = function () {
	if (arguments.length == 0) {
		var rtn = this.captureRoot();
		if (this.isLabeled) {
			rtn += "[\"" + this.parentLabel + "\"]";
			}
		return rtn;
	}
}

Carpeg.expressions.list.prototype.captureRoot = function () {
	if (arguments.length == 0) {
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		return cap;
	}
}

Carpeg.expressions.list.prototype.callParentCapture = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var rtn = "";
		for (var i = this.captures.length - 1;i > 0 - 1;i--) {
			var capExp = this.captures[i];
			rtn += capExp.overCapture(this, data);
			}
		return rtn;
	}
}

Carpeg.expressions.list.prototype.captureData = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var cap = "data";
		if (this.captureTo > 0) {
			cap = "captureRoot" + this.captureTo;
			}
		var rtn = [];
		if (this.doOwnCapture) {
			rtn = [cap, "[\"", this.parentLabel, "\"] = ", data, ";"];
			}
		rtn.push(this.callParentCapture(data));
		return rtn.join("");
	}
}

Carpeg.expressions.list.prototype.callMove = function () {
	if (arguments.length == 0) {
		if (this.doMove) {
			return this.overMove.move(this);
			}else{
				return this.parentRule.moveNext(this.context.next);
			}
	}
}

Carpeg.expressions.list.prototype.callError = function () {
	if (arguments.length == 3 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'string' || typeof arguments[1] == 'undefined' || arguments[1] === null) && (typeof arguments[2] == 'string' || typeof arguments[2] == 'undefined' || arguments[2] === null)) {
		var code = arguments[0];
		var expected = arguments[1];
		var found = arguments[2];
		if (this.doError) {
			return this.overError.error(this, code, expected, found);
			}else{
				return "this.giveError(" + code + ", \"" + expected + "\", " + found + ");";
			}
	}
}

Carpeg.expressions.list.prototype.apply = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.expression || (arguments[0] instanceof Carpeg.expressions.stringLiteral) || (arguments[0] instanceof Carpeg.expressions.ruleRef) || (arguments[0] instanceof Carpeg.expressions.classCapture) || (arguments[0] instanceof Carpeg.expressions.native) || (arguments[0] instanceof Carpeg.expressions.any) || (arguments[0] instanceof Carpeg.expressions.sequence) || (arguments[0] instanceof Carpeg.expressions.choice) || (arguments[0] instanceof Carpeg.expressions.group) || (arguments[0] instanceof Carpeg.expressions.labeled) || (arguments[0] instanceof Carpeg.expressions.optional) || (arguments[0] instanceof Carpeg.expressions.not) || (arguments[0] instanceof Carpeg.expressions.action) || (arguments[0] instanceof Carpeg.expressions.list)) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var you = arguments[0];
		this.parentRule = you.parentRule;
		this.grammar = you.grammar;
		this.hasParentExpression = true;
		this.parentExpression = you;
	}
}

Carpeg.expressions.list.make = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		var type = data["type"];
		var output = null;
		if (type == "sequence") {
			output = new Carpeg.expressions.sequence(data);
			output.expressionType = "sequence";
			}else if (type == "group") {
			output = new Carpeg.expressions.group(data);
			output.expressionType = "group";
			}else if (type == "choice") {
			output = new Carpeg.expressions.choice(data);
			output.expressionType = "choice";
			}else if (type == "optional") {
			output = new Carpeg.expressions.optional(data);
			output.expressionType = "optional";
			}else if (type == "simple_not") {
			output = new Carpeg.expressions.not(data);
			output.expressionType = "not";
			}else if (type == "literal") {
			output = new Carpeg.expressions.stringLiteral(data);
			output.expressionType = "literal";
			}else if (type == "rule_ref") {
			output = new Carpeg.expressions.ruleRef(data);
			output.expressionType = "ruleRef";
			}else if (type == "class") {
			output = new Carpeg.expressions.classCapture(data);
			output.expressionType = "class";
			}else if (type == "native") {
			output = new Carpeg.expressions.native(data);
			output.expressionType = "native";
			}else if (type == "any") {
			output = new Carpeg.expressions.any(data);
			output.expressionType = "any";
			}else if (type == "labeled") {
			output = new Carpeg.expressions.labeled(data);
			output.expressionType = "labeled";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "action") {
			output = new Carpeg.expressions.action(data);
			output.expressionType = "action";
			}else if (type == "zero_or_more") {
			output = new Carpeg.expressions.list(data);
			output.expressionType = "zero_or_more";
			}else if (type == "zero_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.raw = true;
			output.expressionType = "zero_or_more";
			}else if (type == "one_or_more") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			output.expressionType = "one_or_more";
			}else if (type == "one_or_more_raw") {
			output = new Carpeg.expressions.list(data);
			var cast = output;
			cast.min = 1;
			cast.raw = true;
			output.expressionType = "one_or_more";
			}
		return output;
	}
}

//Relative nativeParser
Carpeg.parser = function () {


}

Carpeg.parser.parse = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var content = arguments[0];
		var out = CarpegNativeParser.parse(content);
		var rtn = out["data"]["parsed"];
		return rtn;
	}
}

Carpeg.import = function () {
	this.parameters = {};

	this.name = "";

	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		if ("parameters" in data) {
			this.parameters = data["parameters"];
			}
		if ("as" in data) {
			this.name = data["as"];
			}
	}

}

Carpeg.import.prototype.output = function () {
	if (arguments.length == 0) {

	}
}

Carpeg.import.make = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'object' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var name = arguments[0];
		var data = arguments[1];
		var rtn = null;
		if (name == "WhiteSpace") {
			rtn = new Carpeg.imports.WhiteSpace(data);
			}else if (name == "String") {
			rtn = new Carpeg.imports.String(data);
			}else if (name == "Json") {
			rtn = new Carpeg.imports.Json(data);
			}
		return rtn;
	}
}

Carpeg.imports.WhiteSpace = function () {
	this.parameters = {};

	this.name = "";

	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		if ("parameters" in data) {
			this.parameters = data["parameters"];
			}
		if ("as" in data) {
			this.name = data["as"];
			}
	}

}

Carpeg.imports.WhiteSpace.prototype.output = function () {
	if (arguments.length == 0) {
		return "string|_ 'White space(optional)' = [ \\t\\r\\n]**;string|__ 'White space' = w: [ \\t\\r\\n]++;";
	}
}

Carpeg.imports.WhiteSpace.make = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'object' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var name = arguments[0];
		var data = arguments[1];
		var rtn = null;
		if (name == "WhiteSpace") {
			rtn = new Carpeg.imports.WhiteSpace(data);
			}else if (name == "String") {
			rtn = new Carpeg.imports.String(data);
			}else if (name == "Json") {
			rtn = new Carpeg.imports.Json(data);
			}
		return rtn;
	}
}

Carpeg.imports.String = function () {
	this.parameters = {};

	this.name = "";

	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		if ("parameters" in data) {
			this.parameters = data["parameters"];
			}
		if ("as" in data) {
			this.name = data["as"];
			}
	}

}

Carpeg.imports.String.prototype.output = function () {
	if (arguments.length == 0) {
		return "string|String = str: (String_Double / String_Single) {string|export = $str;};\n\nstring|String_Double = '\"' str:\n<string{\nvar bool escaped = false;\nvar map escapeCodes = new map();\nescapeCodes[\"n\"] = \"\\n\";\nescapeCodes[\"b\"] = \"\\b\";\nescapeCodes[\"f\"] = \"\\f\";\nescapeCodes[\"r\"] = \"\\r\";\nescapeCodes[\"t\"] = \"\\t\";\nescapeCodes[\"v\"] = \"\\v\";\nescapeCodes[\"\\\\\"] = \"\\\\\";\n}|\n\nvar bool doCapture = true;\n\nif (currentChar == \"\\\\\") {if (escaped == false) {escaped = true; doCapture = false;}}\n\nif (currentChar == \"\\\"\") {\n  if (escaped == false) {\n    doCapture = false;\n    @error(1, \"\", \"\")\n  }\n  escaped = false;\n}else if (escaped and doCapture == true) {\n  doCapture = false;\n  @capture(escapeCodes[currentChar])\n  escaped = false;\n}\n\nif (doCapture) {\n  @capture(currentChar)\n}\n\n>** '\"' {string|export = $str;};\n\nstring|String_Single = \"'\" str: <string{\nvar bool escaped = false;\nvar map escapeCodes = new map();\nescapeCodes[\"n\"] = \"\\n\";\nescapeCodes[\"b\"] = \"\\b\";\nescapeCodes[\"f\"] = \"\\f\";\nescapeCodes[\"r\"] = \"\\r\";\nescapeCodes[\"t\"] = \"\\t\";\nescapeCodes[\"v\"] = \"\\v\";\nescapeCodes[\"\\\\\"] = \"\\\\\";\n}|\n\nvar bool doCapture = true;\n\nif (currentChar == \"\\\\\") {if (escaped == false) {escaped = true; doCapture = false;}}\n\nif (currentChar == \"'\") {\n  if (escaped == false) {\n    doCapture = false;\n    @error(1, \"\", \"\")\n  }\n  escaped = false;\n}else if (escaped and doCapture == true) {\n  doCapture = false;\n  @capture(escapeCodes[currentChar])\n  escaped = false;\n}\n\nif (doCapture) {\n  @capture(currentChar)\n}\n\n>** \"'\" {string|export = $str;};";
	}
}

Carpeg.imports.String.make = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'object' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var name = arguments[0];
		var data = arguments[1];
		var rtn = null;
		if (name == "WhiteSpace") {
			rtn = new Carpeg.imports.WhiteSpace(data);
			}else if (name == "String") {
			rtn = new Carpeg.imports.String(data);
			}else if (name == "Json") {
			rtn = new Carpeg.imports.Json(data);
			}
		return rtn;
	}
}

Carpeg.imports.Json = function () {
	this.parameters = {};

	this.name = "";

	if (arguments.length == 1 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var data = arguments[0];
		if ("parameters" in data) {
			this.parameters = data["parameters"];
			}
		if ("as" in data) {
			this.name = data["as"];
			}
	}

}

Carpeg.imports.Json.prototype.output = function () {
	if (arguments.length == 0) {
		return "map|Json = \"{\" _ keys: ( _ key: String _ \":\" _ val: Json_Value _)*|\",\" _ \"}\" {map|\nfor (var int i in $keys) {\n    var map k = $keys[i];\n    var string key = k[\"key\"];\n    export[key] = k[\"val\"];\n}};\n\nmap|Json_Array = \"[\" _ vals: Json_Value*|\",\" _ \"]\" {map|export = $vals;};\n\n<map>array|Json_EmptyArray = \"[\" _ \"]\" {<map>array|~ = new <map>array();};\n\nmap|Json_EmptyMap = \"{\" _ \"}\" {map|~ = new map();};\n\nint|Json_Value = _ exp: ((\"null\" {empty|~ = empty;}) / (\"true\" {bool|~ = true;}) / (\"false\" {bool|~ = false;}) / Json_EmptyArray / Json_EmptyMap / Json_Array / Json / String / Json_Number) _ {int|export = $exp;};\n\nint|Json_Number = nums: [0-9-.]++ {int|export = string.parseInt($nums);};";
	}
}

Carpeg.imports.Json.make = function () {
	if (arguments.length == 2 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null) && (typeof arguments[1] == 'object' || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var name = arguments[0];
		var data = arguments[1];
		var rtn = null;
		if (name == "WhiteSpace") {
			rtn = new Carpeg.imports.WhiteSpace(data);
			}else if (name == "String") {
			rtn = new Carpeg.imports.String(data);
			}else if (name == "Json") {
			rtn = new Carpeg.imports.Json(data);
			}
		return rtn;
	}
}

Carpeg.grammar = function () {
	this.source = "";

	this.baked = {};

	this.rules = [];

	this.imports = [];

	this.captures = [];

	this.parserClass = "CarpegParser";

	this.checkerIndex = 0;

	this.captureIndex = 0;

	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var input = arguments[0];
		this.source = input;
		this.baked = Carpeg.parser.parse(input);
		var baked = this.baked;
		var rules = baked["rules"];
		var imports = baked["imports"];
		for (var i = 0; i < imports.length; i++) {
			var importa = imports[i];
			this.imports.push(new Carpeg.import.make(importa["name"], importa));
			}
		for (var i = 0; i < this.imports.length; i++) {
			var importa = this.imports[i];
			var data = Carpeg.parser.parse(importa.output());
			for (var key in data["rules"]) {
				rules.push(data["rules"][key]);
				}
			}
		for (var i = 0; i < rules.length; i++) {
			var rule = rules[i];
			this.rules.push(new Carpeg.rule(rule, this));
			}
		for (var i = 0; i < this.rules.length; i++) {
			var rule = this.rules[i];
			rule.build();
			}
	}

}

Carpeg.grammar.prototype.generate = function () {
	if (arguments.length == 0) {
		var ruleOutput = [];
		var rules = this.rules;
		var startRule = null;
		var initializer = "";
		var ruleChecks = [];
		for (var i = 0; i < rules.length; i++) {
			var rule = rules[i];
			if (rule.name != "start") {
				ruleChecks.push("if (rule == \"" + rule.name + "\") {\n	output = parser." + rule.name + "(input, 0);\n	}");
				}
			if (rule.name == "start") {
				initializer = rule.expression.resetDatas(false);
				ruleOutput.push(rule.generate());
				startRule = rule;
				}
			}
		var outputType = this.getRuleOutput("start");
		var output = ["class ", this.parserClass, "Location {\n", "bound public int offset = 0;\n", "bound public int line = 1;\n", "bound public int column = 0;\n", "fixed public <", this.parserClass, "Location>function @construct(int offset, int line, int column) {\n", "this.offset = offset; this.line = line; this.column = column;\n", "}\n", "}\n\n", "class ", this.parserClass, "Error inherits ", this.parserClass, "Location {\n", "bound public int code = 0;\n", "bound public string found = 0;\n", "bound public string expected = 0;\n", "bound public int vested = 0;\n", "bound public <", this.parserClass, "Error>array path = new <", this.parserClass, "Error>array();\n", "bound public <", this.parserClass, "Error>function clone() {var ", this.parserClass, "Error clone = new ", this.parserClass, "Error(this.offset, this.line, this.column); clone.code = this.code; clone.found = this.found; clone.expected = this.expected; clone.vested = this.vested; for (var int i in this.path) {var ", this.parserClass, "Error current = this.path[i]; clone.path.push(current.clone());} return clone;}", "}\n\n", "class <class T>", this.parserClass, "Output {\n", "	fixed public <<T>", this.parserClass, "Output>function @construct(bool hadError, ", this.parserClass, "Error error, map data) {this.hadError = hadError; this.error = error; this.data = data;}\n", "	bound public ", this.parserClass, "Error error = empty;\n", "	bound public bool hadError = false;\n", "	bound public map data = new map();\n", "}\n", "class ", this.parserClass, " inherits ", this.parserClass, "Location {\n", "fixed public override <", this.parserClass, ">function @construct() {}\n", "fixed public <<", outputType, ">", this.parserClass, "Output>function parse(string input) {", "	var <", outputType, ">", this.parserClass, " parser = new <", outputType, ">", this.parserClass, "();\n", "	var ", outputType, " output = parser.start(input);\n", "	if (parser.hadError and (parser.error.found == string.fromCharCode(0001))) {\n", "		parser.error.found = \"End of input\";\n", "}\n", "	var <", outputType, ">", this.parserClass, "Output rtn = new <", outputType, ">", this.parserClass, "Output(parser.hadError, parser.error, parser.data[\"data\"]);\n", "	return rtn;\n", "}\n", "fixed public <<", outputType, ">", this.parserClass, "Output>function parse(string rule, string input) {", "	var <", outputType, ">", this.parserClass, " parser = new <", outputType, ">", this.parserClass, "();\n", "	input += string.fromCharCode(0001);\n", "	parser.currentInput = input;\n", "	parser.data[\"data\"] = new ", outputType, "();\n", "	var <", outputType, ">", this.parserClass, "Output output = null;\n", "	", ruleChecks.join("else"), "\n	if (parser.hadError and (parser.error.found == string.fromCharCode(0001))) {\n", "		parser.error.found = \"End of input\";\n", "	}\n", "	for (var int i = 0; i < parser.error.offset; i++) {\n", "		parser.error.column++;\n", "		if (i < parser.currentInput.length)", "		if (parser.currentInput[i] == \"\\n\") {parser.error.line++; parser.error.column = 0;}\n", "	}\n", "	var <", outputType, ">", this.parserClass, "Output rtn = new <", outputType, ">", this.parserClass, "Output(output.hadError, output.error, output.data);\n", "	return rtn;\n", "}\n", "bound public <", this.parserClass, "Error>array lastErrors = new <", this.parserClass, "Error>array();\n", "bound public bool hadError = false;\n", "bound public int parsedChars = 0;\n", "bound public string currentInput = new string();\n", "bound public map data = new map();\n", "bound public ", this.parserClass, "Error error = new ", this.parserClass, "Error(0, 0, 0);\n", "bound public <string>function assembleCodes(<int>array codes) {\n", "	var string rtn = new string();\n", "	for (var int i in codes) {\n", "		rtn += string.fromCharCode(codes[i]);\n", "	}\n", "	return rtn;", "}\n", "bound public <void>function giveError(int code, string expected, string found) {\n", "this.hadError = true;\n", "this.error.code = code;\n", "this.error.expected = expected;\n", "this.error.found = found;\n", "this.error.offset = this.offset;\n", "this.error.line = 1;\n", "this.error.column = 0;\n", "}\n\n", "bound public <void>function start(string input) {\n", "	this.currentInput = input;\n", "	input += string.fromCharCode(0001);", "	this.data[\"data\"] = new ", outputType, "();\n", "	var ", outputType, " data = this.data[\"data\"];\n", "	var int c = 0;\n", "	", initializer, "\n", "	", this.captures.join("\n"), "	", startRule.initializers.join(""), "	var int literalChar = 0;\n", "	for (var int charPos = 0; charPos < input.length(); charPos++) {\n", "		var string currentChar = input[charPos];\n", "		var int currentCode = input.charCodeAt(charPos);\n", "		if (c == 0 - 1) {if (currentChar != string.fromCharCode(0001)) {this.giveError(2, \"EOF\", currentChar);}}\n", "		if (currentCode == 10) {this.line++; this.column = 0;}\n", "		", ruleOutput.join("\n\n"), "		this.offset++; \n this.column++;\n", "		if (this.hadError) {break;}\n", "	}\n", "	for (var int i = 0; i < this.error.offset; i++) {\n", "		this.error.column++;\n", "		if (i < this.currentInput.length)", "		if (this.currentInput[i] == \"\\n\") {this.error.line++; this.error.column = 0;}\n", "	}\n", "	if (false and this.hadError == false) {\n", "		if (this.offset < input.length() - 1) {\n", "			this.giveError(2, \"EOF\", input[this.offset + 1]);", "		}\n", "	}\n", "}\n", this.doOtherRules(), "}"];
		return output.join("");
	}
}

Carpeg.grammar.prototype.doGenerateRule = function () {
	if (arguments.length == 1 && ((arguments[0] instanceof Carpeg.rule) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var rule = arguments[0];
		var endCode = "";
		if (rule.cap.length != 0) {
			var rtn = [];
			var cast = "castacend";
			var ref = rule.cap.match(new RegExp("[\\$]([A-Za-z_0-9]*)", 'g'));
			var casters = {};
			for (var i = 0; i < ref.length; i++) {
				var iRef = ref[i];
				var removed = iRef.substr(1,iRef.length - 1);
				var cLab = rule.expression.context.childLabels;
				if (removed in cLab) {
					var labelRef = cLab[removed];
					var oType = labelRef.outputType;
					casters[removed] = "var " + oType + " actionCapend" + removed + " = data[\"" + removed + "\"];";
					}else{
						throw new Error("No variable " + removed + " found.");
					}
				}
			var casterCode = "";
			for (var rem in casters) {
				casterCode += casters[rem];
				}
			var cCode = "";
			cCode = rule.cap.replace(new RegExp("[\\$]([A-Za-z_0-9]*)".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'), 'g'), "actionCapend$1");
			cCode = cCode.replace(new RegExp("export".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'), 'g'), "dataStore[\"data\"]");
			cCode = cCode.replace(new RegExp("[\\@](move)\\(\\)".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'), 'g'), rule.expression.callMove());
			cCode = cCode.replace(new RegExp("[\\@](error)\\(\\s*([0-9]*)\\s*,\\s*([^,]*)\\s*,\\s*([^)]*)\\s*\\)".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'), 'g'), rule.expression.callError("$2", "\" + $3 + \"", "$4"));
			rtn.push(casterCode + cCode);
			endCode = rtn.join("");
			}
		var rtn = [];
		rtn = ["bound public <<", rule.outputType, ">", this.parserClass, "Output>function ", rule.name, "(string input, int startPos) {var int oldVest = this.error.vested;\n", "	var map dataStore = new map();\ndataStore[\"data\"] = new ", rule.outputType, "();\ndataStore[\"temp\"] = new map();\n", "	var ", rule.outputType, " data = dataStore[\"temp\"];\n", "	var int c = 0;\n", "	", rule.expression.resetDatas(false), "\n", "	", this.captures.join("\n"), "	", rule.initializers.join(""), "	var int literalChar = 0;\n", "	for (var int charPos = startPos; charPos < input.length(); charPos++) {\n", "		var string currentChar = input[charPos];\n", "		var int currentCode = input.charCodeAt(charPos);\n", "		if (currentCode == 10) {this.line++; this.column = 0;}\n", "		", rule.generate(), "		this.offset++; this.column++;\n", "		if (c == 0 - 1) {", endCode, "this.offset = charPos; break;}\n", "		if (this.hadError) {break;}\n", "	}\n", "	var <", rule.outputType, ">", this.parserClass, "Output parseOutput = new <", rule.outputType, ">", this.parserClass, "Output(this.hadError, this.error.clone(), dataStore);\n", "	parseOutput.error.vested = this.error.vested - oldVest; this.error.vested = oldVest;", "	this.hadError = false;\n", "	return parseOutput;\n", "}\n"];
		return rtn.join("");
	}
}

Carpeg.grammar.prototype.doOtherRules = function () {
	if (arguments.length == 0) {
		var rtn = [];
		for (var i = 0; i < this.rules.length; i++) {
			var rule = this.rules[i];
			if (rule.name != "start") {
				rtn.push(this.doGenerateRule(rule));
				}
			}
		return rtn.join("");
	}
}

Carpeg.grammar.prototype.getRuleOutput = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var name = arguments[0];
		for (var i = 0; i < this.rules.length; i++) {
			var rule = this.rules[i];
			if (rule.name == name) {
				return rule.outputType;
				}
			}
		return "empty";
	}
}

Carpeg.grammar.prototype.getRule = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var name = arguments[0];
		for (var i = 0; i < this.rules.length; i++) {
			var rule = this.rules[i];
			if (rule.name == name) {
				return rule;
				}
			}
	}
}

Carpeg.rule = function () {
	this.expression = null;

	this.parent = null;

	this.initialized = false;

	this.name = "";

	this.label = "";

	this.labeled = false;

	this.cap = "";

	this.outputType = "";

	this.checkerIndex = 0;

	this.captureIndex = 0;

	this.initializers = [];

	if (arguments.length == 2 && (typeof arguments[0] == 'object' || typeof arguments[0] == 'undefined' || arguments[0] === null) && ((arguments[1] instanceof Carpeg.grammar) || typeof arguments[1] == 'undefined' || arguments[1] === null)) {
		var data = arguments[0];
		var parent = arguments[1];
		this.outputType = data["output"];
		this.name = data["name"];
		if ("cap" in data) {
			this.cap = data["cap"]["code"];
			}
		if ("label" in data) {
			this.label = data["label"];
			this.labeled = true;
			}
		this.expression = Carpeg.expression.make(data["expression"]);
		this.parent = parent;
		this.expression.context = new Carpeg.context();
		this.expression.grammar = this.parent;
		this.expression.hasParentExpression = false;
		this.expression.parentRule = this;
	}

}

Carpeg.rule.prototype.moveNext = function () {
	if (arguments.length == 1 && (typeof arguments[0] == 'number' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var next = arguments[0];
		if (next > this.checkerIndex) {
			return "c = 0 - 1;";
			}else{
				return "c = " + next + ";";
			}
	}
}

Carpeg.rule.prototype.display = function () {
	if (arguments.length == 0) {
		if (this.labeled) {
			return this.label;
			}
		return this.name;
	}
}

Carpeg.rule.prototype.generate = function () {
	if (arguments.length == 0) {
		var rtn = [this.expression.generate()];
		return rtn.join("\n");
	}
}

Carpeg.rule.prototype.build = function () {
	if (arguments.length == 0) {
		this.initialized = true;
		this.expression.build();
	}
}