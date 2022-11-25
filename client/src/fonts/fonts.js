import { createGlobalStyle } from 'styled-components';
import BMJUA from './BMJUA.woff';
import Ansungtangmyun from './Ansungtangmyun.woff';
import Humanbumsuk from './Humanbumsuk.woff';
import GangwonEdu from './GangwonEdu.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Ansungtangmyun';
        src: local('Ansungtangmyun'), url(${Ansungtangmyun}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'BMJUA';
        src: local('BMJUA'), url(${BMJUA}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
    font-family: 'Humanbumsuk';
    src: local('Humanbumsuk'), url(${Humanbumsuk}) format('woff');
    font-weight: normal;
    font-style: normal;

    @font-face {
    font-family: 'GangwonEdu_OTFBoldA';
    src: local('GangwonEdu'), url(${GangwonEdu}) format('woff');
    font-weight: normal;
    font-style: normal;
}
}
`;
