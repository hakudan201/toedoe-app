import TasksPage from "../pages/TasksPage.vue";
import SummaryPage from "../pages/SummaryPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import NotFoundErrorPage from "../pages/error/NotFoundErrorPage.vue";


const routes = [
  {
    path: "/tasks",
    component: TasksPage,
    name: "tasks",
  },
  {
    path: "/summary",
    component: SummaryPage,
    name: "summary",
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login",
  },
  {
    path: "/register",
    component: RegisterPage,
    name: "register",
  },
  {
    path: "/:notFound(.*)",
    name: 'error.404',
    component: NotFoundErrorPage
  }
];

export default routes;
