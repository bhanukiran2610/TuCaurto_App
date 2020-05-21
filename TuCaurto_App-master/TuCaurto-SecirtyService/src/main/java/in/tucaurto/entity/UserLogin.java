package in.tucaurto.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "userlogin")
public class UserLogin 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column(unique = true)
    private String username;
    
    @Column
    @JsonIgnore
    private String password;
    
    @OneToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL,mappedBy="userLogin")
   	private User user;
    
    @ManyToOne(optional = false)
    @JoinColumn(name="role_id")
    private Role role;

    public String getUsername() 
    {
        return username;
    }

    public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public void setUsername(String username) 
    {
        this.username = username;
    }

    public String getPassword() 
    {
        return password;
    }

    public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}


	public UserLogin() {
		super();
		// TODO Auto-generated constructor stub
	}


	

	public UserLogin(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}

	public void setPassword(String password) 
    {
        this.password = password;
    }
    
    
}