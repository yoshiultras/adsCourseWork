package com.example.demo.ad;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
interface AdRepository extends JpaRepository<Ad, Long> {
    @Query("SELECT DISTINCT a.type FROM Ad a")
    List<String> findAllTypes();

    @Query("SELECT DISTINCT a.tech FROM Ad a")
    List<String> findAllTechs();
}
