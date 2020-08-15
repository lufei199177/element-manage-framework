var functionList=[{
    id: '000',
    name: '首页',
    url: 'home.html',
    parentId: '',
    status: 1,
    iconClass: 'el-icon-document',
    seq: 0,
    children: []
},{
    id: '001',
    name: '系统管理',
    url: '',
    parentId: '',
    status: 1,
    iconClass: 'el-icon-setting',
    seq: 1,
    children: [{
        id: '001.001',
        name: '功能管理',
        url: 'system/function.html',
        parentId: '001',
        status: 1,
        iconClass: 'el-icon-tickets',
        seq: 1,
    },{
        id: '001.002',
        name: '角色管理',
        url: 'system/role.html',
        parentId: '001',
        status: 1,
        iconClass: 'el-icon-share',
        seq: 2,
    },{
        id: '001.003',
        name: '用户管理',
        url: 'system/user.html',
        parentId: '001',
        status: 1,
        iconClass: 'el-icon-goods',
        seq: 3,
    }]
}];

var roleList=[{
    id: '1',
    name: '管理员',
    functions: ['000','001','001.001','001.002']
},{
    id: '2',
    name: '普通员工',
    functions: ['000']
}];

var userList=[{
    id: '1',
    name: 'test',
    loginAccount: 'test',
    password: '123456',
    phone: '123',
    email: '123456@qq.com',
    rememberPwd: 1,
    roles: [{
        id: '1',
        name: '管理员',
        functions: ['000','001','001.001','001.002']
    }]
}]