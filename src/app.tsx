import { basicSetup, EditorView } from 'codemirror'
import { autocompletion } from '@codemirror/autocomplete'

const App = () => {

  const editorRef = (el: HTMLElement) => {

    // Our list of completions (can be static, since the editor
    /// will do filtering based on context).
    const completions = [
      { label: 'panic', type: 'keyword' },
      { label: 'park', type: 'constant', info: 'Test completion' },
      { label: 'password', type: 'variable' },
    ]

    function myCompletions(context) {
      const before = context.matchBefore(/\w+/)
      // If completion wasn't explicitly started and there
      // is no word before the cursor, don't open completions.
      if (!context.explicit && !before) return null
      return {
        from: before ? before.from : context.pos,
        options: completions,
        validFor: /^\w*$/
      }
    }

    const view = new EditorView({
      doc: '// Type a \'p\'\n',
      extensions: [
        basicSetup,
        autocompletion({ override: [myCompletions] })
      ],
      parent: el
    })

  }

  return (
    <div ref={editorRef}></div>
  )
}

export default App
