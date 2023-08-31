package com.example.demo.controller;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Bookings;
import com.example.demo.model.GroundsDetails;
import com.example.demo.model.HallBooking;
import com.example.demo.model.TimeSlots;
import com.example.demo.model.User;
import com.example.demo.repository.GroundRepository;
import com.example.demo.repository.HallRepository;
import com.example.demo.repository.TimeSlotsRepo;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.BookingService;
import com.example.demo.service.BookingServiceImpl;
//import com.example.demo.service.BookingServiceImpl;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin 
public class BookingController {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private TimeSlotsRepo timeSlotsRepo;
	@Autowired
	private GroundRepository groundRepository;
	Random random = new Random(10000);

	@Autowired
	private HallRepository hallRepository;

	@Autowired
	private UserService userService;
	
	@Autowired
	BookingServiceImpl bookingService;

	@Autowired
	BookingService booking;

	@PostMapping("/saveBookings")
	public Bookings addBooking(@RequestBody Bookings book) {
		User user = book.getUser();
		user = userRepository.findByUserid(user.getUser_id());
		GroundsDetails ground=null;
		HallBooking hall=null;
		TimeSlots timeSlots=null;

		if (book.getHallDetails() != null) {
			hall = book.getHallDetails();
			hall = hallRepository.findByHallid(hall.getHallid());
			
			
			
			timeSlots = book.getTimeSlots();
			timeSlots = timeSlotsRepo.findBySlotId(timeSlots.getSlot_id());

			int OTP = random.nextInt(999999);

			String subject = "Message from SportLoc";
			String message = "Your Booking for  " + book.getDate() + " is sucessfull of " + hall.getHallname()
					+ ", " + hall.getLoction() + " ," + hall.getCity() + " from  " + timeSlots.getTime_slot()
					+ " and  use this OTP on venue entry your OTP is= " + OTP + " Please do no share with anyone";
			String to = user.getEmail();
//		OTP1.setOTP(OTP);

			boolean flag = this.userService.sendEmail(subject, message, to);

			/////// owner
			User owner = userRepository.findByUserid(hall.getOwnerid());

			String subject1 = "Message from letsplay";
			String message1 = "Your have Booking for " + hall.getHallname() + ", " + hall.getLoction() + " ,"
					+ hall.getCity() + " from " + timeSlots.getTime_slot()
					+ "  use this OTP for customer varification your OTP is = " + OTP
					+ " Please do no share with anyone";
			String to1 = owner.getEmail();
//		OTP1.setOTP(OTP);

			boolean flag1 = this.userService.sendEmail(subject1, message1, to1);
		} else {
			ground = book.getGroundDetails();
			ground = groundRepository.findByGroundid(ground.getGround_id());

			timeSlots = book.getTimeSlots();
			timeSlots = timeSlotsRepo.findBySlotId(timeSlots.getSlot_id());

			int OTP = random.nextInt(999999);

			String subject = "Message from KRIDANGAN";
			String message = "Your Booking for  " + book.getDate() + " is sucessful of " + ground.getGround_name()
					+ ", " + ground.getLoction() + " ," + ground.getCity() + " from  " + timeSlots.getTime_slot()
					+ " and  use this OTP on venue entry your OTP is= " + OTP + " Please do no share with anyone";
			String to = user.getEmail();
//		OTP1.setOTP(OTP);

			boolean flag = this.userService.sendEmail(subject, message, to);

			/////// owner
			User owner = userRepository.findByUserid(ground.getOwner_id());

			String subject1 = "Message from KRIDANGAN";
			String message1 = "Your have Booking for " + ground.getGround_name() + ", " + ground.getLoction() + " ,"
					+ ground.getCity() + " from " + timeSlots.getTime_slot()
					+ "  use this OTP for customer varification your OTP is = " + OTP
					+ " Please do no share with anyone";
			String to1 = owner.getEmail();
//		OTP1.setOTP(OTP);

			boolean flag1 = this.userService.sendEmail(subject1, message1, to1);
		}
		book.setUser(user);
		book.setTimeSlots(timeSlots);
		book.setGroundDetails(ground);
		book.setHallDetails(hall);

		booking.saveBookings(book);
		return book;
	}

	@GetMapping("/getBookings")
	public List<Bookings> getList() {
		return booking.getBookingLit();
	}

//	
	@PostMapping("/findBookGround")
	public List<Bookings> getBookedGround(@RequestBody Bookings book) {

		return booking.findByDateAndGroundid(book.getDate(), book.getGroundId());
	}

	@PostMapping("/findAvailableTime")
	public Bookings findAvailableTimeSlots(@RequestBody Bookings book) {
		Bookings booked = booking.findByDateAndGroundIdAndtimeslotsId(book.getDate(), book.getGroundId(),
				book.getTimeslotsId());
		return booked;
	}

	@PostMapping("/getBookingsByUser")
	public List<Bookings> getBookingsByUser(@RequestBody Bookings book) {
		return booking.findByUserId(book.getUserId());
	}

	@PostMapping("/getBookingsByOwner")
	public List<Bookings> getBookingsByOwner(@RequestBody Bookings book) {
		System.out.println(book.getOwnerId());
		
		return booking.findByOwnerid(book.getOwnerId());
	}
	
	
	
	
	@DeleteMapping("/cancelBooking/{bookingId}")
	public ResponseEntity<?> deleteBooking(@PathVariable int bookingId) {
		System.out.println("Delete Account "+bookingId);
		return new ResponseEntity<>(bookingService.deleteBooking(bookingId), HttpStatus.OK);
		//return ResponseEntity.ok(userService.deleteAccount(id));
	}
}
