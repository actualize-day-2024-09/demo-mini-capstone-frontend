import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="bg-black text-slate-200 p-4">
        <Link className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black" to="/">
          Home
        </Link>
        <Link className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black" to="/products">
          All products
        </Link>
        {localStorage.email ? (
          <>
            <Link className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black" to="/products/new">
              New product
            </Link>
            <Link className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black" to="/carted_products">
              Shopping Cart
            </Link>
            <Link className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black" to="/orders">
              Orders
            </Link>

            <LogoutLink className="p-2 mr-2 rounded-md outline-slate-700 outline hover:bg-slate-200 hover:text-black" />
          </>
        ) : (
          <>
            <Link className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black" to="/signup">
              Signup
            </Link>
            <Link className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black" to="/login">
              Login
            </Link>
          </>
        )}
        <span className="float-end">{localStorage.email}</span>
      </nav>
    </header>
  );
}
