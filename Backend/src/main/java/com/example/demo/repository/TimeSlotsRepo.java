package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.TimeSlots;

@Repository
public interface TimeSlotsRepo extends JpaRepository<TimeSlots, Integer>{

	public TimeSlots findBySlotId(int slot_id);
}
