const isProduction = process.env.NODE_ENV === 'production';
//基本url
export const _BaseUrl = isProduction ? "http://admin.cyyaw.cn/flysandy" : "http://localhost:8080/flysandy";
// export const _BaseUrl = isProduction ? "https://wx.cyyaw.cn/flysandy" : "https://wx.cyyaw.cn/flysandy";
//上传文件
export const _upload = "https://admin.cyyaw.cn/resources";
//====================== token
export const _userinfo_admin = "shop_userinfo_admin";
export const _token_admin = "shop_token_admin";  // token



