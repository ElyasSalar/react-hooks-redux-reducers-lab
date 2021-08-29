export function manageFriends(state={friends: []}, action) {
  switch(action.type){
    case 'friends/add':
      return {
        friends: [
          ...state.friends,
          action.payload
        ]
      }
    case 'friends/remove':
      state.friends.forEach((friend, index) => {
        if(friend.id === action.payload) state.friends.splice(index, 1);
      })
      return state;
    default:
      return state;
  }
}
