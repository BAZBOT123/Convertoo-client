import './header.css';
import { BsCloudFog2Fill } from "react-icons/bs";

export default function Header() {
  return (
    <div className="container w-100 zeromargin">
      <header className="d-flex flex-wrap py-3 mb-4 border-bottom w-100 zeromargin zeropadding">

        <div className='ms-3'><BsCloudFog2Fill size={40} color={'blue'} /></div>
        <ul class="nav align-items-center col-12 col-md-auto mb-2 mb-md-0 navigation-position">
          <li><a className=" px-2">Home</a></li>
          <li><a className=" px-2">Pricing</a></li>
          <li><a className="px-2">Contact Us</a></li>
        </ul>

        <div class="row-md-3 d-flex text-end signUp-login-btn">
          <button type="button" className="btn btn-outline-primary me-2">Login</button>
          <button type="button" className="btn btn-primary">Sign-up</button>
        </div>
      </header>
</div>
  )
}