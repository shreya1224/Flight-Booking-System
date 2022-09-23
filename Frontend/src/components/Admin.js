import React from "react";
import { useEffect, useState } from "react";
import "./admin.css";
import { Link } from "react-router-dom";
import FlightService from "../services/FlightService";


const Admin = () => {
  const [Flight, setProducts] = useState([]);
  

  const init = () => {
    FlightService.getAll()
      .then((response) => {
        console.log("Printing Products", response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure about deleting this Flight detail ?")){
    console.log("Printing id", id);
    FlightService.remove(id)
      .then((response) => {
        console.log("Flight details has been Deleted", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
    }
  };

  return (
    <div className="admin">
      {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
       
      <div className="container" id="plist">
        <br></br>
        <br></br>
        
      
        <br></br>
        <h4>List of available Flights</h4>
        <hr />
        <div>
          <Link to="/addflight">
            <button className="btn5">ADD FLIGHT</button>
          </Link>
          <table className="table table-bordered table-striped" id="tabp">
            <thead className="thead-dark">
              <tr>
                <th> Id</th>
                <th> Flight Number</th>
                <th> Origin</th>
                <th> Destination </th>
                <th> FlightDate </th>
                <th> Price </th>
              </tr>
            </thead>
            <tbody>
              {Flight.map((Flight) => (
                <tr key={Flight.id}>
                  <td>
                    <b>{Flight.id}</b>
                  </td>
                  <td>
                    <b>{Flight.flightNumber}</b>
                  </td>
                  <td>
                    <b>{Flight.origin}</b>
                  </td>
                  <td>
                    <b>{Flight.destination}</b>
                  </td>
                  <td>
                    <b>{Flight.flightDate}</b>
                  </td>
                  <td>
                    <b>{Flight.price}</b>
                  </td>

                  <td>
                  <Link
                    className="btn1"
                   
                    to={`/updateById/${Flight.id}`}
                  >
                    Update
                  </Link>
                  {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}
                    <button
                      className="btn2" data-bs-toggle="modal" data-bs-target="#exampleModal"
                      //   id="dprod"
                      onClick={() => {
                        handleDelete(Flight.id);
                      }}
                    >
                      Delete
                    </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
