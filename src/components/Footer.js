import { FooterWrapper } from "../styles"
import SocialFollow from "./SocialFollow"

const Footer = () => {
    return (
      <FooterWrapper>
        <div className="footerContainer">
          <div className="footerLeft">
            <p>Follow us on:</p>
          <SocialFollow />

          </div>
        
          <div className="footerMiddle">
            <h3>Cafe Aurelia</h3>
            <p>136 Main Street<br/>Aurelia, IA. 51005</p>
          </div>
        
          <div className="footerRight">
            <h3>(712)-295-2125</h3>
            <h4>order@cafeaurelia.com</h4>
          </div>
      
          </div>
  
            
      </FooterWrapper>
  )
}  
export default Footer