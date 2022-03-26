export const encodeAnimeName = (name: string) => {
	return name
		?.replaceAll('(', 'скобка')
		?.replaceAll(')', 'скобка2')
		?.replaceAll('?', 'вопрос')
		?.replaceAll('%', 'процент')
}
