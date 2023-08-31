package com.example.demo.service;

import java.util.List;
import java.util.Properties;

import javax.mail.PasswordAuthentication;
import javax.mail.Session;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import javax.mail.Authenticator;
import javax.mail.Message;
//import javax.mail.PasswordAuthentication;
//import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

@org.springframework.stereotype.Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepo;
	
	//registration
	@Override
	public void addUser(User user) {
		// TODO Auto-generated method stub
		
		userRepo.save(user);
		
	}

	
	//get all users
	@Override
	public List<User> getUser() {
		// TODO Auto-generated method stub
		return userRepo.findAll();
	}

	
	//for user login
	@Override
	public User findUser(User user) {
		
		return userRepo.findByEmailAndPassword(user.getEmail(), user.getPassword());
	}

	
	//send email to user
	@Override
	public User findEmail(User user) {
		// TODO Auto-generated method stub
		return userRepo.findByEmail(user.getEmail());
	}
	
	
	//find user on basis of role
	@Override
	public List<User> findByRoleId(User user) {
		
		return userRepo.findByRoleId(user.getRoleId());
	}

	
	// update user block unblock him
	@Override
	public void updateUser(User user) {
		// TODO Auto-generated method stub
		
		userRepo.save(user);
		
	}

	
	//find user on basis on role
	@Override
	public User findByUserId(int userId) {
		// TODO Auto-generated method stub
		return userRepo.findByUserid(userId);
	}


	
	//Email Implementation
	@Override
	public boolean sendEmail(String subject, String message, String to)
	{
		boolean bool=false;
		String from="Roshani@gmail.com";
		String host="smtp.gmail.com";
		
		//get system property
		Properties properties=System.getProperties();
		System.out.println("PROPERTIES "+properties);
		
		//host set
		
		properties.put("mail.smtp.host",host);
		properties.put("mail.smtp.port","465");
		properties.put("mail.smtp.ssl.enable","true");
		properties.put("mail.smtp.auth","true");
		
		//step1: to get the session object
		
		Session session=Session.getInstance(properties,new Authenticator() {
			@Override
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("Roshani@gmail.com","Pass@123");
			}}
			);
		
		session.setDebug(true);
		
		MimeMessage m=new MimeMessage(session);
		
		try {
			
			m.setFrom(from);
			
			m.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
			
			m.setSubject(subject);
			
			//adding text
			m.setText(message);
			
			//step3 send the message 
			Transport.send(m);
			System.out.println("sent success......");
			bool=true;
			
			
		}catch(Exception e) 
		{
			e.printStackTrace();
		}
		
		return bool;
	}
}
