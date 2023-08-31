package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Bookings;
import com.example.demo.model.GroundsDetails;
import com.example.demo.repository.BookingRepo;

@Service
public class BookingServiceImpl implements BookingService {

	@Autowired
	private BookingRepo bookings;
	@Override
	public void saveBookings(Bookings booking) {
		// TODO Auto-generated method stub
		bookings.save(booking);
		
	}

	@Override
	public List<Bookings> getBookingLit() {
		// TODO Auto-generated method stub
		return bookings.findAll();
	}
	

	@Override
	public List<Bookings> findByDateAndGroundid(String date, String groundid) {
		// TODO Auto-generated method stub
	
		return bookings.findByDateAndGroundId(date, groundid);
	}

	@Override
	public Bookings findByDateAndGroundIdAndtimeslotsId(String date, String groundid, int slotId) {
		// TODO Auto-generated method stub
		return bookings.findByDateAndGroundIdAndTimeslotsId(date, groundid, slotId);
	}

	@Override
	public List<Bookings> findByUserId(int userId) {
		// TODO Auto-generated method stub
		return bookings.findByUserId(userId);
	}

	@Override
	public List<Bookings> findByOwnerid(int ownerId) {
		// TODO Auto-generated method stub
		return bookings.findByOwnerId(ownerId);
	}
	
	
	@Override
	public String deleteBooking(int bookingId) {
		
		bookings.deleteById(bookingId);
		return "Deleted Successfully!!";
	}


}
