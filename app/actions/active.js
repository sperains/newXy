
export const ADD_ACTIVE_LIST = 'ADD_ACTIVE_LIST';
export const DELETE_ACTIVE = 'DELETE_ACTIVE';

export function addActiveList(activeList){
	return {
		type : ADD_ACTIVE_LIST,
		activeList
	}
}

// 删除活动
export function deleteActive(index){
	return {
		type : DELETE_ACTIVE,
		index
	}
}