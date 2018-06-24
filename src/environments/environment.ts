import 'zone.js/dist/zone-error';

export const environment = {
    production: false,
    API_GITHUB: 'https://api.github.com',
    CLIENT_ID: 'cace739e94cba8cbabb6'
};
// https://api.github.com/user/repos{?type,page,per_page,sort} => authenticated
// https://api.github.com/users/hebertpazian/repos{?type,page,per_page,sort} => non-authenticated
