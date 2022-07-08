import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    kumpulanData: [],
    objIndex: "",
    penampung: "",
    findNama: "",
    findEmail: "",
  },
  getters: {},
  mutations: {
    // cobaLocalStorage(state) {
    //   state.kumpulanData.push({
    //     nama: state.nama,
    //     email: state.email,
    //   });
    //   localStorage.setItem("kelas", JSON.stringify(state.kumpulanData));
    // },
  },
  actions: {
    saveData({ state }, payload) {
      const p = JSON.stringify(payload);
      console.log(p);
      state.kumpulanData.push(payload);

      console.log(JSON.stringify(state.kumpulanData));
      // console.log(state.kumpulanData);

      localStorage.setItem("kelas", JSON.stringify(state.kumpulanData));
    },

    deleteData({ state }, payload) {
      state.kumpulanData.splice(payload, 1);
    },

    cariData({ state }, payload) {
      console.log(payload);

      state.objIndex = state.kumpulanData.findIndex((obj) => obj.id == payload);
      // console.log(state.kumpulanData[state.objIndex].nama);
      // console.log(state.kumpulanData);

      // const p = JSON.stringify(state.kumpulanData);
      // console.log(p.findIndex((obj) => obj.id == payload));

      // const p = state.penampung.findIndex((obj) => obj.nama == payload);
      // console.log(JSON.stringify(state.kumpulanData));

      // penampung.findIndex((obj) => obj.nama == payload);
      // console.log(p.findIndex((obj) => obj.nama == payload));
      // console.log(state.kumpulanData[0].nama, state.kumpulanData[0].email);
      state.findNama = state.kumpulanData[state.objIndex].nama;
      state.findEmail = state.kumpulanData[state.objIndex].email;
      console.log(state.findNama, state.findEmail);
    },
    UpdateData({ state }) {
      state.kumpulanData[state.objIndex].nama = state.findNama;
      state.findEmail = state.kumpulanData[state.objIndex].email =
        state.findEmail;
    },
  },
  modules: {},
});
