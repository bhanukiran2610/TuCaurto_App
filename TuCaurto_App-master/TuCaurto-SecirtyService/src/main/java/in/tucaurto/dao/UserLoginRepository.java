package in.tucaurto.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.tucaurto.entity.UserLogin;
@Repository
public interface UserLoginRepository extends JpaRepository<UserLogin, Long> {
    UserLogin findByUsername(String username);
}
