package com.example.assignment.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.assignment.entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

	@Query("From Employee as emp where emp.firstName=:firstName")
	public Employee findByName(@Param(value= "firstName")String firstName);
	
	@Query("from Employee as e order by e.firstName asc, e.lastName asc")
	public List<Employee> sortEmployee();
	
}


