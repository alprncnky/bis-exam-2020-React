import React, { Component } from 'react';
import { IPortfolioDetailProps } from '../models/pages/portfolio-detail.d';
import { IAction, IAppState } from '../models/actions/core.d';
import * as Actions from '../store/constants/portfolio';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Select from 'react-select';


class CPortfolioDetail extends Component<IPortfolioDetailProps, any> {
    onChangeInputField = (key: string, event: any) => {
        var detailData: any = Object.assign({}, this.props.data);
        detailData[key] = event;
        this.props.dispatch({ type: Actions.actions.SET_PORTFOLIO_DETAIL_DATA, detailData });
    }
    render() {
        return (
            <div className="row detail-container m-0">
                <div className="detail-width">
                    <h2 className="header-text">Portföy Detayı</h2>
                    <div className="mr-top-30">
                        <h5 className="sub-header-text">Portföy Tipi</h5>
                        <div className="mr-top-5">
                            <div className="row radio-container">
                                <div className="radio-colors">
                                    <input value={"0"} checked={(this.props.data.portfolioType === "0") ? true : false} onChange={(e: any) => this.onChangeInputField("portfolioType", e.target.value)} style={{ margin: '10px' }} type="radio" name="sameName" id="nameA" />
                                </div>
                                <div className="row m-0">
                                    <span style={{ color: '#d14a8d' }} className="material-icons">class</span>
                                    <label className="radio-labels" htmlFor="0">Münferit</label>
                                </div>
                            </div>
                            <div className="row radio-container">
                                <div className="radio-colors">
                                    <input value={"1"} checked={(this.props.data.portfolioType === "1") ? true : false} onChange={(e: any) => this.onChangeInputField("portfolioType", e.target.value)} style={{ margin: '10px' }} type="radio" name="sameName" id="nameB" />
                                </div>
                                <div className="row m-0">
                                    <span style={{ color: '#d8bc62' }} className="material-icons">star</span>
                                    <label className="radio-labels" htmlFor="1">Diploma</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mr-top-30">
                        <h5 className="sub-header-text">Diploma/Eğitim Adı</h5>
                        <div className="mr-top-5">
                            <Select
                                placeholder="Diploma adını seçiniz"
                                value={this.props.data.diplomaName}
                                onChange={(e: any) => this.onChangeInputField("diplomaName", e)}
                                options={[{ value: 0, label: 'KREDİ OPERASYONLARI DİPLOMASI' }, { value: 1, label: 'DİĞER DİPLOMA' }]}
                            />
                        </div>
                    </div>
                    {this.props.data.portfolioType === "1" &&
                        <>
                            <div className="mr-top-30">
                                <h5 className="sub-header-text">Grup Adı</h5>
                                <input className="detail-inputs" value={this.props.data.groupName} onChange={(e: any) => this.onChangeInputField("groupName", e.target.value)} placeholder="Grup adınızı yazınız" />
                            </div>
                            <div className="mr-top-30">
                                <h5 className="sub-header-text">Proje Konusu</h5>
                                <input className="detail-inputs" value={this.props.data.projectName} onChange={(e: any) => this.onChangeInputField("projectName", e.target.value)} placeholder="Proje konusunu yazınız" />
                            </div>
                            <div className="mr-top-30">
                                <h5 className="sub-header-text">Portföy Yöneticisi</h5>
                                <div className="mr-top-5">
                                    <Select
                                        placeholder="Yönetici ismini seçiniz"
                                        value={this.props.data.projectManager}
                                        onChange={(e: any) => this.onChangeInputField("projectManager", e)}
                                        options={[{ value: 0, label: 'DİĞDEM DÖKMECİ' }, { value: 1, label: 'ALPEREN ÇİNKAYA' }]}
                                    />
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state: IAppState, ownProps: IPortfolioDetailProps): IPortfolioDetailProps => {
    if (!state) {
        return ownProps;
    }
    const newProps: IPortfolioDetailProps = Object.assign({}, ownProps, {
        data: state.portfolio.detailData
    });
    return newProps;
};

const dispatchProps = (dispatch: Dispatch<IAction>) => {
    return ({
        dispatch
    });
};

const PortfolioDetail = connect(
    mapStateToProps,
    dispatchProps
)(CPortfolioDetail);

export default PortfolioDetail;
