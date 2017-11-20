import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

Vue.use(Router)

/* layout */
import Layout from '../views/layout/Layout'

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will no redirct in the levelbar
 * noDropdown : if `noDropdown:true` will has no submenu
 * meta : { role: ['admin'] }  will control the page role
 **/
export const constantRouterMap = [
  {path: '/login', component: _import('login/index'), hidden: true},
  {path: '/register', component: _import('login/register'), hidden: true},
  {path: '/password', component: _import('login/password'), hidden: true},
  {path: '/authredirect', component: _import('login/authredirect'), hidden: true},
  {path: '/404', component: _import('errorPage/404'), hidden: true},
  {path: '/401', component: _import('errorPage/401'), hidden: true},
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [{path: 'dashboard', component: _import('dashboard/index')}]
  },
  {
    path: '/introduction',
    component: Layout,
    redirect: '/introduction/index',
    icon: 'people',
    noDropdown: true,
    children: [{path: 'index', component: _import('introduction/index'), name: '简述'}]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    name: '权限测试',
    icon: 'lock',
    meta: {role: ['admin']},
    noDropdown: true,
    children: [{path: 'index', component: _import('permission/index'), name: '权限测试页', meta: {role: ['admin']}}]
  },
  {
    path: '/icon',
    component: Layout,
    icon: 'icon',
    noDropdown: true,
    children: [{path: 'index', component: _import('svg-icons/index'), name: 'icons'}]
  },

  {
    path: '/project_manage',
    component: Layout,
    redirect: '/project_manage/new_project',
    name: '项目管理',
    icon: 'component',
    children: [
      {path: 'new_project', component: _import('project_manage/new_project'), name: '采购立项 '},
      {path: 'prepare_project', component: _import('project_manage/prepare_project'), name: '前期准备项目'},
      {path: 'execute_project', component: _import('project_manage/execute_project'), name: '正在执行项目'},
      {path: 'expire_project', component: _import('project_manage/expire_project'), name: '已到期项目'},
      {path: 'end_project', component: _import('project_manage/end_project'), name: '已完结项目'},
      {path: 'exception_project', component: _import('project_manage/exception_project'), name: '异常项目'},
      {path: 'authorize_project', component: _import('project_manage/authorize_project'), name: '被授权项目'}
    ]
  },
  {
    path: '/library_manage',
    component: Layout,
    redirect: '/library_manage/agency_lib',
    name: '库管理',
    icon: 'component',
    children: [
      {path: 'agency_lib', component: _import('library_manage/agency_lib'), name: '采购代理库 '},
      {path: 'supplier_lib', component: _import('library_manage/supplier_lib'), name: '供应商库'}
    ]
  },
  {
    path: '/application',
    component: Layout,
    redirect: '/application/schedule',
    name: '辅助功能',
    icon: 'component',
    children: [
      {path: 'schedule', component: _import('application/schedule'), name: '日程安排 '},
      {path: 'share_set', component: _import('application/share_set'), name: '共享设置 '},
      {path: 'msg_set', component: _import('application/msg_set'), name: '短信管理 '},
      {path: 'template_set', component: _import('application/template_set'), name: '模板管理'}
    ]
  },
  {
    path: '/sys_manage',
    component: Layout,
    redirect: '/sys_manage/company_staff',
    name: '系统管理',
    icon: 'component',
    children: [
      {path: 'company_staff', component: _import('sys_manage/company_staff'), name: '单位人员管理 '},
      {path: 'company_info', component: _import('sys_manage/company_info'), name: '单位信息'},
      {path: 'personal_info', component: _import('sys_manage/personal_info'), name: '个人信息'}
    ]
  },
  {
    path: '/components',
    component: Layout,
    redirect: '/components/index',
    name: '组件',
    icon: 'icon',
    children: [
      {path: 'index', component: _import('components/index'), name: '介绍 '},
      {path: 'tinymce', component: _import('components/tinymce'), name: '富文本编辑器'},
      {path: 'markdown', component: _import('components/markdown'), name: 'Markdown'},
      {path: 'jsoneditor', component: _import('components/jsonEditor'), name: 'JSON编辑器'},
      {path: 'dndlist', component: _import('components/dndList'), name: '列表拖拽'},
      {path: 'splitpane', component: _import('components/splitpane'), name: 'SplitPane'},
      {path: 'avatarupload', component: _import('components/avatarUpload'), name: '头像上传'},
      {path: 'dropzone', component: _import('components/dropzone'), name: 'Dropzone'},
      {path: 'sticky', component: _import('components/sticky'), name: 'Sticky'},
      {path: 'countto', component: _import('components/countTo'), name: 'CountTo'},
      {path: 'mixin', component: _import('components/mixin'), name: '小组件'},
      {path: 'backtotop', component: _import('components/backToTop'), name: '返回顶部'}
    ]
  },
  {
    path: '/charts',
    component: Layout,
    redirect: '/charts/index',
    name: '图表',
    icon: 'icon',
    children: [
      {path: 'index', component: _import('charts/index'), name: '介绍'},
      {path: 'keyboard', component: _import('charts/keyboard'), name: '键盘图表'},
      {path: 'keyboard2', component: _import('charts/keyboard2'), name: '键盘图表2'},
      {path: 'line', component: _import('charts/line'), name: '折线图'},
      {path: 'mixchart', component: _import('charts/mixChart'), name: '混合图表'}
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: 'noredirect',
    name: '综合实例',
    icon: 'example',
    children: [
      {
        path: '/example/table',
        component: _import('example/table/index'),
        redirect: '/example/table/table',
        name: 'Table',
        icon: 'table',
        children: [
          {path: 'dynamictable', component: _import('example/table/dynamictable/index'), name: '动态table'},
          {path: 'dragtable', component: _import('example/table/dragTable'), name: '拖拽table'},
          {path: 'inline_edit_table', component: _import('example/table/inlineEditTable'), name: 'table内编辑'},
          {path: 'table', component: _import('example/table/table'), name: '综合table'}
        ]
      },
      {path: 'form/edit', icon: 'form', component: _import('example/form'), name: '编辑Form', meta: {isEdit: true}},
      {path: 'form/create', icon: 'form', component: _import('example/form'), name: '创建Form'},
      {path: 'tab/index', icon: 'tab', component: _import('example/tab/index'), name: 'Tab'}
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: '错误页面',
    icon: '404',
    children: [
      {path: '401', component: _import('errorPage/401'), name: '401'},
      {path: '404', component: _import('errorPage/404'), name: '404'}
    ]
  },
  {
    path: '/errlog',
    component: Layout,
    redirect: 'noredirect',
    name: 'errlog',
    icon: 'bug',
    noDropdown: true,
    children: [{path: 'log', component: _import('errlog/index'), name: '错误日志'}]
  },
  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/download',
    name: 'excel',
    icon: 'excel',
    children: [
      {path: 'download', component: _import('excel/index'), name: 'export excel'},
      {path: 'download2', component: _import('excel/selectExcel'), name: 'export selected'},
      {path: 'upload', component: _import('excel/uploadExcel'), name: 'upload excel'}
    ]
  },
  {
    path: '/zip',
    component: Layout,
    redirect: '/zip/download',
    name: 'zip',
    icon: 'zip',
    children: [
      {path: 'download', component: _import('zip/index'), name: 'export zip'}
    ]
  },
  {
    path: '/theme',
    component: Layout,
    redirect: 'noredirect',
    name: 'theme',
    icon: 'theme',
    noDropdown: true,
    children: [{path: 'index', component: _import('theme/index'), name: '换肤'}]
  },
  {
    path: '/clipboard',
    component: Layout,
    redirect: 'noredirect',
    icon: 'clipboard',
    noDropdown: true,
    children: [{path: 'index', component: _import('clipboard/index'), name: 'clipboard'}]
  },
  {path: '*', redirect: '/404', hidden: true}
]
