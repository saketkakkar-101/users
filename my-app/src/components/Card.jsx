import React from "react";

function Card() {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="https://picsum.photos/500/500?random=39"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build</p>
        </div>

        <div className="container w-100">
          <select className="h-100 m-2 bg-success rounded">
            {
                Array.from(Array(6), (e,i)=> {
                 return(   <option key={i+1} value={i+1}>{i+1}</option>
                 )  })
            }
          </select>
          <select className="h-100 m-2 bg-success rounded">
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
         
          <div className="d-inline fs-5">Total Price</div>

        </div>
      </div>
    </div>
  );
}

export default Card;
