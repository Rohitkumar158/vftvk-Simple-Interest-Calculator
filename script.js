function compute()
{
        var principal = document.getElementById("principal").value;
        var v=true;
        if(principal<=0){
            alert("Enter a positive number");
            document.getElementByld("principal").focus();
            v=false;
        }
            var rate = document.getElementById("rate").value;
            var years = document.getElementById("years").value;
            var interest = principal * years * rate /100;
            var year = new Date().getFullYear()+parseInt(years);
            var L =
		            "If you deposit " +
		            principal +
		            ",\nat an interest rate of " +
		            rate +
		            "%\nYou will receive an amount of " +
		            interest +
		            ",\nin the year " +
		            year +
		            "";
	        if (v) {
		            document.getElementById("result").innerText = L;
	        }

}
function updateRate() 
{
    var rate_val = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rate_val;
}
          
