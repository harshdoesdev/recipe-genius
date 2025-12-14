import { greet } from './index';

const server = Bun.serve({
  port: 3000,
  fetch(req: Request) {
    const url = new URL(req.url);
    if (url.pathname === '/health') {
      return new Response('ok', { headers: { 'content-type': 'text/plain' } });
    }
    if (url.pathname === '/') {
      return Response.json({
        name: 'Recipe Genius',
        status: 'ready',
        message: greet('developer'),
        docs: { health: '/health' },
      });
    }
    return new Response('Not Found', { status: 404 });
  },
});

console.log(`Server listening on http://localhost:${server.port}`);
