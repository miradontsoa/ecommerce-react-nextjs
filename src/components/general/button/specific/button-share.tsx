import IconA from "../../icon/icon-a";
import ButtonInlineA from "../button-inline-a";
type Props = {
  text?: string
  productRef?: string
}
const ButtonShare = ({ productRef, text = "Share" }: Props) => {
  return (
    <a href={`/#share?product=${productRef}`}>
      <ButtonInlineA
        iconElement={<IconA size="x-small" imageElement={<svg xmlns="http://www.w3.org/2000/svg" width="24.002" height="25.987" viewBox="0 0 24.002 25.987">
          <path id="share-social" d="M24,21a3.994,3.994,0,0,0-2.883,1.231l-9.25-5.2a3.974,3.974,0,0,0,0-2.054l9.25-5.2a3.985,3.985,0,1,0-.983-1.742l-9.25,5.2a4,4,0,1,0,0,5.538l9.25,5.2A4,4,0,1,0,24,21h0Z" transform="translate(-3.998 -3.013)" />
        </svg>
        } />}
        text={text}
      />
    </a>);
}
export default ButtonShare;