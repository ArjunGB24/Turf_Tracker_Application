package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;

import org.springframework.lang.NonNull;

@Entity
public class GroundsDetails {
	@Id
	private String groundid;
	private int ownerid;

	private String groundname;
	
	private String loction;
	private String city;
	private double amount;
	@Lob
	private String ground_image;
	private String sports_name;
	
	@OneToMany
	(cascade = CascadeType.ALL)
	private List<TimeSlots> timeslots;
	
	


	public GroundsDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public GroundsDetails(String ground_id, int owner_id, String ground_name, String loction, String city,
			double amount, String ground_image, String sports_name, List<TimeSlots> timeslots) {
		super();
		this.groundid = ground_id;
		this.ownerid = owner_id;
		this.groundname = ground_name;
		this.loction = loction;
		this.city = city;
		this.amount = amount;
		this.ground_image = ground_image;
		this.sports_name = sports_name;
		this.timeslots = timeslots;
	}
	

	public List<TimeSlots> getTimeslots() {
		return timeslots;
	}

	public void setTimeslots(List<TimeSlots> timeslots) {
		this.timeslots = timeslots;
	}

	public String getGround_id() {
		return groundid;
	}

	public void setGround_id(String ground_id) {
		this.groundid = ground_id;
	}

	public int getOwner_id() {
		return ownerid;
	}

	public void setOwner_id(int owner_id) {
		this.ownerid = owner_id;
	}

	public String getGround_name() {
		return groundname;
	}

	public void setGround_name(String ground_name) {
		this.groundname = ground_name;
	}

	public String getLoction() {
		return loction;
	}

	public void setLoction(String loction) {
		this.loction = loction;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getGround_image() {
		return ground_image;
	}

	public void setGround_image(String ground_image) {
		this.ground_image = ground_image;
	}

	public String getSports_name() {
		return sports_name;
	}

	public void setSports_name(String sports_name) {
		this.sports_name = sports_name;
	}

	@Override
	public String toString() {
		return "GroundsDetails [groundid=" + groundid + ", ownerid=" + ownerid + ", groundname=" + groundname
				+ ", address=" + loction + ", city=" + city + ", amount=" + amount + ", ground_image=" + ground_image
				+ ", sports_name=" + sports_name + ", timeslots=" + timeslots + "]";
	}
	

}
