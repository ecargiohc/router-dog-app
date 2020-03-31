import React, {Component} from 'react';
import './DogDetails.css';

class DogDetails extends Component {
    render() {
        let {dog} = this.props;
        return (
            <div className="container">
                <div className="DogDetails row">
                    <div className="col-11 col-lg-5">
                        <div className="DogDetails-card card">
                            <img className="card-img-top" src={dog.src} alt={dog.name}/>
                            <div className="card-body">
                                <h2 className="card-title">{dog.name}</h2>
                            </div>
                        </div>
                    </div>
                    {/* <h1>{this.props.dog.name}</h1> */}
                </div>
            </div>
        )
    }
}
export default DogDetails;