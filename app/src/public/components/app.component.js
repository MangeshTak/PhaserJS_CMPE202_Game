Vue.component('todo-app', {
  template: `
    <b-container fluid>
      <b-row class="h-100 p-3">
        <b-col cols="5">
          <todo-editor class="h-100"></todo-editor>
        </b-col>
        
        <b-col cols="7">
          <todo-game-screen class="h-100"></todo-game-screen>
        </b-col>
      </b-row>
    </b-container>
  `
});