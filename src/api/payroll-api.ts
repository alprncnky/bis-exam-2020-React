export default class ApiClient {

    public RequestAsync(
        method: string = 'GET',
        path: string,
        data: any = null,
    ): Promise<Response> {

        return fetch('https://localhost:5001/' + path, {
            method,
            body: JSON.stringify(data===null? {} : data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });
    }
    
}