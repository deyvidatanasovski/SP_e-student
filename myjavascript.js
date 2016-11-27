document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("check").addEventListener("click", checkTemperature);
	
});

var t = "";
var izpitniRoki=[["1. letnik","Programiranje","John Snow","2017-21-01"],["1. letnik","Matematika","Davy Jones","24.01.2017"],["1. letnik","Fizika","Elizabeth Warren","28-01-2017"],["1. letnik","Digitalna Vezja","Ivan Maher","31-01-2017"]]
for (var i = 0; i < izpitniRoki.length; i++){
      var tr = "<tr>";
      tr += "<td>"+izpitniRoki[i][0]+"</td>";
      tr += "<td>"+izpitniRoki[i][1]+"</td>";
      tr += "<td>"+izpitniRoki[i][2]+"</td>";
      tr += "<td>"+izpitniRoki[i][3]+"</td>";
	  tr += "<td><button disabled class=\"tooltip\">Prijava<span class=\"tooltiptext\">Trenutno ne izpolnujete pogojev za prijavo</span></button></td>"
      tr += "</tr>";
      t += tr;
}
document.getElementById("izpitniRoki").innerHTML += t;
