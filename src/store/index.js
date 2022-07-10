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
    getLocal: [],
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
      // console.log(payload);
      const p = JSON.stringify(payload);
      // console.log(p);
      state.kumpulanData.push(payload);

      // console.log(JSON.stringify(state.kumpulanData));
      // console.log(state.kumpulanData);

      localStorage.setItem("kelas", JSON.stringify(state.kumpulanData));
      const pp = localStorage.getItem("kelas");
      state.getLocal.push(payload);
      console.log(state.getLocal);
      // console.log(state.kumpulanData);
      // console.log(pp);
    },

    deleteData({ state }, payload) {
      console.log(payload);

      // console.log(state.getLocal);
      // console.log(state.kumpulanData);
      // console.log(state.getLocal.splice(payload, 1));
      // const hapus = state.kumpulanData.splice(payload, 1);
      state.kumpulanData.splice(payload, 1);
      localStorage.setItem("kelas", JSON.stringify(state.kumpulanData));

      // state.kumpulanData = localStorage.setItem(
      //   "kelas",
      //   JSON.stringify(state.kumpulanData)
      // );
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
      state.findNama = state.kumpulanData[state.objIndex].nama = state.findNama;
      state.findEmail = state.kumpulanData[state.objIndex].email =
        state.findEmail;
      localStorage.setItem("kelas", JSON.stringify(state.kumpulanData));
    },
  },
  modules: {},
});
