import React, { useState } from "react";
import { ReactComponent as ArrowDown } from "../../icons/ArrowDown.svg";
import { ReactComponent as Closeicn } from "../../icons/times-circle-solid.svg";
import img from "../../img/marketplace/items/01.jpg";
export default function Marketitem() {
  const [count, setcount] = useState(0);
  const Counter = (i) => {
    if (i === 1) {
      setcount(count + 1);
    } else {
      if (count > 0) {
        setcount(count - 1);
      }
    }
  };
  return (
    <>
      {/* destop */}
      <div className="table-row medium marnone">
        <div className="table-column">
          <div className="product-preview tiny">
            <a href="marketplace-product.html">
              <figure
                className="product-preview-image liquid"
                style={{
                  background: `url(${img}) center center / cover no-repeat`,
                }}
              ></figure>
            </a>
            <div className="product-preview-info">
              <p className="product-preview-title">
                <a href="marketplace-product.html">Twitch Stream UI Pack</a>
              </p>
              <p className="product-preview-category digital">
                <a href="marketplace-category.html">Stream Packs</a>
              </p>
              <p className="product-preview-creator">
                <a href="profile-timeline.html">Marina Valentine</a>
              </p>
            </div>
          </div>
        </div>
        <div className="table-column padded-left">
          <div className="form-counter">
            <p className="form-counter-value">{count}</p>
            <div className="form-counter-controls">
              <div
                onClick={() => {
                  Counter(1);
                }}
                className="form-counter-control form-counter-control-increase"
              >
                <ArrowDown className="form-counter-icon icon-small-arrow" />
              </div>
              <div
                onClick={() => {
                  Counter(2);
                }}
                className="form-counter-control form-counter-control-decrease"
              >
                <ArrowDown className="form-counter-icon icon-small-arrow dwnarrw" />
              </div>
            </div>
          </div>
        </div>
        <div className="table-column  padded-left">
          <p className="price-title">
            <span className="currency">$</span> {12 * count}
          </p>
        </div>

        <div className="table-column padded-big-left">
          <div className="table-action">
            <Closeicn className="icon-delete" />
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="table-row medium mobmar">
        <div className="table-column">
          <div className="product-preview tiny mobmarcnt">
            <a>
              <figure
                className="product-preview-image liquid"
                style={{
                  background: `url(${img}) center center / cover no-repeat`,
                }}
              ></figure>
            </a>
            <div className="product-preview-info">
              <p className="product-preview-title">
                <a href="marketplace-product.html">Twitch Stream UI Pack</a>
              </p>
              <p className="product-preview-category digital">
                <a href="marketplace-category.html">Stream Packs</a>
              </p>
              <p className="product-preview-creator">
                <a href="profile-timeline.html">Marina Valentine</a>
              </p>
            </div>
          </div>
          <div className="sec1">
            <div className="table-column padded-left">
              <div className="form-counter">
                <p className="form-counter-value">{count}</p>
                <div className="form-counter-controls">
                  <div
                    onClick={() => {
                      Counter(1);
                    }}
                    className="form-counter-control form-counter-control-increase"
                  >
                    <ArrowDown className="form-counter-icon icon-small-arrow" />
                  </div>
                  <div
                    onClick={() => {
                      Counter(2);
                    }}
                    className="form-counter-control form-counter-control-decrease"
                  >
                    <ArrowDown className="form-counter-icon icon-small-arrow dwnarrw" />
                  </div>
                </div>
              </div>
            </div>
            <div className="table-column  padded-left">
              <p className="price-title">
                <span className="currency">$</span> {12 * count}
              </p>
            </div>
          </div>
        </div>
        <div className="closemar">
          <div className="table-column padded-big-left">
            <div className="table-action">
              <Closeicn className="icon-delete" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
