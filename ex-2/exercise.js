function getAttributes() {
    var a = document.getElementById("pwcdr").href;
    window.alert(`The value of the href attribute of the link is : ${a}`);
    var b = document.getElementById("pwcdr").hreflang;   
    window.alert(`The value of the hreflang attribute of the link is : ${b}`);
    var c = document.getElementById("pwcdr").rel; 
    window.alert(`The value of the rel attribute of the link is : ${c}`);
    var d = document.getElementById("pwcdr").target; 
    window.alert(`The value of the taget attribute of the link is : ${d}`);
    var e = document.getElementById("pwcdr").type; 
    window.alert(`The value of the type attribute of the link is : ${e}`); 
}
