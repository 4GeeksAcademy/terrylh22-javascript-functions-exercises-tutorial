let dollarToEuro = function(dollarValue) {
	return dollarValue * 0.89;
}
let euroToYen = function(euroValue) {
	return euroValue * 124.15;
}
///***** YOUR CODE BELOW ↓ ******///
let euro = dollarToEuro(137); //this gives us euro
let yen = euroToYen(euro); //this plugs euro in, and gives us yen

console.log(yen);
