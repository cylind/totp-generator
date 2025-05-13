// functions/_worker.js (测试用最简版本)
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    console.log(`[TEST WORKER] Request to: ${url.pathname}`);

    if (url.pathname === "/backup") {
      return new Response(JSON.stringify({ message: "Test backup endpoint hit" }), {
        headers: { "Content-Type": "application/json" },
      });
    }
    if (url.pathname === "/restore") {
      return new Response(JSON.stringify({ message: "Test restore endpoint hit" }), {
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response("Test worker default response. Path: " + url.pathname, { status: 404 });
  }
};