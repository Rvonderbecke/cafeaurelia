import { HeaderNavWrapper } from '../styles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'


const HeaderNav = () => {
    return (
      <HeaderNavWrapper>
        <div className='headerNav'>
          <div className='navlinks'>
            <Link to='/menu'>Menu</Link>
            <Link to='/aboutus'>About Us</Link>
          </div>
          <div className='navIcons'>
            <Link to='/account'><FontAwesomeIcon icon={faUser} /></Link>
            <Link to='/shoppingcart'><FontAwesomeIcon icon={faCartShopping} /></Link>
          </div>

          </div>     
      </HeaderNavWrapper>
  )
}
export default HeaderNav