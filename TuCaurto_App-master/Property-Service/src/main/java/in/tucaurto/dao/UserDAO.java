package in.tucaurto.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import in.tucaurto.entity.User;

@Repository
public interface UserDAO extends JpaRepository<User, Integer>  {
	
	@Query
	public User findByEmail(String userID);

}
