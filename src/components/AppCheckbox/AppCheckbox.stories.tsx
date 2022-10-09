import { AppCheckbox } from './AppCheckbox';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Base Components',
    component: AppCheckbox,
} as ComponentMeta<typeof AppCheckbox>;

const Template: ComponentStory<typeof AppCheckbox> = args => <AppCheckbox {...args} />

export const Tumbler = Template.bind({});
