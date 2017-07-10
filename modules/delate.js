define(function(require,exports,module){
	var Cdelete=function(){
		var inp1Val=document.querySelector("#inp1").value;
		var inp2Val=document.querySelector("#inp2").value;
		var p3=document.querySelector("#p3");
		var newVal=(inp1Val-0)-(inp2Val-0);
		return newVal;
	}
	module.exports.add=Cdelete;
})