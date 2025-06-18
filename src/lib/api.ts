interface Metro {
	id: string;
	name: string;
	// Add other metro properties as needed
}

export const getMetros = async (): Promise<Metro[]> => {
	const res = await fetch("http://localhost:8080/engage/metros/all");
	const data = await res.json();
	return data;
}
