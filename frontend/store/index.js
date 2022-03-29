export const state = () => ({
  users: [{
      id: 1,
      name: 'itadori',
      email: 'itadori@gmail.com',
      memo: 'スクナの器',
    },
    {
      id: 2,
      name: 'husiguro',
      email: 'husigoro@gmail.com',
      memo: '嵌合暗翳庭'
    },
    {
      id: 3,
      name: 'kugisaki',
      email: 'kugisaki@gmail.com',
      memo: '紅一点'
    },
    {
      id: 4,
      name: 'gojo',
      email: 'gojo@gmail.com',
      memo: '僕最強だから'
    }
  ]
})

export const getters = {
  getUsers(state) {
    return state.users
  },
}
