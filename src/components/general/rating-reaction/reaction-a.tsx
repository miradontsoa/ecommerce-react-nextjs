import IconA from "../icon/icon-a";

const ReactionA = ({
  like,
}: {
  like?: boolean;
}) => {
  return (
    <>
      {like == true ? (
        <IconA
          size="x-small"
          imageElement={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52.003"
              height="48.001"
              viewBox="0 0 52.003 48.001"
            >
              <g
                id="heart-sharp"
                transform="translate(-297.24 -1207.309)"
                fill="currentColor"
              >
                <g id="Group_197" data-name="Group 197">
                  <path
                    id="Path_246"
                    data-name="Path 246"
                    d="M323.241,1255.31l-1.125-.751c-5.348-3.571-12.114-7.607-17.125-13.54-5.282-6.25-7.815-12.668-7.75-19.625a14.1,14.1,0,0,1,13.885-14.085,15.755,15.755,0,0,1,12.115,6.027,15.751,15.751,0,0,1,12.115-6.027,14.1,14.1,0,0,1,13.885,14.082c.07,6.96-2.464,13.375-7.75,19.625-5.012,5.936-11.778,9.972-17.125,13.543l-1.125.75Z"
                  />
                </g>
              </g>
            </svg>
          }
        />
      ) : (
        <IconA
          size="x-small"
          imageElement={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52.003"
              height="48.072"
              viewBox="0 0 52.003 48.072"
            >
              <g id="heart-outline" transform="translate(-166.791 -1207.31)">
                <g id="Group_196" data-name="Group 196">
                  <path
                    id="Path_245"
                    data-name="Path 245"
                    d="M204.907,1209.31c-8.115,0-12.115,8-12.115,8s-4-8-12.115-8a12.083,12.083,0,0,0-11.885,12.1c-.138,13.666,10.841,23.385,22.875,31.552a2,2,0,0,0,2.25,0c12.032-8.167,23.011-17.886,22.875-31.552a12.083,12.083,0,0,0-11.885-12.1Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                  />
                </g>
              </g>
            </svg>
          }
        />
      )}
    </>
  );
};

export default ReactionA;