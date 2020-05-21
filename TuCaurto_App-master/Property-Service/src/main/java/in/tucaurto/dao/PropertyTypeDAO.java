package in.tucaurto.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.tucaurto.entity.PropertyType;

@Repository
public interface PropertyTypeDAO extends JpaRepository<PropertyType , Integer>  {

}
