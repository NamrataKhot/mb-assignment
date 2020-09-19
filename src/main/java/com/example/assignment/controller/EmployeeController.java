package com.example.assignment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.assignment.entity.Employee;
import com.example.assignment.service.EmployeeServiceImpl;

@RestController
@RequestMapping("api/employee")
public class EmployeeController {
	@Autowired
	private EmployeeServiceImpl employeeServiceImpl;
	
	@PostMapping("/save")
	public Employee savEmployee(@RequestBody Employee employee)
	{
		return employeeServiceImpl.saveEmployee(employee);
		
	}
	
	@PostMapping("/update/{empId}")
	public Employee updateEmployee(@PathVariable int empId,@RequestBody Employee employee)
	{		
		return employeeServiceImpl.updateEmployee(empId, employee);
		
	}
	
	@GetMapping("/employees")
	public List<Employee> getEmployees(){
		return employeeServiceImpl.getEmployees();
		
	}
	
	@DeleteMapping("/delete/{empId}")
	public void deleteById(@PathVariable int empId)throws Exception
	{
		 employeeServiceImpl.deleteById(empId);
	}
}
