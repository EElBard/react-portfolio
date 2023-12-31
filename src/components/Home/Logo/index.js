import './index.scss';
import { useRef } from 'react';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();

  return (
    <div className='logo-container' ref={bgRef}>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" 
      width="500.000000pt" 
      height="500.000000pt" 
      viewBox="0 0 500.000000 500.000000" 
      preserveAspectRatio="xMidYMid meet">

      <g 
      className='svg-container outline-logo'
      transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" 
      fill="#000000" 
      stroke="none">
      <path ref={outlineLogoRef} d="M1330 2562 l0 -1818 87 -87 87 -87 1143 0 1143 0 0 188 0 187 -81 83 -82 82 -838 0 -839 0 0 585 0 585 795 0 795 0 0 183 0 183 -87 87 -87 87 -708 0 -708 0 0 510 0 510 900 0 900 0 0 188 0 187 -83 83 -82 82 -1128 0 -1127 0 0 -1818z m2235 1728 l0 -65 -1029 -3 -1028 -2 -72 70 -71 70 1100 -3 1100 -2 0 -65z m-2075 -1814 l0 -1716 -65 0 -65 0 0 1783 0 1782 65 -66 65 -67 0 -1716z m2199 1751 c1 -4 -19 -7 -45 -5 l-49 3 -3 49 -3 50 48 -44 c26 -24 50 -48 52 -53z m-121 -114 l3 -83 -906 0 -905 0 0 -618 0 -618 84 -82 85 -82 710 0 711 0 0 -80 0 -80 -795 0 -795 0 0 -687 0 -688 84 -87 83 -88 842 0 841 0 0 -80 0 -80 -1045 0 -1045 0 0 1720 0 1720 1023 -2 1022 -3 3 -82z m160 -65 c1 -82 -1 -148 -5 -148 -4 0 -36 28 -70 62 l-63 62 0 82 c0 44 3 84 7 88 4 4 34 6 68 4 l60 -3 3 -147z m-95 -106 c31 -32 57 -61 57 -65 0 -4 -393 -7 -873 -7 l-873 0 -64 65 -64 65 880 0 880 0 57 -58z m-1713 -609 l0 -513 -65 0 -65 0 0 577 0 577 65 -64 65 -64 0 -513z m0 -593 c0 -27 -1 -50 -3 -50 -1 0 -25 23 -52 50 l-49 50 52 0 52 0 0 -50z m1430 -15 l0 -65 -700 0 -700 0 0 65 0 65 700 0 700 0 0 -65z m85 -15 l49 -50 -52 0 -52 0 0 50 c0 28 1 50 3 50 1 0 25 -22 52 -50z m75 -227 l0 -147 -65 64 -65 64 0 83 0 83 65 0 65 0 0 -147z m-90 -108 l64 -65 -775 0 -775 0 -45 48 c-88 92 -171 82 698 82 l769 0 64 -65z m-1500 -677 l0 -588 -65 0 -65 0 0 652 0 652 65 -64 65 -64 0 -588z m0 -668 c0 -27 -1 -50 -3 -50 -1 0 -25 23 -52 50 l-49 50 52 0 52 0 0 -50z m1690 -15 l0 -65 -830 0 -830 0 0 65 0 65 830 0 830 0 0 -65z m80 -10 l54 -55 -57 0 -57 0 0 55 c0 30 1 55 3 55 1 0 27 -25 57 -55z m80 -230 c0 -80 -4 -145 -8 -145 -5 0 -37 29 -70 64 l-62 64 0 81 0 81 70 0 70 0 0 -145z m-2280 -95 c0 -27 -1 -50 -3 -50 -1 0 -25 23 -52 50 l-49 50 52 0 52 0 0 -50z m2190 -15 l64 -65 -1112 0 -1112 0 0 65 0 65 1048 0 1048 0 64 -65z"/>
      </g>
      </svg>
    </div>
  )
}

export default Logo