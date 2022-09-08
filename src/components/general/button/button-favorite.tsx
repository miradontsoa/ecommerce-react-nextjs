import ReactionA from "components/feedback/reaction-a";
import { useState } from "react";
import ButtonInlineA from "./button-inline-a";

type Props = {
  productRef?: string;
  like?: boolean;
  text?: string;
  showText?: boolean;
  onSetLike?: (like: boolean) => void;
};

/**
 * Add to favorite button
 * @param param0 
 * @returns 
 */
const ButtonFavorite = ({
  productRef,
  like = false,
  text = "Add to wishlist",
  showText = true,
  onSetLike,
}: Props) => {
  const [_like, setLike] = useState(like);
  const addToFavorite = async () => {
    // TODO add product ref to favorite API call here
    console.log(`TODO : An API call to add to favorite ${productRef}`)
    // If success, toggle like icon state
    onSetLike && onSetLike(!_like);
    setLike(!_like);
    
  };
  return (
    <button
      className="btn-reset"
      type="button"
      onClick={() => {
        addToFavorite();
      }}
    >
      <ButtonInlineA
        iconElement={<ReactionA like={_like} />}
        text={showText && text}
      />
    </button>
  );
};

export default ButtonFavorite;
