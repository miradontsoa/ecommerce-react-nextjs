import classNames from "classnames";
import ButtonInlineA from "../button/button-inline-a";
import IconA from "../icon/icon-a";
import ReactionA from "../rating-reaction/reaction-a";
import ColorCategoriesA from "../tags-categories/color-categories-a";
import TagsA from "../tags-categories/tags-a";
import styles from "./card-product-a.module.scss";

type Props = {
  className?: string;
  title: string;
  viewText?: string;
  price?: string;
  description?: string;
  tags?: {
    title: string;
    href?: string;
  }[];
  colors?: {
    title?: string;
    rgb: string;
  }[];
  like?: boolean;
  rating?: number;
  ratingElement?: React.ReactElement;
  quantityElement?: React.ReactElement;
  imageElement?: React.ReactElement;
  aspect?: "2-lines" | "3-lines" | "4-lines";
};

const CardProductA = ({
  className,
  title,
  viewText,
  price,
  description,
  tags,
  imageElement,
  aspect = "2-lines",
  colors,
  quantityElement,
  like,
  rating,
  ratingElement,
}: Props) => {
  return (
    <div className={classNames(className, styles.cardProductA)}>
      <div className={styles.cardImage}>
        {imageElement}
        {/* <img className="" alt="" src="./img/img-square-2.jpg" /> */}
      </div>
      <div className={styles.cardBody}>
        {aspect === "2-lines" && (
          <>
            <div className={styles.line}>
              <div className={styles.lineLeft}>
                <h5 className={styles.title}>{title}</h5>
              </div>
              <div className={styles.lineRight}>
                <p className={styles.price}>{price}</p>
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.lineLeft}>
                {description && (
                  <p className={styles.description}>{description}</p>
                )}
                <TagsA tags={tags} />
              </div>
              <div className={styles.lineRight}>
                <ButtonInlineA text={viewText ? viewText : "Details"} />
              </div>
            </div>
          </>
        )}
        {aspect === "3-lines" && (
          <>
            <div className={styles.line}>
              <div className={styles.lineLeft}>
                <h5 className={styles.title}>{title}</h5>
              </div>
              <div className={styles.lineRight}>
                <ColorCategoriesA colors={colors} />
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.lineLeft}>
                {description && (
                  <p className={styles.description}>{description}</p>
                )}
                <TagsA tags={tags} />
              </div>
              <div className={styles.lineRight}>
                {quantityElement ? quantityElement : <></>}
              </div>
            </div>

            <div className={styles.line}>
              <div className={styles.lineLeft}>
                <p className={styles.price}>{price}</p>
              </div>
              <div className={styles.lineRight}>
                {like != undefined ? (
                  <ReactionA like={like}/>
                ) : (
                  <ButtonInlineA text={viewText ? viewText : "Details"} />
                )}
              </div>
            </div>
          </>
        )}
        {aspect === "4-lines" && (
          <>
            <div className={styles.line}>
              <div className={styles.lineLeft}>
                <p className={styles.price}>{price}</p>
              </div>
              <div className={styles.lineRight}>
              {like != undefined ? (
                  <ReactionA like={like}/>
                ) : (
                  <ButtonInlineA text={viewText ? viewText : "Details"} />
                )}
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.lineLeft}>
                <h5 className={styles.title}>{title}</h5>
              </div>
              <div className={styles.lineRight}>
                <ColorCategoriesA colors={colors} />
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.lineLeft}>
                {description && (
                  <p className={styles.description}>{description}</p>
                )}
                <TagsA tags={tags} />
              </div>
              <div className={styles.lineRight}>
                {quantityElement ? quantityElement : <></>}
              </div>
            </div>

            <div className={styles.line}>
              <div className={styles.lineLeft}>
                {(rating || ratingElement) && (
                  <div className={styles.rating}>
                    {rating != undefined && (
                      <div className={styles.ratingNumber}>
                        <span>{rating}</span>
                        <IconA
                          className={styles.ratingStar}
                          size="text"
                          imageElement={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="59.996"
                              height="56.008"
                              viewBox="0 0 59.996 56.008"
                            >
                              <g
                                id="star"
                                transform="translate(-2380.415 -2518.498)"
                              >
                                <g id="Group_458" data-name="Group 458">
                                  <path
                                    id="Path_577"
                                    data-name="Path 577"
                                    d="M2427.66,2574.5a2,2,0,0,1-1.174-.375l-16.077-11.655-16.076,11.655a2,2,0,0,1-3.068-2.26l6.269-18.571-16.249-11.144a2,2,0,0,1,1.124-3.65h20.048l6.05-18.619a2,2,0,0,1,3.805,0l6.05,18.625h20.048a2,2,0,0,1,1.131,3.65l-16.257,11.138,6.267,18.566a2,2,0,0,1-1.892,2.64Z"
                                  />
                                </g>
                              </g>
                            </svg>
                          }
                        />
                      </div>
                    )}
                    {ratingElement && (
                      <div className={styles.ratingContent}>
                        {ratingElement}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className={styles.lineRight}>
                <ButtonInlineA text={viewText ? viewText : "Details"} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default CardProductA;
