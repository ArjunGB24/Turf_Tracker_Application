package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.HallBooking;
@Repository
public interface HallRepository extends JpaRepository<HallBooking,String> {

	//public HallBooking findByHallId(String Hall_id);
	public List<HallBooking> findByOwnerid(int owner_id);
	//public String deleteByGroundid(String ground_id);

	public HallBooking findByHallid(String hallId);
}


