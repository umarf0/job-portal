export const dateUtils = {
	getLatestDate: function (array: any, key: string) {
		return (
			array.length >= 1 &&
			array.reduce((current: any, prev: any) =>
				new Date(current[`${key}`]) > new Date(prev[`${key}`])
					? current
					: prev
			)
		)
	},
}
