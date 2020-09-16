package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.entity.AuthanticationRequest;
import com.example.entity.AuthanticationResponse;
import com.example.service.MyUserDetailsService;
import com.example.springsecurity.JwtUtil;

@Controller
public class LoginController {
	
	@Autowired
	private AuthenticationManager aunthanticationManager;
	
	@Autowired
	private MyUserDetailsService myUserDetailsService;
	
	@Autowired
	private JwtUtil jwtTokenUtil; 
	
	@RequestMapping( "/hello" )
	public String hello()
	{
		return "hello world";
	}
	
	@RequestMapping(value = "/authanticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthanticationToken(@RequestBody AuthanticationRequest authenticationRequest) throws Exception
	{
		try {
			aunthanticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
				);
	}
		catch(BadCredentialsException e)
		{
			throw new Exception("incorrect UserNAme or Password", e);
		}
		
		
		final UserDetails userDetails =  myUserDetailsService.loadUserByUsername(authenticationRequest.getUsername());
		
		final String jwt = jwtTokenUtil.generateToken(userDetails);
		
		return ResponseEntity.ok(new AuthanticationResponse(jwt));
		
	}
}