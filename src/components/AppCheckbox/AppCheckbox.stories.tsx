import { AppCheckbox } from './AppCheckbox';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Color } from '../../types/Colors';
import { Size } from '../../types/Sizes';

export default {
    title: 'Basic Components/Buttons',
    component: AppCheckbox,
} as ComponentMeta<typeof AppCheckbox>;

const Template: ComponentStory<typeof AppCheckbox> = args => <AppCheckbox {...args} />

export const Switcher = Template.bind({});
Switcher.args = {
    color: Color.BRAND, 
    size: Size.MEDIUM, 
    checked: false,
}
