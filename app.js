(function mutableHostedFixtureApp() {
  const routeToPage = new Map([
    ["/", "home"],
    ["/settings/billing", "billing"],
    ["/release-notes", "release-notes"],
  ]);
  const pages = new Map(Array.from(document.querySelectorAll("[data-page]")).map((page) => [page.getAttribute("data-page"), page]));

  function renderRoute() {
    const pageName = routeToPage.get(window.location.pathname) || "home";
    for (const [name, page] of pages) {
      page.hidden = name !== pageName;
    }
  }

  function navigate(path) {
    window.history.pushState({}, "", path);
    renderRoute();
  }

  document.querySelectorAll("[data-route-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      navigate(link.getAttribute("href") || "/");
    });
  });

  window.addEventListener("popstate", renderRoute);
  renderRoute();
})();
