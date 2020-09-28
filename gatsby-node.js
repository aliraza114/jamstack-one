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