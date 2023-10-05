// import "./OwnerDashboard.scss";
// import { Restaurants,owners ,Hotels,activities} from "../../Data/DummyData";
// import axios from "axios";
// import cookie from "react-cookies";
// const OwnerDashboard = () => {
//   const AddToRestaurantsDb = () => {
//     Restaurants.forEach((item) => {
//     const oneRestaurant = {
//       name: item.name,
//       img: item.img,
//       description: item.description,
//       location: item.location,
//       rating: item.rating,
//       price: item.price,
//       ownerId: item.ownerId,
//       // long: item.long,
//       // lat: item.lat,
//     };
//     const req = async () => {
//       try {
//         const res = await axios.post(
//           `${import.meta.env.VITE_DATABASE_URL}/restaurants`,
//           oneRestaurant
//         );
//         console.log(res.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     req();
//     });
//   };
//   const AddToHotelsDb = () => {
//     Hotels.forEach((item) => {
//     const oneRestaurant = {
//       name: item.name,
//       img: item.img,
//       description: item.description,
//       location: item.location,
//       rating: item.rating,
//       price: item.price,
//       ownerId: item.ownerId,
//       // long: item.long,
//       // lat: item.lat,
//     };
//     const req = async () => {
//       try {
//         const res = await axios.post(
//           `${import.meta.env.VITE_DATABASE_URL}/hotel`,
//           oneRestaurant
//         );
//         console.log(res.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     req();
//     });
//   }; const AddToActivitessDb = () => {
//     activities.forEach((item) => {
//     const oneRestaurant = {
//       name: item.name,
//       img: item.img,
//       description: item.description,
//       location: item.location,
//       rating: item.rating,
//       price: item.price,
//       ownerId: item.ownerId,
//       // long: item.long,
//       // lat: item.lat,
//     };
//     const req = async () => {
//       try {
//         const res = await axios.post(
//           `${import.meta.env.VITE_DATABASE_URL}/activity`,
//           oneRestaurant
//         );
//         console.log(res.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     req();
//     });
//   };
//   const AddToUsers = () => {
//     owners.forEach((item) => {
//     const oneRestaurant = {
//       username: item.username,
//       password: "123",
//       role: "owner",
//          };
//     const req = async () => {
//       try {
//         const res = await axios.post(
//           `${import.meta.env.VITE_DATABASE_URL}/signup`,
//           oneRestaurant
//         );
//         console.log(res.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     req();
//     });
//   };

//   return (
//     <>
//       <div className="owner">OwnerDashboard</div>;
//       <button onClick={AddToUsers}>add users</button>
//       <button onClick={AddToRestaurantsDb}>add restaurants </button>
//       <button onClick={AddToHotelsDb}>add Hotels</button>
//       <button onClick={AddToActivitessDb}>add Activities</button>

//     </>
//   );
// };

// export default OwnerDashboard;
