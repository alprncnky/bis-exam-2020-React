import React, { Component } from 'react';
import { PayrollService } from '../api/payroll-services';
const _payrollService = new PayrollService();

/*
* NOTE:
* This page is for showing backend project results
*/

class BackendPayrollPage extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.getData();
    }
    getData(param?: object) {
        _payrollService.RequestGetPayrollAsync(param)
            .then((responseData: any) => {
                return responseData;
            })
            .then((data: any | null) => {
                if (!data) {
                    return null;
                } else {
                    this.setState({ data })
                }
            });
    }
    onChangeInput = (event: any) => {
        if (event) {
            this.getData({ Search: event.target.value })
        }
    }
    render() {
        return (
            <div>
                <h1 className="payroll-header-text">Bordro Servisi</h1>
                <div className="payroll-search-bar-container">
                    <input className="payroll-search-input" placeholder="Search" onChange={this.onChangeInput} />
                </div>
                <div className="payroll-container">
                    {this.state.data && this.state.data.length > 0 ?
                        <table id="payroll-users">
                            <tr>
                                <th>Kimlik Numarası</th>
                                <th>Ad</th>
                                <th>Soyad</th>
                                <th>Maaş</th>
                                <th>Toplam Çalışılan Gün</th>
                                <th>Tarih</th>
                            </tr>
                            {this.state.data && this.state.data.map((item: any) =>
                                <tr>
                                    <td>{item.citizenshipIdentifier}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.salary}</td>
                                    <td>{item.workDay}</td>
                                    <td>{item.date}</td>
                                </tr>
                            )}
                        </table>
                        :
                        <h2>Kayıt bulunamadı.</h2>
                    }
                </div>
                {/* TODO: add pagination for larger values (api: take/skip) */}
            </div>
        );
    }
}

export default BackendPayrollPage;