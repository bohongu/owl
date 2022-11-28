import { createGlobalStyle } from 'styled-components';
import BMJUA from './BMJUA.woff';
import Humanbumsuk from './Humanbumsuk.woff';
import Nanum from './Nanum.woff';
import NanumSquareNeoTTFeHv from './NanumSquareNeoTTFeHv.woff';
import SCDream9 from './SCDream9.woff';
import SCDream3 from './SCDream3.woff';
import SCDream6 from './SCDream6.woff';
import SCDream4 from './SCDream4.woff';

export default createGlobalStyle`
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
    }

    @font-face {
    font-family: 'NanumSquareNeo-Variable';
    src: local('Nanum'), url(${Nanum}) format('woff');
    font-weight: normal;
    font-style: normal;
    }

    @font-face {
    font-family: 'NanumSquareNeoTTF-eHv';
    src: local('NanumSquareNeoTTFeHv'), url(${NanumSquareNeoTTFeHv}) format('woff');
    font-weight: normal;
    font-style: normal;
    }

    @font-face {
    font-family: 'SCDream9';
    src: local('SCDream9'), url(${SCDream9}) format('woff');
    font-weight: normal;
    font-style: normal;
    }

    @font-face {
    font-family: 'SCDream3';
    src: local('SCDream3'), url(${SCDream3}) format('woff');
    font-weight: normal;
    font-style: normal;
    }

    @font-face {
    font-family: 'SCDream6';
    src: local('SCDream6'), url(${SCDream6}) format('woff');
    font-weight: normal;
    font-style: normal;
    }
    
    @font-face {
    font-family: 'SCDream4';
    src: local('SCDream4'), url(${SCDream4}) format('woff');
    font-weight: normal;
    font-style: normal;
    }


`;
