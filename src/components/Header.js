import { Link } from 'react-router-dom'
import HeaderNav from './HeaderNav'
import { HeaderWrapper } from '../styles'
const Header = () => {
    return (
      <HeaderWrapper>
        <Link to='/'style={{ textDecoration: 'none' }}>
        <h1>Cafe Aurelia</h1>
        </Link>
        <img className='scallopedBorder' src="./images/scallopedBorder.svg" alt="border" />
      <HeaderNav />
      </HeaderWrapper>
  )
}
export default Header