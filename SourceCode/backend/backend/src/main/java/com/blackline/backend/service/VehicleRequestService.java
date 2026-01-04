package com.blackline.backend.service;

import com.blackline.backend.dto.VehicleRequestCreateDTO;
import com.blackline.backend.entity.VehicleRequest;
import com.blackline.backend.repository.VehicleRequestRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleRequestService {

    private final VehicleRequestRepository repository;

    public VehicleRequestService(VehicleRequestRepository repository) {
        this.repository = repository;
    }

    public VehicleRequest create(VehicleRequestCreateDTO dto) {
        VehicleRequest r = new VehicleRequest();

        r.setFullName(dto.getFullName());
        r.setEmail(dto.getEmail());
        r.setPhone(dto.getPhone());
        r.setCarName(dto.getCarName());
        r.setCarPrice(dto.getCarPrice());
        r.setMessage(dto.getMessage());

        return repository.save(r);
    }

    public List<VehicleRequest> getAll() {
        return repository.findAll();
    }
}
