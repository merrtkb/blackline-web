package com.blackline.backend.dto;

public class VehicleRequestCreateDTO {

    private String fullName;
    private String email;
    private String phone;

    private String carName;
    private Integer carPrice;

    private String message;

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getCarName() { return carName; }
    public void setCarName(String carName) { this.carName = carName; }

    public Integer getCarPrice() { return carPrice; }
    public void setCarPrice(Integer carPrice) { this.carPrice = carPrice; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}
