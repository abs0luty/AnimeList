export const decodeAnimeName = (name: string) => {
	return name
		?.replaceAll('(', 'bracket')
		?.replaceAll(')', 'bracket2')
		?.replaceAll('?', 'question')
		?.replaceAll('%', 'precentage')
}
