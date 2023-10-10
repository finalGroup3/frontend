import {useContext} from 'react'
import './Table.scss'

export default function Table(props) {
 
  return (
    <div>
    <div className="table-container">
      <div className="table">
        <div className="table-header">
          <div className="header__item header-img">image</div>
          <div className="header__item">img</div>
          <div className="header__item">description</div>
          <div className="header__item">location</div>
          <div className="header__item">rating</div>
          <div className="header__item">price</div>
          <div className="header__item">ownerId</div>
          <div className="header__item">long</div>
          <div className="header__item">lat</div>
        </div>
        <div className="table-content">	
          <div className="table-row">		
         
          </div>
          {props.data?.map((element, i)=>{
            return(
               <div key={i} className="table-row">		
 <div className="table-data"><img style={{width:'200px', borderRadius:"10px"}} src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/402218530.jpg?k=40fd168fdee2a8f48350437166269eea86f296e01b43e8bbb49df5f821b685e4&o=&hp=1'/></div>
 <div className="table-data">description descrip tiond escription descrip tiond escriptiondesc riptiondescription</div>
 <div className="table-data"> descriptiond escriptiondesc ription</div>
 <div className="table-data"> {element.name}</div>
 <div className="table-data">⭐⭐⭐⭐⭐</div>
 <div className="table-data">30JD - 90JD</div>
 <div className="table-data">3</div>
 <div className="table-data">3.63636</div>
 <div className="table-data">3.3654123</div>
</div>
            )

          })}
       
         
        </div>	
      </div>
    </div></div>
  )
}
