import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faBars} from "@fortawesome/free-solid-svg-icons";
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import superagent from "superagent";
import cookie from "react-cookies";
import Tooltip from '@mui/material/Tooltip';
import "../table/Table.scss"
import { Delete } from '@mui/icons-material';
import { RestaurantsContext } from "../../restaurants/RestaurantContext";
import{useContext}from 'react';


export default function OptionsMenu(props) {

  const state = useContext(RestaurantsContext);


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteBooking = async (id) => {
    try {
      const response = await superagent
        .delete(`${import.meta.env.VITE_DATABASE_URL}/booking/${id}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);

      if (response.ok) {
        props.bookingsFromDB()
        console.log('*************************************')
      }
    } catch (error) {
      console.error(error);
    }
  };

 
 

  



  const deleteFun =()=>{
    if(props.type == 'Restaurants') state.deleteRestaurantsInDb(props.id);
    if(props.type == 'Hotels') state.deleteHotelInDb(props.id);
    if(props.type == 'Activties') state.deleteActivitysInDb(props.id);
    if(props.type == 'Bookings') deleteBooking(props.id);
  }
  return (
    <div className='options-bttnn'>
       <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
          
          <FontAwesomeIcon icon={faBars} />
    
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
            //   bgcolor: '#fff',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <div className='delete-option' onClick={()=>deleteFun()}>
            <span>Delete</span>
            <span >  <Delete/></span>
          
   
          </div>
       
        </MenuItem>
      
        <Divider />
       
        
      
      </Menu>
    </React.Fragment>
    </div>
   
  );
}