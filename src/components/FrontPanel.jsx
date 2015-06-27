import React from "react";

let FrontPanel = React.createClass({
    render() {
        return (
            <div>
                <div className="homepage-billboard">
                    <div className="billboard-container">
                        <div className="container-fluid">
                            <div className="homepage-title-container">
                                <div className="homepage-title homepage-quotation">
                                    plugga?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                            <a className="dotted-link hest-backdrop" href="/assets/you_won.jpg">ere fest? »</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default FrontPanel;