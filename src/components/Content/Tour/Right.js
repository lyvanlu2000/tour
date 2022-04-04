import classes from "./Right.module.css";
import React, { useEffect, useState } from "react";
import { Button, Card, List, message, Select } from "antd";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const Right = () => {
  const [productList, setProductList] = useState([]);
  const [filterOption, setFilterOption] = useState([]);
  const navigate = useNavigate();

  const { Option } = Select;

  useEffect(() => {
    axios
      .get("https://622ac4ec14ccb950d224ca1b.mockapi.io/danhmuc")
      .then((res) => {
        setProductList([...productList, ...res.data]);
        setFilterOption([...filterOption, ...res.data]);
      });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.right}>
        <button className={classes.locgia}>
          VND 0 - VND 4.000.000+
          <img
            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/8537ce8fe832f4d73d28a686595accec.svg"
            alt="null"
          />
        </button>

        <button className={classes.xeptheo}>
          phổ biến nhất
          <img
            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/8537ce8fe832f4d73d28a686595accec.svg"
            alt="null"
          />
        </button>
      </div>
      <div className={classes.danhsach}>
        <List
          grid={{ gutter: 4, column: 0 }}
          dataSource={productList}
          renderItem={(item) => (
            <List.Item>
              <div
                onClick={() => navigate("/chitiet/" + item.id)}
                className={classes.hinhanh}
              >
                <img alt="example" src={item.hinhanh} />
                <div className={classes.noidung}>
                <h2>{item.ten}</h2>
                <h1>{item.gia}</h1> 
                
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Right;
