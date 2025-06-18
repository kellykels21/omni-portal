import { getMetros } from "@/lib/api";

export default async function Metros() {
	const metros = await getMetros();
	console.log(metros);
  
	return (
		<div>
			<h1>Metros</h1>
		</div>
	)
 }
