package com.example.assignment.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.assignment.entity.Manager;

public interface ManagerRepository extends JpaRepository<Manager, Integer>{

	

}
