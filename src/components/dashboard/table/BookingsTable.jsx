import './Table.scss'
import OptionsMenu from '../optionsMenu/Options'
export default function BookingsTable(props) {
 
  return (
    <div>
      <p className='top-starts'>✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧  </p>
    <div className="table-container">
      
      <div className="table">
        <div className="table-header">
          <div className="header__item header-img">image</div>
          <div className="header__item">name</div>
          <div className="header__item">username</div>
          <div className="header__item">date</div>
          <div className="header__item">howmany</div>
          <div className="header__item">userId</div>
          <div className="header__item">restaurantId</div>
          <div className="header__item">hotelId</div>
          <div className="header__item">activityId</div>
          
        
        </div>
        <div className="table-content">	
          <div className="table-row">		
         
          </div>
          {props.data?.map((element, i)=>{
            return(
              <>   
               <div key={i} className="table-row">	
            
 <div className="table-data"><img style={{width:'200px', borderRadius:"10px", height:'150px' ,objectFit:"cover"}} src={element.image||'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402218530.jpg?k=40fd168fdee2a8f48350437166269eea86f296e01b43e8bbb49df5f821b685e4&o=&hp=1'}/></div>
 <div className="table-data">{element.name}</div>
 <div className="table-data">{element.username}</div>
 <div className="table-data">{element.date}</div>
 <div className="table-data">{element.howmany}</div>
 <div className="table-data">{element.userId}</div>
 <div className="table-data">{element.restaurantId}</div>
 <div className="table-data">{element.hotelId}</div>
 <div className="table-data">{element.activityId}</div>
 <OptionsMenu className='OptionsMenu' type={props.type} id ={element.id} bookingsFromDB={props.bookingsFromDB()} />
</div>
	
              </>
              
            )

          })}
       
         
        </div>	
      </div>
    </div></div>
  )
}
