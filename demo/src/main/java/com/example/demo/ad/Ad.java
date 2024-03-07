package com.example.demo.ad;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ads")
class Ad {
    @Id
    private Long id;
    private String owner;
    private String type;
    private String size;
    private String tech;
    private String address;
    private String number;
    private String lon;
    private String lat;
}
