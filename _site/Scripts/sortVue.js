Vue.component('subtitle',{
  props: ['subtitle'],
  template: `<h4>{{ subtitle.title}}</h4>`
})

new Vue({
  el: '#SortRoot',
  data: {

    SkillsCategory: [ "Back-end", "Web Development", "Others"],
    SkillsLevel: ['Expert','Intermediate','']
  }

})
