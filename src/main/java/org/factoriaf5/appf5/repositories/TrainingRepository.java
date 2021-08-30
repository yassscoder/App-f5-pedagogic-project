package org.factoriaf5.appf5.repositories;

import org.factoriaf5.appf5.domain.Training;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainingRepository extends JpaRepository<Training, Long > {
}
