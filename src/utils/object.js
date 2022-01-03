export const concatObject = (obj1, obj2) => {
	if (typeof obj1 === 'object' && obj1 !== null && typeof obj2 === 'object' && obj2 !== null) {
		return { ...obj1, ...obj2 };
	}
	return undefined;
};
