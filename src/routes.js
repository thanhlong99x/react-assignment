import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./component/admin/trangchu";
import ListProducts from "./pages/admin/products/list";
import AddFormProduct from "./pages/admin/products/add";
import EditFormProduct from "./pages/admin/products/edit";
import React from "react";
import Signup from "./pages/admin/website/signup";
import Login from "./pages/admin/website/login";
import AdminLayout from "./layouts/adminLayout";
import WebsiteLayout from "./layouts/websiteLayout";
import AdminRoute from "./auth/adminRoute";
import Home from "./pages/admin/website/home";
import Contact from "./pages/admin/website/contact";
import About from "./pages/admin/website/about";
import Detail from "./pages/admin/website/detail";
import ListCategories from "./pages/admin/category/list";
import AddFormCategory from "./pages/admin/category/add";
import EditFormCategory from "./pages/admin/category/edit";
import ProductById from "./pages/admin/website/productbyid";
import Demo from "./Demo";

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin/:path?/:path?/:path?/:path?">
          <AdminLayout>
            <Switch>
              <AdminRoute exact path="/admin">
                <Index />
              </AdminRoute>
              <AdminRoute exact path="/admin/product">
                <ListProducts {...props} />
              </AdminRoute>
              <AdminRoute exact path="/admin/product/add">
                <AddFormProduct {...props} />
              </AdminRoute>
              <AdminRoute exact path="/admin/product/:id/edit">
                <EditFormProduct {...props} />
                {/* <Demo /> */}
              </AdminRoute>
              <AdminRoute exact path="/admin/category">
                <ListCategories {...props} />
              </AdminRoute>
              <AdminRoute exact path="/admin/category/add">
                <AddFormCategory {...props} />
              </AdminRoute>
              <AdminRoute exact path="/admin/category/:id/edit">
                <EditFormCategory {...props} />
              </AdminRoute>
            </Switch>
          </AdminLayout>
        </Route>

        <Route>
          <WebsiteLayout path="/:path?/:path?/:path?">
            <Switch>
              <Route exact path="/">
                <Home {...props}/>
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/detail/:id">
                <Detail {...props} />
              </Route>
              <Route exact path="/category/:id">
                <ProductById {...props} />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
            </Switch>
          </WebsiteLayout>
        </Route>
      </Switch>
    </Router>
  );
};
export default Routes;
