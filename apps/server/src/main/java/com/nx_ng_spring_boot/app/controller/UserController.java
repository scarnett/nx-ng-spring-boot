package com.nx_ng_spring_boot.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.nx_ng_spring_boot.app.model.User;
import com.nx_ng_spring_boot.app.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	@Autowired
	UserRepository repository;

	@PostMapping("/create")
	@ResponseStatus(HttpStatus.CREATED)
	public User create(@RequestBody User user) {
		User createdUser = repository.save(user);
		return createdUser;
	}

	@PutMapping(value = "/update/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public User update(@RequestBody User user) {
		User updatedUser = repository.save(user);
		return updatedUser;
	}

	@DeleteMapping(value = "/delete/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void delete(@PathVariable("id") long id) {
		repository.deleteById(id);
	}

	@GetMapping("/fetch-all")
	public List<User> findAll() {
		List<User> users = repository.findAll();
		return users;
	}

	@RequestMapping("/fetch/{id}")
	public String findById(@PathVariable long id) {
		String user = repository.findById(id).toString();
		return user;
	}
}
