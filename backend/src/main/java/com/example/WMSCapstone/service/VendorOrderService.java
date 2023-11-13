package com.example.WMSCapstone.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.WMSCapstone.repository.VendorOrderRepository;

@Service
public class VendorOrderService {
	
	@Autowired
    private VendorOrderRepository vendorOrderRepo;

    public void deleteByVendorOrderId(String vendorOrderId) {
        vendorOrderRepo.deleteByVendorOrderId(vendorOrderId);
    }
	
	

}
