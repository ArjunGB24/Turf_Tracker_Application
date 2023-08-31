package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Bookings;
import com.example.demo.model.GroundsDetails;

public interface BookingService {
	public void saveBookings(Bookings booking);
	public List<Bookings>getBookingLit();
	public List<Bookings> findByDateAndGroundid(String date,String groundid);
	public Bookings findByDateAndGroundIdAndtimeslotsId(String date,String groundid,int slotId);
	public List<Bookings>findByUserId(int userId);
	 List<Bookings>findByOwnerid(int ownerId);
	 
	 public String  deleteBooking(int bookingId);


}
