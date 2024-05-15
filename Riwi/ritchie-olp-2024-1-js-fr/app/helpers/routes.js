import { LoginPage } from "../scenes/public/login";
import { HomeScene, ReportScene ,AuditScene, User} from "../scenes/private";


export const routes = {
  private: [
    { path: "/dashboard", component: HomeScene },
    { path: "/dashboard/reports", component: ReportScene },
    { path: "/dashboard/audit", component: AuditScene},
    { path: "/dashboard/user", component: User}
  ],
  public: [{ path: "/login", component: LoginPage }],
};
