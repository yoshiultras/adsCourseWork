package com.example.demo.ad;


import org.springframework.stereotype.Service;

import java.util.List;

@Service
class AdService {
    private final AdRepository repository;

    public AdService(AdRepository repository) {
        this.repository = repository;
    }

    public List<Ad> getAll() {
        return repository.findAll();
    }
    public List<String> getAllTypes() {
        return repository.findAllTypes();
    }
    public List<String> getAllTechs() {
        return repository.findAllTechs();
    }
}
