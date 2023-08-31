package com.example.demo.dto;

import java.util.List;

import com.example.demo.model.GroundsDetails;
import com.example.demo.model.HallBooking;

public class GroundHallDto {
private List<GroundsDetails> grounds;
private List<HallBooking> halls;
public List<GroundsDetails> getGrounds() {
	return grounds;
}
public void setGrounds(List<GroundsDetails> grounds) {
	this.grounds = grounds;
}
public List<HallBooking> getHalls() {
	return halls;
}
public void setHalls(List<HallBooking> halls) {
	this.halls = halls;
}


}
