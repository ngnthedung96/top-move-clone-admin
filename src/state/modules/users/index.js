import { mapState, mapGetters, mapActions } from 'vuex'

export const userComputed = {
  ...mapState('users/users', ['userDatas']),
  ...mapState('users/userpm', ['userPmDatas']),
}
export const userMethods = {
  ...mapActions('users/users', 
    ['getListUsers', 'createUser', 'updateUser', 'deleteUser']),
  ...mapActions('users/userpm', 
    ['getListUserPms', 'createUserPm', 'updateUserPm', 'deleteUserPm'])
}