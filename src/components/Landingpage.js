import { Landingwrapper } from "../styles"
import {Outlet} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';

const Landingpage = () => {
  return (
    <Landingwrapper>
    <Header />
    <div className='appContainer'>
    <Outlet />   
    </div>
    <Footer />
</Landingwrapper>
  )
}
export default Landingpage