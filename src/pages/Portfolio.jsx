export default function Portfolio() {
    return (
      <div className="container pt-4">
        <h2>Portfolio</h2>
        <div className="row">
          <div className="card col">
            <img className="card-img-top" src="./foodr-and-drinkr.png" alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">Dishr & Drinkr</h5>
              <p className="card-text">Find food or drink recipes with given one to three ingredients!</p>
              <a href="https://estevan-gonzales.github.io/project-1-dishr-and-drinkr/" className="btn btn-primary">View Project</a>
              <a href="https://github.com/Estevan-Gonzales/project-1-dishr-and-drinkr" className="btn btn-primary">View Source</a>
            </div>
          </div>
          <div className="card col">
            <img className="card-img-top" src="./rolling-25.png" alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">The Rolling 25</h5>
              <p className="card-text">Registered users can vote on rock albums and the votes update on a server back-end!</p>
              <a href="https://rolling-25-cb90ca0fc0bb.herokuapp.com/" className="btn btn-primary">View Project</a>
              <a href="https://github.com/aPersonIsHere/project-2-rolling-500" className="btn btn-primary">View Source</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card col">
            <img className="card-img-top" src="./money-type.png" alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">MoneyType</h5>
              <p className="card-text">Type to earn virtual money to use for upgrades and to customize your avatar! To use all features and save progress, an account must be created.</p>
              <a href="#" className="btn btn-primary">View Project</a>
              <a href="https://github.com/pcrainer38/moneytype" className="btn btn-primary">View Source</a>
            </div>
          </div>
          <div className="card col">
            <img className="card-img-top" src="./blogpress.png" alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">Blogpress</h5>
              <p className="card-text">Create an account and post blogs! View or delete your own blog and view other blogs!</p>
              <a href="https://exiga-blogpress-651f132af246.herokuapp.com/" className="btn btn-primary">View Project</a>
              <a href="https://github.com/aPersonIsHere/e-exiga-blogpress" className="btn btn-primary">View Source</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card col">
            <h3>No Image Available. See Source or Video.</h3>
            <div className="card-body">
              <h5 className="card-title">Social Network API</h5>
              <p className="card-text">This API allows for a hefty number of features! Will require having a MongoDB database.</p>
              <a href="https://youtu.be/CN5kehbcy7M" className="btn btn-primary">View Video Demo</a>
              <a href="https://github.com/aPersonIsHere/e-exiga-mongodb-social-network-api" className="btn btn-primary">View Source</a>
            </div>
          </div>
          <div className="card col">
            <img className="card-img-top" src="./employee-tracker.png" alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">Employee Tracker</h5>
              <p className="card-text">Track employees, employers, roles, and departments! Requires a SQL database.</p>
              <a href="https://youtu.be/xIEFhyrUA1w" className="btn btn-primary">View Video Demo</a>
              <a href="https://github.com/aPersonIsHere/e-exiga-employee-tracker" className="btn btn-primary">View Source</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  