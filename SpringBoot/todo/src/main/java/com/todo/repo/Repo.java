package com.todo.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.todo.entity.Tasks;

public interface Repo extends MongoRepository<Tasks, Integer> {

}
