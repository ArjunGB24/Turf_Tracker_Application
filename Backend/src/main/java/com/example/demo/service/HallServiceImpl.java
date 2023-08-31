package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.GroundsDetails;
import com.example.demo.model.HallBooking;
import com.example.demo.repository.HallRepository;
@Service
public class HallServiceImpl implements HallService{
	
	@Autowired
	private HallRepository repo;

	@Override
	public void addHall(HallBooking halls) {
		
		repo.save(halls);
	}

	@Override
	public List<HallBooking> getAllHalls() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

//	@Override
//	public HallBooking getHallByHall_id(String Hall_id) {
//		// TODO Auto-generated method stub
//		return repo.findById(Hall_id);
//	}
	
	@Override
	public HallBooking getHallByHall_id(String hallId) {
		// TODO Auto-generated method stub
		return repo.findByHallid(hallId);
	}

	@Override
	public List<HallBooking> findByOwnerid(int owner_id) {
		// TODO Auto-generated method stub
		return repo.findByOwnerid(owner_id);
	}

	

	@Override
	public void deleteById(String hall_id) {
		
		repo.deleteById(hall_id);
	}

}
