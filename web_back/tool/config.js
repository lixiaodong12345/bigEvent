// 这个文件中用来保存每个页面中使用的数据信息，例如接口地址
// - baseUrl中保存的是基地址
var baseUrl = 'http://localhost:8000';

// - 后面的变量中保存的是每个接口的地址

// - 用户接口地址
var USER_LOGIN = baseUrl + '/admin/login'; // 登录页登录接口
var USER_LOGOUT = baseUrl + '/admin/logout'; // 首页退出登录接口
var USER_INFO = baseUrl + '/admin/getuser'; // 首页用户信息获取接口(简单数据2条)
var USER_INFO_GET = baseUrl + '/admin/userinfo_get'; // 用户页面详细信息获取(5条)
var USER_INFO_EDIT = baseUrl + '/admin/userinfo_edit'; // 用户页面编辑信息

// - 文章接口地址
var ARTICLE_CATE_GET = baseUrl + '/admin/category_search'; // 获取文章分类接口
var ARTICLE_CATE_ADD = baseUrl + '/admin/category_add'; // 新增文章分类接口
var ARTICLE_CATE_EDIT = baseUrl + '/admin/category_edit'; // 编辑文章分类接口
var ARTICLE_CATE_DEL = baseUrl + '/admin/category_delete'; // 文章删除分类接口