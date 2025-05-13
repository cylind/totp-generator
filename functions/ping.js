// functions/ping.js
export async function onRequestGet(context) {
  // context.env, context.request, context.waitUntil, context.next
  console.log("[PING FUNCTION] Ping request received");
  return new Response("Pong from ping.js!", {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/plain'
    }
  });
}