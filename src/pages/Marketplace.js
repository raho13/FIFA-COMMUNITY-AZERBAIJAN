import React from "react";
import bannerimg from "../img/banner/marketplace-icon.png";
import Banner from "../component/Banner";
import Marketitem from "../component/Marketplace/Marketitem";
import Input from "../component/Input";
export default function Marketplace() {
  return (
    <>
      <Banner
        img={bannerimg}
        header="Marketplace"
        des="The best place for the community to buy and sell!"
      />
      <div className="section-header">
        <div className="section-header-info">
          <p className="section-pretitle">Browse Your</p>
          <h2 className="section-title">
            Shopping Cart <span className="highlighted">3</span>
          </h2>
        </div>
      </div>
      <div className="grid grid-9-3 small-space">
        <div className="grid-column">
          <div className="table-wrap" data-simplebar="init">
            <div className="simplebar-wrapper" style={{ margin: 0 }}>
              <div className="simplebar-height-auto-observer-wrapper">
                <div className="simplebar-height-auto-observer" />
              </div>
              <div className="simplebar-mask">
                <div 
                  className="simplebar-offset"
                  style={{ right: 0, bottom: 0 }}
                >
                  <div
                    className="simplebar-content-wrapper"
                    style={{ height: "auto", overflow: "auto" }}
                  >
                    <div className="simplebar-content" style={{ padding: 0 }}>
                      <div className="table table-cart split-rows">
                        <div className="table-header">
                          <div className="table-header-column">
                            <p className="table-header-title">Item</p>
                          </div>
                          <div className="table-header-column padded-left">
                            <p className="table-header-title">Quantity</p>
                          </div>
                          <div className="table-header-column centered padded-left">
                            <p className="table-header-title">Price</p>
                          </div>
                          <div className="table-header-column padded-big-left" />
                        </div>
                        <div className="table-body same-color-rows">
                          <Marketitem />
                          <Marketitem />
                          <Marketitem />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-track simplebar-horizontal"
              style={{ visibility: "hidden" }}
            >
              <div
                className="simplebar-scrollbar"
                style={{
                  width: 0,
                  display: "none",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              />
            </div>
            <div
              className="simplebar-track simplebar-vertical"
              style={{ visibility: "hidden" }}
            >
              <div
                className="simplebar-scrollbar"
                style={{ height: 0, display: "none" }}
              />
            </div>
          </div>
          <div className="promo-line">
            <p className="promo-line-text">
              If you have a promotional or a discount code, please enter it
              right here to redeem it!
            </p>
            <div className="promo-line-actions">
              <Input label="Promo Code" />
              <p className="button secondary">Redeem Code</p>
            </div>
          </div>
        </div>
        <div className="grid-column">
          <div className="sidebar-box margin-top">
            <p className="sidebar-box-title">Order Totals</p>
            <div className="sidebar-box-items">
              <p className="price-title big">
                <span className="currency">$</span> 39.00
              </p>
              <div className="totals-line-list">
                <div className="totals-line">
                  <p className="totals-line-title">Cart (3)</p>
                  <p className="price-title">
                    <span className="currency">$</span> 44.00
                  </p>
                </div>
                <div className="totals-line">
                  <p className="totals-line-title">Code</p>
                  <p className="price-title">
                    -<span className="currency">$</span> 5.00
                  </p>
                </div>
                <div className="totals-line">
                  <p className="totals-line-title">Total</p>
                  <p className="price-title">
                    <span className="currency">$</span> 39.00
                  </p>
                </div>
              </div>
              <a className="button primary" href="marketplace-checkout.html">
                Proceed to Checkout
              </a>
              <p className="button white small-space">Update Cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
