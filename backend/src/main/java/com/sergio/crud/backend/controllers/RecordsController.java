package com.sergio.crud.backend.controllers;

import com.sergio.crud.backend.dtos.GymRecordDto;
import com.sergio.crud.backend.services.RecordsService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/gym")
@RequiredArgsConstructor
public class RecordsController {

    private final RecordsService recordsService;

    @GetMapping("/records")
    public ResponseEntity<List<GymRecordDto>> allRecords() {
        return ResponseEntity.ok(recordsService.allRecords());
    }

    @PostMapping("/records")
    public ResponseEntity<GymRecordDto> createGymRecord(@Valid @RequestBody GymRecordDto recordDto) {
        GymRecordDto createdRecord = recordsService.createGymRecords(recordDto);
        return ResponseEntity.created(URI.create("/gym/records/" + recordDto.getId())).body(createdRecord);
    }

    @GetMapping("/records/{id}")
    public ResponseEntity<GymRecordDto> getGymRecord(@PathVariable Long id) {
        return ResponseEntity.ok(recordsService.getGymRecord(id));
    }

    @PutMapping("/records/{id}")
    public ResponseEntity<GymRecordDto> updateGymRecord(@PathVariable Long id, @Valid @RequestBody GymRecordDto recordDto) {
        return ResponseEntity.ok(recordsService.updateGymRecord(id, recordDto));
    }

    @PatchMapping("/records/{id}")
    public ResponseEntity<GymRecordDto> patchGymRecord(@PathVariable Long id, @RequestBody GymRecordDto recordDto) {
        return ResponseEntity.ok(recordsService.patchGymRecord(id, recordDto));
    }

    @DeleteMapping("/records/{id}")
    public ResponseEntity<GymRecordDto> deleteGymRecord(@PathVariable Long id) {
        return ResponseEntity.ok(recordsService.deleteGymRecord(id));
    }
}
