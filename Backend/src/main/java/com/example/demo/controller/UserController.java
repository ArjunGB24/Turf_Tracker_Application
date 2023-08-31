package com.example.demo.controller;

import java.util.List;
import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin
public class UserController {

	Random random = new Random(10000);
	@Autowired
	private UserService userService;

	@PostMapping("/registerUser")
	private String registerUser(@RequestBody User user) {

		userService.addUser(user);
		System.out.println("user Added");
		
		return "added successfully";

	}

	@GetMapping("/getUser")
	public List<User> getUser() {
		return userService.getUser();
	}

	
	 @PostMapping("/login") 
	 public User findUser(@RequestBody User user) {
	  
	  User userObj=userService.findUser(user);
	  return userObj;
	    
	  }
	 
	 @PostMapping("/checkEmail") 
	 public User findEmail(@RequestBody User user) {
	  
	  User userObj=userService.findEmail(user);
	  return userObj;
	    
	  }
	 
	 
	 @PostMapping("/getUserByRoleId")
	 public List<User> getUserByRoleId(@RequestBody User user) {
		 
		 return userService.findByRoleId(user);
	 }
	 
	 @PostMapping("/updateUser")
	 public String updateUser(@RequestBody User user)
	 {
	 System.out.print("fun call");
	  userService.updateUser(user) ;
	  
	  
	  
		User tr = this.userService.findEmail(user);
		if (tr != null) {
			int otp = random.nextInt(999999);
		
			String subject = "Message from letsplay";
			String message="" ;
			if(user.getStatus().equals("InActive")) {
			 message = "Because of some irrelevant activity from you admin temporarily block your"
					+ " account for any queries contact admin admin@letsplay.com";
			}else {
				message = "admin unblock  your"
						+ " account now you can access your account you email is :"+tr.getEmail()+" for any queries contact admin admin@sprtlocfare.com";
			}
			String to = tr.getEmail();
//			otp1.setOtp(otp);

			boolean flag = this.userService.sendEmail(subject, message, to);

			if (flag == true) {
				
//				otp1.setStatus("success");
				return "success";
			} else {

			
				
				return "Something went wrong";
			}
		} else {

			System.out.println("not successful");
			return "Your email is not found";
		}
	

	  //return "Updated successfully";
	 }

	 @PostMapping("/getUserByEmail")
	 public User getUserById(@RequestBody User user ) {
		 User userObj = userService.findEmail(user);
		 return userObj;
	 }

	 @PostMapping("/findUserById")
	 public User getUserByUserId(@RequestBody User user) {
		 
		 return userService.findByUserId(user.getUser_id());
	 }

	 
	 @PostMapping("/forgetPass")
		public String findPassword(@RequestBody User user) {

			//OTP otp1 = new OTP();

			User tr = this.userService.findEmail(user);
			if (tr != null) {
				int otp = random.nextInt(999999);
			
				String subject = "Message from letsplay";
				String message = "Your password is = " + tr.getPassword() +" Please do no share with anyone";
				String to = tr.getEmail();
//				otp1.setOtp(otp);

				boolean flag = this.userService.sendEmail(subject, message, to);

				if (flag == true) {
					
//					otp1.setStatus("success");
					return "success";
				} else {

				
					
					return "Something went wrong";
				}
			} else {

				System.out.println("not successful");
				return "Your email is not found";
			}

		}
}
