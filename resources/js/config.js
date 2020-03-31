var api_url = '';
var api_end = '';
switch (process.env.NODE_ENV) {
    case 'development':
        api_url = '/data';
        api_end = '.json';
        break;
    case 'production':
        api_url = '/api/v1';
        break;
}

export const CONFIG = {
    api_url: api_url,
    photos: {
        getTags: api_url + '/tags' + api_end
    }
};