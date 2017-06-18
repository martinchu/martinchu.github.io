Vue.component('subtitle',{
  props: ['subtitle'],
  template: `
  <div>
  <h4>{{ subtitle.title }}</h4>
  <p> {{ subtitle.content }} </p>
  </div>`
})

new Vue({
  el: '#SortRoot',
  data: {

    SkillsCategory: [ "Back-end", "Web Development", "Others"],
    SkillsLevel: ['Expert','Intermediate','']
  },
  computed:{

  }

})
