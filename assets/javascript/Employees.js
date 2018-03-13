
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCPxBM0kSQfliAwP0c4BNwxSg_ehSb-5hU",
    authDomain: "employee-data-427c2.firebaseapp.com",
    databaseURL: "https://employee-data-427c2.firebaseio.com",
    projectId: "employee-data-427c2",
    storageBucket: "employee-data-427c2.appspot.com",
    messagingSenderId: "984247981715"
  };
  firebase.initializeApp(config);
// Initialize Firebase

var database = firebase.database();
var dbRef = database.ref('Employees/');
var employees;
// Initialize Global Variables
dbRef.on('child_added', function(childSnapshot){
  var snap = childSnapshot.val();
  var date = snap.StartDate;
  date = date.replace("-","/");
  date = date.replace("-","/");
  var dateUnix = moment(convertedDate).format("X");
  var dateFormat = "YYYY/MM/DD";
  var convertedDate = moment(date, dateFormat);
  var monthsWorked = moment(convertedDate).diff(moment(), "months") * -1;
  var monthlyRate = parseInt(snap.MonthlyRate);
  console.log(convertedDate._i);
  console.log(dateUnix);
  console.log(moment(convertedDate).toNow());
  console.log(monthsWorked);
  console.log(monthlyRate);
  var totalBilled = monthsWorked * monthlyRate; 
  console.log(totalBilled);


 
  var row = $("<tr>").attr({
   class : "info-row"
 });
 var nameCell = $("<td>").attr({
   class : "info-cell"
 });
 var roleCell = $("<td>").attr({
   class : "info-cell"
 });
 var startCell = $("<td>").attr({
   class: "info-cell"
 });
 var monthsCell = $("<td>").attr({
   class: "info-cell"
 });
 var rateCell = $("<td>").attr({
   class: "info-cell"
 });
 var billedCell = $("<td>").attr({
   class: "info-cell"
 });
 $(nameCell).text(snap.Name);
  $(roleCell).text(snap.Role);
  $(startCell).text(date);
  $(monthsCell).text(monthsWorked);
  $(rateCell).text(snap.MonthlyRate);
$(billedCell).text(totalBilled);
  $(row).append(nameCell, roleCell, startCell, monthsCell, rateCell, billedCell);
  $("#table-body").append(row);

  });
  

var employee, role, startDate, monthlyRate;

$("#submit-button").on('click', function(e){
    employee = $("#employee-name").val().trim();
    role = $("#role").val().trim();
    startDate = $("#start-date").val().trim();
    monthlyRate = $("#monthly-rate").val().trim();
    
  alert(employee);

    database.ref('Employees/').push({
      Name: employee,
      Role : role,
      StartDate : startDate,
      MonthlyRate : monthlyRate
    });
});