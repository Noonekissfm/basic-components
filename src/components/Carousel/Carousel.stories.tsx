import { Carousel } from './Carousel';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Basic Components/Carousel',
    component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />

export const Default = Template.bind({});
