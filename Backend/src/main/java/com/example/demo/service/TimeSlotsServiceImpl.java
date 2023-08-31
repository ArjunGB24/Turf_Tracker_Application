package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.TimeSlots;
import com.example.demo.repository.TimeSlotsRepo;


@Service
public class TimeSlotsServiceImpl implements TimeSlotsService {

	
	@Autowired
	TimeSlotsRepo timeRepo;
	
	@Override
	public void addTimeSlots(TimeSlots t) {
		
		timeRepo.save(t);
	}

	@Override
	public List<TimeSlots> getTimes() {
		// TODO Auto-generated method stub
		return timeRepo.findAll();
	}

}
