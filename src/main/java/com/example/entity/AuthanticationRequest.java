package com.example.entity;

public class AuthanticationRequest {
	private String username;
	private String password;
	
	public AuthanticationRequest(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	public AuthanticationRequest() {
		super();
	}
	
		public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
