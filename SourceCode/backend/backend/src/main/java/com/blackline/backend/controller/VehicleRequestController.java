package com.blackline.backend.controller;

import com.blackline.backend.dto.VehicleRequestCreateDTO;
import com.blackline.backend.entity.VehicleRequest;
import com.blackline.backend.service.VehicleRequestService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/requests")
@CrossOrigin(origins = "http://localhost:5173")
public class VehicleRequestController {

    private final VehicleRequestService service;

    public VehicleRequestController(VehicleRequestService service) {
        this.service = service;
    }

    @PostMapping
    public VehicleRequest create(@RequestBody VehicleRequestCreateDTO dto) {
        return service.create(dto);
    }

    @GetMapping
    public List<VehicleRequest> getAll() {
        return service.getAll();
    }
}
