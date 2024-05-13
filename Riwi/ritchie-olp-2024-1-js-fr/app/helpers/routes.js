import { LoginPage } from "../scenes/public/login";
import { HomeScene, ReportScene } from "../scenes/private";

export const routes = {
  private: [
    { path: "/dashboard", component: HomeScene },
    { path: "/dashboard/reports", component: ReportScene },
  ],
  public: [{ path: "/login", component: LoginPage }],
};
