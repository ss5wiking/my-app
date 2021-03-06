var url = {};

let __host__ = '';

switch (window.location.host) {
  case 'localhost:3000':
    // __host__ = "https://doctor.mdsonline.cn";
    //__host__ = 'http://rqiang.mynatapp.cc';
    __host__ = 'http://api.xiayuanyin.cn';
    //__host__ = "http://192.168.0.104:3002";
    break;
  case '192.168.0.121:3000':
    // __host__ = "https://doctor.mdsonline.cn";
    __host__ = 'http://rqiang.mynatapp.cc';

    //__host__ = 'http://api.xiayuanyin.cn';
    //__host__ = "http://192.168.0.109:3001";
    break;
}
url.host = __host__;

//登录
url.login = __host__ + '/api/doctor/users/login';

//注册
url.sign_up = __host__ + '/api/doctor/users/sign_up';

//注册验证码
url.sendCode = __host__ + '/api/doctor/sms/new';

//验证码验证
url.sendCodeValid = __host__ + '/api/doctor/sms/valid';

//省份
url.regions = __host__ + '/api/doctor/regions/all';

//医院
url.hospitals = __host__ + '/api/doctor/hospitals';

//学校
url.schools = __host__ + '/api/doctor/schools';

//科室
url.departments = __host__ + '/api/doctor/departments/all';

//找回密码
url.update_password = __host__ + '/api/doctor/users/update_password';

//轮播图
url.carousels = __host__ + '/api/doctor/carousels';

//首页 轮播图
url.courses_streams = __host__ + '/api/doctor/courses/streams';

// 直播列表        // 直播详情 ***/id
url.streams = __host__ + '/api/doctor/streams';

// 打赏排行榜
url.bounty_ranking = __host__ + '/api/doctor/streams/bounty_ranking';

// 评论
url.commentsDetail = __host__ + '/api/doctor/comments/detail';

// 发布评论
url.comments = __host__ + '/api/doctor/comments';

// 收藏点赞
url.actionStores = __host__ + '/api/doctor/action_stores';

//录播列表
url.recordings = __host__ + '/api/doctor/recordings';

//系列列表
url.videos = __host__ + '/api/doctor/videos';

//会议首页
url.coursesMeetings = __host__ + '/api/doctor/courses/meetings';

//会议列表地点
url.cities = __host__ + '/api/doctor/department_users/cities';

//会议列表
url.meetings = __host__ + '/api/doctor/meetings';

//会议抢答初始化
url.posts = __host__ + '/api/doctor/posts';

//订单接口地址
url.orders = __host__ + '/api/doctor/mobile/orders';

//直播轮训接口
url.streams_check_status = __host__ + '/api/doctor/streams/check_status';

//线下会议 需要填写的信息
url.attendees_new = __host__ + '/api/doctor/attendees/new';
//线下会议 提交填写的信息
url.attendees = __host__ + '/api/doctor/attendees';

module.exports = url;
