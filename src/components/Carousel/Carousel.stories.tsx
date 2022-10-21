import { Carousel } from './Carousel';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Base Components',
    component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = args => <Carousel {...args} />

export const CarouselStory = Template.bind({});
