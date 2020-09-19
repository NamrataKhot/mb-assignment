package com.example.assignment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.assignment.entity.Manager;
import com.example.assignment.service.ManagerServiceImpl;

@RestController
@RequestMapping("api/manager")
public class ManagerController {
	
	@Autowired
	private ManagerServiceImpl managerServiceImpl;
	
	@PostMapping("/save")
	public Manager saveManager(@RequestBody Manager manager) 
	{
		return managerServiceImpl.saveManager(manager);
		
	}

}
