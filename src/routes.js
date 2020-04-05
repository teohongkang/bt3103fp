import PageContent from "./components/PageContent.vue";
import AddItem from "./components/AddItem.vue";
import Home1 from "./components/Home1.vue";
import Home2 from "./components/Home2.vue";
import Dashboard from "./components/Dashboard.vue";
import Analytics from "./components/Analytics.vue";
import AboutUs from "./components/AboutUs.vue";
import GrpFinder from "./components/GrpFinder.vue";
import CreateGroup2 from "./components/CreateGroup2.vue";

export default [
  { path: "/home1", component: Home1 },
  { path: "/home2", component: Home2 },
  { path: "/dashboard", component: Dashboard },
  { path: "/add", component: AddItem },
  { path: "/list", component: PageContent },
  { path: "/visuals", component: Analytics },
  { path: "/AboutUs", component: AboutUs },
  { path: "/GrpFinder", component: GrpFinder },
  { path: "/create", component: CreateGroup2}
];
