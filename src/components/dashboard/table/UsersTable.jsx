import './Table.scss'
import OptionsMenu from '../optionsMenu/Options'
export default function UsersTable(props) {
 
  return (
    <div>
      <p className='top-starts'>✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧  </p>
    <div className="table-container">
      
      <div className="table">
        <div className="table-header">
          <div className="header__item header-img">image</div>
          <div className="header__item">name</div>
          <div className="header__item">id</div>
        
        </div>
        <div className="table-content">	
          <div className="table-row">		
         
          </div>
          {props.data?.map((element, i)=>{
            return(
              <>   
               <div key={i} className="table-row">	
            
 <div className="table-data"><img style={{width:'100px', borderRadius:"10px", height:'100px' ,objectFit:"cover", borderRadius:"50%"}} src={element.image||'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402218530.jpg?k=40fd168fdee2a8f48350437166269eea86f296e01b43e8bbb49df5f821b685e4&o=&hp=1'}/></div>
 <div className="table-data">{element.username}</div>
 <div className="table-data">{element.id}</div>
 
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
