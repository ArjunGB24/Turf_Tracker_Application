package com.example.demo.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.GroundsDetails;
import com.example.demo.model.HallBooking;
import com.example.demo.model.TimeSlots;
import com.example.demo.repository.HallRepository;
import com.example.demo.service.GroundService;
import com.example.demo.service.HallService;
import com.example.demo.service.TimeSlotsService;

@RestController
@CrossOrigin
public class HallController {
	

	@Autowired
	private HallService hallRepo;
	
	
	@Autowired
	private TimeSlotsService timeRepo;
	
	
	
	
	@PostMapping("/addHall")
	private String registerUser(@RequestParam(name="hallid",required = false) String hallid,
			@RequestParam(name="ownerid",required = false) String owner_id,
			@RequestParam(name="hallname",required = false) String hall_name,
			@RequestParam(name="loction",required = false) String loction,
			@RequestParam(name="city", required=false) String city,
			@RequestParam(name="amount", required=false) String amount,
			@RequestParam(name = "sports_name", required=false) String sports_name,
			@RequestParam(name = "morning",  required=false) String morning,
			@RequestParam(name = "afternoon",  required=false) String afternoon,
			@RequestParam(name = "evening",  required=false) String evening

			/*final @RequestParam("ground_image") MultipartFile file*/) throws IOException {
		String imgdirectory="C:\\Users\\Administrator\\Desktop\\Project\\Backend\\LetsPlay\\src\\main\\resources\\static\\image\\";
	HallBooking hall=new HallBooking();
		hall.setHallid(hallid);
		List<TimeSlots> slots=new ArrayList<>();
		if(!morning.equals(null)) {
			TimeSlots  t =new TimeSlots();
			t.setHallId(hallid);
			t.setStatus("Not Booked");
			t.setTime_slot("09:00 AM to 12:00 PM");
			
			timeRepo.addTimeSlots(t);
			slots.add(t);
			
		}
		if(!afternoon.equals(null)) {
			TimeSlots  t =new TimeSlots();
			t.setHallId(hallid);
			t.setStatus("Not Booked");
			t.setTime_slot("12:00 PM to 03:00 PM");
			timeRepo.addTimeSlots(t);
			slots.add(t);

		}
		if(!evening.equals(null)) {
			TimeSlots  t =new TimeSlots();
			t.setHallId(hallid);
			t.setStatus("Not Booked");
			t.setTime_slot("03:00 PM to 06:00 PM");
			timeRepo.addTimeSlots(t);
		slots.add(t);

		}
		
		

		hall.setOwnerid(Integer.parseInt(owner_id));
		hall.setHallname(hall_name);
		hall.setLoction(loction);
		hall.setCity(city);
		hall.setAmount(Double.parseDouble(amount));
		hall.setSports_name(sports_name);
		hall.setTimeslots(slots);

	makeDireIfNot(imgdirectory);

//Path filepath=Paths.get(imgdirectory,file.getOriginalFilename());
//		
//		try {
//			
//			Files.copy(file.getInputStream(), Paths.get(imgdirectory+File.separator+file.getOriginalFilename()),
//                    StandardCopyOption.REPLACE_EXISTING);
//			ground.setGround_image("http://localhost:8081/image/"+file.getOriginalFilename());
//			
//			return "your ground added successfully <a href='http://localhost:3000/viewgroundowner'>View Your latest added ground</a>";
//		}catch(IOException io){
//			return "failed";
//		}		
		
	hallRepo.addHall(hall);
	
	return "your ground added successfully <a href='http://localhost:3000/viewgroundowner'>View Your latest added ground</a>";
 
	}
	
private void makeDireIfNot(String imageDir) {
		
		File directory=new File(imageDir);
		if(!directory.exists()) {
			directory.mkdir();
		}
		
	}


private String getPathOfUser() throws IOException{
	return new ClassPathResource("static/image/").getFile().getAbsolutePath();

}

     
@GetMapping("/getAllHall")
public List<HallBooking> getUser() {
	return hallRepo.getAllHalls();
}


@GetMapping("/getTimeHallTimeSlots")
public List<TimeSlots> getTime() {
	return timeRepo.getTimes();
}


@PostMapping("/findByHallId")
public HallBooking getHallById(@RequestBody HallBooking hall) {
	
	return hallRepo.getHallByHall_id(hall.getHallid());
}

@PostMapping("/getHallByOwnerId")
public List<HallBooking> getGrounds(@RequestBody GroundsDetails hall){
	
	
	return hallRepo.findByOwnerid(hall.getOwner_id());
}


@PostMapping("/deleteHallByHallId/{id}")
public String deleteHalls(@RequestBody String hall_id){
	
	hallRepo.deleteById(hall_id);
	return "Deleted successfully";
}




@PutMapping("/updateHall/{hallid}")
private String edit(@RequestParam("hallid") String hallid,
		@RequestParam(name="ownerid",required = false) String owner_id,
		@RequestParam(name="hallname",required = false) String hall_name,
		@RequestParam(name="loction",required = false) String loction,
		@RequestParam(name="city", required=false) String city,
		@RequestParam(name="amount", required=false) String amount,
		@RequestParam(name = "sports_name", required=false) String sports_name,
		@RequestParam(name = "morning",  required=false) String morning,
		@RequestParam(name = "afternoon",  required=false) String afternoon,
		@RequestParam(name = "evening",  required=false) String evening

		/*final @RequestParam("ground_image") MultipartFile file*/) throws IOException {
	String imgdirectory="E:\\New folder\\ZIP\\BackEnd\\LetsPlay\\images\\";
HallBooking hall=new HallBooking();
	hall.setHallid(hallid);
	List<TimeSlots> slots=new ArrayList<>();
	if(!morning.equals(null)) {
		TimeSlots  t =new TimeSlots();
		t.setHallId(hallid);
		t.setStatus("Not Booked");
		t.setTime_slot("09:00 AM to 12:00 PM");
		
		timeRepo.addTimeSlots(t);
		slots.add(t);
		
	}
	if(!afternoon.equals(null)) {
		TimeSlots  t =new TimeSlots();
		t.setHallId(hallid);
		t.setStatus("Not Booked");
		t.setTime_slot("12:00 PM to 03:00 PM");
		timeRepo.addTimeSlots(t);
		slots.add(t);

	}
	if(!evening.equals(null)) {
		TimeSlots  t =new TimeSlots();
		t.setHallId(hallid);
		t.setStatus("Not Booked");
		t.setTime_slot("03:00 PM to 06:00 PM");
		timeRepo.addTimeSlots(t);
	slots.add(t);

	}
	
	

	hall.setOwnerid(Integer.parseInt(owner_id));
	hall.setHallname(hall_name);
	hall.setLoction(loction);
	hall.setCity(city);
	hall.setAmount(Double.parseDouble(amount));
	hall.setSports_name(sports_name);
	hall.setTimeslots(slots);

makeDireIfNot(imgdirectory);

//Path filepath=Paths.get(imgdirectory,file.getOriginalFilename());
//	
//	try {
//		
//		Files.copy(file.getInputStream(), Paths.get(imgdirectory+File.separator+file.getOriginalFilename()),
//                StandardCopyOption.REPLACE_EXISTING);
//		ground.setGround_image("http://localhost:8081/image/"+file.getOriginalFilename());
//		
//		return "your ground added successfully <a href='http://localhost:3000/viewgroundowner'>View Your latest added ground</a>";
//	}catch(IOException io){
//		return "failed";
//	}		
	
hallRepo.addHall(hall);

return "your ground added successfully <a href='http://localhost:3000/viewgroundowner'>View Your latest added ground</a>";

}



}
