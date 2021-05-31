
import request from '../../utils/request';

export function getData() {
    return request({
        url: '/api/test',
        method: 'get'
    });
}
