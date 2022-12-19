import type {PropsWithChildren} from 'react';
import React from 'react';
import portrait from '@/assets/img/img_1.png';
const Head: React.FC = (props: PropsWithChildren<any> , context) => {
    console.log(props, context);
    const name = '星';
    return  <svg
        className="svg-icon"
        width="2em"
        height="2em"
        aria-hidden="true"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <pattern
                id="raduisImage"
                patternUnits="userSpaceOnUse"
                width="100"
                height="100"
            >
                <image
                    xlinkHref={portrait}
                    x="0"
                    y="0"
                    height="100"
                    width="100"
                />
            </pattern>
        </defs>
        <circle cx="50" cy="50" r="50" fill="url(#raduisImage)" />
        <path
            pathLength="0.9em"
            d="M 4.18 70 q45.82 7.62 91.64 0 M 95.82 70 A50 50 0 0 1 4.18 70"
            stroke="none"
            strokeWidth="1"
            fill="#4893f9"
         />
        <text x="44" y="90" fontSize='0.6em'  fill="#fff">
            {name}
        </text>
    </svg>
}

export default Head;
