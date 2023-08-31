package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Bookings;

@Repository
public interface BookingRepo extends JpaRepository<Bookings, Integer>{
	
	public List<Bookings> findByDateAndGroundId(String date,String groundid);
	public Bookings findByDateAndGroundIdAndTimeslotsId(String date,String groundid,int slotId);
	
	
	public List<Bookings>findByUserId(int userId);
	public List<Bookings>findByOwnerId(int ownerId);

}
