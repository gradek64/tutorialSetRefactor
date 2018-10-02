
const filters =  {
	searchText:'',
	sortBy:'byOrder',
	hideCompleted:false,
};

const getFilters = () => filters;

const setFilters = ({searchText, sortBy, hideCompleted}) =>{

	if (typeof searchText === 'string') {
		filters.searchText = searchText
	}

	if (typeof sortBy === 'string') {
		filters.sortBy = sortBy
	}

	filters.hideCompleted = hideCompleted ? true : false;
	
};

export { getFilters, setFilters };