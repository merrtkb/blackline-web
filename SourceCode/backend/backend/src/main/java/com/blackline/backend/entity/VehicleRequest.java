package com.blackline.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "vehicle_requests")
public class VehicleRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String email;
    private String phone;

    private String carName;
    private Integer carPrice;

    private String message;

    private LocalDateTime createdAt;

    @PrePersist
    public void onCreate() {
        createdAt = LocalDateTime.now();
    }

    // -------- GETTERS & SETTERS --------

    public Long getId() {
        return id; }
    public void setId(Long id) {
        this.id = id; }

    public String getFullName() {
        return fullName; }
    public void setFullName(String fullName) {
        this.fullName = fullName; }

    public String getEmail() {
        return email; }
    public void setEmail(String email) {
        this.email = email; }

    public String getPhone() {
        return phone; }
    public void setPhone(String phone) {
        this.phone = phone; }

    public String getCarName() {
        return carName; }
    public void setCarName(String carName) {
        this.carName = carName; }

    public Integer getCarPrice() {
        return carPrice; }
    public void setCarPrice(Integer carPrice) {
        this.carPrice = carPrice; }

    public String getMessage() {
        return message; }
    public void setMessage(String message) {
        this.message = message; }

    public LocalDateTime getCreatedAt() { return createdAt; }
}
