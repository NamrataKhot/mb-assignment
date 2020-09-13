package com.example.assignment.service;

import java.util.List;

import com.example.assignment.entity.Employee;

public interface EmployeeServiceIntf {
	
	public Employee saveEmployee(Employee employee);
	//public Employee updateByName(String firstName, Employee employee);
	
	public Employee updateEmployee(int empId, Employee employee);
	public List<Employee> getEmployees();
}
