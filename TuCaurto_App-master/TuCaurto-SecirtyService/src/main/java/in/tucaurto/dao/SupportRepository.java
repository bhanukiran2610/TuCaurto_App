package in.tucaurto.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import in.tucaurto.entity.CustomerSupport;

public interface SupportRepository extends JpaRepository<CustomerSupport, Long>
{
	CustomerSupport findByUsername(String username);
}
