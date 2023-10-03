import React from 'react'
import { Restaurants } from "./DummyData";
import './Dashboard.scss'

export default function restaurants() {

    const handelDelete = (Id) => {

    }
  return (
    <div>
            <div className="table-container">
              <div className="table-title">
                <h3>Restaurants Table</h3>
              </div>
              <table className="table-fill">
                <thead>
                  <tr>
                    <th className="text-left">Restaurant Name</th>
                    <th className="text-left">Owner ID</th>
                    <th className="text-left">Rating</th>
                    <th className="text-left">Location</th>
                    <th className="text-left">delete</th>

                  </tr>
                </thead>
                <tbody className="table-hover">
                  {Restaurants.map((restaurant) => (
                    <tr key={restaurant.id}>
                      <td className="text-left">{restaurant.name}</td>
                      <td className="text-left">{restaurant.ownerId}</td>
                      <td className="text-left">{restaurant.rating}</td>
                      <td className="text-left">{restaurant.location}</td>
                      <td className="text-left">
                        {" "}
                        <button onClick={() => handelDelete(user.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

    </div>
  )
}
