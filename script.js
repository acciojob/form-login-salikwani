function getFormvalue() {
    //Write your code here
	var fname = document.querySelector("#form1 > input:nth:child(1)").value;
	var lname = document.querySelector("#form1 > input:nth:child(2)").value;
	alert(fname+" "+lname);
}
