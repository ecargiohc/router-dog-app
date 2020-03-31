import React, {Component} from 'react';

class DogDetails extends Component {
    render() {
        let {dog} = this.props;
        return (
            <div className="DogDetails row">
                <div className="col-11 col-5-lg">
                    <div className="DogDetails-card card">
                        <img className="card-img-top" src={dog.src} alt={dog.name}/>
                    </div>
                </div>
                <h1>{this.props.dog.name}</h1>
            </div>
        )
    }
}
export default DogDetails;