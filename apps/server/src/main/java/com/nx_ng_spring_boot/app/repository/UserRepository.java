package com.nx_ng_spring_boot.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nx_ng_spring_boot.app.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	List<User> findAll();
}
