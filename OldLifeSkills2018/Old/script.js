var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res) {
  if(req.method === "GET"){
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("./getData.html", "UTF-8").pipe(res);
  }else if(req.method==="POST"){
    var body ="";

  }
})





var jsonContent =
function authenticate(form){
  for(var i = 0; i < userList.length; i++){
  if(form.userid.value.toLowerCase() == userList[i].username && form.password.value == userList[i].password){
    if(userList[i].client == "admin"){
    alert("admin granted");

  }else if( userList[i].client == "student"){
    alert("student granted");
  }


window.open(userList[i].client+".html");


  //location.href = "admin.html";
    return;
  }
  }
  alert("denied");


}

function addStudent(form){
  var student1 = {username: form.userid.value, password:form.password.value, client:"student"};
  userList.push(student1);
  alert(userList.length);
  return;
}
