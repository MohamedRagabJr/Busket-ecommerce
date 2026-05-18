import Link from 'next/link';
import React from 'react'

function DemoContent() {
  return (
    <div>
      <div className="body-root-inner">
  {/* vendor-grid-top-area start */}
  <div className="vendor-grid-top-search-area">
    <h5 className="title">Our Brand</h5>
    <form action="#" className="input-area-search-head-vendor">
      <input type="text" placeholder="Search vendors (by name or ID)..." />
      <Link href="#" className="rts-btn btn-primary radious-sm with-icon">
        <div className="btn-text">Search</div>
        <div className="arrow-icon">
          <i className="fa-light fa-magnifying-glass" />
        </div>
        <div className="arrow-icon">
          <i className="fa-light fa-magnifying-glass" />
        </div>
      </Link>
    </form>
  </div>
  {/* vendor-grid-top-area end */}
  <div className="vendor-list-main-wrapper">
    <div className="card-body">
      {/* rts brand area start */}
      <div className="rts-brtand-area-main">
        <div className="row g-4">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="single-brand-area-start">
              <div className="logo">
                <img src="/assets/images-dashboard/brand/01.png" alt="brand" />
              </div>
              <p className="item">
                <Link href="#">206 Items</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="single-brand-area-start">
              <div className="logo">
                <img src="/assets/images-dashboard/brand/08.png" alt="brand" />
              </div>
              <p className="item">
                <Link href="#">105 Items</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="single-brand-area-start">
              <div className="logo">
                <img src="/assets/images-dashboard/brand/09.png" alt="brand" />
              </div>
              <p className="item">
                <Link href="#">26 Items</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="single-brand-area-start">
              <div className="logo">
                <img src="/assets/images-dashboard/brand/10.png" alt="brand" />
              </div>
              <p className="item">
                <Link href="#">99 Items</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="single-brand-area-start">
              <div className="logo">
                <img src="/assets/images-dashboard/brand/11.png" alt="brand" />
              </div>
              <p className="item">
                <Link href="#">26 Items</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="single-brand-area-start">
              <div className="logo">
                <img src="/assets/images-dashboard/brand/09.png" alt="brand" />
              </div>
              <p className="item">
                <Link href="#">52 Items</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="single-brand-area-start">
              <div className="logo">
                <img src="/assets/images-dashboard/brand/01.png" alt="brand" />
              </div>
              <p className="item">
                <Link href="#">26 Items</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="single-brand-area-start">
              <div className="logo">
                <img src="/assets/images-dashboard/brand/09.png" alt="brand" />
              </div>
              <p className="item">
                <Link href="#">125 Items</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="single-brand-area-start">
              <div className="logo">
                <img src="/assets/images-dashboard/brand/08.png" alt="brand" />
              </div>
              <p className="item">
                <Link href="#">26 Items</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="single-brand-area-start">
              <div className="logo">
                <img src="/assets/images-dashboard/brand/10.png" alt="brand" />
              </div>
              <p className="item">
                <Link href="#">302 Items</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="single-brand-area-start">
              <div className="logo">
                <img src="/assets/images-dashboard/brand/11.png" alt="brand" />
              </div>
              <p className="item">
                <Link href="#">116 Items</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="single-brand-area-start">
              <div className="logo">
                <img src="/assets/images-dashboard/brand/08.png" alt="brand" />
              </div>
              <p className="item">
                <Link href="#">120 Items</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* rts brand area end */}
    </div>
  </div>
  {/* bottom footer areas start */}
  <div className="footer-copyright">
    <div className="left">
      <p>Copyright © 2025 All Right Reserved.</p>
    </div>
    <ul>
      <li>
        <Link href="#">Terms</Link>
      </li>
      <li>
        <Link href="#">Privacy</Link>
      </li>
      <li>
        <Link href="#">Help</Link>
      </li>
    </ul>
  </div>
  {/* bottom footer areas end */}
</div>

    </div>
  )
}

export default DemoContent