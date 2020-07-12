import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { IAction } from '../models/actions/core.d';
import { Dispatch } from 'redux';
import PortfolioDetail from './portfolio-detail';
import PortfolioDefinition from './portfolio-definition';
import { withRouter } from 'react-router-dom';
import * as Actions from '../store/constants/app';

class Portfolio extends Component<any> {
    onClickCloseButton = (url:string) => {
        this.props.dispatch({ type: Actions.actions.CLEAR_APP_DATA });
        this.onClickNavigateButton(url);
    }
    onClickNavigateButton = (url: string) => {
        this.props.history.push(url);
    }
    render() {
        let isDetailPageActive = (this.props.location && this.props.location.pathname === '/portfolio/detail') ? true : false
        return (
            <>
                {/* Inner pages */}
                <Route path={'/portfolio/detail'} component={PortfolioDetail} />
                <Route path={'/portfolio/definition'} component={PortfolioDefinition} />

                {/* Top Navigation Bar */}
                <div className="portfolio-navigation-bar top-bar">
                    <div className="row" style={{ alignItems: 'center', height: 'inherit' }}>
                        <div className="col-4">
                            <h3 style={{ marginLeft: '20px', marginRight: '20px' }}>Portföyünüzü Oluşturun</h3>
                        </div>
                        <div className="col-4">
                            <h3 style={{ color: 'darkgrey', textAlign: 'center' }}>{isDetailPageActive ? 1 : 2} / 2</h3>
                        </div>
                        <div className="col-4">
                            <span onClick={() => this.onClickCloseButton('/')} className="material-icons close-btn">close</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation Bar */}
                <div className="portfolio-navigation-bar bottom-bar">
                    <div className="row" style={{ width: 'inherit', margin: 0 }}>
                        {isDetailPageActive ?
                            <button className="bottom-button right-side-btn" onClick={() => this.onClickNavigateButton('/portfolio/definition')} style={{ backgroundColor: '#53565A' }}>
                                Sonraki Adım<span className="material-icons ml-2">arrow_forward</span>
                            </button>
                            :
                            <>
                                <button className="bottom-button left-side-btn" onClick={() => this.onClickNavigateButton('/portfolio/detail')}>
                                    <span className="material-icons">arrow_back</span>
                                </button>
                                <button className="bottom-button right-side-btn" style={{ backgroundColor: '#1fc493' }}>
                                    Oluştur<span className="material-icons ml-2">arrow_forward</span>
                                </button>
                            </>
                        }
                    </div>
                </div>
            </>
        );
    }
}

const dispatchProps = (dispatch: Dispatch<IAction>) => {
    return ({
        dispatch
    });
};

export default withRouter(connect(dispatchProps)(Portfolio));
