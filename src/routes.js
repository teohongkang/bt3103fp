import PageContent from "./components/PageContent.vue";
import UserProfile from "./components/UserProfile.vue";
import Login from "./components/Login.vue";
import Dashboard from "./components/Dashboard.vue";
import Analytics from "./components/Analytics.vue";
import AboutUs from "./components/AboutUs.vue";
import GrpFinder from "./components/GrpFinder.vue";
import CreateGroup from "./components/CreateGroup2.vue";

export default [
  { path: "/", component: Login },
  { path: "/UserProfile", component: UserProfile },
  { path: "/dashboard", component: Dashboard },
  { path: "/CreateGroup", component: CreateGroup },
  { path: "/list", component: PageContent },
  { path: "/visuals", component: Analytics },
  { path: "/AboutUs", component: AboutUs },
  { path: "/GrpFinder", component: GrpFinder }
];