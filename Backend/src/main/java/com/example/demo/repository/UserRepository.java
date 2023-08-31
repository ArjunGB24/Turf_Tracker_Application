package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	
	public User findByEmailAndPassword(String email,String password);
	public User findByEmail(String email);
	public List<User> findByRoleId(int roleId);
	//public List<User>findByOwnerid(int ownerid);
	public User findByUserid(int userId);
	

}
