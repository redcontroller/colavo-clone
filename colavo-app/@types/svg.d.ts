import React from 'react';

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    export default content;
}