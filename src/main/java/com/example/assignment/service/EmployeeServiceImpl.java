package com.example.assignment.service;

import java.util.List;
import java.util.Optional;

import org.jvnet.hk2.annotations.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.assignment.dao.EmployeeRepository;
import com.example.assignment.entity.Employee;


@Service
@Component
public class EmployeeServiceImpl implements EmployeeServiceIntf {
	
	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public Employee saveEmployee(Employee employee) {
		Employee emp=new Employee();
		emp.setEmpId(employee.getEmpId());
		emp.setFirstName(employee.getFirstName());
		emp.setLastName(employee.getLastName());
		emp.setAddress(employee.getAddress());
		emp.setDob(employee.getDob());
		emp.setMobile(employee.getMobile());
		return employeeRepository.save(employee);
			
	}

		
	public void deleteById(int empId)throws Exception
	{
		Optional <Employee> emp=employeeRepository.findById(empId);
		if(emp.isPresent())
		{
			employeeRepository.deleteById(empId);
		}
		else
		{
			throw new Exception("user not found");
		}
	}

	@Override
	public Employee updateEmployee(int empId,Employee employee) {
		Employee emp=employeeRepository.findById(empId).get();
		emp.setFirstName(employee.getFirstName());
		emp.setLastName(employee.getLastName());
		emp.setAddress(employee.getAddress());
		emp.setDob(employee.getDob());
		emp.setMobile(employee.getMobile());
		emp.setCity(employee.getCity());
		return employeeRepository.save(emp);
	}
	
	public List<Employee> getEmployees()
	{
		return employeeRepository.sortEmployee();
	}
	
	
}


