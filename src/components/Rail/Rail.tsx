import React, { FC, useState } from 'react';
import { Carousel } from '../Carousel/Carousel';
import { generateMockData } from '../Carousel/utils';

interface IProps {
    itemsOnPage: number;
}

export const Rail: FC<IProps> = ({itemsOnPage}) => {
    const [mockData, setMockData] = useState(generateMockData(0, 15));

    const requestNewData = (flag: boolean) => {
        flag = true;
        setMockData((prev) => {
            return [...prev, ...generateMockData(mockData.length, 15)];
        });
        flag = false;
    };

    return (
        <div>
            <Carousel mockData={mockData} itemsCountPerScroll={itemsOnPage} marginLeft={20} leftAndRightSidesMargin={105} requestNewData={requestNewData} />
        </div>
    );
};
