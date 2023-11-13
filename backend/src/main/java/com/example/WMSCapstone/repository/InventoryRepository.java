package com.example.WMSCapstone.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.WMSCapstone.model.Inventory;

@Repository
public interface InventoryRepository extends MongoRepository<Inventory, String>{
	
	Inventory findByProductId(String productId);

}
