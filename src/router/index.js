import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue';
import ShareCourse from "../views/ShareCourse.vue"
 import Profile from "../views/Profile.vue"
 import EditProfile from "../views/EditProfile.vue"
const routes=[
  
{ path: '/',
name: 'home',
component: Home,
},
{ path: '/profile/:userid',
name: 'profile',
component: Profile,
meta:{requiresAuth:true}
},
{ path: '/sharecourse',
name: 'sharecourse',
component: ShareCourse,
meta:{requiresAuth:true}
},
{ path: '/editProfile/:userid',
name: 'editProfile',
component: EditProfile,
meta:{requiresAuth:true}
},
]

const route=createRouter({
    history:createWebHistory(),
    routes
})
export default route