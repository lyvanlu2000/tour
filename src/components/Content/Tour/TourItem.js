import classes from "../Tour/TourItem.module.css";
import Card from "../../UI/Card";
import Right from "./Right";
import { useParams } from "react-router-dom";

const TourItem = (props) => {
  const params = useParams();

  return (
    <div className={classes.container}>
      <h1>Tất cả kết quả cho thành phố HCM</h1>
      <div className={classes.left}>
        
        <h1>Đặt lại bộ lọc</h1>
        
        <div className={classes.boloc}>
          <h2>Độc quyền Xperience</h2>
          <div className={classes.tag}>
            <a href="">Trãi nghiệm mới</a>
          </div>
        </div>
      </div>
      <Right />
    </div>
  );
};

export default TourItem;
