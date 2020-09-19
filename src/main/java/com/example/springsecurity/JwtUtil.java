package com.example.springsecurity;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtUtil {
	private String SECRET_KEY="sercret";
	
	public String extractUsername(String token)
	{
		return extractClaim(token,Claims::getSubject);
	}

	private String extractClaim(String token) {
		return extractClaim(token, Claims::getSubject);	
	}

	public <T> T extractClaim(String token, Function<Claims, T> claimsResolver)
	{
		final Claims claims = extractAllClaims(token);
		return claimsResolver.apply(claims);
	}

	private Claims extractAllClaims(String token) {
		
		return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
	}
	
	private Boolean isTokenExpired(String token)
	{
		return ExtractorException(token).before(new Date());
	}
	
	private Date ExtractorException(String token) {
		// TODO Auto-generated method stub
		return null;
	}

	public String generateToken(UserDetails userDetails)
	{
		Map<String, Object> claims = new HashMap<>();
		return createToken(claims, userDetails.getUsername());
	}
	private String createToken(Map<String, Object> claims, String subject)
	{
		return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis())).setExpiration(new Date(System.currentTimeMillis() + 1000 + 60 + 60 + 10)).signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
				
	}
	
	public Boolean validateToken(String token, MyUserDeatilsService userDetailsService)
	{
		final String username=extractUsername(token);
		return(username.equals(userDetailsService.getUsername()) && !isTokenExpired(token));
	}
	
}
