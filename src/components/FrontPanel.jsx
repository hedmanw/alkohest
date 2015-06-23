import React from "react";

let FrontPanel = React.createClass({
    render() {
        return (
            <div className="container-courses">
                <div className="container">
                    <div className="col-md-12">
                        <div className="valuebox center">
                            <img src="/assets/partyhat.png"/>
                            <h2>Sommarlov?</h2>
                            <p className="lead">Snart dags för nylansering!</p>
                            <p>(och lanseringsfest! (fan i helvete vad svårt det ska vara att hitta bra ramverk som #barafunkar))</p>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <a className="floating-link" href="/assets/you_won.jpg">ere fest? »</a>
                    </div>
                </div>
            </div>
        )
    }
});

export default FrontPanel;