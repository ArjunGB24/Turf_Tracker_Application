package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Transient;

@Entity
public class Bookings {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private int bookingId;
	private int userId;
	private int ownerId;

	private String groundId;
	private String hallId;
    private int timeslotsId;
	
	private double amount;
	private String date;
	@OneToOne
	private GroundsDetails groundDetails;
	@OneToOne
	private HallBooking hallDetails;
	@OneToOne
	private TimeSlots timeSlots;
    @OneToOne
	private User user;

	public Bookings() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
public Bookings(int bookingId, int userId, int ownerId, String groundId, String hallId, int timeslotsId,
			double amount, String date, GroundsDetails groundDetails, HallBooking hallDetails, TimeSlots timeSlots,
			User user) {
		super();
		this.bookingId = bookingId;
		this.userId = userId;
		this.ownerId = ownerId;
		this.groundId = groundId;
		this.hallId = hallId;
		this.timeslotsId = timeslotsId;
		this.amount = amount;
		this.date = date;
		this.groundDetails = groundDetails;
		this.hallDetails = hallDetails;
		this.timeSlots = timeSlots;
		this.user = user;
	}


/*
	public Bookings(int bookingId, int userId, int ownerId, String groundId, int timeslotsId, double amount,
			String date, GroundsDetails groundDetails, TimeSlots timeSlots, User user) {
		super();
		this.bookingId = bookingId;
		this.userId = userId;
		this.ownerId = ownerId;
		this.groundId = groundId;
		this.timeslotsId = timeslotsId;
		this.amount = amount;
		this.date = date;
		this.groundDetails = groundDetails;
		this.timeSlots = timeSlots;
		this.user = user;
	}
	*/

	public Bookings(int userId, int ownerId, String groundId, int timeslotsId, double amount, String date,
			GroundsDetails groundDetails, TimeSlots timeSlots, User user) {
		super();
		this.userId = userId;
		this.ownerId = ownerId;
		this.groundId = groundId;
		this.timeslotsId = timeslotsId;
		this.amount = amount;
		this.date = date;
		this.groundDetails = groundDetails;
		this.timeSlots = timeSlots;
		this.user = user;
	}

	public int getBookingId() {
		return bookingId;
	}

	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getOwnerId() {
		return ownerId;
	}

	public void setOwnerId(int ownerId) {
		this.ownerId = ownerId;
	}

	public String getGroundId() {
		return groundId;
	}

	public void setGroundId(String groundId) {
		this.groundId = groundId;
	}

	public int getTimeslotsId() {
		return timeslotsId;
	}

	public void setTimeslotsId(int timeslotsId) {
		this.timeslotsId = timeslotsId;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public GroundsDetails getGroundDetails() {
		return groundDetails;
	}

	public void setGroundDetails(GroundsDetails groundDetails) {
		this.groundDetails = groundDetails;
	}

	public TimeSlots getTimeSlots() {
		return timeSlots;
	}

	public void setTimeSlots(TimeSlots timeSlots) {
		this.timeSlots = timeSlots;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}


	public String getHallId() {
		return hallId;
	}


	public void setHallId(String hallId) {
		this.hallId = hallId;
	}


	public HallBooking getHallDetails() {
		return hallDetails;
	}


	public void setHallDetails(HallBooking hallDetails) {
		this.hallDetails = hallDetails;
	}
	
	
}