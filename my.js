console.log(456);
function func(){
	return function(){
		return "Hello World";
	}
}
var a = func()();
console.log(a);