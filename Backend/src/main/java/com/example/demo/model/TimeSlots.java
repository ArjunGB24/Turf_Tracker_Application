package com.example.demo.model;

//import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class TimeSlots {
	
	@Id
	@GeneratedValue
	private int slotId;
	private String groundId;
	private String hallId;
	private  String status;
	private String timeSlot;
	
	
	public String getHallId() {
		return hallId;
	}
	public void setHallId(String hallId) {
		this.hallId = hallId;
	}
	public TimeSlots(int slotId, String groundId, String hallId, String status, String timeSlot) {
		super();
		this.slotId = slotId;
		this.groundId = groundId;
		this.hallId = hallId;
		this.status = status;
		this.timeSlot = timeSlot;
	}
	public TimeSlots() {
		super();
		// TODO Auto-generated constructor stub
	}
	public TimeSlots(int slot_id, String ground_id, String status, String time_slot) {
		super();
		this.slotId = slot_id;
		this.groundId = ground_id;
		this.status = status;
		this.timeSlot = time_slot;
	}
	public TimeSlots(String ground_id, String status, String time_slot) {
		super();
		this.groundId = ground_id;
		this.status = status;
		this.timeSlot = time_slot;
	}
	public int getSlot_id() {
		return slotId;
	}
	public void setSlot_id(int slot_id) {
		this.slotId = slot_id;
	}
	public String getGround_id() {
		return groundId;
	}
	public void setGround_id(String ground_id) {
		this.groundId = ground_id;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getTime_slot() {
		return timeSlot;
	}
	public void setTime_slot(String time_slot) {
		this.timeSlot = time_slot;
	}
}
