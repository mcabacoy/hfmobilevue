/**
 * Created by user on 2017/12/5.
 */
export default {
  increment(state, object) {
    state[object.key] = object.value;
  },
  updateBindNewCard(state, object) {
    state.bindNewBankCard[object.key] = object.value
  },
  updateDepositList(state, value) {
    console.dir(value);
    const {
      depositList,
      sumcount,
      sumpage
    } = value
    const newList = state.depositRecord.depositList.concat(depositList)
    state.depositRecord = {
      depositList: newList,
      sumcount,
      sumpage,
    }
  },
  updateBindCard(state, value) {
    console.dir(state);
    console.dir(value);
    const {
      balance,
      balanceRest,
      userbankList
    } = value
    state.bindCard = {
      balance,
      balanceRest,
      userbankList,
    }
  }
};
