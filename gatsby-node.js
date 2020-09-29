exports.createPages = async function ({ actions }) {
  actions.createPage({
    path: "dynamic-page",
    component: require.resolve(`./src/templates/dynamic-page.tsx`),
    context: {
      name: "Jani Gaga Dynamic Page Wala",
    },
  }
  );
  console.log('Jani Gaga')
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions


  if (page.path.match(/^\/home/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/home/*"

    // Update the page.
    createPage(page)
  }
}