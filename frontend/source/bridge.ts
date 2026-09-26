declare global {
	interface Window {
		hostInvoke: <T>(method: string, params: any) => Promise<T>;
		hostEvent: (event: string, payload: any) => Promise<void>;
	}
}