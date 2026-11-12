export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    try {
      // Envoyer le fichier statique correspondant via le binding ASSETS
      return await env.ASSETS.fetch(request);
    } catch (e) {
      return new Response("Not found", { status: 404 });
    }
  },
};
