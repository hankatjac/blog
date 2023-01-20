import React from "react";
import Like from "./Like";
import { Link } from "react-router-dom";

const Sider = () => {
  return (
    <>
      <aside class="sidebar">
        <div class="card mb-4">
          <div class="card-body">
            <h4 class="card-title">About</h4>
            <p class="card-text">
              Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
              sem quam <a href="#">semper libero</a>, sit amet adipiscing sem
              neque sed ipsum.{" "}
            </p>
          </div>
        </div>
      </aside>

      <aside class="sidebar sidebar-sticky">
        <div class="card mb-4">
          <div class="card-body">
            <h4 class="card-title">Categories</h4>
            <Link class="btn btn-light btn-sm mb-1" to="/?cat=business">
              Business
            </Link>
            <Link class="btn btn-light btn-sm mb-1" to="/?cat=culture">
              Culture
            </Link>
            <Link class="btn btn-light btn-sm mb-1" to="/?cat=technology">
              Technology
            </Link>
            <Link class="btn btn-light btn-sm mb-1" to="/?cat=quotidian">
              Quotidian
            </Link>
          </div>
        </div>
        {/* <div class="card mb-4">
          <div class="card-body">
            <Like />
          </div>
        </div> */}
      </aside>
    </>
  );
};

export default Sider;
