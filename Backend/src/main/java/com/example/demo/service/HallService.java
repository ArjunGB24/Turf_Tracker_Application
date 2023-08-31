package com.example.demo.service;

import java.util.List;

import com.example.demo.model.HallBooking;

public interface HallService {

	
	public void addHall(HallBooking Halls);
	
	 public List<HallBooking> getAllHalls();
		public HallBooking getHallByHall_id(String Hall_id);
		public List<HallBooking> findByOwnerid(int owner_id);
		

		public void deleteById(String hall_id);


}
