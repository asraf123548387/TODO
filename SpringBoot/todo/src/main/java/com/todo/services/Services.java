package com.todo.services;
import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

import java.lang.annotation.Annotation;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.todo.entity.CustomSequence;
import com.todo.entity.Tasks;
import com.todo.repo.Repo;

@Service
public class Services {
	
	@Autowired
	Repo r;
	
	@Autowired
	Services s;
	
	@Autowired 
	private MongoOperations mongo;

    public int getNextSequence(String seqName)
    {
       
    	CustomSequence counter = mongo.findAndModify(
                query(where("_id").is(seqName)),
                new Update().inc("seq",1),
                options().returnNew(true).upsert(true),
                CustomSequence.class);
            return counter.getSeq();
    }
	
	public Tasks saveTasks(Tasks t) {
		t.setId(s.getNextSequence(Tasks.SEQUENCE_NAME));
		System.out.println(t.getId()+"kjkkkk");
		r.save(t);
		return t;
	}
	public List<Tasks> getTasks(){
		List<Tasks> list = r.findAll();
		return list;
	}
	public void deleteById(int id) {
		r.deleteById(id);
	}
	public void updatestatus(int id,String status) {
		Optional<Tasks> list = r.findById(id);
		
		Tasks t = list.get();
		t.setStatus(status);
		r.save(t);		
	}

}
