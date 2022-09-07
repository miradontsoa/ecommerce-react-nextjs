import classNames from "classnames";
import styles from "./card-product-b.module.scss";
import ButtonInlineA from "../button/button-inline-a";
import ReactionA from "../../feedback/reaction-a";
import ColorCategoriesA from "../tags-categories/color-categories-a";
import TagsA from "../tags-categories/tags-a";

type Props = {
  className?: string;
  title?: string;
  titleElement?: React.ReactElement;
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
  imagePosition?: "left" | "right";
};

const CardProductB = ({
  className,
  title,
  viewText,
  price,
  description,
  tags,
  imageElement,
  imagePosition="left",
  colors,
  quantityElement,
  titleElement,
  like,
  rating,
  ratingElement,
}: Props) => {
  return (
    <div className={classNames(className, styles.cardProductB, styles[`image-${imagePosition}`])}>
      <div className={styles.cardImage}><div className={styles.cardImageContent}>{imageElement}</div></div>
      <div className={styles.cardBody}>
        <div className={styles.cardBodyContent}>
          {tags && (
            <div className={styles.line}>
              <TagsA tags={tags} />
            </div>
          )}
          <div className={styles.line}>
            {titleElement}
            {title && <h5 className={styles.title}>{title}</h5>}
          </div>
          {description && (
            <div className={styles.line}>
              {description && (
                <p className={styles.description}>{description}</p>
              )}
            </div>
          )}

          {colors && (
            <div className={styles.line}>
              <ColorCategoriesA colors={colors} className={styles.colors} />
            </div>
          )}
          {quantityElement && (
            <div className={styles.line}>
              {quantityElement ? quantityElement : <></>}
            </div>
          )}

          {price && (
            <div className={styles.line}>
              <p className={styles.price}>{price}</p>
            </div>
          )}
          <div className={styles.line}>
            {like != undefined ? (
              <ReactionA like={like} />
            ) : (
              <ButtonInlineA text={viewText ? viewText : "Details"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductB;
