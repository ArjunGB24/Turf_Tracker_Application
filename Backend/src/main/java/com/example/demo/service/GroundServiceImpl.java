package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.GroundsDetails;
import com.example.demo.repository.GroundRepository;

@Service
public class GroundServiceImpl implements GroundService{
	
	@Autowired
	private GroundRepository repo;

	@Override
	public void addGround(GroundsDetails grounds) {
		
		repo.save(grounds);
	}

	@Override
	public List<GroundsDetails> getAllGrounds() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public GroundsDetails getGroundByGround_id(String ground_id) {
		// TODO Auto-generated method stub
		return repo.findByGroundid(ground_id);
	}

	@Override
	public List<GroundsDetails> findByOwnerid(int owner_id) {
		// TODO Auto-generated method stub
		return repo.findByOwnerid(owner_id);
	}

	@Override
	public String deleteGround(String ground) {
		// TODO Auto-generated method stub
		System.out.print(">>>"+ground);
		repo.deleteByGroundid(ground);
		return "Deleted successfully";
	}



}
