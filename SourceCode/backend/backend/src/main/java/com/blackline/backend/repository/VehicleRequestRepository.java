package com.blackline.backend.repository;

import com.blackline.backend.entity.VehicleRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRequestRepository
        extends JpaRepository<VehicleRequest, Long> {
}
