import {useContext} from 'react'
import './Table.scss'
import OptionsMenu from '../optionsMenu/Options'
import Rating from '@mui/material/Rating';

export default function DashboardTable(props) {
 
  return (
    <div>
      <p className='top-starts'>✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧  </p>

    <div className="table-container">
      <div className="table">
        <div className="table-header">
          <div className="header__item header-img">image</div>
          <div className="header__item">name</div>
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
              <>   
               <div key={i} className="table-row">	
            
 <div className="table-data"><img style={{width:'200px', borderRadius:"10px", height:'150px' ,objectFit:"cover"}} src={element.img||'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402218530.jpg?k=40fd168fdee2a8f48350437166269eea86f296e01b43e8bbb49df5f821b685e4&o=&hp=1'}/></div>
 <div className="table-data">{element.name}</div>
 <div className="table-data description">{element.description}</div>
 <div className="table-data"> {element.location}</div>
 <div className="table-data"><Rating name="read-only" value={element.rating} readOnly /></div>
 <div className="table-data"> {element.price||'30JD - 90JD'}</div>
 <div className="table-data">{element.ownerId}</div>
 <div className="table-data">{parseFloat(element.long).toFixed(4)}</div>
 <div className="table-data"> {parseFloat(element.lat).toFixed(4)} </div>
 <OptionsMenu className='OptionsMenu' type={props.type} id ={element.id}/>
</div>
	
              </>
              
            )

          })}
       
         
        </div>	
      </div>
    </div></div>
  )
}
