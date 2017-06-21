Vue.component('subtitle',{
  props: ['subtitle'],
  data:{

  },
  template: `
  <div>
  <h4>{{ subtitle.title }}</h4>
  <p> {{ subtitle.content }} </p>
  </div>`,
  computed:{
    content:function(){

    },
    title: function(){

    }
  }
})

new Vue({
  el: '#SortRoot',
  data: {
    byCategoryText : "Sort Skills by Category",
    byProficiencyText: "Sort Skills by Proficiency",
    sortingCategory: true,
    SkillsCategory: [ "Back-end", "Web Development", "Others"],
    SkillsLevel: ['Expert','Intermediate','']
  },
  methods: {
    toggleSkills:function(){
      this.sortingCategory = !this.sortingCategory;
    }
  }
})
