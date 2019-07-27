const useTabs = (initailTab, allTabs) => {
	if (!allTabs || !Array.isArray(allTabs)) {
		return;
	}
	const [currentIndex, setCurrentIndex] = useState(initailTab);

	return {
		currentItem: allTabs[currentIndex],
		changeItem: setCurrentIndex
	};
};