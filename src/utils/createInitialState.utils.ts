export const createInitialState = (fields:any[]) => {
	let nameFields: any = {}
	fields.forEach((field: any) => {
		nameFields[field.name] = field.value
	})
	return nameFields
}