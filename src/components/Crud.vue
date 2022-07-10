<template lang="">
    <div class="container">
        
      <p> {{ this.$store.state.say }} </p>
         <!-- Button trigger modal -->
        <button type="button" class="btn btn-md btn-success mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Tambah data
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Tambah Data</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                   <div class="mb-3">
                    <label for="nama1" class="form-label">Nama</label>
                    <input type="text" v-model="nama" class="form-control" id="nama1">
                   
                   </div>
                   <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" v-model="email" class="form-control" id="exampleFormControlInput1">
               
                   </div>
                </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" @click="simpanData" data-bs-dismiss="modal" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <table class="table table-striped mt-5" >
           
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Email</th>
                 
                    </tr>
                </thead>
                <tbody>
                    
                      <tr v-for="(k,index) in $store.state.kumpulanData">
                        <td>{{ index }} </td>
                        <td>{{ k.nama }} </td>
                        <td>{{ k.email}} </td>
                        <td> 
                            <button type="button" @click="find(k.id)" class="btn btn-sm btn-warning text-white" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                              Ubah
                            </button>
                              <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModal1Label" aria-hidden="true">
                                  <div class="modal-dialog">
                                      <div class="modal-content">
                                          <div class="modal-header">
                                              <h5 class="modal-title" id="exampleModalLabel">Ubah Data</h5>
                                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                          </div>
                                      <div class="modal-body">
                                        <div class="mb-3">
                                          <label for="nama1" class="form-label">Nama</label>
                                          <input type="text" v-model="$store.state.findNama" class="form-control" id="nama1">
                                         
                                        </div>
                                        <div class="mb-3">
                                          <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                          <input type="email" v-model="$store.state.findEmail" class="form-control" id="exampleFormControlInput1">
                                        
                                        </div>
                                      </div>
                                          <div class="modal-footer">
                                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                              <button type="button" data-bs-dismiss="modal" @click="update(k.id)" class="btn btn-primary">Save changes</button>
                                          </div>
                                      </div>
                                  </div>
                              </div> | 
                            <button class="btn btn-sm btn-danger text-white" @click="hapus(index)">Hapus</button>
                        </td>
                      </tr>
                    
                </tbody>
            </table>
       
    </div>
</template>
<script>
export default {
  name: "Crud",
  data() {
    return {
      id: 0,
      nama: "",
      email: "",
      updateNama: "",
      updateEmail: "",
      findEmail: "",
      findNama: "",

      // kumpulanData: [
      //   {
      //     id: 1,
      //     nama: "masyo",
      //     email: "masyo@gmail.com",
      //   },
      //   {
      //     id: 2,
      //     nama: "masyo200",
      //     email: "masyo200@gmail.com",
      //   },
      //   {
      //     id: 3,
      //     nama: "masyo300",
      //     email: "masyo300@gmail.com",
      //   },
      // ],
    };
  },
  created() {
    this.$store.state.kumpulanData =
      JSON.parse(localStorage.getItem("kelas")) || [];
  },
  methods: {
    simpanData() {
      const payload = {
        id: this.id++,
        nama: this.nama,
        email: this.email,
      };
      this.$store.dispatch("saveData", payload);
      this.nama = "";
      this.email = "";

      // this.$store.state.kumpulanData.push({
      //   nama: payload.nama,
      //   email: payload.email,
      // });
      // console.log(this.$store.state.kumpulanData.nama);
      // this.$store.commit("cobaLocalStorage");

      //   this.kumpulanData.nama = this.kumpulanData.push(this.nama);
      //   this.kumpulanData.email = this.kumpulanData.push(this.email);
      // this.$store.state.kumpulanData.push({
      //   nama: this.nama,
      //   email: this.email,
      // });
      // localStorage.setItem(
      //   "kelas",
      //   JSON.stringify(this.$store.state.kumpulanData)
      // );
    },
    mencoba() {
      return (this.kumpulanDataBetul = JSON.stringify(state.kumpulanData));
    },

    find(id) {
      // alert(id);
      // this.objIndex = this.kumpulanData.findIndex((obj) => obj.id == id);

      // console.log(this.kumpulanData[this.objIndex].nama);
      // this.findNama = this.kumpulanData[this.objIndex].nama;
      // this.findEmail = this.kumpulanData[this.objIndex].email;

      const payload = id;

      this.$store.dispatch("cariData", payload);

      // this.kumpulanData[objIndex].nama = "Laila";
      // this.kumpulanData[objIndex].email = "Laila@gmail.com";
      // console.log("After update: ", this.kumpulanData[objIndex]);
    },
    update(id) {
      // this.nama = this.findNama;
      // this.email = this.findEmail;
      const payload = id;
      this.$store.dispatch("UpdateData", payload);

      // this.kumpulanData[this.objIndex].nama = this.findNama;
      // this.kumpulanData[this.objIndex].email = this.findEmail;
      // console.log(this.kumpulanData[this.objIndex].nama);
    },
    hapus(id) {
      const payload = id;
      // this.$store.state.kumpulanData.splice(id, 1);
      this.$store.dispatch("deleteData", payload);
    },
  },
};
</script>
<style lang="">
</style>