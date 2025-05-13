// functions/_worker.js (确保这是 Git 仓库中的确切内容)
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    // 在 Function 日志中应该能看到这个输出
    console.log(`[SIMPLIFIED WORKER] Request received for: ${request.method} ${url.pathname}`);

    if (url.pathname === "/backup") {
      return new Response(JSON.stringify({ message: "Simplified backup endpoint hit" }), {
        headers: {
          "Content-Type": "application/json",
          // 确保 CORS 头部也在这里，以便浏览器测试
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, X-API-Token', // 或 'Authorization'
        },
      });
    }

    if (url.pathname === "/restore") {
      return new Response(JSON.stringify({ message: "Simplified restore endpoint hit" }), {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, X-API-Token',
        },
      });
    }

    // 处理 OPTIONS 预检请求 (如果你的测试请求会触发它)
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, X-API-Token',
        }
      });
    }

    return new Response("Simplified worker default response. Path: " + url.pathname, {
      status: 404,
      headers: {
        'Access-Control-Allow-Origin': '*', // 即使404也加上CORS头方便调试
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-API-Token',
      }
    });
  }
};