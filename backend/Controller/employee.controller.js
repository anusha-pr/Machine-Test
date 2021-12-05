


const employeeDao = require('../Dao/employee.dao');
var employeeController = {
    addEmployee: addEmployee,
    findEmployees: findEmployees,
    findEmployeeById: findEmployeeById,
    updateEmployee: updateEmployee,
    deleteById: deleteById
}
//it uses promise in a different way 
//promise
 //.then
  //error

function addEmployee(req, res) { //function to create data
    let employee = req.body;   //acessing the data from the body of postman  
    employeeDao.create(employee). //calling the create function defined in dao and passing the data
        then((data) => {   
            res.send(data); //if true then send the data
        })
        .catch((error) => {   
            console.log(error); //else show the error
        });
}

function findEmployeeById(req, res) {     
    employeeDao.findById(req.params.id).  //call the function from dao
                                    //obtain the datafrom the url where req.params.id ie gigs/1
    then((data) => {
            res.send(data);    //if true send data
        })
        .catch((error) => {
            console.log(error);  //else show the error
        });
}

function deleteById(req, res) {
    employeeDao.deleteById(req.params.id). 
        then((data) => {
            res.status(200).json({
                message: "Employee deleted successfully",
                employee: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateEmployee(req, res) {
    employeeDao.updateEmployee(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: " Employee updated successfully",
                employee: data           //no.of data updated
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findEmployees(req, res) {
    employeeDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = employeeController;