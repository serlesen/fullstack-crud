package com.sergio.crud.backend.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Getter
@Setter
public class GymRecordDto {

    private Long id;

    @NotNull
    private String exercise;

    @NotNull
    private Integer weight;

    private LocalDateTime date;

}
