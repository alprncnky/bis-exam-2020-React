import ApiClient from './payroll-api';
let _apiClient: ApiClient;

export class PayrollService {

    constructor() {
        _apiClient = new ApiClient();
    }

    public async RequestGetPayrollAsync(params: any) {
        return _apiClient.RequestAsync('POST', 'api/payroll/getpayroll', params).then((result: any) => {
            return result.json();
        }).catch((response) => {
            return response;
        });
    }

}