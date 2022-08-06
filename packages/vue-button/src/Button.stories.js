import Button from './main.vue';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    //type: {
    //  control: {
    //    type: 'inline-radio',
    //    options: ['primary', 'error', 'warning', 'success']
    //  }
    //}
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<button v-bind="$props"/>'
});

export const Primary = Template.bind({});
Primary.args = {

};
