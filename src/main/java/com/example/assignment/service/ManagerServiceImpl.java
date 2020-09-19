package com.example.assignment.service;

import org.jvnet.hk2.annotations.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.assignment.dao.ManagerRepository;
import com.example.assignment.entity.Manager;

@Service
@Component
public class ManagerServiceImpl implements ManagerServiceIntf{
		
	@Autowired
	 private ManagerRepository managerRepository;

	@Override
	public Manager saveManager(Manager manager) {
		Manager managerObj=new Manager();
		managerObj.setManager_id(manager.getManager_id());
		managerObj.setFirst_name(manager.getFirst_name());
		managerObj.setLast_name(manager.getLast_name());
		managerObj.setAddress(manager.getAddress());
		managerObj.setDob(manager.getDob());
		managerObj.setPassword(manager.getPassword());
		managerObj.setCompany(manager.getCompany());
		managerObj.setEmail(manager.getEmail());
		managerObj.setRole(manager.getRole());
		return managerRepository.save(manager);
	}
	
	/*public Manager updateManager(Manager manager)
	{
		Manager man=new Manager();
		man.setFirst_name(manager.getFirst_name());
		man.setLast_name(manager.getLast_name());
		man.setAddress(manager.getAddress());
		man.setDob(manager.getDob());
		man.setPassword(manager.getPassword());
		return managerRepository.save(manager);
		
	}*/
	
}
