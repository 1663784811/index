const isProduction = process.env.NODE_ENV === 'production';
export const _BaseUrl = isProduction ? "http://admin.cyyaw.cn" : "http://localhost:8080";   //基本url
export const _token_admin = "shop_token_admin";  // token
export const _userinfo_admin = "shop_userinfo_admin";  // token



