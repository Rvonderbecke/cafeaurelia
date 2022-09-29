import { Link } from "react-router-dom"
const FeaturedInfoBox = ({ title, description, src, path }) => {
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <div className='innerbox'>
          <h3>{title}</h3>
          <img src={src} alt={title} />
          <p className="landingDesc">{description}</p>
      </div >
        </Link>
      
      
  )
}

export default FeaturedInfoBox