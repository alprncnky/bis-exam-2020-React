import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IPortfolioDefinitionProps } from "../models/pages/portfolio-definition.d";
import { IAction, IAppState } from '../models/actions/core.d';
import * as Actions from '../store/constants/portfolio';
import Select from 'react-select';
import { IDefinitionData } from '../models/actions/portfolio';

class CPortfolioDefinition extends Component<IPortfolioDefinitionProps, any> {
    onClickDisableButton = (index: number) => (event: any) => {
        var data: IDefinitionData[] = Object.assign([], this.props.data);
        data[index].isDisabled = !data[index].isDisabled;
        this.dispatchData(data);
    }
    onClickDeleteChartButton = (index: number, chartIndex: number) => (event: any) => {
        var data: IDefinitionData[] = Object.assign([], this.props.data);
        if (chartIndex > -1) {
            data[index].charts.splice(chartIndex, 1);
        }
        this.dispatchData(data);
    }
    onClickNewButton = (index: number) => (event: any) => {
        var data: IDefinitionData[] = Object.assign([], this.props.data);
        data[index].charts.unshift({ sameDay: 1, chartHour: "1", chartName: "" }) // add default random value
        this.dispatchData(data);
    }
    onChangeInputField = (index: number, key: string, event: any, chartIndex?: number) => {
        var data: any = Object.assign([], this.props.data);
        chartIndex !== undefined ? (data[index].charts[chartIndex][key] = event) : (data[index][key] = event)
        this.dispatchData(data);
    }
    dispatchData(definitionData: IDefinitionData[]) {
        this.props.dispatch({ type: Actions.actions.SET_PORTFOLIO_DEFINITION_DATA, definitionData });
    }
    render() {
        const labelGreenRounded = <div className="label-green-rounded" />;
        const labelBlueSquare = <div className="label-blue-square " />;
        const selectOption = [{ value: 0, label: labelGreenRounded }, { value: 1, label: labelBlueSquare }];

        return (
            <div className="row definition-container m-0">
                <div className="container-size">
                    <h2 className="header-text">Eğitim Yöntemi Çizelge Tanımları</h2>

                    {this.props.data && this.props.data.length > 0 ?
                        <div className="row layout-container top-cntr">
                            <div className="not-visible sz-wd-50"></div>
                            <div className="sz-wd-70">
                                <h4>Aynı gün</h4>
                            </div>
                            <div className="sz-wd-50">
                                <h4>Gün</h4>
                            </div>
                            <div className="sz-wd-50">
                                <h4>Saat</h4>
                            </div>
                            <div className="sz-wd-650">
                                <h4>Eğitim yöntemi</h4>
                            </div>
                            <div className="not-visible sz-wd-40"></div>
                            <div className="not-visible sz-wd-40"></div>
                        </div>
                        :
                        <div>
                            <h2 className="not-found-graph">Çizelge bulunamadı.</h2>
                        </div>
                    }

                    {this.props.data.map((item: any, index: number) =>
                        <React.Fragment key={'index' + index}>
                            <div className="row layout-container body-cntr" style={{ opacity: (item.isDisabled ? 0.5 : 1) }}>
                                <div className="div-align div-clickable sz-wd-50" style={{ backgroundColor: '#6ba8c7' }}>
                                    <span className="material-icons">open_with</span>
                                </div>
                                <div className="div-align sz-wd-70" style={{ backgroundColor: 'white' }}>
                                    <Select
                                        className="select-portfolio-day"
                                        classNamePrefix="selectwon"
                                        placeholder={null}
                                        options={selectOption}
                                        onChange={(event: any) => this.onChangeInputField(index, "sameDay", event.value)} 
                                        value={selectOption.filter(opt => opt.value===item.sameDay)}
                                    />
                                </div>
                                <div className="div-align sz-wd-50" style={{ backgroundColor: '#f2c9c9' }}>
                                    <input className="def-inputs sz-wd-y90" onChange={(event: any) => this.onChangeInputField(index, "day", event.target.value)} value={item.day} />
                                </div>
                                <div className="div-align sz-wd-50" style={{ backgroundColor: '#f2c9c9' }}>
                                    <input className="def-inputs sz-wd-y90" onChange={(event: any) => this.onChangeInputField(index, "hour", event.target.value)} value={item.hour} />
                                </div>
                                <div className="div-align sz-wd-650" style={{ backgroundColor: '#f2c9c9' }}>
                                    <label className="text-and-label sz-wd-y100">{item.educationMethodLabel}</label>
                                </div>
                                <div className="div-align div-clickable sz-wd-40" onClick={this.onClickDisableButton(index)} style={{ backgroundColor: (item.isDisabled ? '#135b75' : '#de6c6c') }}>
                                    <span className="material-icons">{item.isDisabled ? "replay" : "close"}</span>
                                </div>
                                <div className="div-align div-clickable sz-wd-40" onClick={this.onClickNewButton(index)} style={{ backgroundColor: '#1fc493', visibility: (item.isDisabled ? "hidden" : "visible") }}>
                                    <span className="material-icons">add</span>
                                </div>
                            </div>
                            {item.charts.map((chartItem: any, chartIndex: number) =>
                                <div key={'chartIndex' + chartIndex} className="row layout-container body-cntr" style={{ opacity: (item.isDisabled ? 0.5 : 1) }}>
                                    <div className="not-visible sz-wd-50"></div>
                                    <div className="div-align sz-wd-70">
                                        <Select
                                            className="select-portfolio-day"
                                            classNamePrefix="selectwon"
                                            placeholder={null}
                                            options={selectOption}
                                            onChange={(event: any) => this.onChangeInputField(index, "sameDay", event.value, chartIndex)}
                                            value={selectOption.filter(opt => opt.value===chartItem.sameDay)}
                                        />
                                    </div>
                                    <div className="not-visible sz-wd-50"></div>
                                    <div className="div-align sz-wd-50" style={{ backgroundColor: 'white' }}>
                                        <input className="def-inputs sz-wd-y90" onChange={(event: any) => this.onChangeInputField(index, "chartHour", event.target.value, chartIndex)} value={chartItem.chartHour} />
                                    </div>
                                    <div className="row sz-wd-650" style={{ margin: 0, justifyContent: 'space-between' }}>
                                        <div className="div-align sz-wd-600" style={{ borderRadius: '4px', backgroundColor: 'white' }}>
                                            <input placeholder="Çizelge ismi yazınız" className="text-and-label sz-wd-y100" style={{ backgroundColor: 'transparent', border: 'none' }} onChange={(event: any) => this.onChangeInputField(index, "chartName", event.target.value, chartIndex)} value={chartItem.chartName} />
                                        </div>
                                        <div className="div-align div-clickable sz-wd-40" onClick={this.onClickDeleteChartButton(index, chartIndex)} style={{ borderRadius: '4px', backgroundColor: '#de6c6c' }}>
                                            <span className="material-icons">close</span>
                                        </div>
                                    </div>
                                    <div className="not-visible sz-wd-40"></div>
                                    <div className="not-visible sz-wd-40"></div>
                                </div>
                            )}
                        </React.Fragment>
                    )}


                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IAppState, ownProps: IPortfolioDefinitionProps): IPortfolioDefinitionProps => {
    if (!state) {
        return ownProps;
    }
    const newProps: IPortfolioDefinitionProps = Object.assign({}, ownProps, {
        data: state.portfolio.definitionData
    });
    return newProps;
};

const dispatchProps = (dispatch: Dispatch<IAction>) => {
    return ({
        dispatch
    });
};

const PortfolioDefinition = connect(
    mapStateToProps,
    dispatchProps
)(CPortfolioDefinition);

export default PortfolioDefinition;
