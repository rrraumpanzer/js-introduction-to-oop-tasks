// BEGIN
export const getMutualFriends = (user1, user2) => {
  user1.getFriends();
  user2.getFriends();

  const idsToFind = user1.friends.map(friend => friend.id)
  const mutualFriends = user2.friends.filter(friend => idsToFind.includes(friend.id));
  return mutualFriends;
}
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});