/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

 module.exports = {
  docsSidebar: [
  'Getting-Started',
    {
      type: 'category',
      label: 'Tutorial',
      items: [
        {
          type: 'doc',
          id: 'tutorial/introduction',
          label: 'Introduction',
        },
        {
          type: 'doc',
          id: 'tutorial/chat-termination',
          label: 'Chat Termination',
        },
        {
          type: 'doc',
          id: 'tutorial/human-in-the-loop',
          label: 'Human in the Loop',
        },
        {
          type: 'doc',
          id: 'tutorial/code-executors',
          label: 'Code Executors',
        },
        {
          type: 'doc',
          id: 'tutorial/conversation-patterns',
          label: 'Conversation Patterns',
        },
        {
          type: 'doc',
          id: 'tutorial/what-is-next',
          label: 'What is Next?',
        }
      ],
    },
    {
      type: "category",
      label: "Installation",
      collapsed: true,
      items: ["installation/Docker", "installation/Optional-Dependencies"],
      link: {
        type: 'doc',
        id: "installation/Installation"
      },
    },
    {
      type: 'category',
      label: 'Topics',
      link: {
        type: 'generated-index',
        title: 'Topics',
        description: 'Learn about various topics in AutoGen',
      slug: 'topics',
      },
      items: [{type: 'autogenerated', dirName: 'topics'}]},
    {'Use Cases': [{type: 'autogenerated', dirName: 'Use-Cases'}]},
    'Contribute',
    'Research',
    {'Ecosystem': [{type: 'autogenerated', dirName: 'ecosystem'}]},
    'Migration-Guide'
  ],
  // pydoc-markdown auto-generated markdowns from docstrings
  referenceSideBar: [require("./docs/reference/sidebar.json")],
  notebooksSidebar: [
    {
      type: "category",
      label: "Notebooks",
      items: [{
        type: "autogenerated",
        dirName: "notebooks",
      },],
      link: {
        type: 'doc',
        id: "notebooks"
      },
    },

  ]
};
