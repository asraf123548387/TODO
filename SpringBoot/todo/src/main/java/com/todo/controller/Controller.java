package com.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.todo.entity.Tasks;
import com.todo.services.Services;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class Controller {
	
	@Autowired
	Services service;
	
	@RequestMapping(value = "savetask",method = RequestMethod.POST)
	public void saveTask(@RequestBody Tasks t) {
		service.saveTasks(t);
	}
	@RequestMapping(value = "viewtask",method = RequestMethod.GET)
	public List<Tasks> viewTasks() {
		
		return service.getTasks();
	}
	@RequestMapping(value = "deletebyid/{id}",method = RequestMethod.POST)
	public void deleteByid(@PathVariable("id") int id) {
		System.out.println(id);
		service.deleteById(id);
	}
	@RequestMapping(value = "updateStatus/{id}/{status}",method = RequestMethod.POST)
	public void statusUpdate(@PathVariable("id") int id,@PathVariable("status") String status) {
		service.updatestatus(id,status);
	}

}
