import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductsProvider from "context/productsContext";
import Navbar from "components/navbar/Navbar";
import ProductList from "components/products/ProductList";
import ProductDetail from "components/products/ProductDetail";

const routes = [
  { path: "/producto/:id", name: "", component: ProductDetail },
  { path: "/", name: "Products", component: ProductList },
];

function App() {
  return (
    <ProductsProvider>
      <Router>
        <Navbar />
        <main>
          <div className="container-lg pt-4">
            <Switch>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  exact
                  path={route.path}
                  component={route.component}
                />
              ))}
            </Switch>
          </div>
        </main>
      </Router>
    </ProductsProvider>
  );
}

export default App;
