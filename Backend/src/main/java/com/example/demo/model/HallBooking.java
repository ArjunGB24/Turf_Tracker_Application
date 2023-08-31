package com.example.demo.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
@Entity
public class HallBooking {
	@Id
	private String hallid;
	private int ownerid;
	private String hallname;
	private String loction;
	private String city;
	private double amount;
	private String hall_image;
	private String sports_name;
	
	@OneToMany
	private List<TimeSlots> timeslots;
	
	
	

	public HallBooking() {
		super();
	}


	public HallBooking(String hallid, int ownerid, String hallname, String loction, String city, double amount,
			String hall_image, String sports_name, List<TimeSlots> timeslots) {
		super();
		this.hallid = hallid;
		this.ownerid = ownerid;
		this.hallname = hallname;
		this.loction = loction;
		this.city = city;
		this.amount = amount;
		this.hall_image = hall_image;
		this.sports_name = sports_name;
		this.timeslots = timeslots;
	}


	public String getHallid() {
		return hallid;
	}


	public void setHallid(String hallid) {
		this.hallid = hallid;
	}


	public int getOwnerid() {
		return ownerid;
	}


	public void setOwnerid(int ownerid) {
		this.ownerid = ownerid;
	}


	public String getHallname() {
		return hallname;
	}


	public void setHallname(String hallname) {
		this.hallname = hallname;
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


	public String getHall_image() {
		return hall_image;
	}


	public void setHall_image(String hall_image) {
		this.hall_image = hall_image;
	}


	public String getSports_name() {
		return sports_name;
	}


	public void setSports_name(String sports_name) {
		this.sports_name = sports_name;
	}


	public List<TimeSlots> getTimeslots() {
		return timeslots;
	}


	public void setTimeslots(List<TimeSlots> timeslots) {
		this.timeslots = timeslots;
	}


	@Override
	public String toString() {
		return "HallBooking [hallid=" + hallid + ", ownerid=" + ownerid + ", hallname=" + hallname + ", loction="
				+ loction + ", city=" + city + ", amount=" + amount + ", hall_image=" + hall_image + ", sports_name="
				+ sports_name + ", timeslots=" + timeslots + "]";
	}


	
}
