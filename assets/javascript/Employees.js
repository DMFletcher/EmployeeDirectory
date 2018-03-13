
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
var dbRef = database.ref();
var employees;
// Initialize Global Variables
dbRef.on('child_added', function(snapshot){
  var employeesNum = Object.keys(snapshot.val().Employees).length;
  if (employeeNum !== 0){
    for (var i = 0; i <employeesNum; i++){
      
    }
  }
});

var employee, role, startDate, monthlyRate;
alert("hi");
$("#submit-button").on('click', function(e){
    employee = $("#employee-name").val().trim();
    role = $("#role").val().trim();
    startDate = $("#start-date").val().trim();
    monthlyRate = $("#monthly-rate").val().trim();
    
  alert();

    database.ref('Employees/').push({
      Name: employee,
      Role : role,
      StartDate : startDate,
      MonthlyRate : monthlyRate
    });
});