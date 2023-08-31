package com.example.demo.service;

import java.util.List;

import com.example.demo.model.GroundsDetails;

public interface GroundService {
	
	
	public void addGround(GroundsDetails grounds);
	
	 public List<GroundsDetails> getAllGrounds();
		public GroundsDetails getGroundByGround_id(String ground_id);
		public List<GroundsDetails> findByOwnerid(int owner_id);
		public String deleteGround(String ground);


}
