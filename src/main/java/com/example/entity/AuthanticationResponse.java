package com.example.entity;

public class AuthanticationResponse {
	private final String jwt;

	public String getJwt() {
		return jwt;
	}

	public AuthanticationResponse(String jwt) {
		super();
		this.jwt = jwt;
	}
	

}
