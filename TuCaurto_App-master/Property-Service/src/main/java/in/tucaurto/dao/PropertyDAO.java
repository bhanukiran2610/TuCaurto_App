package in.tucaurto.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import in.tucaurto.entity.Property;
import in.tucaurto.entity.PropertyType;
import in.tucaurto.entity.User;

@Repository
public interface PropertyDAO extends JpaRepository<Property, Integer>{
	
	@Query
	public Iterable<Property> findByNameContaining(String str);
	
	@Query
	public Iterable<Property> findByUser(User user);
	
	@Query
	public Iterable<Property> findByCityAndPriceGreaterThanEqualAndType(String city, Double price, PropertyType type);
}
