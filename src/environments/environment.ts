import 'zone.js/dist/zone-error';

export const environment = {
    production: false,
    API_GITHUB: 'https://api.github.com',
    CLIENT_ID: '286b80fe19cdd030cc41'
};
// https://api.github.com/user/repos{?type,page,per_page,sort} => authenticated
// https://api.github.com/users/hebertpazian/repos{?type,page,per_page,sort} => non-authenticated
