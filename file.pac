function FindProxyForURL(url, host) {
        if (dnsDomainIs(host, "35.198.79.151") || dnsDomainIs(host, "looker-demo.c.data-engineering-real.internal")){
                return "SOCKS localhost:2222";
            }

        // DEFAULT RULE
        return "DIRECT";
    }
