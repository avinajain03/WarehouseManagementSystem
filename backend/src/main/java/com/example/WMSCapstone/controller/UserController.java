package com.example.WMSCapstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.WMSCapstone.model.User;
import com.example.WMSCapstone.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
	
	@Autowired 
	UserService userService;
	
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userService.getAllUsers();
	}
	
	@PostMapping("/allusers")
	public String saveAllUsers(@RequestBody List<User> users) {
        return userService.saveAllUsers(users);
       
    }
	@PostMapping("/users/staff")
	  public String saveStaff(@RequestBody User staff) {
//	    staff.setRole("staff"); // set the role to 'staff'
	    userService.saveUser(staff);
	    return "Staff Added";
	  }

	
	@GetMapping("/users/role/{role}")
    public List<User> getUsersByRole(@PathVariable String role) {
        return userService.getUsersByRole(role);
    }

}
