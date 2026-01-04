package com.blackline.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "cars")
public class Car {

    @Id
    private String id;

    private String name;
    private Integer price;
    private String image;

    private String power;
    private String acceleration;

    @Column(name = "top_speed")
    private String topSpeed;

    @Column(length = 2000)
    private String description;

    // ---------- GETTERS ----------

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public Integer getPrice() {
        return price;
    }
    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }

    public String getPower() {
        return power;
    }
    public void setPower(String power) {
        this.power = power;
    }

    public String getAcceleration() {
        return acceleration;
    }
    public void setAcceleration(String acceleration) {
        this.acceleration = acceleration;
    }

    public String getTopSpeed() {
        return topSpeed;
    }
    public void setTopSpeed(String topSpeed) {
        this.topSpeed = topSpeed;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
}
