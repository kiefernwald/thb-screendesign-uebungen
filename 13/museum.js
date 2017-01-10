// Museum app component
Vue.component('museum', {
  template: '\
  <div class="container">\
    <header>\
        <slot name="header"></slot>\
        <div class="menu"><slot name="menu"></slot></div>\
    </header>\
    <slot></slot>\
    <footer>\
        <slot name="footer"></slot>\
    </footer>\
  </div>'
})