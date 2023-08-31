package com.example.demo.model;


//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {
	@Id
	@GeneratedValue
	private int userid;
	private String name;
	private String mobile;
	private String email;
	private String password;
	private String city;
	private int roleId;
	private String status;
	
		public User() {
		super();
	}

		public User(int user_id, String name, String mobile, String email, String password, String city, int roleId,
				String status) {
			super();
			this.userid = user_id;
			this.name = name;
			this.mobile = mobile;
			this.email = email;
			this.password = password;
			this.city = city;
			this.roleId = roleId;
			this.status = status;
		}

		public User(String name, String mobile, String email, String password, String city, int roleId, String status) {
			super();
			this.name = name;
			this.mobile = mobile;
			this.email = email;
			this.password = password;
			this.city = city;
			this.roleId = roleId;
			this.status = status;
		}

		public int getUser_id() {
			return userid;
		}

		public void setUser_id(int userid) {
			this.userid = userid;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getMobile() {
			return mobile;
		}

		public void setMobile(String mobile) {
			this.mobile = mobile;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public String getCity() {
			return city;
		}

		public void setCity(String city) {
			this.city = city;
		}

		public int getRoleId() {
			return roleId;
		}

		public void setRoleId(int roleId) {
			this.roleId = roleId;
		}

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}

}
