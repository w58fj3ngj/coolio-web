self.__uv$config = {
    prefix: '/static/uv/service/',
    bare: "https://i-thought-i-could-trust-you-no-diddy-dog.satucat.uk/tspmo/",
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
};
