package in.tucaurto.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="support")
public class CustomerSupport 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name;
	private String username;
	private long contactNumber;
	
	@OneToOne(fetch = FetchType.LAZY,cascade= CascadeType.ALL)
	@JoinColumn(name="userlogin_id")
	private UserLogin userLogin;
	
	 
	public UserLogin getUserLogin() {
		return userLogin;
	}
	public void setUserLogin(UserLogin userLogin) {
		this.userLogin = userLogin;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public long getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(long contactNumber) {
		this.contactNumber = contactNumber;
	}
	
	
}
