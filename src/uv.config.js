/*global Omegaviolet*/
self.__uv$config = {
	prefix: "/service/",
	encodeUrl: Omegaviolet.codec.xor.encode,
	decodeUrl: Omegaviolet.codec.xor.decode,
	handler: "/uv.handler.js",
	client: "/uv.client.js",
	bundle: "/uv.bundle.js",
	config: "/uv.config.js",
	sw: "/uv.sw.js",
};
