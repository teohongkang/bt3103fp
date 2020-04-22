import UserProfile from "./components/UserProfile.vue";
import Login from "./components/Login.vue";
import Analytics from "./components/Analytics.vue";
import AboutUs from "./components/AboutUs.vue";
import GrpFinder from "./components/GrpFinder.vue";
import CreateGroup from "./components/CreateGroup2.vue";

export default [
  { path: "/", component: Login },
  { path: "/UserProfile", component: UserProfile },
  { path: "/CreateGroup", component: CreateGroup },
  { path: "/visuals", component: Analytics },
  { path: "/AboutUs", component: AboutUs },
  { path: "/GrpFinder", component: GrpFinder }
];