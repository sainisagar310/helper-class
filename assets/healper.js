

// Margin & Padding

var string = '';
var array = [];
array.push({name:'padding', shortName:'p'});
array.push({name:'padding-top', shortName:'pt'});
array.push({name:'padding-right', shortName:'pr'});
array.push({name:'padding-bottom', shortName:'pb'});
array.push({name:'padding-left', shortName:'pl'});

array.push({name:'margin', shortName:'m'});
array.push({name:'margin-top', shortName:'mt'});
array.push({name:'margin-right', shortName:'mr'});
array.push({name:'margin-bottom', shortName:'mb'});
array.push({name:'margin-left', shortName:'ml'});

var string = '';
for (k in array) {
	var name = array[k].name;
	var shortName = array[k].shortName;
	for (var i = 0; i < 51; i++){
		if((i%5) == 0) {
			string += '.'+shortName+i+'{'+name+':'+i+'px;';

			// Extra Large
			string += '&-xlg {@include media("screen", "xlg") {'+name+':'+i+'px}}';

			// Large
			string += '&-lg {@include media("screen", "lg") {'+name+':'+i+'px;}}';
			string += '&-lt-lg {@include media("screen", "<lg") {'+name+':'+i+'px;}}';
			string += '&-gt-lg {@include media("screen", ">lg") {'+name+':'+i+'px;}}';

			// Medium
			string += '&-md {@include media("screen", "md") {'+name+':'+i+'px;}}';
			string += '&-lt-md {@include media("screen", "<md") {'+name+':'+i+'px;}}';
			string += '&-gt-md {@include media("screen", ">md") {'+name+':'+i+'px;}}';

			// Small

			string += '&-sm {@include media("screen", "sm") { '+name+':'+i+'px;}}';
			string += '&-lt-sm{@include media("screen", "<sm"){'+name+':'+i+'px;}}';
			string += '&-gt-sm{@include media("screen", ">sm") {'+name+':'+i+'px;}}';

			// Extra Small
			string += '&-xs {@include media("screen", "<xs") {'+name+':'+i+'px;}}';
			string += '&-gt-xs{@include media("screen", ">xs"){'+name+':'+i+'px;}}';

			string += '}';
		 }
	}
}


// Fonts
var string = '';
var name = 'font-size';
var shortName = 'fs';
for (var i = 10; i < 31; i++) {

    string += '.'+shortName+i+'{'+name+':'+i+'px;';

    // Extra Large
    string += '&-xlg {@include media("screen", "xlg") {'+name+':'+i+'px}}';

    // Large
    string += '&-lg {@include media("screen", "lg") {'+name+':'+i+'px;}}';
    string += '&-lt-lg {@include media("screen", "<lg") {'+name+':'+i+'px;}}';
    string += '&-gt-lg {@include media("screen", ">lg") {'+name+':'+i+'px;}}';

    // Medium
    string += '&-md {@include media("screen", "md") {'+name+':'+i+'px;}}';
    string += '&-lt-md {@include media("screen", "<md") {'+name+':'+i+'px;}}';
    string += '&-gt-md {@include media("screen", ">md") {'+name+':'+i+'px;}}';

    // Small

    string += '&-sm {@include media("screen", "sm") { '+name+':'+i+'px;}}';
    string += '&-lt-sm{@include media("screen", "<sm"){'+name+':'+i+'px;}}';
    string += '&-gt-sm{@include media("screen", ">sm") {'+name+':'+i+'px;}}';

    // Extra Small
    string += '&-xs {@include media("screen", "<xs") {'+name+':'+i+'px;}}';
    string += '&-gt-xs{@include media("screen", ">xs"){'+name+':'+i+'px;}}';

    string += '}';

}
