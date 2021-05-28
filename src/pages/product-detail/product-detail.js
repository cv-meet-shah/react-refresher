import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRestaurentById,
  selectRestaurent,
} from "../../stores/restaurent.slice";
import {
  fetchReviewsByRestaurentId,
  selectReviews,
} from "../../stores/reviews.slice";
import fallback from "../../utilities/assets/fallback.png";

import "./product-detail.scss";

export const ProductDetail = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();

  const restaurentSelector = useSelector(selectRestaurent);
  const restStatus = restaurentSelector.status;

  const reviewSelector = useSelector(selectReviews);
  const reviewStatus = reviewSelector.status;

  useEffect(() => {
    if (restStatus === "idle" || restaurentSelector.restaurent?.id !== id) {
      dispatch(fetchRestaurentById(id));
    }

    if (reviewStatus === "idle" || restaurentSelector.restaurent?.id !== id) {
      dispatch(fetchReviewsByRestaurentId(id));
    }
  }, [restStatus, id, restaurentSelector.restaurent, reviewStatus, dispatch]);

  let content;
  let reviewContent;

  if (restStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (restStatus === "succeed") {
    content = RestaurentPage(restaurentSelector.restaurent);
  }

  if (reviewStatus === "loading") {
    reviewContent = <div className="loader ml-3">Loading...</div>;
  } else if (reviewStatus === "succeed") {
    reviewContent = ReviewCards(reviewSelector.reviews);
  }

  return (
    <div className="restaurent-page container pt-3 pb-3">
      <div className="card mb-3">
        <div className="card-body">{content}</div>
      </div>
      <div className="row mt-3 pr-3 review-wrapper">
        <div className="col-12">
          <h3>Reviews</h3>
        </div>
        {reviewContent}
      </div>
    </div>
  );
};

const RestaurentPage = (details) => {
  return (
    <div className="row">
      <div className="col-3">
        <div
          className="position-relative card-image"
          style={{ backgroundImage: `url(${details.thumb || fallback})` }}
        ></div>
      </div>
      <div className="col-8">
        <h1>{details.name}</h1>
        <div className="text-wrapper position-absolute">
          <p className="text-grey mb-0 mt-3">
            <span className="mr-2">{details.location.city}</span>
            <span>| {details.mezzo_provider}</span>
          </p>
          <p className="border-top">
            <span className="text-success mr-2">Open now</span>
            <span className="text-danger mr-2">{details.cuisines}</span>
            <span className="text-grey">
              Cost {details.currency} {details.average_cost_for_two} for two
            </span>
          </p>
        </div>
      </div>
      <div className="col-1">
        <div className="float-right text-center">
          <div
            className="rating"
            style={{
              backgroundColor: "#" + details.user_rating.rating_color,
            }}
          >
            {details.user_rating.aggregate_rating} <span>/5</span>
          </div>
          <span className="text-grey text-vote">
            {details?.user_rating?.votes} votes
          </span>
        </div>
      </div>
    </div>
  );
};

const ReviewCards = (reviews) => {
  return (
    <div className="card-wrapper">
      {reviews.map((review) => Review(review))}
      {reviews.length === 0 && <p className="align-p">No Reviews available.</p>}
    </div>
  );
};

const Review = (review) => {
  return (
    <div className="review-card card" key={review.id}>
      <div className="card-body">
        <div className="mb-3">
          <span className="user-rating">
            Rated
            <span
              className="badge ml-2"
              style={{ backgroundColor: "#" + review.rating_color }}
            >
              {review.rating}
            </span>
          </span>
          &nbsp;
          {review.review_text}
          <br />
          <span className="d-flex mt-2 mb-2 align-items-center">
            <FontAwesomeIcon icon={faHeart} className="mr-2 text-danger" />
            {review.likes} Likes &nbsp; &nbsp;
            <FontAwesomeIcon icon={faComment} className="mr-2 text-info" />
            {review.comments_count} Comments
          </span>
        </div>
        <div className="row pl-3 pr-3 mt-auto">
          <div className="col-3 p-0">
            <img
              className="avatar"
              src={(review.user && review.user.profile_image) || fallback}
              alt="avatar"
            />
          </div>
          <div className="col-9">
            <div className="review-name">{review.user.name}</div>
            <div className="text-grey">{review.user.foodie_level}</div>
            <span className="text-grey text-left">
              {review.review_time_friendly}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
