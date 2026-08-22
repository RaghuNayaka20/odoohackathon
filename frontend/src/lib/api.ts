export type ApiResponse<T> = {
	success: boolean;
	data?: T;
	message?: string;
};

export type HealthStatus = {
	success: boolean;
	service: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

export async function apiRequest<T>(path: string, options?: RequestInit): Promise<T> {
	const response = await fetch(`${apiUrl}${path}`, {
		...options,
		headers: {
			"Content-Type": "application/json",
			...options?.headers,
		},
	});

	const payload = (await response.json()) as ApiResponse<T> & T;
	if (!response.ok) {
		throw new Error(payload.message ?? "Request failed");
	}

	return (payload.data ?? payload) as T;
}

export function getHealth() {
	return apiRequest<HealthStatus>("/api/health", { cache: "no-store" });
}
