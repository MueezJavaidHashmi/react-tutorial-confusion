import React from "react";
import PropTypes from "prop-types";
import { DishInterface } from "../../common/interfaces";

interface Props {
  dish: DishInterface | null;
}

const MenuCommentsComponent: React.FC<Props> = ({ dish }) => {
  const renderComments = () => {
    if (dish) {
      const { comments } = dish;
      return comments.map((comment) => {
        return (
          <React.Fragment key={comment.id}>
            <p>{comment.comment}</p>
            <p>
              {"-- " +
                comment.author +
                ", " +
                new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(comment.date))}
            </p>
          </React.Fragment>
        );
      });
    }
  };

  const renderCard = () => {
    if (dish) {
      return (
        <React.Fragment>
          <h2>Comments</h2>
          {renderComments()}
        </React.Fragment>
      );
    }
  };

  return <div className={"col-12 col-md-4 m-1"}>{renderCard()}</div>;
};

MenuCommentsComponent.propTypes = {
  dish: PropTypes.any.isRequired,
};

export default MenuCommentsComponent;
