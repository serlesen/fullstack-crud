package com.sergio.crud.backend.repositories;

import com.sergio.crud.backend.entities.GymRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GymRecordsRepository extends JpaRepository<GymRecord, Long> {
}
