const dummyData = {
  fields: {
    name: {
      name: 'name',
      type: 'text',
      localize: false,
      options: []
    },
    snippet: {
      name: 'snippet',
      type: 'code',
      localize: false,
      options: []
    },
    tags: {
      name: 'tags',
      type: 'tags',
      localize: false,
      options: []
    },
    language: {
      name: 'language',
      type: 'select',
      localize: false,
      options: {
        options: ['html', 'javascript', 'css', 'java', 'python', 'php']
      }
    },
    description: {
      name: 'description',
      type: 'text',
      localize: false,
      options: []
    }
  },
  entries: [
    {
      name: 'Javascript - console.log()',
      snippet: 'console.log("Hi all!")',
      tags: ['displayingoutput'],
      _mby: '5c556374613762001900008e',
      _by: '5c556374613762001900008e',
      _modified: 1549108005,
      _created: 1549101948,
      _id: '5c556b7c61376200290001d4',
      language: 'javascript',
      description:
        'This code snippet demonstrates displaying output in Javascript'
    },
    {
      name: 'Java - System.out.println()',
      snippet:
        'public static void main(String args[]) {\n    System.out.println("Hi all!");\n}',
      tags: ['displayingoutput'],
      language: 'java',
      _mby: '5c556374613762001900008e',
      _by: '5c556374613762001900008e',
      _modified: 1549108003,
      _created: 1549103789,
      _id: '5c5572ad613762004a000194',
      description: 'This code snippet demonstrates displaying output in Java'
    },
    {
      name: 'Python - print()',
      snippet: 'print("Hi all!")',
      tags: ['displayingoutput'],
      language: 'python',
      _mby: '5c556374613762001900008e',
      _by: '5c556374613762001900008e',
      _modified: 1549108002,
      _created: 1549103879,
      _id: '5c55730761376200490001a2',
      description: 'This code snippet demonstrates displaying output in Python'
    },
    {
      name: 'Python - lambda syntax',
      snippet: 'x = lambda a,b: a + " " + b\nprint(x("Hi","all!"))',
      tags: ['arrow'],
      language: 'python',
      _mby: '5c556374613762001900008e',
      _by: '5c556374613762001900008e',
      _modified: 1549108193,
      _created: 1549104619,
      _id: '5c5575eb613762004d00037a',
      description:
        'This code snippet demonstrates the arrow function equivalent in Python'
    },
    {
      name: 'Java - lambda syntax',
      snippet:
        'public class HiAll {\n\n  public static void main(String[] args) {\n    Lambdafy foo = (parameter1, parameter2) -> parameter1 + parameter2;\n    String result = OtherClass.add("Hi ", "all!", foo);\n    System.out.println(result);\n  }\n}\n\nclass OtherClass {\n  static String add(String string, String string2, Lambdafy foo) {\n      return foo.method(string, string2);\n  }\n}\n\ninterface Lambdafy {\n    String method(String string, String string2);\n}\n',
      tags: ['arrow'],
      language: 'java',
      _mby: '5c556374613762001900008e',
      _by: '5c556374613762001900008e',
      _modified: 1549108192,
      _created: 1549106385,
      _id: '5c557cd1613762004a000090',
      description:
        'This code snippet demonstrates the arrow function equivalent in Java'
    },
    {
      name: 'Javascript - arrow syntax',
      snippet: 'const add = (a,b) => a + " " + b\nadd("Hi", "all!")',
      tags: ['arrow'],
      language: 'javascript',
      description:
        'This code snippet demonstrates the arrow syntax in Javascript',
      _mby: '5c556374613762001900008e',
      _by: '5c556374613762001900008e',
      _modified: 1549108187,
      _created: 1549107714,
      _id: '5c5582026137620052000311'
    },
    {
      name: 'React - Creating a component',
      snippet:
        "import React from 'react'\n\n\nconst Greeting = (props) => (\n    <p>{props.greetingMessage}</p> //Hi all!\n)\n\nexport default Greeting\n",
      tags: ['react', 'component'],
      language: 'javascript',
      description: 'A sample component made in React. Props is optional.',
      _mby: '5c556374613762001900008e',
      _by: '5c556374613762001900008e',
      _modified: 1549110182,
      _created: 1549108749,
      _id: '5c55860d613762004900018a'
    },
    {
      name: 'React - Fetching data for a component',
      snippet:
        "class Snipper extends Component {\n  constructor() {\n    super()\n\n    this.state = {\n      snippets: [],\n      isLoading: true\n    }\n  }\n\n  componentDidMount() {\n    fetch(\n      'http://192.168.1.124:8080/api/collections/get/snippets?token=84588594ba67fc351bd6d464bb6b3a'\n    )\n      .then(response => response.json())\n      .then(data => this.setState({ snippets: data.entries, isLoading: false }))\n  }\n  \n  ...\n}",
      tags: ['react', 'component'],
      language: 'javascript',
      description: 'Fetching data during the componentDidMount() event.',
      _mby: '5c556374613762001900008e',
      _by: '5c556374613762001900008e',
      _modified: 1549121356,
      _created: 1549121223,
      _id: '5c55b6c7613762005c000079'
    },
    {
      name: 'React - Router',
      snippet:
        "import React from 'react';\nimport { BrowserRouter as Router, Route, Switch } from 'react-router-dom'\nimport App from './App'\nimport Login from './Login'\n\nconst Root = () => (\n  <Router >\n    <Switch>\n      <Route path=\"/login\" component={Login} />\n      <Route path=\"/\" component={App} />\n    </Switch>\n  </Router>\n)\n\nexport default Root\n",
      tags: ['react', 'routing', 'component'],
      language: 'javascript',
      description: 'An example on how to implement routing in React',
      _mby: '5c556374613762001900008e',
      _by: '5c556374613762001900008e',
      _modified: 1549121553,
      _created: 1549121553,
      _id: '5c55b811613762005800034a'
    },
    {
      name: 'Styled components example',
      snippet:
        'const Button = styled.a`\n  /* This renders the buttons above... Edit me! */\n  display: inline-block;\n  border-radius: 3px;\n  padding: 0.5rem 0;\n  margin: 0.5rem 1rem;\n  width: 11rem;\n  background: transparent;\n  color: white;\n  border: 2px solid white;\n\n  /* The GitHub button is a primary button\n   * edit this to target it specifically! */\n  ${props => props.primary && css`\n    background: white;\n    color: palevioletred;\n  `}\n`',
      tags: '',
      language: 'javascript',
      description:
        'Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress ',
      _mby: '5c556374613762001900008e',
      _by: '5c556374613762001900008e',
      _modified: 1549121663,
      _created: 1549121663,
      _id: '5c55b87f613762006500010c'
    }
  ],
  total: 10
}


export default dummyData