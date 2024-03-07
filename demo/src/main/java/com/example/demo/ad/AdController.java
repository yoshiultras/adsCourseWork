package com.example.demo.ad;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
class AdController {
    private final AdService adService;

    public AdController(AdService adService) {
        this.adService = adService;
    }

    @GetMapping("/ads")
    public List<Ad> ads() {
        return adService.getAll();
    }
    @GetMapping("/types")
    public List<String> types() {
        return adService.getAllTypes();
    }
    @GetMapping("/techs")
    public List<String> techs() {
        return adService.getAllTechs();
    }
}
