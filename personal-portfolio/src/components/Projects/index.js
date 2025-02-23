import './index.scss';
import bank from '../../assets/images/bank.jpeg'
import wholesale from '../../assets/images/wholesale-customer.jpg'
import tmuber from '../../assets/images/Group 1.png'
import skyhopper from '../../assets/images/skyhopper.png'
import restaurant from '../../assets/images/restaurant.webp'
import qr from '../../assets/images/qr.png'
import dice from '../../assets/images/dice.png'

const Projects = () => {
    return (
      <div className="container projects-page row flex-lg-row-reverse align-items-center g-5 py-5">
        <h3>Personal Projects</h3>
        <div className="album py-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
              
              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={bank} alt="Bank Marketing Campaign" />
                  <div className="card-body">
                    <h5 className="card-text">Bank Marketing Campaign Analysis Using Classifiers</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">GitHub</button>
                      </div>
                      <small className="text-body-secondary">January 2025</small>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={wholesale} alt="Wholesale Customer Segmentation" />
                  <div className="card-body">
                    <h5 className="card-text">Wholesale Customer Segmentation and Analysis Using K-Means Clustering</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">GitHub</button>
                      </div>
                      <small className="text-body-secondary">November 2024</small>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={restaurant} alt="Restaurant Profitability Analysis" />
                  <div className="card-body">
                    <h5 className="card-text">Linear and Logistic Regression in Restaurant Profitability and Hiring Predictions</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://github.com/mait002/ML-Project-Restaurant-Profit-and-Recruitment">Github</a></button>
                      </div>
                      <small className="text-body-secondary">October 2024</small>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={skyhopper} alt="Sky Hopper Game" />
                  <div className="card-body">
                    <h5 className="card-text">Sky Hopper Game</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">GitHub</button>
                      </div>
                      <small className="text-body-secondary">May 2024</small>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={dice} alt="Dice Game" />
                  <div className="card-body">
                    <h5 className="card-text">Dice Game</h5>
                    <a href="https://mait002.github.io/Dice-Game/">Click to play!</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">GitHub</button>
                      </div>
                      <small className="text-body-secondary">May 2024</small>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={tmuber} alt="TMUber Ride Sharing Application" />
                  <div className="card-body">
                    <h5 className="card-text">TMUber Ride Sharing Application</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">GitHub</button>
                      </div>
                      <small className="text-body-secondary">April 2024</small>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={qr} alt="QR Code Generator" />
                  <div className="card-body">
                    <h5 className="card-text">QR Code Generator</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">GitHub</button>
                      </div>
                      <small className="text-body-secondary">February 2024</small>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <hr/>
      </div>
    );
  }

export default Projects;
