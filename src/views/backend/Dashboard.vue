<template>
  <div>
    <Navbar></Navbar>
    <Alert></Alert>
    <div class="container-fluid">
      <div class="row">
        <Sidebar></Sidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/backend/Navbar.vue'
import Sidebar from '@/components/backend/Sidebar.vue'
import Alert from '@/components/alertMessage.vue'
export default {
  components: {
    Navbar,
    Sidebar,
    Alert
  }
}
</script>
