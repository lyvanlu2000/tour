import React from "react";
import leonui from "../../img/leonui.webp";
import classes from "./Header.module.css";
import { Fragment } from "react";
import SearchBox from "../Content/SearchBox";

const Header = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/8c5c07f3e6c8c7806ef853f5e943e27b.svg"/>
        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg"/>
        <div className={classes.dropdow}>
          tải ứng dụng
          <div className={classes.dow}>
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/725bdbbc829236edb107bb810038bd72.svg" />
          </div>
        </div>
        <div className={classes.quicklink}>
          <a href="">
            <div className={classes.icon}>
              <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/bdab924c2bd3a5fb492022beb158a6ef.svg" />
            </div>
            Hợp tác với chúng tôi
          </a>
          <a href="">
            <div className={classes.icon}>
              <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c80a2b136969e32f4db682792d1110f6.svg" />
            </div>
            Đã lưu
          </a>
          <a href="">
            <div className={classes.icon}>
              <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b0f87008a7a01d72ffb5eacf06870cba.svg" />
            </div>
            Đặt chỗ của tôi
          </a>
        </div>
        <div className={classes.vnd}>
          <div className={classes.saovang}>
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/96f8c046147fb32a009ba122f35312aa.svg" />
          </div>
          VND
          <div className={classes.dow}>
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/725bdbbc829236edb107bb810038bd72.svg" />
          </div>
        </div>
        <div className={classes.dangnhap}>
          <div className={classes.ava}>
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f2ccb8732da6068a2f24a40aea2bdcdd.svg" />
          </div>
          Đăng nhập
          <div className={classes.dow}>
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/725bdbbc829236edb107bb810038bd72.svg" />
          </div>
        </div>
        <button>Đăng ký</button>
      </div>
      <div className={classes["main-image"]}>
        <h1>Tour</h1>
        <img src={leonui} alt="logo" />
        <SearchBox></SearchBox>
      </div>
    </Fragment>
  );
};

export default Header;
