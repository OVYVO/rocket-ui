import Statistics from './main.vue';

export default {
  title: 'Statistics',
  component: Statistics,
  // argTypes: {
  //   type: {
  //     control: {
  //       type: 'inline-radio',
  //       options: ['primary', 'error', 'warning', 'success']
  //     }
  //   }
  // },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Statistics },
  template: '<statistics v-bind="$props"/>'
});

export const Primary = Template.bind({});
Primary.args = {

};