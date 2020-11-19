package com.cmeboot.app.repository;

import com.cmeboot.app.model.VisitedRestaurants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface VisitedRestosRepositery extends JpaRepository<VisitedRestaurants,Long> {
    //get the filtered data by type

    List<VisitedRestaurants> findByName(String type);
}
