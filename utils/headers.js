const removeHeaders = (res) => {
    
    res.removeHeader("content-security-policy")
    res.removeHeader("cross-origin-embedder-policy")
    res.removeHeader("cross-origin-opener-policy")
    res.removeHeader("cross-origin-resource-policy")
    res.removeHeader("x-dns-prefetch-control")
    res.removeHeader("x-frame-options")
    res.removeHeader("strict-transport-security")
    res.removeHeader("x-download-options")
    res.removeHeader("x-content-type-options")
    res.removeHeader("origin-agent-cluster")
    res.removeHeader("x-permitted-cross-domain-policies")
    res.removeHeader("referrer-policy")
    res.removeHeader("x-xss-protection")
    res.removeHeader("etag")
}



module.exports = {removeHeaders}