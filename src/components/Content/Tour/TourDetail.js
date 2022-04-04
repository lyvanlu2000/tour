import classes from "../Tour/TourDetail.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const TourDetail = (props) => {
  const params = useParams();
    const [tourDetail, setTourDetail] = useState({});

    useEffect(() => {
        axios.get(`https://622ac4ec14ccb950d224ca1b.mockapi.io/danhmuc/${params.id}`)
            .then(res => setTourDetail(res.data));
    }, []);
  return (
    <div className={classes.container}>
        
      <div className={classes.hinhanh}>
      <h1>{tourDetail.ten}</h1>
        <hr/>
        <img
          src={tourDetail.hinhanh}
          alt="null"
        />
        <div className={classes.danhgia}>
          <p>Traveloka</p>
          <p>8.6 Tốt</p>
          <p>Từ 33 đánh giá</p>
        </div>
        <div className={classes.timtour}>
          <h3>Giá từ</h3>
          <h1>{tourDetail.gia} VND</h1>
          <button>Tìm tour</button>
        </div>
       <hr/>
      </div>
    </div>
  );
};

export default TourDetail;
