import { LoginPage } from "../scenes/public/login";
import { HomeScene, ReportScene ,auditScene} from "../scenes/private";

export const routes = {
  private: [
    { path: "/dashboard", component: HomeScene },
    { path: "/dashboard/reports", component: ReportScene },
    { path: "/dashboard/audit", component: auditScene},
  ],
  public: [{ path: "/login", component: LoginPage }],
};
