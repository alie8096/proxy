function FindProxyForURL(url, host) {
	if (shExpMatch(host, "*.local") ||shExpMatch(host, "localhost")) {
		return "DIRECT";
	}
	
	return "PROXY proxy.example.com:8080"
}
