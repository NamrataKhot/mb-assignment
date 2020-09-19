package com.example.assignment.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
@Table
public class Employee {
	@Id 
	@GeneratedValue (strategy = GenerationType.AUTO)
	@Column(name = "empId")
	private int empId;
	
	@Column(name = "firstName")
	private String firstName;
	
	@Column(name = "lastName")
	private String lastName;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "dob")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date dob;
	
	@Column(name = "mobile")
	private String mobile;
	
	@Column(name = "city")
	private String city;
	
	public Employee(int empId, String firstName, String lastName, String address, Date dob, String mobile,
			String city) {
		super();
		this.empId = empId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.dob = dob;
		this.mobile = mobile;
		this.city = city;
	}

	public Employee() {
		super();
		this.empId = empId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.dob = dob;
		this.mobile = mobile;
		this.city = city;
	}

	public int getEmpId() {
		return empId;
	}
	
	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

}
