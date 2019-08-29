import axios from 'axios';
export const loadData = ({ commit }) => {
  axios({
    method: 'get',
    url: '/data.json'
  })
    .then(res => {
      const data = res.data;
      if (data) {
        const stocks = data.stocks;
        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;
        const portfolio = {
          stockPortfolio,
          funds
        };
        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio);
      } else {
        console.log('没有数据');
      }
    })
    .catch(err => console.log(err));
};
