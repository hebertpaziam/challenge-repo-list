import 'zone.js/dist/zone-error';

export const environment = {
    production: false,
    CLIENT_ID: 'cace739e94cba8cbabb6',
    CLIENT_SECRET: '9a0bfb19a628dae1bf9ff1cb02882df78e4e72d6'
};
// https://api.github.com/user/repos{?type,page,per_page,sort} => authenticated
// https://api.github.com/users/hebertpazian/repos{?type,page,per_page,sort} => non-authenticated
