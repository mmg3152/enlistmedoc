import Vue from "vue";
import Router from "vue-router";
import { getCookie } from "../helper";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";

import UserDashboard from "@/components/user/Dashboard";
import SearchDoctor from "@/components/user/Search";
import SearchValue from "@/components/user/SearchResult";
import Enlistment from "@/components/user/Enlistment";
import HMO from "@/components/user/HMO";
import AboutUs from "@/components/user/About";
import PatientGuide from "@/components/user/Guide";
import HowToUse from "@/components/user/HowToUse";
import PatientEducation from "@/components/user/PatientEducation";

import AdminDashboard from "@/components/admin/Dashboard";
import AddSecretary from "@/components/admin/Secretary";
import AddAdmin from "@/components/admin/Admin";
import AddDepartment from "@/components/admin/Department";
import AddClerk from "@/components/admin/Clerk";
import ViewUsers from "@/components/admin/view";
import ViewDoctors from "@/components/admin/viewDoctors";

import SecretaryDashboard from "@/components/secretary/Dashboard";
import SecretarySMS from "@/components/secretary/sms";
import SecretaryOnline from "@/components/secretary/online";
import SecretarySettings from "@/components/secretary/settings";
import SecretaryViewSchedule from "@/components/secretary/create";
import SecretaryCreateSchedule from "@/components/secretary/createView";

import ClerkDashboard from "@/components/clerk/Dashboard";
import AccreditedDoctors from "@/components/clerk/Accredited";

import Profile from "@/components/Profile";

Vue.use(Router);

const Routes = new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp,
      meta: {
        guest: true
      }
    },
    {
      path: "/user/dashboard",
      name: "User",
      component: UserDashboard
      // meta: {
      //   requiresAuth: true,
      //   type: "User"
      // }
    },
    {
      path: "/user/search",
      name: "Search Doctor",
      component: SearchDoctor
      // meta: {
      //   requiresAuth: true,
      //   type: "User"
      // }
    },
    {
      path: "/user/search/result",
      name: "Search Result",
      component: SearchValue
      // meta: {
      //   requiresAuth: true,
      //   type: "User"
      // }
    },
    {
      path: "/user/my-enlistment",
      name: "Enlistment",
      component: Enlistment,
      meta: {
        requiresAuth: true,
        type: "User"
      }
    },
    {
      path: "/user/hmo",
      name: "HMO",
      component: HMO,
      meta: {
        requiresAuth: true,
        type: "User"
      }
    },
    {
      path: "/user/about-us",
      name: "About Us",
      component: AboutUs
      // meta: {
      //   requiresAuth: true,
      //   type: "User"
      // }
    },
    {
      path: "/user/patient-guide",
      name: "Patient Guide",
      component: PatientGuide
      // meta: {
      //   requiresAuth: true,
      //   type: "User"
      // }
    },
    {
      path: "/user/how-to-user",
      name: "How to Use",
      component: HowToUse
      // meta: {
      //   requiresAuth: true,
      //   type: "User"
      // }
    },
    {
      path: "/user/patient-education",
      name: "Patient Education",
      component: PatientEducation
      // meta: {
      //   requiresAuth: true,
      //   type: "User"
      // }
    },
    {
      path: "/admin/dashboard",
      name: "Admin",
      component: AdminDashboard,
      meta: {
        requiresAuth: true,
        type: "Admin"
      }
    },
    {
      path: "/admin/add/secretary",
      name: "Add Secretary",
      component: AddSecretary,
      meta: {
        requiresAuth: true,
        type: "Admin"
      }
    },
    {
      path: "/admin/add/admin",
      name: "Add Admin",
      component: AddAdmin,
      meta: {
        requiresAuth: true,
        type: "Admin"
      }
    },
    {
      path: "/admin/add/department",
      name: "Add Department",
      component: AddDepartment,
      meta: {
        requiresAuth: true,
        type: "Admin"
      }
    },
    {
      path: "/admin/add/clerk",
      name: "Add Clerk",
      component: AddClerk,
      meta: {
        requiresAuth: true,
        type: "Admin"
      }
    },
    {
      path: "/admin/view-users",
      name: "View Users",
      component: ViewUsers,
      meta: {
        requiresAuth: true,
        type: "Admin"
      }
    },
    {
      path: "/admin/view-doctors",
      name: "View Doctors",
      component: ViewDoctors,
      meta: {
        requiresAuth: true,
        type: "Admin"
      }
    },
    {
      path: "/secretary/dashboard",
      name: "Secretary",
      component: SecretaryDashboard,
      meta: {
        requiresAuth: true,
        type: "Secretary"
      }
    },
    {
      path: "/secretary/sms",
      name: "Secretary SMS",
      component: SecretarySMS,
      meta: {
        requiresAuth: true,
        type: "Secretary"
      }
    },
    {
      path: "/secretary/online",
      name: "Secretary Online",
      component: SecretaryOnline,
      meta: {
        requiresAuth: true,
        type: "Secretary"
      }
    },
    {
      path: "/secretary/settings",
      name: "Secretary Settings",
      component: SecretarySettings,
      meta: {
        requiresAuth: true,
        type: "Secretary"
      }
    },
    {
      path: "/secretary/view",
      name: "Secretary View",
      component: SecretaryViewSchedule,
      meta: {
        requiresAuth: true,
        type: "Secretary"
      }
    },
    {
      path: "/secretary/create",
      name: "Secretary Create",
      component: SecretaryCreateSchedule,
      meta: {
        requiresAuth: true,
        type: "Secretary"
      }
    },
    {
      path: "/clerk/dashboard",
      name: "Clerk",
      component: ClerkDashboard,
      meta: {
        requiresAuth: true,
        type: "Clerk"
      }
    },
    {
      path: "/clerk/doctors",
      name: "Accredited Doctors",
      component: AccreditedDoctors,
      meta: {
        requiresAuth: true,
        type: "Clerk"
      }
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

Routes.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (getCookie("token") === undefined) {
      next({ name: "Login" });
    } else {
      if (!getCookie("type") === to.matched.some(record => record.meta.type)) {
        if ("Profile" === to.name) {
          next();
        } else {
          next({ name: getCookie("type") });
        }
      } else {
        next();
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (getCookie("token") === undefined) {
      next();
    } else {
      next({ name: getCookie("type") });
      // next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default Routes;
