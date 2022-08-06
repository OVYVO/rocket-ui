import Toast from './main.vue';

export default {
  title: 'Toast',
  component: Toast,
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: ['primary', 'error', 'warning', 'success']
      }
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Toast },
  template: '<toast v-bind="$props"/>'
});

export const Primary = Template.bind({});
Primary.args = {

};