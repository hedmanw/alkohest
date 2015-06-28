import React from "react";

let Card = React.createClass({
    render() {
        let buttons = [
            {link:this.props.homepage, desc:"Kurshemsida"},
            {link:this.props.fire, desc:"Fire"}
        ].filter(item => typeof item.link !== 'undefined').map(item => {
                return (<a key={item.desc} href={item.link}>{item.desc}</a>)
        });

        return(
            <div className="col s12 m6">
                <div className="card light-blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{this.props.code}</span>
                        <p>{this.props.children}</p>
                    </div>
                    <div className="card-action">
                        {buttons}
                    </div>
                </div>
            </div>
        )
    }
});

export default Card;