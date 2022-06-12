import React from "react";

interface Props {
  active?: boolean;
}

const MenuIcon = ({ active = false }: Props) => {
  return (
    <>
      {active ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
        >
          <g
            id="Group_20170"
            data-name="Group 20170"
            transform="translate(-1918 897)"
          >
            <rect
              id="Rectangle_17962"
              data-name="Rectangle 17962"
              width="9"
              height="9"
              rx="2"
              transform="translate(1918 -897)"
              fill="#0c4ce3"
            />
            <rect
              id="Rectangle_17963"
              data-name="Rectangle 17963"
              width="9"
              height="9"
              rx="2"
              transform="translate(1928 -897)"
              fill="#0c4ce3"
            />
            <path
              id="Path_20443"
              data-name="Path 20443"
              d="M2,0H7A2,2,0,0,1,9,2V7A2,2,0,0,1,7,9H2A2,2,0,0,1,0,7V2A2,2,0,0,1,2,0Z"
              transform="translate(1918 -887)"
              fill="#0c4ce3"
            />
            <rect
              id="Rectangle_17965"
              data-name="Rectangle 17965"
              width="9"
              height="9"
              rx="4.5"
              transform="translate(1928 -887)"
              fill="#0c4ce3"
            />
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
        >
          <g
            id="Group_20158"
            data-name="Group 20158"
            transform="translate(-1918 897)"
          >
            <g
              id="Rectangle_17962"
              data-name="Rectangle 17962"
              transform="translate(1918 -897)"
              fill="none"
              stroke="#9b9b9b"
              strokeWidth="0.75"
            >
              <rect width="9" height="9" rx="2" stroke="none" />
              <rect
                x="0.375"
                y="0.375"
                width="8.25"
                height="8.25"
                rx="1.625"
                fill="none"
              />
            </g>
            <g
              id="Rectangle_17963"
              data-name="Rectangle 17963"
              transform="translate(1928 -897)"
              fill="none"
              stroke="#9b9b9b"
              strokeWidth="0.75"
            >
              <rect width="9" height="9" rx="2" stroke="none" />
              <rect
                x="0.375"
                y="0.375"
                width="8.25"
                height="8.25"
                rx="1.625"
                fill="none"
              />
            </g>
            <g
              id="Rectangle_17964"
              data-name="Rectangle 17964"
              transform="translate(1918 -887)"
              fill="none"
              stroke="#9b9b9b"
              strokeWidth="0.75"
            >
              <rect width="9" height="9" rx="2" stroke="none" />
              <rect
                x="0.375"
                y="0.375"
                width="8.25"
                height="8.25"
                rx="1.625"
                fill="none"
              />
            </g>
            <g
              id="Rectangle_17965"
              data-name="Rectangle 17965"
              transform="translate(1928 -887)"
              fill="none"
              stroke="#9b9b9b"
              strokeWidth="0.75"
            >
              <rect width="9" height="9" rx="4.5" stroke="none" />
              <rect
                x="0.375"
                y="0.375"
                width="8.25"
                height="8.25"
                rx="4.125"
                fill="none"
              />
            </g>
          </g>
        </svg>
      )}
    </>
  );
};

export default MenuIcon;
