package com.example.demo.controller;

import java.io.File; 
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.demo.dto.GroundHallDto;
import com.example.demo.model.GroundsDetails;
import com.example.demo.model.HallBooking;
import com.example.demo.model.TimeSlots;
import com.example.demo.model.User;
import com.example.demo.repository.GroundRepository;
import com.example.demo.repository.HallRepository;
import com.example.demo.repository.TimeSlotsRepo;
import com.example.demo.service.GroundService;
import com.example.demo.service.HallService;
import com.example.demo.service.TimeSlotsService;

@RestController
@CrossOrigin
public class GroundController {

	//	private static String imgdir=System.getProperty("user.dir")+"/images/";

	@Autowired
	private GroundService groundRepo;

	@Autowired
	private HallService HallRepository;


	@Autowired
	private TimeSlotsService timeRepo;




	@PostMapping("/addGround")
	private String registerUser(@RequestParam("groundid") String groundid,
			@RequestParam("ownerid") String owner_id,
			@RequestParam("groundname") String ground_name,
			@RequestParam("loction") String loction,
			@RequestParam(name="city", required=false) String city,
			@RequestParam(name="amount", required=false) String amount,
			@RequestParam(name = "sports_name", required=false) String sports_name,
			@RequestParam(name = "morning",  required=false) String morning,
			@RequestParam(name = "afternoon",  required=false) String afternoon,
			@RequestParam(name = "evening",  required=false) String evening,
			//*
			@RequestParam(name="ground_image") String ground_image,

			final @RequestParam("imageFile") MultipartFile file) throws IOException {
		String imgdirectory="C:\\Users\\Administrator\\Desktop\\Project\\Backend\\LetsPlay\\src\\main\\resources\\static\\image\\";
		GroundsDetails ground=new GroundsDetails();
		ground.setGround_id(groundid);
		List<TimeSlots> slots=new ArrayList<>();
		System.out.println("morning   "+ morning );
		System.out.println("after    "+ afternoon);
		System.out.println("eve  "+ evening);
		if(morning!=null) {
			TimeSlots  t =new TimeSlots();
			t.setGround_id(groundid);
			t.setStatus("Not Booked");
			t.setTime_slot("09:00 AM to 12:00 PM");

			timeRepo.addTimeSlots(t);
			slots.add(t);

		}
		if(afternoon!=null) {
			TimeSlots  t =new TimeSlots();
			t.setGround_id(groundid);
			t.setStatus("Not Booked");
			t.setTime_slot("12:00 PM to 03:00 PM");
			timeRepo.addTimeSlots(t);
			slots.add(t);

		}
		if(evening!=null) {
			TimeSlots  t =new TimeSlots();
			t.setGround_id(groundid);
			t.setStatus("Not Booked");
			t.setTime_slot("03:00 PM to 06:00 PM");
			timeRepo.addTimeSlots(t);
			slots.add(t);

		}



		ground.setOwner_id(Integer.parseInt(owner_id));
		ground.setGround_name(ground_name);
		ground.setLoction(loction);
		ground.setCity(city);
		ground.setAmount(Double.parseDouble(amount));
		ground.setSports_name(sports_name);
		ground.setTimeslots(slots);
		ground.setGround_image(ground_image);
		makeDireIfNot(imgdirectory);

		/*Path filepath=Paths.get(imgdirectory,file.getOriginalFilename());

		try {

			Files.copy(file.getInputStream(), Paths.get(imgdirectory+File.separator+file.getOriginalFilename()),
					StandardCopyOption.REPLACE_EXISTING);
			ground.setGround_image("http://localhost:8081/image/"+file.getOriginalFilename());
			groundRepo.addGround(ground);
			return "your ground added successfully <a href='http://localhost:3000/viewgroundowner'>View Your latest added ground</a>";
		}catch(IOException io){
			return "failed";
		
		}		*/

		groundRepo.addGround(ground);

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

	@GetMapping(value = "/image/{img}", produces = { MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE,
			MediaType.IMAGE_PNG_VALUE })
	public ResponseEntity<?> downloadImage(@PathVariable String img) throws IOException {
		System.out.println("in img download " + img);
		String path="C:\\Users\\Administrator\\Desktop\\Project\\Backend\\LetsPlay\\src\\main\\resources\\static\\image\\"+img;
		byte[] imageContext=Files.readAllBytes(Paths.get(path));
		return ResponseEntity.ok(imageContext);
	}

	@GetMapping("/getAllGrounds")
	public List<GroundsDetails> getUser() {
		return groundRepo.getAllGrounds();
	}


	@GetMapping("/getTimeSlots")
	public List<TimeSlots> getTime() {
		return timeRepo.getTimes();
	}


	@PostMapping("/findByGroundId")
	public GroundsDetails getGroundById(@RequestBody GroundsDetails ground) {

		return groundRepo.getGroundByGround_id(ground.getGround_id());
	}

	@PostMapping("/getGroundByOwnerId")
	public GroundHallDto getGrounds(@RequestBody GroundsDetails ground){


		List<GroundsDetails> grounds=groundRepo.findByOwnerid(ground.getOwner_id());
		List<HallBooking> halls=HallRepository.findByOwnerid(ground.getOwner_id());
		GroundHallDto gh=new GroundHallDto();

		gh.setGrounds(grounds);
		gh.setHalls(halls);

		return gh;
	}


	@PostMapping("/deleteGroundByGroundId/{id}")
	public String deleteGrounds(@PathVariable("id") String ground){

		groundRepo.deleteGround(ground);
		return "Deleted successfully";
	}









}
