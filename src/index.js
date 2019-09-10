import NscButton from './packages/nsc-button'

const components = {
    NscButton,
}

const install = function (Vue, options = {}) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
}

export default install