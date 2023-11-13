package com.example.WMSCapstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.WMSCapstone.model.Inventory;
import com.example.WMSCapstone.modelDTO.InventoryDTO;
import com.example.WMSCapstone.service.InventoryService;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class InventoryController {
	
	@Autowired 
	InventoryService inventoryService;
	
	@PostMapping("/inventory")
	public String createInventory(@RequestBody Inventory inventory) {
		return inventoryService.createInventory(inventory);
	}
	
	@GetMapping("/inventory")
	public List<Inventory> getAllProducts(){
		return inventoryService.getAllProducts();
	}
	
	@PostMapping("/allproducts")
	public String saveAllProducts(@RequestBody List<Inventory> inventories) {
        return inventoryService.saveAllProducts(inventories);
       
    }
	
	@GetMapping("/product")
    public ResponseEntity<List<InventoryDTO>> getAllInventory() {
        List<InventoryDTO> inventoryDTOList = inventoryService.getAllInventory();
        return new ResponseEntity<>(inventoryDTOList, HttpStatus.OK);
    }

	
		
	
	
	 

}
