Vue.component('todo-editor', {
  template: `
    <div ref="editor"></div>
  `,

  props: {
    context: Object
  },

  data: function() {
    return {
      editor: null,
      editorOptions: {
        mode: 'javascript',
        theme: 'blackboard',
        lineNumbers: true
      }
    };
  },

  mounted: function() {
    this.editor = MirrorFrame(this.$refs.editor, this.editorOptions);
    //this.editor = CodeMirror(this.$refs.editor, this.editorOptions);
    this.editor.setSize(null, '100%');
    this.$set(this.context.editor = this.editor);
  }
});