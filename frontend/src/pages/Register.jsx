import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  })

  const {name, email, password, cpassword} = formData
  
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account here</p>
      </section>
      <section className="form">
        <form>
          <input type="text" className="form-control" id='name' name='name' value={name} placeholder='What are you called?' onChange={onChange} />
        </form>
      </section>
    </>
  )
}

export default Register 