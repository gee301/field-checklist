/* Where the app finds its AI server.
   - Azure Static Web Apps with the included /api folder: leave as "api/".
   - A separate Azure Function App: put its full address here, e.g. "https://scope-ai.azurewebsites.net/api/".
   - No AI: leave it; the app hides the agent when no server answers. */
window.SCOPE_CONFIG = { apiBase: "api/" };
