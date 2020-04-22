import React from 'react'

class Header extends React.Component {
    render() {
        return (
            /*
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                                <h1 className="headertodo">todoリスト</h1>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            */
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <a className="navbar-brand" href="#">Todoリスト</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbar1" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbar1">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#">link</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;