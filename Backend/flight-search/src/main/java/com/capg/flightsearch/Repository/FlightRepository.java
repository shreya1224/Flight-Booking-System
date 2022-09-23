package com.capg.flightsearch.Repository;


import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.capg.flightsearch.Entity.Flight;

@Repository
public interface FlightRepository extends MongoRepository<Flight, String> {
////	List<Flight> findByOriginAndDestinationAndFlightDate(String origin,String destination, String flightDate);
////
////	Flight findByFlightNumberAndFlightDate(String flightNumber, String flightDate);
	
	@Query("{origin: ?0, destination: ?1}")
	List<Flight> findFlightInBetween(String origin, String destination);
}