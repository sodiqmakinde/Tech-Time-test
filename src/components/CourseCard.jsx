import React from "react";
import styled from "styled-components";
import Course1 from "../assets/images/course1.png";

export const CourseCard = ({ allCourses }) => {
  return (
    <Card className="each_courses">
      <img src={allCourses.courseImg} alt="" className="course_img" />
      <div className="create">
        <div className="flex_this cat_rate">
          <span className="tag">{allCourses.category}</span>
          <h6>4.7k <span className="corn">★</span> (32.7k)</h6>
        </div>
        <h4>{allCourses.title}</h4>
        <div className="flex_this duration">
          <span>
            <span class="material-symbols-outlined">schedule</span>{allCourses.duration}
          </span>
          <h6>
            <span class="material-symbols-outlined">menu_book</span>{allCourses.totalLessons} Lessons
          </h6>
        </div>
        <div className="flex_this prices">
          <h5>
            <img className="thumbnail" src={allCourses.instructorPicture}  alt="" />{" "}
            <span>{allCourses.instructorName} </span>
          </h5>
          <h4>${allCourses.price} </h4>
        </div>
      </div>
    </Card>
  );
};

const Card = styled.div`
  border-radius: 16px;
  padding: 16px 20px;
  margin-bottom: 24px;
  background: #ffffff;
  border-radius: 16px;
  .course_img {
    height: 292.67px;
  }
  .corn{
    font-size: 18px;
    color:  #F7B435;
    margin: 0 5px;
  }

  .create {
    h4 {
      margin-top: 20px;
    }
    .prices {
      margin-top: 30px;
      img {
        width: 40px;
        height: 40px;
      }
      span{
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        text-transform: capitalize;
        color: #000000;
        position: relative;
        top: -12px;
        margin-left: 9px;
      }
      
      h4 {
        color: var(--Global);
       position: relative;
       top: -6px;
      }
    }
  }
  .cat_rate {
    .tag {
      padding: 3px 20px;
      background: rgba(30, 93, 206, 0.2);
      border-radius: 16px;
      font-weight: 600;

      font-size: 12px;
      line-height: 16px;
      text-transform: capitalize;

      color: #1e5dce;
    }
    h6 {
      margin: 10px 0;
    }
  }
  .duration {
    margin-top: 10px;
    span {
      position: relative;
      margin-left: 30px;
      span {
        left: -60px;
        top: -7px;
        position: absolute;
      }
    }
    h6 {
      position: relative;
      margin-left: 30px;
      span {
        left: -62px;
        top: -13px;
        position: absolute;
      }
    }
  }
  .flex_this {
    display: flex;
    justify-content: space-between;
    align-items: center;
    article {
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      text-transform: capitalize;
    }
    h6 {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      margin: 10px 0;
      text-transform: capitalize;
      color: #a1a1a1;
    }
  }
`;
